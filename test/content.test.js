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
const FIELDS = ['name', 'en', 'latin', 'origin', 'insertion', 'action', 'nerve', 'lockedShort', 'lockedLong'];

test('每個部件都有完整的中文說明', () => {
  for (const p of PARTS) {
    const m = C.muscles[p.id];
    assert.ok(m, `缺少 ${p.id}`);
    for (const f of FIELDS) assert.ok(typeof m[f] === 'string' && m[f].trim(), `${p.id}.${f} 是空的`);
    assert.ok(Array.isArray(m.lines), `${p.id}.lines`);
    for (const l of m.lines) assert.ok(C.lines[l], `${p.id} 的列車線「${l}」沒有說明`);
  }
});

test('列車線軌道上的部件，說明裡也寫了這條線', () => {
  for (const line of LINES) {
    assert.ok(C.lines[line.name], line.name);
    for (const id of line.stations.flat()) {
      assert.ok(PARTS.find(p => p.id === id), `${line.name}：${id} 不是部件`);
      assert.ok(C.muscles[id].lines.includes(line.name), `${id} 的說明少了 ${line.name}`);
    }
  }
});

test('linePartIds', () => {
  assert.ok(linePartIds('dfal').has('pecMinor'));
  assert.equal(linePartIds('nope'), null);
});

test('每個預設姿勢都有說明', () => {
  for (const k of Object.keys(PRESETS)) assert.ok(C.postures[k], k);
});
