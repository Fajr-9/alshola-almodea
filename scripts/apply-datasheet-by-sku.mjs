#!/usr/bin/env node
/**
 * Sync datasheets from disk by SKU, strip invalid pdf overrides on products,
 * regenerate verified paths + products-without-datasheet.txt
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataPath = path.join(root, 'js/products-data.js');

execSync('node scripts/sync-datasheets.mjs', { cwd: root, stdio: 'inherit' });

let content = fs.readFileSync(dataPath, 'utf8');

// Keep pdf only for same-SKU / dual-category entries
const keepPdfForNames = new Set(['LL-4407']);

const productsStart = content.indexOf('const productsData = {');
const galleryStart = content.indexOf('\nconst productGalleryExtras = {');
if (productsStart === -1 || galleryStart === -1) {
  console.error('markers not found');
  process.exit(1);
}

let block = content.slice(productsStart, galleryStart);
block = block.replace(/, pdf: '[^']*'/g, (match, offset, str) => {
  const before = str.slice(Math.max(0, offset - 120), offset);
  const nameMatch = before.match(/name:\s*'([^']+)'/);
  if (nameMatch && keepPdfForNames.has(nameMatch[1])) return match;
  return '';
});
block = block.replace(/\{\s*pdf: '[^']*',\s*/g, '{ ');
content = content.slice(0, productsStart) + block + content.slice(galleryStart);

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Stripped product pdf overrides (kept LL-4407 category entries).');
