// 讀 Z-Anatomy 的 FBX（只用幾何）
import { readFileSync } from 'node:fs';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export function loadFbx(path) {
  const buf = readFileSync(path);
  const warn = console.warn;
  console.warn = () => {}; // FBXLoader 會對材質、貼圖大量警告，與幾何無關
  try {
    const root = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '');
    root.updateMatrixWorld(true);
    return root;
  } finally {
    console.warn = warn;
  }
}

// 以原始名稱（three.js 改寫前，例如 'Scapula.r'）建立索引；同名只取第一個
function indexBy(root, keep) {
  const map = new Map();
  root.traverse(o => {
    const n = o.userData.originalName;
    if (n && keep(o) && !map.has(n)) map.set(n, o);
  });
  return map;
}

export const indexMeshes = root => indexBy(root, o => o.isMesh);
export const indexGroups = root => indexBy(root, o => !o.isMesh);

// 群組底下所有不是標註的網格
export function meshesUnder(group, isAnnotation) {
  const out = [];
  group.traverse(o => {
    if (o.isMesh && !isAnnotation(o.userData.originalName ?? '')) out.push(o);
  });
  return out;
}
