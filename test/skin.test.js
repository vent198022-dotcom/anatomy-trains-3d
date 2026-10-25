import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex, axisT, momentArm } from '../tools/lib/skin.mjs';

test('取樣點數不超過上限', () => {
  const pts = new Float32Array(3000);
  assert.equal(samplePoints(pts, 100).length, 300);
  assert.equal(samplePoints(pts, 5000), pts);
});

// 兩個骨段：A 在 x = 0，B 在 x = 10
const segPoints = [new Float32Array([0, 0, 0]), new Float32Array([10, 0, 0])];

test('頂點權重：靠近哪段就跟哪段，中間平均', () => {
  const skin = skinWeights(new Float32Array([1, 0, 0, 5, 0, 0, 9.5, 0, 0]), segPoints, 3);
  assert.deepEqual([skin[0], skin[2]], [0, 0]); // x = 1：完全跟 A
  assert.equal(skin[5], Math.round(0.5 * 255)); // x = 5：兩段各半
  assert.equal(skin[6], 1); // x = 9.5：最近 B
  assert.equal(skin[8], 0);
});

test('離某點最近的骨段', () => {
  assert.equal(nearestSegment([8, 1, 0], segPoints), 1);
});

test('中間骨段的轉折點依連線位置排序，太靠端點的不要', () => {
  const positions = new Float32Array([2, 0, 0, 3, 0, 0, 7, 0, 0, 0.1, 0, 0]);
  const skin = new Uint8Array([1, 1, 0, 1, 1, 0, 2, 2, 0, 3, 3, 0]);
  const vias = chainVias(positions, skin, [1, 2, 3], [0, 0, 0], [10, 0, 0]);
  assert.deepEqual(vias.map(v => v.s), [1, 2]);
  assert.deepEqual(vias[0].p, [2.5, 0, 0]);
});

test('痠痛點取連線位置附近最表淺的頂點', () => {
  // x = 5 一圈：離骨頭（y 軸上的點）最遠的是 y = 3 那個
  const positions = new Float32Array([5, 1, 0, 5, 3, 0, 5, 2, 0, 0, 0, 0]);
  const bone = new Float32Array([5, 0, 0]);
  assert.equal(superficialVertex(positions, [0, 0, 0], [10, 0, 0], 0.5, bone), 1);
  assert.ok(Math.abs(axisT(positions, 1, [0, 0, 0], [10, 0, 0]) - 0.5) < 1e-9);
});

test('力臂：關節附近的肌肉在遠端轉動方向那側為正，超過上限時截斷', () => {
  // 轉軸 +x、肢體往 −y：遠端繞 +x 正向轉時往 x × (−y) = −z 移動
  const front = new Float32Array([0, 1, 2, 0, -1, 2]); // 關節前方（+z）2 公分
  assert.ok(Math.abs(momentArm(front, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4) + 2) < 1e-9);
  assert.equal(momentArm(new Float32Array([0, 0, -9]), [0, 0, 0], [0, -1, 0], [1, 0, 0], 4), 4);
  // 關節上下 2 公分內沒有頂點時，用最靠近關節面的頂點
  const far = new Float32Array([0, -5, 1, 0, -20, 3]);
  assert.ok(Math.abs(momentArm(far, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4) + 1) < 1e-9);
});
