// 網格前處理：取世界座標、合併重複頂點、簡化
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshoptSimplifier } from 'meshoptimizer';

// 只取 position，套用網格的世界矩陣，合併重複頂點
export function worldGeometry(mesh) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', mesh.geometry.getAttribute('position').clone());
  if (mesh.geometry.index) g.setIndex(mesh.geometry.index.clone());
  g.applyMatrix4(mesh.matrixWorld);
  const merged = mergeVertices(g, 1e-4);
  return {
    positions: Float32Array.from(merged.getAttribute('position').array),
    indices: Uint32Array.from(merged.index.array),
  };
}

// 簡化到原本三角面數的 ratio 左右（誤差上限 1%），再移除沒用到的頂點
export async function simplify({ positions, indices }, ratio) {
  await MeshoptSimplifier.ready;
  const target = Math.max(3, Math.floor((indices.length * ratio) / 3) * 3);
  const [out] = MeshoptSimplifier.simplify(indices, positions, 3, target, 0.01, ['LockBorder']);
  return compact(positions, out);
}

// 只保留索引用到的頂點，並依出現順序重新編號
export function compact(positions, indices) {
  const remap = new Map();
  const kept = [];
  const out = new Uint32Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    const v = indices[i];
    let n = remap.get(v);
    if (n === undefined) {
      n = remap.size;
      remap.set(v, n);
      kept.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    }
    out[i] = n;
  }
  return { positions: new Float32Array(kept), indices: out };
}
