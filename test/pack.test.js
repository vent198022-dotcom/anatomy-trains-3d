import { test } from 'node:test';
import assert from 'node:assert/strict';
import { packMeshes } from '../tools/lib/pack.mjs';
import { decodeMesh, base64ToBytes } from '../src/model/decode.js';

const a = { positions: new Float32Array([0, 0, 0, 10, 0, 0, 0, 20, 0]), indices: new Uint32Array([0, 1, 2]) };
const b = { positions: new Float32Array([5, 5, 5, -3, 1, 2, 4, 4, -6, 1, 1, 1]), indices: new Uint32Array([0, 1, 2, 0, 2, 3]) };

test('打包、轉 base64 再解碼：座標誤差在量化範圍內，索引不變', () => {
  const { quant, entries, bin } = packMeshes([a, b]);
  const bytes = base64ToBytes(Buffer.from(bin).toString('base64'));
  for (const [mesh, entry] of [[a, entries[0]], [b, entries[1]]]) {
    const out = decodeMesh(bytes, quant, entry);
    assert.deepEqual(Array.from(out.indices), Array.from(mesh.indices));
    for (let i = 0; i < mesh.positions.length; i++) assert.ok(Math.abs(out.positions[i] - mesh.positions[i]) < 1e-3);
  }
});

test('超過 65535 個頂點改用 32 位元索引', () => {
  const n = 70000;
  const mesh = { positions: new Float32Array(n * 3), indices: new Uint32Array([0, 1, n - 1]) };
  const { quant, entries, bin } = packMeshes([mesh]);
  assert.equal(entries[0].wide, true);
  assert.deepEqual(Array.from(decodeMesh(bin, quant, entries[0]).indices), [0, 1, n - 1]);
});

test('位元組沒有對齊也能解碼', () => {
  const { quant, entries, bin } = packMeshes([a, b]);
  const shifted = new Uint8Array(bin.length + 1);
  shifted.set(bin, 1);
  const out = decodeMesh(shifted.subarray(1), quant, entries[1]);
  assert.deepEqual(Array.from(out.indices), Array.from(b.indices));
});

test('多骨段權重（skin）一起打包、解碼', () => {
  const skin = new Uint8Array([0, 1, 128, 2, 0, 255, 1, 1, 0]);
  const { quant, entries, bin } = packMeshes([a, { ...a, skin }]);
  assert.equal(decodeMesh(bin, quant, entries[0]).skin, null);
  assert.deepEqual(Array.from(decodeMesh(bin, quant, entries[1]).skin), Array.from(skin));
});
