#!/usr/bin/env node
/**
 * One-off / repeatable: scan assets and report product image + datasheet coverage.
 * Run: node scripts/reconcile-product-assets.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const full = fs.readFileSync(path.join(root, 'js/products-data.js'), 'utf8');
const marker = '\n// --- Product code search';
const idx = full.indexOf(marker);
if (idx < 0) throw new Error('marker not found');
const fn = new Function(`${full.slice(0, idx)}\nreturn { productsData, getDataSheetPath };`);
const { productsData, getDataSheetPath } = fn();

const imgRoot = path.join(root, 'assets/Products Img');
const dsRoot = path.join(root, 'assets/DATA-SHEETS');

function walkFiles(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkFiles(p, exts, out);
    else if (exts.some((e) => ent.name.toLowerCase().endsWith(e))) out.push(p);
  }
  return out;
}

const imageAbs = walkFiles(imgRoot, ['.webp', '.png', '.jpg', '.jpeg', '.svg']);
const imageRel = imageAbs.map((a) => path.relative(imgRoot, a).split(path.sep).join('/'));

const dsAbs = walkFiles(dsRoot, ['.png', '.pdf']);
const dsRelToUrl = (relFs) => `assets/DATA-SHEETS/${relFs.split(path.sep).join('/')}`;

const PREFIXES = ['FD-', 'DL-', 'SL-', 'BL-', 'PL-', 'HB-'];

function stripExt(f) {
  return f.replace(/\.(webp|png|jpg|jpeg|svg|pdf)$/i, '');
}

function basenameVariants(base) {
  const v = new Set([base]);
  for (const p of PREFIXES) {
    if (base.startsWith(p)) v.add(base.slice(p.length));
  }
  return [...v];
}

function fileMatchesProduct(basenameNoExt, productName) {
  return basenameVariants(basenameNoExt).some((a) => {
    if (a === productName) return true;
    if (a.startsWith(productName + ',')) return true;
    if (a.startsWith(productName + ' ')) return true;
    if (a.startsWith(productName + '-')) return true;
    if (a.startsWith(productName + '_')) return true;
    return false;
  });
}

const allNames = [];
for (const cat of ['indoor', 'outdoor']) {
  for (const list of Object.values(productsData[cat])) {
    for (const p of list) allNames.push(p.name);
  }
}
allNames.sort((a, b) => b.length - a.length);

function assignProductForFile(basenameNoExt) {
  for (const name of allNames) {
    if (fileMatchesProduct(basenameNoExt, name)) return name;
  }
  return null;
}

const byProduct = new Map();
for (const rel of imageRel) {
  const base = stripExt(path.basename(rel));
  const pname = assignProductForFile(base);
  if (!pname) continue;
  if (!byProduct.has(pname)) byProduct.set(pname, []);
  byProduct.get(pname).push(rel);
}
for (const [, arr] of byProduct) arr.sort((a, b) => a.localeCompare(b));

function pickMainImage(name, current, candidates) {
  if (candidates.length === 0) return null;
  const curOk = current && candidates.includes(current);
  if (curOk) return current;
  const exact = candidates.find((c) => stripExt(path.basename(c)).replace(/^FD-|DL-|SL-|BL-|PL-|HB-/, '') === name);
  if (exact) return exact;
  const noComma = candidates.find((c) => !stripExt(path.basename(c)).includes(','));
  return noComma || candidates[0];
}

function existsAsset(relFromRoot) {
  const p = path.join(root, relFromRoot);
  return fs.existsSync(p) && fs.statSync(p).isFile();
}

// Datasheet index: list of { relFromDataSheets, url }
const dsIndex = dsAbs.map((a) => {
  const rel = path.relative(dsRoot, a);
  return { rel: rel.split(path.sep).join('/'), url: dsRelToUrl(rel) };
});

function findDatasheetForProduct(name) {
  const current = getDataSheetPath(name);
  if (existsAsset(current)) return { url: current, ok: true };
  const baseScores = [];
  for (const { rel, url } of dsIndex) {
    const bn = stripExt(path.basename(rel)).toLowerCase();
    const n = name.toLowerCase();
    let score = 0;
    if (bn === n) score = 100;
    else if (bn.includes(n)) score = 50 + (100 - bn.length);
    else if (n.includes('ll-') && bn.includes(n.replace(/^ll-/, ''))) score = 10;
    if (score) baseScores.push({ score, url, rel: bn });
  }
  baseScores.sort((a, b) => b.score - a.score);
  const best = baseScores[0];
  if (!best) return { url: current, ok: false };
  if (existsAsset(best.url)) return { url: best.url, ok: true, note: 'fuzzy' };
  return { url: current, ok: false };
}

const imgReport = [];
const dsReport = [];

for (const cat of ['indoor', 'outdoor']) {
  for (const [type, list] of Object.entries(productsData[cat])) {
    for (const product of list) {
      const name = product.name;
      const candidates = byProduct.get(name) || [];
      const main = pickMainImage(name, product.img, candidates);
      const imgOk = product.img && existsAsset(`assets/Products Img/${product.img}`);
      if (!imgOk) {
        imgReport.push({
          name,
          cat,
          type,
          current: product.img,
          exists: imgOk,
          suggestedMain: main,
          all: candidates,
        });
      }
      const resolved = getDataSheetPath(name);
      const dsOk = existsAsset(resolved);
      if (!dsOk) {
        const found = findDatasheetForProduct(name);
        dsReport.push({
          name,
          current: resolved,
          exists: dsOk,
          suggested: found.ok ? found.url : null,
          fuzzy: found.note,
        });
      }
    }
  }
}

console.log(JSON.stringify({ imgFixes: imgReport, dsFixes: dsReport }, null, 2));
