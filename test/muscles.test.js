import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { polylineLength, lengthDelta } from '../src/muscles/length.js';
import { prepareDeform, deformInto } from '../src/muscles/deform.js';
import { lengthState, lengthColor, deltaText, PALETTE } from '../src/muscles/colors.js';

const I = new THREE.Matrix4();
const move = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const mats = Mb => new Map([['torso', I], ['arm.r', Mb]]);
const part = { segA: 'torso', segB: 'arm.r', a: [0, 0, 0], b: [10, 0, 0], via: null };

test('折線長度', () => {
  assert.equal(polylineLength([[0, 0, 0], [3, 4, 0], [3, 4, 12]]), 17);
});

test('長度變化率', () => {
  assert.equal(lengthDelta(part, mats(I)), 0);
  assert.ok(Math.abs(lengthDelta(part, mats(move(2, 0, 0))) - 0.2) < 1e-9);
});

test('轉折點跟著它的骨段移動', () => {
  const p = { ...part, via: { seg: 'arm.r', p: [5, 5, 0] } };
  // 中立：(0,0,0)→(5,5,0)→(10,0,0)；遠端下移 5 後：(0,0,0)→(5,0,0)→(10,−5,0)
  const expected = (5 + Math.hypot(5, 5)) / (2 * Math.hypot(5, 5)) - 1;
  assert.ok(Math.abs(lengthDelta(p, mats(move(0, -5, 0))) - expected) < 1e-9);
});

// 沿 x 軸、半徑 1 的「肌肉」：x = 0…10，每個位置一圈 4 個點
const rest = Float32Array.from(Array.from({ length: 11 }, (_, i) => [[i, 1, 0], [i, -1, 0], [i, 0, 1], [i, 0, -1]]).flat(2));
const prep = prepareDeform(rest, [0, 0, 0], [10, 0, 0]);

test('兩端不動時頂點不變', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, I, I, out);
  assert.deepEqual(Array.from(out), Array.from(rest));
});

test('兩端同一個變換時整塊剛體移動', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, move(3, -2, 5), move(3, -2, 5), out);
  for (let i = 0; i < rest.length; i += 3) {
    assert.ok(Math.abs(out[i] - rest[i] - 3) < 1e-5 && Math.abs(out[i + 1] - rest[i + 1] + 2) < 1e-5 && Math.abs(out[i + 2] - rest[i + 2] - 5) < 1e-5);
  }
});

test('遠端拉長：近端不動、遠端跟著走、肌腹變細', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, I, move(5, 0, 0), out);
  assert.deepEqual(Array.from(out.slice(0, 3)), [0, 1, 0]); // x = 0 那圈不動
  assert.ok(Math.abs(out[40 * 3] - 15) < 1e-5); // x = 10 那圈移到 15
  const mid = 20 * 3; // x = 5 那圈的第一個點
  assert.ok(Math.abs(out[mid + 1]) < 0.9, `肌腹半徑 ${out[mid + 1]}`);
});

test('長度狀態門檻', () => {
  assert.equal(lengthState(0.024), 'same');
  assert.equal(lengthState(-0.03), 'short');
  assert.equal(lengthState(0.03), 'long');
});

test('狀態與畫面上四捨五入的 % 一致（+2.6% 顯示 +3%，就算鎖長）', () => {
  assert.equal(deltaText(0.026), '+3%');
  assert.equal(lengthState(0.026), 'long');
  assert.equal(deltaText(-0.025), '−3%');
  assert.equal(lengthState(-0.025), 'short');
  const c = lengthColor(0.026);
  assert.ok(c[2] > PALETTE.same[2]);
});

test('顏色隨變化加深，20% 以上飽和', () => {
  const r3 = c => c.map(v => Math.round(v * 1000) / 1000);
  assert.deepEqual(lengthColor(0), PALETTE.same);
  assert.deepEqual(r3(lengthColor(-0.2)), r3(PALETTE.short));
  assert.deepEqual(r3(lengthColor(0.5)), r3(PALETTE.long));
  const c = lengthColor(-0.05);
  assert.ok(c[0] > PALETTE.same[0] && c[0] < PALETTE.short[0]);
});

test('變化率文字', () => {
  assert.equal(deltaText(-0.137), '−14%');
  assert.equal(deltaText(0.081), '+8%');
  assert.equal(deltaText(0.004), '0%');
});
