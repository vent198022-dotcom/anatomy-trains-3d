// 對照書本的檢查清單：「圓肩」預設下，這些肌肉的鎖短／鎖長方向必須成立（用真實模型資料）
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { computePose } from '../src/rig/rig.js';
import { PRESETS } from '../src/rig/presets.js';
import { lengthDelta } from '../src/muscles/length.js';
import { THRESHOLD, deltaText } from '../src/muscles/colors.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const mats = computePose(meta.joints, PRESETS.roundedShoulders.params);
const SHORT = ['pecMinor', 'pecMajorStern', 'serratusAnterior', 'subscapularis'];
const LONG = ['rhomboidMajor', 'rhomboidMinor', 'trapMiddle', 'trapLower', 'infraspinatus', 'teresMinor'];

for (const side of ['l', 'r']) {
  const delta = id => lengthDelta(meta.parts.find(p => p.key === `${id}.${side}`), mats);
  for (const id of SHORT) {
    test(`圓肩：${id}.${side} 鎖短`, () => assert.ok(delta(id) <= -THRESHOLD, deltaText(delta(id))));
  }
  for (const id of LONG) {
    test(`圓肩：${id}.${side} 鎖長`, () => assert.ok(delta(id) >= THRESHOLD, deltaText(delta(id))));
  }
}

test('列出所有部件的長度變化（供人工審閱）', t => {
  for (const p of meta.parts.filter(q => q.side === 'r')) t.diagnostic(`${p.id}: ${deltaText(lengthDelta(p, mats))}`);
});
