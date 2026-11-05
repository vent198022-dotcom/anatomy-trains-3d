import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { ZONES, REFERRED, DEPTHS, DEPTH_TEXT, zoneAt, referredZones, hasReferredZones, isMidlineZone } from '../src/pain/zones.js';
import { ZONE_COLOR, ZONE_COLORS, ZONE_OPACITY } from '../src/pain/referredRender.js';
import { restBounds, falloff, mayTouch, zoneWeights, dominantZone, PAINT_STRENGTH, CORE, REACH } from '../src/pain/paint.js';
import { MARKER_COLORS, LAYER_SCALE } from '../src/app/controller.js';
import { MERIDIANS } from '../src/meridians/meridians.js';
import { PALETTE } from '../src/muscles/colors.js';
import { SEGMENT_KEYS } from '../src/rig/segments.js';
import { PARTS } from '../tools/parts.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const sandbox = { window: {} };
vm.runInNewContext(readFileSync('解剖列車網頁/content.js', 'utf8'), sandbox);
const C = sandbox.window.CONTENT;

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

test('每個區域都有中文名稱、合法的骨段與合理的大小', () => {
  for (const [id, z] of Object.entries(ZONES)) {
    assert.equal(z.id, id);
    assert.ok(z.label?.trim(), `${id} 沒有名稱`);
    assert.ok(z.radius > 1 && z.radius < 6, `${id} 的半徑 ${z.radius} 不合理`);
    for (const side of ['l', 'r']) assert.ok(SEGMENT_KEYS.includes(zoneAt(id, side).seg), `${id} 的骨段 ${zoneAt(id, side).seg} 不存在`);
  }
  assert.equal(new Set(Object.values(ZONES).map(z => z.label)).size, Object.keys(ZONES).length, '有兩個區域名稱重複');
});

test('區域都落在模型的範圍內', () => {
  for (const [id, z] of Object.entries(ZONES)) {
    for (let a = 0; a < 3; a++) {
      assert.ok(z.p[a] >= meta.quant.min[a] - 2 && z.p[a] <= meta.quant.max[a] + 2, `${id} 的第 ${a} 軸 ${z.p[a]} 超出模型範圍`);
    }
  }
});

test('轉移痛對應表只用得到存在的區域與部件', () => {
  for (const [id, list] of Object.entries(REFERRED)) {
    assert.ok(C.muscles[id], `${id} 不是部件`);
    assert.ok(list.length, `${id} 的轉移痛是空的`);
    assert.equal(new Set(list).size, list.length, `${id} 有重複的區域`);
    for (const z of list) assert.ok(ZONES[z], `${id} 用到不存在的區域 ${z}`);
  }
});

test('有痠痛點又寫了轉移痛的肌肉，都標得出範圍', () => {
  const missing = PARTS.filter(p => p.tp.length && C.muscles[p.id].referredPain !== '—' && !hasReferredZones(p.id)).map(p => p.id);
  assert.deepEqual(missing, [], `這些肌肉有痠痛點與轉移痛敘述，卻沒有對應的區域：${missing.join('、')}`);
});

test('沒有寫轉移痛（—）的肌肉不會標出範圍', () => {
  for (const [id, m] of Object.entries(C.muscles)) {
    if (m.referredPain === '—') assert.ok(!hasReferredZones(id), `${id} 的轉移痛是「—」，不該有區域`);
  }
});

test('左右鏡像：右側把 x 取負、骨段換成 .r；中線區域不分左右', () => {
  const l = zoneAt('shoulderFront', 'l');
  const r = zoneAt('shoulderFront', 'r');
  assert.equal(l.seg, 'scapula.l');
  assert.equal(r.seg, 'scapula.r');
  assert.equal(l.pos[0], -r.pos[0]);
  assert.equal(l.pos[1], r.pos[1]);
  assert.ok(!isMidlineZone('shoulderFront'));
  assert.ok(isMidlineZone('sacrum') && isMidlineZone('coccyx') && isMidlineZone('neckBack'));
});

test('referredZones：一般肌肉只標同側，中線肌肉左右都標', () => {
  const right = referredZones('trapUpper', 'r');
  assert.deepEqual(right.map(z => z.id), REFERRED.trapUpper);
  assert.ok(right.every(z => z.pos[0] < 0), '右側上斜方肌的區域應該都在 −x');

  // 橫膈是中線肌肉：肋弓下、側胸、肩膀左右各標一份
  const mid = referredZones('diaphragm', 'm');
  assert.equal(mid.length, REFERRED.diaphragm.length * 2);
  assert.equal(mid.filter(z => z.id === 'chestSide' && z.pos[0] > 0).length, 1);
  assert.equal(mid.filter(z => z.id === 'chestSide' && z.pos[0] < 0).length, 1);

  // 中線區域（薦骨、尾骨）即使是中線肌肉也只有一份
  const floor = referredZones('iliococcygeus', 'm');
  assert.equal(floor.length, REFERRED.iliococcygeus.length);
  assert.ok(floor.every(z => z.pos[0] === 0));

  assert.deepEqual(referredZones('lineaAlba', 'm'), []);
});

test('轉移痛範圍放在合理的位置（y 向上、z 向前）', () => {
  const by = (muscle, side, id) => referredZones(muscle, side).find(z => z.id === id);
  assert.ok(by('trapUpper', 'l', 'temple').pos[1] > 155); // 太陽穴在頭上
  assert.ok(by('gluteusMinimus', 'l', 'calfLat').pos[1] < 35); // 小腿外側在膝蓋以下
  assert.ok(by('pecMajorStern', 'l', 'chestFront').pos[2] > 5); // 前胸在身體前面
  assert.ok(by('gluteusMaximus', 'l', 'sacrum').pos[2] < -5); // 薦骨在身體後面
  assert.equal(by('flexorPollicisLongus', 'l', 'thumbTip').seg, 'thumbDist.l'); // 拇指尖綁在拇指遠節
});

test('每個區域都標了痛的深度，三種深度都用得到', () => {
  for (const [id, z] of Object.entries(ZONES)) {
    assert.ok(DEPTHS.includes(z.depth), `${id} 的深度「${z.depth}」不合法`);
    assert.ok(ZONE_COLORS[z.depth], `深度 ${z.depth} 沒有顏色`);
    assert.ok(DEPTH_TEXT[z.depth], `深度 ${z.depth} 沒有中文`);
  }
  for (const d of DEPTHS) assert.ok(Object.values(ZONES).some(z => z.depth === d), `沒有任何區域是 ${d}`);
  // 名稱寫「深處」的一定算深層；手指、腳趾、手背這種摸得到的一定算表淺
  for (const [id, z] of Object.entries(ZONES)) {
    if (z.label.includes('深處')) assert.equal(z.depth, 'deep', `${id}（${z.label}）應該是深層`);
  }
  for (const id of ['handDorsum', 'footDorsum', 'fingerTips', 'thumb', 'toesDorsal']) assert.equal(ZONES[id].depth, 'surface', id);
  assert.equal(zoneAt('shoulderDeep', 'r').depth, 'deep');
  assert.ok(referredZones('infraspinatus', 'l').every(z => z.depth));
});

test('三種深度的顏色彼此分得開，也不會和痠痛點混在一起', () => {
  const list = DEPTHS.map(d => ZONE_COLORS[d]);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) assert.ok(dist(list[i], list[j]) >= 0.25, `${DEPTHS[i]} 與 ${DEPTHS[j]} 的顏色太接近`);
    assert.ok(dist(list[i], MARKER_COLORS.spot) >= 0.25, `${DEPTHS[i]} 和痠痛點的顏色太接近`);
  }
});

test('染色權重：中心最濃、邊緣淡出、超出範圍為 0', () => {
  assert.equal(falloff(0, 3), 1);
  assert.equal(falloff(3 * REACH, 3), 0);
  assert.equal(falloff(99, 3), 0);
  assert.ok(falloff(1.2, 3) > falloff(2.4, 3)); // 愈遠愈淡
  assert.ok(falloff(3 * CORE * REACH * 0.9, 3) === 1); // 核心範圍內是實心
  assert.ok(PAINT_STRENGTH > 0 && PAINT_STRENGTH <= 1);
});

test('restBounds：外接球包得住所有頂點', () => {
  const rest = new Float32Array([0, 0, 0, 10, 0, 0, 0, 6, 0, -4, 0, 2]);
  const b = restBounds(rest);
  for (let v = 0; v < rest.length / 3; v++) {
    const d = Math.hypot(rest[v * 3] - b.center[0], rest[v * 3 + 1] - b.center[1], rest[v * 3 + 2] - b.center[2]);
    assert.ok(d <= b.radius + 1e-6, `第 ${v} 個頂點跑到外接球外面`);
  }
  assert.equal(restBounds(new Float32Array(0)).radius, 0);
});

test('zoneWeights：碰得到的頂點才有權重，完全碰不到時回傳 null', () => {
  const rest = new Float32Array([0, 0, 0, 1, 0, 0, 40, 0, 0]);
  const bounds = restBounds(rest);
  const near = [{ id: 'a', label: 'a', seg: 'pelvis', pos: [0, 0, 0], radius: 3, depth: 'mid' }];
  const got = zoneWeights(rest, bounds, near);
  assert.equal(got.weights[0], 1); // 正中心
  assert.ok(got.weights[1] > 0 && got.weights[1] <= 1);
  assert.equal(got.weights[2], 0); // 40 公分外
  assert.deepEqual([...got.hit], [0]);

  const far = [{ id: 'b', label: 'b', seg: 'pelvis', pos: [0, 500, 0], radius: 3, depth: 'mid' }];
  assert.equal(zoneWeights(rest, bounds, far), null);
  assert.equal(mayTouch(bounds, far), false);
  assert.equal(mayTouch(bounds, near), true);
});

test('dominantZone：取離部件中心最近的那個區域，決定染哪一種深度的顏色', () => {
  const zones = [
    { id: 'far', label: 'far', seg: 'pelvis', pos: [0, 30, 0], radius: 4, depth: 'surface' },
    { id: 'near', label: 'near', seg: 'pelvis', pos: [0, 1, 0], radius: 4, depth: 'deep' },
  ];
  const bounds = { center: [0, 0, 0], radius: 2 };
  assert.equal(dominantZone(bounds, zones, new Set([0, 1])).id, 'near');
  assert.equal(dominantZone(bounds, zones, new Set()), null);
});

test('痠痛點的大小看得出肌肉的深淺：淺層最大、深層最小', () => {
  assert.ok(LAYER_SCALE.superficial > LAYER_SCALE.middle);
  assert.ok(LAYER_SCALE.middle > LAYER_SCALE.deep);
  // 相鄰兩層至少差兩成，肉眼才分得出來
  assert.ok(LAYER_SCALE.middle / LAYER_SCALE.superficial < 0.8);
  assert.ok(LAYER_SCALE.deep / LAYER_SCALE.middle < 0.8);
  const layers = new Set(PARTS.map(p => p.layer));
  for (const l of layers) assert.ok(LAYER_SCALE[l] > 0, `層次 ${l} 沒有對應的大小`);
  assert.equal(Object.keys(LAYER_SCALE).length, layers.size);
});

test('痠痛點、轉移痛與經脈的顏色分得開', () => {
  const MIN = 0.25;
  for (const m of MERIDIANS) {
    for (const [name, c] of Object.entries(MARKER_COLORS)) {
      assert.ok(dist(m.color, c) >= MIN, `${m.short} 的顏色和痠痛點的 ${name} 太接近（${dist(m.color, c).toFixed(3)}）`);
    }
    assert.ok(dist(m.color, PALETTE.selected) >= MIN, `${m.short} 的顏色和「選取中」的紫色太接近`);
  }
  for (let i = 0; i < MERIDIANS.length; i++) {
    for (let j = i + 1; j < MERIDIANS.length; j++) {
      assert.ok(dist(MERIDIANS[i].color, MERIDIANS[j].color) >= MIN, `${MERIDIANS[i].short} 與 ${MERIDIANS[j].short} 的顏色太接近`);
    }
  }
  // 四種痠痛點顏色彼此也要分得開
  const marks = Object.entries(MARKER_COLORS);
  for (let i = 0; i < marks.length; i++) {
    for (let j = i + 1; j < marks.length; j++) {
      assert.ok(dist(marks[i][1], marks[j][1]) >= MIN, `痠痛點的 ${marks[i][0]} 與 ${marks[j][0]} 太接近`);
    }
  }
  // 轉移痛的罩子是半透明的一團，和痠痛點同色系但不會蓋掉它
  assert.ok(ZONE_OPACITY > 0 && ZONE_OPACITY < 0.5);
  assert.ok(dist(ZONE_COLOR, MARKER_COLORS.spot) > 0.15);
  assert.deepEqual(ZONE_COLOR, ZONE_COLORS.mid);
});
