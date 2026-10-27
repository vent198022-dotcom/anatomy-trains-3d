import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { worldGeometry, simplify, compact } from '../tools/lib/geometry.mjs';

test('compact 只保留用到的頂點並重新編號', () => {
  const positions = new Float32Array([0, 0, 0, 1, 0, 0, 9, 9, 9, 0, 1, 0]);
  const out = compact(positions, new Uint32Array([0, 1, 3]));
  assert.deepEqual(Array.from(out.indices), [0, 1, 2]);
  assert.deepEqual(Array.from(out.positions), [0, 0, 0, 1, 0, 0, 0, 1, 0]);
});

test('worldGeometry 套用世界矩陣並合併重複頂點', () => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
  mesh.position.set(10, 0, 0);
  mesh.updateMatrixWorld(true);
  const { positions, indices } = worldGeometry(mesh);
  assert.equal(positions.length / 3, 8);
  assert.equal(indices.length / 3, 12);
  const xs = Array.from({ length: 8 }, (_, v) => positions[v * 3]);
  assert.equal(Math.min(...xs), 9.5);
  assert.equal(Math.max(...xs), 10.5);
});

// 封閉網格的有號體積：三角面朝外時為正
function signedVolume({ positions: p, indices: idx }) {
  let v = 0;
  for (let t = 0; t < idx.length; t += 3) {
    const [a, b, c] = [idx[t] * 3, idx[t + 1] * 3, idx[t + 2] * 3];
    v += (p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) - p[a + 1] * (p[b] * p[c + 2] - p[b + 2] * p[c]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c])) / 6;
  }
  return v;
}

test('鏡像的網格（世界矩陣行列式為負）簡化後三角面翻回朝外', async () => {
  // Z-Anatomy 的左側部件是右側的鏡像：直接套矩陣會讓三角面朝內，法向量指向肌肉裡面
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
  mesh.scale.set(-1, 1, 1);
  mesh.updateMatrixWorld(true);
  const world = worldGeometry(mesh);
  assert.equal(world.mirrored, true);
  assert.ok(Math.abs(signedVolume(await simplify(world, 1)) - 1) < 1e-6);
  mesh.scale.set(1, 1, 1);
  mesh.updateMatrixWorld(true);
  assert.ok(Math.abs(signedVolume(await simplify(worldGeometry(mesh), 1)) - 1) < 1e-6, '沒有鏡像的不翻');
});

test('simplify 讓三角面數降到比例附近，索引都有效', async () => {
  const g = new THREE.SphereGeometry(10, 64, 32);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  const m = mergeVertices(g);
  const src = { positions: Float32Array.from(m.attributes.position.array), indices: Uint32Array.from(m.index.array) };
  const out = await simplify(src, 0.25);
  const before = src.indices.length / 3, after = out.indices.length / 3;
  assert.ok(after <= before * 0.3, `${after} / ${before}`);
  assert.ok(after >= before * 0.1, `${after} / ${before}`);
  assert.ok(Math.max(...out.indices) < out.positions.length / 3);
});
