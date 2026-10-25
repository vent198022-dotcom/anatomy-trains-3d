import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { PARTS } from '../tools/parts.js';
import { LINES, linePartIds } from '../src/trains/lines.js';
import { PRESETS } from '../src/rig/presets.js';

// content.js 是給瀏覽器用的一般 script（設定 window.CONTENT），在沙箱裡執行取出
const sandbox = { window: {} };
vm.runInNewContext(readFileSync('解剖列車網頁/content.js', 'utf8'), sandbox);
const C = sandbox.window.CONTENT;
const FIELDS = ['name', 'en', 'latin', 'origin', 'insertion', 'action', 'nerve', 'lockedShort', 'lockedLong', 'painPoints', 'referredPain'];

test('每個部件都有完整的中文說明（含痠痛點、轉移痛）', () => {
  for (const p of PARTS) {
    const m = C.muscles[p.id];
    assert.ok(m, `缺少 ${p.id}`);
    for (const f of FIELDS) assert.ok(typeof m[f] === 'string' && m[f].trim(), `${p.id}.${f} 是空的`);
    assert.ok(Array.isArray(m.lines), `${p.id}.lines`);
    for (const l of m.lines) assert.ok(C.lines[l], `${p.id} 的列車線「${l}」沒有說明`);
  }
  assert.equal(Object.keys(C.muscles).length, PARTS.length, '說明裡有多餘的部件');
});

test('有痠痛點標記的肌肉，說明裡也寫了痠痛位置', () => {
  for (const p of PARTS.filter(q => q.tp.length)) assert.notEqual(C.muscles[p.id].painPoints, '—', p.id);
});

test('列車線的部件與說明一致（雙向）', () => {
  for (const line of LINES) {
    assert.ok(C.lines[line.name], line.name);
    const ids = linePartIds(line.id);
    for (const id of ids) {
      assert.ok(PARTS.find(p => p.id === id), `${line.name}：${id} 不是部件`);
      assert.ok(C.muscles[id].lines.includes(line.name), `${id} 的說明少了 ${line.name}`);
    }
    for (const [id, m] of Object.entries(C.muscles)) {
      if (m.lines.includes(line.name)) assert.ok(ids.has(id), `${id} 寫了 ${line.name}，但軌道上沒有它`);
    }
  }
});

test('linePartIds', () => {
  assert.ok(linePartIds('dfal').has('pecMinor'));
  assert.ok(linePartIds('spl').has('rhomboidMajor'));
  assert.equal(linePartIds('nope'), null);
});

test('每個預設姿勢都有說明；鎖短、鎖長的痠痛提示都在', () => {
  for (const k of Object.keys(PRESETS)) assert.ok(C.postures[k], k);
  assert.ok(C.painHints.short && C.painHints.long);
});
