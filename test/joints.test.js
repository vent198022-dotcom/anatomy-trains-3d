import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitSphere, extremeCentroid, topSlab, vertebraPivot, boxEllipsoid } from '../tools/lib/joints.mjs';

test('球面擬合找回球心與半徑', () => {
  const pts = [];
  for (let i = 0; i < 200; i++) {
    const z = 1 - (2 * i + 1) / 200, r = Math.sqrt(1 - z * z), th = i * 2.399963;
    pts.push(1 + 5 * r * Math.cos(th), 2 + 5 * z, 3 + 5 * r * Math.sin(th));
  }
  const s = fitSphere(Float32Array.from(pts));
  assert.ok(Math.hypot(s.center[0] - 1, s.center[1] - 2, s.center[2] - 3) < 1e-3, JSON.stringify(s));
  assert.ok(Math.abs(s.radius - 5) < 1e-3);
});

test('沿某方向最遠的一批頂點', () => {
  const pts = new Float32Array([0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0]);
  assert.deepEqual(extremeCentroid(pts, [1, 0, 0], 0.5), [2.5, 0, 0]);
  assert.deepEqual(extremeCentroid(pts, [-1, 0, 0], 0.25), [0, 0, 0]);
});

test('最上方一層', () => {
  assert.deepEqual(Array.from(topSlab(new Float32Array([0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0]), 1.5)), [0, 2, 0, 0, 3, 0]);
});

test('椎骨轉軸取椎體（最前方 2 公分）', () => {
  const pts = new Float32Array([0, 10, 5, 2, 12, 4, 1, 8, 0]); // 前兩點是椎體，最後一點是棘突
  assert.deepEqual(vertebraPivot(pts, 'bottom'), [1, 10, 4.5]);
  assert.deepEqual(vertebraPivot(pts, 'top'), [1, 12, 4.5]);
});

test('外框橢球', () => {
  assert.deepEqual(boxEllipsoid(new Float32Array([-1, 0, 2, 3, 4, 6])), { center: [1, 2, 4], radii: [2, 2, 2] });
});
