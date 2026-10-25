import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { PARTS } from '../tools/parts.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const find = key => meta.parts.find(p => p.key === key);

test('兩側部件齊全', () => {
  assert.equal(meta.parts.length, PARTS.length * 2);
  for (const p of PARTS) for (const s of ['l', 'r']) assert.ok(find(`${p.id}.${s}`), `${p.id}.${s}`);
});

test('附著區都貼近指定的骨頭', () => {
  for (const p of meta.parts) for (const d of p.dmin) assert.ok(d < p.maxGap, `${p.key} 附著區離骨頭 ${d} 公分`);
});

test('斜方肌上、中、下部的高度順序正確', () => {
  for (const s of ['l', 'r']) {
    const y = id => find(`${id}.${s}`).centroid[1];
    assert.ok(y('trapUpper') > y('trapMiddle') && y('trapMiddle') > y('trapLower'));
  }
});

test('右側在 −x、左側在 +x', () => {
  for (const p of meta.parts) assert.ok(p.side === 'r' ? p.centroid[0] < 0 : p.centroid[0] > 0, p.key);
});

test('關節位置合理', () => {
  const j = meta.joints;
  assert.ok(j.gh.r[0] > -22 && j.gh.r[0] < -12 && j.gh.r[1] > 132 && j.gh.r[1] < 144, `肱骨頭 ${j.gh.r}`);
  assert.ok(j.sc.r[0] > -4 && j.ac.r[0] < -12, '胸鎖在內、肩鎖在外');
  assert.ok(j.neck[1] < j.head[1]);
});

test('三角面與檔案大小在預算內', () => {
  const tris = [...meta.bones, ...meta.parts].reduce((n, e) => n + e.iCount / 3, 0);
  assert.ok(tris <= 400000, `三角面 ${tris}`);
  assert.ok(statSync('data/processed/meshes.bin').size <= 7 * 1048576);
});
