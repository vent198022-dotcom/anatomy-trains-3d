import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NEUTRAL, PRESETS, SLIDERS, lerpParams, easeInOut, isNeutral } from '../src/rig/presets.js';

test('預設姿勢與滑桿都用同一組參數名稱', () => {
  const keys = Object.keys(NEUTRAL).sort();
  for (const p of Object.values(PRESETS)) assert.deepEqual(Object.keys(p.params).sort(), keys);
  assert.deepEqual(SLIDERS.map(s => s.key).sort(), keys);
});

test('參數內插', () => {
  const mid = lerpParams(NEUTRAL, PRESETS.roundedShoulders.params, 0.5);
  assert.equal(mid.scapProtraction, 0.4);
  assert.equal(mid.shoulderRotation, 0.3);
});

test('緩動曲線端點與中點', () => {
  assert.equal(easeInOut(0), 0);
  assert.equal(easeInOut(0.5), 0.5);
  assert.equal(easeInOut(1), 1);
});

test('是否為中立姿勢', () => {
  assert.equal(isNeutral(NEUTRAL), true);
  assert.equal(isNeutral(PRESETS.roundedShoulders.params), false);
});
