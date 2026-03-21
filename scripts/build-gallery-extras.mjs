#!/usr/bin/env node
/**
 * Regenerate productGalleryExtras + helpers in js/products-data.js from assets/Products Img.
 *
 * Usage:
 *   node scripts/build-gallery-extras.mjs
 *   node scripts/build-gallery-extras.mjs --report=scripts/reports/gallery-sync-report.json
 *   node scripts/build-gallery-extras.mjs --skip-gallery --report=...
 *   node scripts/build-gallery-extras.mjs --write-products   (fixes missing img paths when a main file exists on disk)
 *
 * Folder reference: scripts/asset-folder-map.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  stripImageExt,
  buildAllProductEntries,
  buildNamesByLength,
  assignNameForFile,
  walkFiles,
} from './lib/asset-sku-match.mjs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataPath = path.join(root, 'js/products-data.js');

function parseArgs() {
  const args = process.argv.slice(2);
  let reportPath = path.join(root, 'scripts/reports/gallery-sync-report.json');
  let skipGallery = false;
  let writeProducts = false;
  for (const a of args) {
    if (a === '--skip-gallery') skipGallery = true;
    else if (a === '--write-products') writeProducts = true;
    else if (a.startsWith('--report=')) reportPath = path.resolve(root, a.slice('--report='.length));
  }
  return { reportPath, skipGallery, writeProducts };
}

const { reportPath, skipGallery, writeProducts } = parseArgs();

let full = fs.readFileSync(dataPath, 'utf8');

const markerStart = '\nconst productGalleryExtras = {';
const markerEnd = '\n// --- Product code search (category pages + products.html) --';
const si = full.indexOf(markerStart);
const ei = full.indexOf(markerEnd);
if (si === -1 || ei === -1 || ei <= si) {
  console.error('Could not find gallery block markers in products-data.js');
  process.exit(1);
}

const head = full.slice(0, si);
const tail = full.slice(ei);

const fn = new Function(`${head}\nreturn { productsData };`);
const { productsData } = fn();

const imgRoot = path.join(root, 'assets/Products Img');
const allEntries = buildAllProductEntries(productsData);
const namesByLength = buildNamesByLength(allEntries);

const imageRel = walkFiles(imgRoot, ['.webp', '.png', '.jpg', '.jpeg', '.svg']).map((a) =>
  path.relative(imgRoot, a).split(path.sep).join('/'),
);

function computeByKey(entries, rels, names) {
  const map = new Map();
  const matched = new Set();
  for (const rel of rels) {
    const base = stripImageExt(path.basename(rel));
    const name = assignNameForFile(base, names);
    if (!name) continue;
    for (const e of entries) {
      if (e.name !== name) continue;
      if (!e.img) continue;
      const mainDir = path.posix.dirname(e.img);
      const fileDir = path.posix.dirname(rel);
      if (mainDir !== fileDir) continue;
      const k = `${e.cat}/${e.type}/${e.name}`;
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(rel);
      matched.add(rel);
    }
  }
  for (const [, arr] of map) arr.sort((a, b) => a.localeCompare(b));
  return { byKey: map, matchedFileSet: matched };
}

let { byKey, matchedFileSet } = computeByKey(allEntries, imageRel, namesByLength);

function pickMain(name, current, candidates) {
  if (candidates.length === 0) return null;
  if (current && candidates.includes(current)) return current;
  const exact = candidates.find((c) =>
    stripImageExt(path.basename(c)).replace(/^FD-|DL-|SL-|BL-|PL-|HB-/, '') === name,
  );
  if (exact) return exact;
  const preferNumbered = candidates.find((c) => {
    const b = stripImageExt(path.basename(c));
    return b === `${name} 1` || b === `${name},1` || b === `${name}-1`;
  });
  if (preferNumbered) return preferNumbered;
  return candidates.find((c) => !stripImageExt(path.basename(c)).includes(',')) || candidates[0];
}

const unmatchedImageFiles = imageRel.filter((rel) => {
  const base = stripImageExt(path.basename(rel));
  const name = assignNameForFile(base, namesByLength);
  if (!name) return true;
  let inAnyProductFolder = false;
  for (const e of allEntries) {
    if (e.name !== name || !e.img) continue;
    const mainDir = path.posix.dirname(e.img);
    const fileDir = path.posix.dirname(rel);
    if (mainDir === fileDir) inAnyProductFolder = true;
  }
  return !inAnyProductFolder;
});

const productsWithoutImageInFolder = [];
const productsImgUpdates = [];
for (const e of allEntries) {
  if (!e.img) continue;
  const k = `${e.cat}/${e.type}/${e.name}`;
  const c = byKey.get(k) || [];
  const absExpected = path.join(imgRoot, ...e.img.split('/'));
  const exists = fs.existsSync(absExpected);
  if (c.length === 0 && !exists) {
    productsWithoutImageInFolder.push({ key: k, name: e.name, expectedImg: e.img });
  } else if (!exists && c.length > 0) {
    const suggested = pickMain(e.name, null, c);
    if (suggested) {
      productsImgUpdates.push({
        key: k,
        name: e.name,
        oldImg: e.img,
        suggestedImg: suggested,
      });
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalImageFiles: imageRel.length,
    matchedIntoProductFolders: matchedFileSet.size,
    unmatchedImageFiles: unmatchedImageFiles.length,
    productsWithNoImageInFolder: productsWithoutImageInFolder.length,
    suggestedImgPathFixes: productsImgUpdates.length,
  },
  unmatchedImageFiles,
  productsWithoutImageInFolder,
  productsImgUpdates,
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`Wrote report: ${path.relative(root, reportPath)}`);

function replaceProductImgField(source, productName, oldImg, newImg) {
  const needle = `name: '${productName}'`;
  let searchFrom = 0;
  while (searchFrom < source.length) {
    const ni = source.indexOf(needle, searchFrom);
    if (ni === -1) return null;
    const imgPos = source.indexOf('img:', ni);
    if (imgPos === -1 || imgPos > ni + 800) {
      searchFrom = ni + 1;
      continue;
    }
    const slice = source.slice(imgPos);
    const m = slice.match(/^img:\s*'((?:\\'|[^'])*)'/);
    if (!m) {
      searchFrom = ni + 1;
      continue;
    }
    const quoted = m[1].replace(/\\'/g, "'");
    if (quoted !== oldImg) {
      searchFrom = ni + 1;
      continue;
    }
    const newQuoted = newImg.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return source.slice(0, imgPos) + `img: '${newQuoted}'` + slice.slice(m[0].length);
  }
  return null;
}

if (writeProducts && productsImgUpdates.length > 0) {
  for (const u of productsImgUpdates) {
    const next = replaceProductImgField(full, u.name, u.oldImg, u.suggestedImg);
    if (next == null) {
      console.warn(`--write-products: could not find img field for ${u.name}, skip`);
      continue;
    }
    full = next;
    const ent = allEntries.find((e) => e.name === u.name && e.img === u.oldImg);
    if (ent) ent.img = u.suggestedImg;
    console.log(`--write-products: ${u.name} img -> ${u.suggestedImg}`);
  }
  ({ byKey, matchedFileSet } = computeByKey(allEntries, imageRel, namesByLength));
}

if (skipGallery && !writeProducts) {
  console.log('--skip-gallery: left products-data.js unchanged (report only).');
  process.exit(0);
}

if (skipGallery && writeProducts && productsImgUpdates.length > 0) {
  fs.writeFileSync(dataPath, full);
  console.log('Updated img paths only (--skip-gallery).');
  process.exit(0);
}

const lines = ['\nconst productGalleryExtras = {'];
for (const e of allEntries) {
  const k = `${e.cat}/${e.type}/${e.name}`;
  const c = byKey.get(k) || [];
  if (c.length < 2) continue;
  const main = pickMain(e.name, e.img, c);
  const extras = c.filter((x) => x !== main);
  if (extras.length === 0) continue;
  lines.push(`    '${k}': ${JSON.stringify(extras)},`);
}
lines.push('};');
lines.push('');
lines.push(`function getGalleryExtraThumbnails(category, type, productName) {
    const k = \`\${category}/\${type}/\${productName}\`;
    return productGalleryExtras[k] || [];
}`);
lines.push('');
lines.push(`function productAssetImgUrl(relPath) {
    if (!relPath) return '';
    const prefix = 'assets/Products Img/';
    return prefix + relPath.split('/').map(encodeURIComponent).join('/');
}`);
lines.push('');
lines.push(`function encodeGalleryPathsForDataAttr(paths) {
    if (!paths || !paths.length) return '';
    try {
        const json = JSON.stringify(paths);
        if (typeof TextEncoder !== 'undefined') {
            const bytes = new TextEncoder().encode(json);
            let binary = '';
            bytes.forEach((b) => {
                binary += String.fromCharCode(b);
            });
            return btoa(binary);
        }
        return btoa(unescape(encodeURIComponent(json)));
    } catch (e) {
        return '';
    }
}`);
lines.push('');
lines.push(`function parseGalleryPathsFromCard(card, baseAttrName) {
    const b64 = card.getAttribute(\`data-\${baseAttrName}-b64\`);
    if (b64) {
        try {
            const binary = atob(b64);
            let json;
            if (typeof TextDecoder !== 'undefined') {
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) {
                    bytes[i] = binary.charCodeAt(i);
                }
                json = new TextDecoder().decode(bytes);
            } else {
                json = decodeURIComponent(escape(binary));
            }
            const arr = JSON.parse(json);
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            /* fall through */
        }
    }
    const raw = card.getAttribute(\`data-\${baseAttrName}\`);
    if (raw) {
        try {
            const arr = JSON.parse(raw);
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            /* fall through */
        }
    }
    return [];
}`);
lines.push('');
lines.push(`function buildGalleryProbePaths(productImg, productName, index) {
    const exts = ['webp', 'png', 'jpg', 'jpeg'];
    const paths = [];
    const dir = productImg.includes('/') ? productImg.slice(0, productImg.lastIndexOf('/') + 1) : '';
    const imgBase = productImg.replace(/\\.(png|jpg|jpeg|webp)$/i, '');
    const baseName = productName.replace(/[^a-zA-Z0-9-]/g, '');
    for (const ext of exts) {
        paths.push(\`\${imgBase},\${index}.\${ext}\`);
        paths.push(\`\${imgBase} \${index}.\${ext}\`);
        paths.push(\`\${baseName},\${index}.\${ext}\`);
        paths.push(\`\${baseName} \${index}.\${ext}\`);
        if (dir && productName) {
            paths.push(\`\${dir}\${productName},\${index}.\${ext}\`);
            paths.push(\`\${dir}\${productName} \${index}.\${ext}\`);
        }
    }
    return [...new Set(paths)];
}`);
lines.push('');
lines.push(`function applyLunaOrderToGallery(category, type, productName, leadThumbnails, thumbnails) {
    const key = \`\${category}/\${type}/\${productName}\`;
    if (typeof lunaGalleryOrder === 'undefined' || !lunaGalleryOrder[key] || !lunaGalleryOrder[key].length) {
        return { leadThumbnails, thumbnails };
    }
    const order = lunaGalleryOrder[key];
    function sortByOrder(arr) {
        return [...arr].sort((a, b) => {
            const ia = order.indexOf(a);
            const ib = order.indexOf(b);
            if (ia === -1 && ib === -1) return a.localeCompare(b);
            if (ia === -1) return 1;
            if (ib === -1) return -1;
            return ia - ib;
        });
    }
    return {
        leadThumbnails: sortByOrder(leadThumbnails),
        thumbnails: sortByOrder(thumbnails),
    };
}`);
lines.push('');
lines.push(`function mergeGalleryFromProductCard(card, productName, productImg) {
    let leadThumbnails = parseGalleryPathsFromCard(card, 'lead-thumbnails');
    let thumbnails = parseGalleryPathsFromCard(card, 'thumbnails');
    const category = card.getAttribute('data-category') || '';
    const type = card.getAttribute('data-type') || '';
    if (category && type) {
        const extra = getGalleryExtraThumbnails(category, type, productName);
        const seen = new Set([productImg, ...leadThumbnails, ...thumbnails]);
        for (const rel of extra) {
            if (!seen.has(rel)) {
                thumbnails.push(rel);
                seen.add(rel);
            }
        }
    }
    const luna = applyLunaOrderToGallery(category, type, productName, leadThumbnails, thumbnails);
    return { leadThumbnails: luna.leadThumbnails, thumbnails: luna.thumbnails };
}`);
lines.push('');
lines.push(`function buildCardGalleryData(category, type, product) {
    const extra = getGalleryExtraThumbnails(category, type, product.name);
    const leadThumbnails = product.leadThumbnails ? [...product.leadThumbnails] : [];
    const thumbnails = product.thumbnails ? [...product.thumbnails] : [];
    const seen = new Set([product.img, ...leadThumbnails, ...thumbnails]);
    for (const rel of extra) {
        if (!seen.has(rel)) {
            thumbnails.push(rel);
            seen.add(rel);
        }
    }
    return applyLunaOrderToGallery(category, type, product.name, leadThumbnails, thumbnails);
}`);
lines.push('');

const block = lines.join('\n');
const siW = full.indexOf(markerStart);
const eiW = full.indexOf(markerEnd);
fs.writeFileSync(dataPath, full.slice(0, siW) + block + full.slice(eiW));
console.log('Updated productGalleryExtras in js/products-data.js');
