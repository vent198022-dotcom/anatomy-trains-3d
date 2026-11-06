import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MUSCLES_BY_ZONE, allZones, zoneHits, sourcesAt, searchZones } from '../src/pain/lookup.js';
import { ZONES, REFERRED, isMidlineZone, zoneAt } from '../src/pain/zones.js';

const zones = allZones();
const at = (id, side = 'l') => zones.find(z => z.id === id && (isMidlineZone(id) ? true : z.side === side));

test('反查索引涵蓋每一個被用到的區域', () => {
  const used = new Set(Object.values(REFERRED).flat());
  for (const id of used) assert.ok(MUSCLES_BY_ZONE[id]?.length, `${id} 沒有反查得到的肌肉`);
  for (const [id, list] of Object.entries(MUSCLES_BY_ZONE)) {
    assert.ok(ZONES[id], `反查索引裡有不存在的區域 ${id}`);
    for (const m of list) assert.ok(REFERRED[m].includes(id), `${m} 不該出現在 ${id} 的反查結果`);
  }
});

test('allZones：中線區域一份，其餘左右各一份', () => {
  const midline = Object.keys(ZONES).filter(isMidlineZone).length;
  assert.equal(zones.length, (Object.keys(ZONES).length - midline) * 2 + midline);
  assert.equal(at('sacrum').side, 'm');
  assert.equal(at('shoulderFront', 'r').pos[0], -zoneAt('shoulderFront', 'l').pos[0]);
});

test('zoneHits：正中心權重 1，範圍外完全不算', () => {
  const z = at('occiput');
  const centre = zoneHits(z.pos, [z]);
  assert.equal(centre.length, 1);
  assert.equal(centre[0].weight, 1);
  assert.equal(zoneHits([z.pos[0], z.pos[1] + 500, z.pos[2]], [z]).length, 0);
  // 愈遠權重愈小
  const near = zoneHits([z.pos[0] + 1, z.pos[1], z.pos[2]], [z])[0].weight;
  const far = zoneHits([z.pos[0] + 3.5, z.pos[1], z.pos[2]], [z])[0].weight;
  assert.ok(near > far);
});

test('sourcesAt：點在痛的地方，找得出教科書上的來源肌肉', () => {
  const ids = pos => sourcesAt(pos, zones).map(s => s.id);
  // 後腦痛 → 枕下肌群
  const occiput = ids(at('occiput').pos);
  for (const m of ['rectusCapPostMajor', 'obliquusCapInf']) assert.ok(occiput.includes(m), `後腦少了 ${m}`);
  // 外踝痛 → 臀小肌（假性坐骨神經痛）與腓骨肌
  const ankle = ids(at('ankleLat').pos);
  for (const m of ['gluteusMinimus', 'fibularisLongus']) assert.ok(ankle.includes(m), `外踝少了 ${m}`);
  // 太陽穴痛 → 上斜方肌與顳肌
  const temple = ids(at('temple').pos);
  for (const m of ['trapUpper', 'temporalis']) assert.ok(temple.includes(m), `太陽穴少了 ${m}`);
  // 上排牙齒痛 → 咬肌與顳肌（牙醫找不到問題的那一種）
  const teeth = ids(at('teethUpper').pos);
  for (const m of ['masseterSup', 'temporalis']) assert.ok(teeth.includes(m), `上排牙齒少了 ${m}`);
});

test('sourcesAt：排序由準到不準，而且不超過上限', () => {
  const z = at('thighLat');
  const out = sourcesAt(z.pos, zones, 5);
  assert.ok(out.length <= 5);
  for (let i = 1; i < out.length; i++) assert.ok(out[i - 1].weight >= out[i].weight);
  assert.ok(out.every(s => s.side === 'l'), '左側的區域只該查出左側的肌肉');
  assert.deepEqual(sourcesAt([0, 900, 0], zones), []); // 身體外面查不到東西
});

test('中線區域左右兩側的肌肉都查得到', () => {
  const out = sourcesAt(at('sacrum').pos, zones);
  const glute = out.filter(s => s.id === 'gluteusMaximus').map(s => s.side).sort();
  assert.deepEqual(glute, ['l', 'r']);
});

test('searchZones：用痛的部位找區域', () => {
  const hit = searchZones('腳跟').map(z => z.id);
  assert.ok(hit.includes('heel'));
  assert.ok(searchZones('後腦')[0].count >= 5);
  assert.deepEqual(searchZones('  '), []);
  assert.deepEqual(searchZones('不存在的部位'), []);
});
