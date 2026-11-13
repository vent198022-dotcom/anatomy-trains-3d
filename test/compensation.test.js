import { test } from 'node:test';
import assert from 'node:assert/strict';
import { arcPoints, ARC_BULGE } from '../src/app/compensation.js';

// 離身體中軸（x=0、z=0）的水平距離
const outward = p => Math.hypot(p[0], p[2]);
const close = (a, b, tol = 1e-6) => assert.ok(Math.abs(a - b) <= tol, `${a} ≠ ${b}`);

test('弧線的兩端就是兩條肌肉的位置，中間不會跑掉', () => {
  const from = [12, 134, 4];
  const to = [9, 141, -6];
  const pts = arcPoints(from, to, 40);
  assert.equal(pts.length, 41); // 40 段 = 41 個點
  pts[0].forEach((v, i) => close(v, from[i]));
  pts[40].forEach((v, i) => close(v, to[i]));
});

test('弧線往離開身體的方向鼓出來，不會埋在軀幹裡', () => {
  const from = [12, 134, 4];
  const to = [9, 141, -6];
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  const peak = arcPoints(from, to, 40)[20];
  assert.ok(outward(peak) > outward(mid), '弧線中點應該比直線中點離中軸更遠');
  close(peak[1], mid[1]); // 只往水平方向推，高度不變
});

test('bulge 給 0 就是直線', () => {
  const from = [12, 134, 4];
  const to = [9, 141, -6];
  const peak = arcPoints(from, to, 40, 0)[20];
  close(peak[0], (from[0] + to[0]) / 2);
  close(peak[2], (from[2] + to[2]) / 2);
});

test('鼓出去的幅度跟兩點距離成比例', () => {
  const near = arcPoints([4, 100, 0], [4, 104, 0], 40)[20];
  const far = arcPoints([4, 100, 0], [4, 140, 0], 40)[20];
  assert.ok(far[0] - 4 > near[0] - 4, '距離愈遠弧線愈彎');
  close(far[0] - 4, (40 * ARC_BULGE) / 2, 1e-5); // 二次貝茲在中點只走控制點的一半
});

test('兩點都落在中軸上時不會算出 NaN', () => {
  for (const p of arcPoints([0, 100, 0], [0, 120, 0], 8)) {
    for (const v of p) assert.ok(Number.isFinite(v), `${v} 不是有限數`);
  }
});
