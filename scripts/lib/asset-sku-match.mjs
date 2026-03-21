/**
 * Shared SKU ↔ filename stem matching for product images and datasheets.
 * Used by build-gallery-extras.mjs and sync-datasheets.mjs.
 */
import fs from 'fs';
import path from 'path';

export const PREFIXES = ['FD-', 'DL-', 'SL-', 'BL-', 'PL-', 'HB-'];

export function stripImageExt(f) {
  return f.replace(/\.(webp|png|jpg|jpeg|svg)$/i, '');
}

export function stripDataSheetExt(f) {
  return f.replace(/\.(webp|png|jpg|jpeg|pdf)$/i, '');
}

export function basenameVariants(base) {
  const v = new Set([base]);
  for (const p of PREFIXES) if (base.startsWith(p)) v.add(base.slice(p.length));
  return [...v];
}

export function fileMatchesProduct(basenameNoExt, productName) {
  return basenameVariants(basenameNoExt).some((a) => {
    if (a === productName) return true;
    if (a.startsWith(productName + ',')) return true;
    if (a.startsWith(productName + ' ')) return true;
    if (a.startsWith(productName + '-')) return true;
    if (a.startsWith(productName + '_')) return true;
    return false;
  });
}

export function buildAllProductEntries(productsData) {
  const allEntries = [];
  for (const cat of ['indoor', 'outdoor']) {
    for (const [type, list] of Object.entries(productsData[cat] || {})) {
      for (const p of list) {
        allEntries.push({ cat, type, name: p.name, img: p.img });
      }
    }
  }
  return allEntries;
}

export function buildNamesByLength(allEntries) {
  return [...new Set(allEntries.map((e) => e.name))].sort((a, b) => b.length - a.length);
}

export function assignNameForFile(basenameNoExt, namesByLength) {
  for (const name of namesByLength) {
    if (fileMatchesProduct(basenameNoExt, name)) return name;
  }
  return null;
}

export function walkFiles(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkFiles(p, exts, out);
    else if (exts.some((e) => ent.name.toLowerCase().endsWith(e))) out.push(p);
  }
  return out;
}
