// 對照書本的檢查清單：每個預設姿勢下，這些肌肉的鎖短／鎖長方向必須成立（用真實模型資料）
// 只列幾何上明確、離 3% 門檻有餘裕的肌肉；變化很小的（例如骨盆前傾時的腰大肌、股直肌）不列入，畫面上照實顯示
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { computePose } from '../src/rig/rig.js';
import { PRESETS } from '../src/rig/presets.js';
import { lengthDelta } from '../src/muscles/length.js';
import { THRESHOLD, deltaText } from '../src/muscles/colors.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));

// 名稱不帶側別的，左右兩側都檢查；帶 .l/.r 的只檢查那一側
const CHECKS = {
  roundedShoulders: {
    short: ['pecMinor', 'pecMajorStern', 'serratusAnterior', 'subscapularis'],
    long: ['rhomboidMajor', 'rhomboidMinor', 'trapMiddle', 'trapLower', 'infraspinatus', 'teresMinor'],
  },
  forwardHead: { short: ['rectusCapPostMajor', 'rectusCapPostMinor', 'obliquusCapSup', 'sternocleidomastoid'], long: [] },
  kyphosis: { short: ['rectusAbdominis'], long: ['spinalisThoracis', 'iliocostalisThoracis', 'longissimusThoracis'] },
  anteriorTilt: {
    short: ['iliacus', 'multifidusLumborum', 'iliocostalisLumborum'],
    long: ['rectusAbdominis', 'bicepsFemorisLong', 'semitendinosus', 'semimembranosus', 'gluteusMaximus'],
  },
  posteriorTilt: { short: ['gluteusMaximus', 'rectusAbdominis'], long: ['multifidusLumborum', 'iliocostalisLumborum'] },
  unevenShoulders: { short: ['trapUpper.r', 'levatorScapulae.r'], long: ['trapUpper.l'] },
  legLength: { short: ['quadratusLumborum.r', 'gluteusMedius.l'], long: ['quadratusLumborum.l', 'gluteusMedius.r'] },
};
const keys = name => (/\.[lr]$/.test(name) ? [name] : [`${name}.l`, `${name}.r`]);

for (const [preset, { short, long }] of Object.entries(CHECKS)) {
  const mats = computePose(meta.joints, PRESETS[preset].params);
  const delta = key => lengthDelta(meta.parts.find(p => p.key === key), mats);
  for (const key of short.flatMap(keys)) {
    test(`${PRESETS[preset].label}：${key} 鎖短`, () => assert.ok(delta(key) <= -THRESHOLD, deltaText(delta(key))));
  }
  for (const key of long.flatMap(keys)) {
    test(`${PRESETS[preset].label}：${key} 鎖長`, () => assert.ok(delta(key) >= THRESHOLD, deltaText(delta(key))));
  }
}

test('列出每個姿勢變化最大的部件（供人工審閱）', t => {
  for (const preset of Object.keys(CHECKS)) {
    const mats = computePose(meta.joints, PRESETS[preset].params);
    const top = meta.parts
      .filter(p => p.measure)
      .map(p => [p.key, lengthDelta(p, mats)])
      .sort((x, y) => Math.abs(y[1]) - Math.abs(x[1]))
      .slice(0, 8);
    t.diagnostic(`${PRESETS[preset].label}：${top.map(([k, d]) => `${k} ${deltaText(d)}`).join('、')}`);
  }
});
