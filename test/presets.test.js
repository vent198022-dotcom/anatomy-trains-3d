import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NEUTRAL, PRESETS, SLIDERS, lerpParams, easeInOut, isNeutral, snapSlider, bilateral, sliderValue, setSlider } from '../src/rig/presets.js';

test('預設姿勢與滑桿都對應同一組參數', () => {
  const keys = Object.keys(NEUTRAL).sort();
  for (const p of Object.values(PRESETS)) assert.deepEqual(Object.keys(p.params).sort(), keys);
  const fromSliders = SLIDERS.flatMap(s => (s.sided ? [`${s.key}.l`, `${s.key}.r`] : [s.key])).sort();
  assert.deepEqual(fromSliders, keys);
});

test('9 個預設姿勢', () => {
  assert.deepEqual(Object.keys(PRESETS), ['neutral', 'roundedShoulders', 'forwardHead', 'kyphosis', 'anteriorTilt', 'posteriorTilt', 'unevenShoulders', 'legLength', 'phone']);
  assert.equal(PRESETS.phone.params['elbowFlexion.l'], 0.7);
  assert.equal(PRESETS.phone.params['forearmPronation.r'], 0.8);
  assert.equal(PRESETS.unevenShoulders.params['scapElevation.r'], 0.7);
  assert.equal(PRESETS.unevenShoulders.params['scapElevation.l'], -0.3);
});

test('bilateral：分左右的參數兩側同值，其餘為 0', () => {
  const p = bilateral({ scapProtraction: 0.8, headForward: 0.2 });
  assert.equal(p['scapProtraction.l'], 0.8);
  assert.equal(p['scapProtraction.r'], 0.8);
  assert.equal(p['scapElevation.r'], 0);
  assert.equal(p.headForward, 0.2);
});

test('滑桿：只調一側、兩側一起', () => {
  let p = setSlider(NEUTRAL, 'scapElevation', 0.6, 'r');
  assert.equal(p['scapElevation.r'], 0.6);
  assert.equal(p['scapElevation.l'], 0);
  assert.equal(sliderValue(p, 'scapElevation', 'r'), 0.6);
  assert.equal(sliderValue(p, 'scapElevation', 'l'), 0);
  assert.equal(sliderValue(p, 'scapElevation', 'both'), 0.3); // 兩側一起時顯示平均
  p = setSlider(p, 'scapElevation', -0.2, 'both');
  assert.equal(p['scapElevation.l'], -0.2);
  assert.equal(p['scapElevation.r'], -0.2);
  p = setSlider(p, 'headForward', 0.5, 'l'); // 中線參數不分左右
  assert.equal(p.headForward, 0.5);
  assert.equal(sliderValue(p, 'headForward', 'r'), 0.5);
});

test('參數內插', () => {
  const mid = lerpParams(NEUTRAL, PRESETS.roundedShoulders.params, 0.5);
  assert.equal(mid['scapProtraction.l'], 0.4);
  assert.equal(mid['shoulderRotation.r'], 0.3);
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

test('滑桿接近 0 時吸附回 0（不小心碰到不會整個變色）', () => {
  assert.equal(snapSlider(0.01), 0);
  assert.equal(snapSlider(-0.04), 0);
  assert.equal(snapSlider(0.06), 0.06);
  assert.equal(snapSlider(-0.5), -0.5);
});
