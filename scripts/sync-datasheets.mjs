#!/usr/bin/env node
/**
 * Scan assets/DATA-SHEETS (recursive), match files to product codes, update dataSheetAutoMap in js/products-data.js.
 * Manual entries in getDataSheetPath `mappings` always take precedence at runtime.
 *
 * Usage:
 *   node scripts/sync-datasheets.mjs
 *   node scripts/sync-datasheets.mjs --report=scripts/reports/datasheet-sync-report.json
 *
 * See scripts/asset-folder-map.json for folder conventions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  stripDataSheetExt,
  buildAllProductEntries,
  buildNamesByLength,
  assignNameForFile,
  walkFiles,
} from './lib/asset-sku-match.mjs';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataPath = path.join(root, 'js/products-data.js');
const dsRoot = path.join(root, 'assets/DATA-SHEETS');

const markerGallery = '\nconst productGalleryExtras = {';
const MAP_START = '// <auto-data-sheet-map>';
const MAP_END = '// </auto-data-sheet-map>';

function parseArgs() {
  let reportPath = path.join(root, 'scripts/reports/datasheet-sync-report.json');
  for (const a of process.argv.slice(2)) {
    if (a.startsWith('--report=')) reportPath = path.resolve(root, a.slice('--report='.length));
  }
  return { reportPath };
}

const { reportPath } = parseArgs();

let full = fs.readFileSync(dataPath, 'utf8');
const si = full.indexOf(markerGallery);
if (si === -1) {
  console.error('Could not find productGalleryExtras marker in products-data.js');
  process.exit(1);
}
const head = full.slice(0, si);

let productsData;
try {
  const fn = new Function(`${head}\nreturn { productsData };`);
  ({ productsData } = fn());
} catch (e) {
  console.error('Failed to eval productsData:', e.message);
  process.exit(1);
}

const allEntries = buildAllProductEntries(productsData);
const namesByLength = buildNamesByLength(allEntries);
const productNames = [...new Set(allEntries.map((e) => e.name))];

const sheetAbs = walkFiles(dsRoot, ['.png', '.webp', '.pdf', '.jpg', '.jpeg']);
const sheetRel = sheetAbs.map((abs) => path.relative(dsRoot, abs).split(path.sep).join('/'));

/** relPath -> assigned product name or null */
const fileToName = new Map();
const unmatchedFiles = [];
for (const rel of sheetRel) {
  const base = stripDataSheetExt(path.basename(rel));
  const name = assignNameForFile(base, namesByLength);
  if (!name) {
    unmatchedFiles.push(rel);
    continue;
  }
  fileToName.set(rel, name);
}

/** productName -> rel[] */
const byName = new Map();
for (const [rel, name] of fileToName) {
  if (!byName.has(name)) byName.set(name, []);
  byName.get(name).push(rel);
}

const extOrder = ['.png', '.webp', '.jpg', '.jpeg', '.pdf'];
function pickPrimaryDataSheet(productName, rels) {
  function score(rel) {
    const stem = stripDataSheetExt(path.basename(rel));
    let stemScore = 3;
    if (stem === productName) stemScore = 0;
    else if (
      stem.startsWith(productName + ' ') ||
      stem.startsWith(productName + ',') ||
      stem.startsWith(productName + '-')
    ) {
      stemScore = 1;
    } else stemScore = 2;
    const ext = path.posix.extname(rel).toLowerCase();
    const ei = extOrder.indexOf(ext);
    const extScore = ei >= 0 ? ei : 99;
    return [stemScore, extScore, rel.length, rel];
  }
  return rels.slice().sort((a, b) => {
    const sa = score(a);
    const sb = score(b);
    for (let i = 0; i < 3; i++) {
      if (sa[i] !== sb[i]) return sa[i] - sb[i];
    }
    return sa[3].localeCompare(sb[3]);
  })[0];
}

const dataSheetAutoMap = {};
const ambiguous = [];
const productsWithoutDataSheet = [];

for (const name of productNames) {
  const rels = byName.get(name);
  if (!rels || rels.length === 0) {
    productsWithoutDataSheet.push(name);
    continue;
  }
  if (rels.length > 1) {
    const primary = pickPrimaryDataSheet(name, rels);
    const others = rels.filter((r) => r !== primary);
    ambiguous.push({ name, chosen: primary, alternates: others });
    dataSheetAutoMap[name] = primary;
  } else {
    dataSheetAutoMap[name] = rels[0];
  }
}

const sortedKeys = Object.keys(dataSheetAutoMap).sort();
const lines = ['{'];
for (const k of sortedKeys) {
  lines.push(`    '${k}': '${dataSheetAutoMap[k].replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',`);
}
lines.push('}');
const mapObjectStr = lines.join('\n');

const startIdx = full.indexOf(MAP_START);
const endIdx = full.indexOf(MAP_END, startIdx);
if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find auto-data-sheet-map markers in products-data.js');
  process.exit(1);
}
const blockEnd = endIdx + MAP_END.length;
let tail = full.slice(blockEnd);
if (tail.startsWith('\r\n')) tail = tail.slice(2);
else if (tail.startsWith('\n')) tail = tail.slice(1);
const newBlock = `${MAP_START}\nconst dataSheetAutoMap = ${mapObjectStr};\n${MAP_END}\n`;
const updated = full.slice(0, startIdx) + newBlock + tail;
fs.writeFileSync(dataPath, updated, 'utf8');

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    dataSheetFiles: sheetRel.length,
    matchedToProduct: fileToName.size,
    unmatchedFiles: unmatchedFiles.length,
    productsInCatalog: productNames.length,
    productsWithAutoMap: sortedKeys.length,
    productsStillWithoutFile: productsWithoutDataSheet.filter((n) => !dataSheetAutoMap[n]).length,
    ambiguousProductCount: ambiguous.length,
  },
  unmatchedFiles,
  productsWithoutDataSheetOnDisk: productsWithoutDataSheet,
  ambiguous,
};
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

console.log(`Updated dataSheetAutoMap (${sortedKeys.length} products) in js/products-data.js`);
console.log(`Wrote report: ${path.relative(root, reportPath)}`);
