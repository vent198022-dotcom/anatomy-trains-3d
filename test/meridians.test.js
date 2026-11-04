import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { MERIDIANS, MERIDIAN_GROUPS, MERIDIAN_SIDES, HUBS, HUB_PUSH, meridianById, meridianNodes, meridianAcupoints, acupointCount, nodeSegment, pushedPosition } from '../src/meridians/meridians.js';
import { densify, densifyIndex, subdivisions, catmullRom, distanceToPath } from '../src/meridians/path.js';
import { SEGMENT_KEYS } from '../src/rig/segments.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const sandbox = { window: {} };
vm.runInNewContext(readFileSync('解剖列車網頁/content.js', 'utf8'), sandbox);
const C = sandbox.window.CONTENT;

test('十二正經加任督二脈，共 14 條', () => {
  assert.equal(MERIDIANS.length, 14);
  assert.equal(MERIDIANS.filter(m => m.midline).length, 2);
  assert.equal(new Set(MERIDIANS.map(m => m.id)).size, 14);
  assert.equal(new Set(MERIDIANS.map(m => m.code)).size, 14);
  for (const m of MERIDIANS) {
    assert.ok(MERIDIAN_GROUPS.some(([key]) => key === m.group), `${m.name} 的分組 ${m.group} 不存在`);
    assert.ok(m.points.length >= 8, `${m.name} 只有 ${m.points.length} 個節點`);
    assert.equal(m.color.length, 3);
  }
  for (const [key] of MERIDIAN_GROUPS) assert.ok(MERIDIANS.some(m => m.group === key), `分組 ${key} 沒有經脈`);
});

test('每條經脈都有中文說明', () => {
  for (const m of MERIDIANS) assert.ok(C.meridians[m.id]?.trim(), `${m.name} 缺少說明`);
  for (const id of Object.keys(C.meridians)) assert.ok(meridianById(id), `說明裡有多餘的經脈 ${id}`);
});

test('穴位代號不重複，而且都有名稱與定位', () => {
  const codes = new Set();
  for (const m of MERIDIANS) {
    for (const p of m.points) {
      if (!p.code) {
        assert.equal(p.name, null, '過渡點不應該有穴名');
        continue;
      }
      assert.ok(p.code.startsWith(m.code), `${p.code} 不屬於 ${m.code}`);
      assert.ok(!codes.has(p.code), `穴位代號重複：${p.code}`);
      codes.add(p.code);
      assert.ok(p.name?.trim(), `${p.code} 沒有穴名`);
      assert.ok(p.note?.trim(), `${p.code} 沒有定位說明`);
    }
  }
  assert.ok(codes.size >= 180, `穴位只有 ${codes.size} 個`);
});

test('穴位代號的編號順序與走向一致', () => {
  for (const m of MERIDIANS) {
    const numbers = m.points.filter(p => p.code).map(p => Number(p.code.slice(m.code.length)));
    for (let i = 1; i < numbers.length; i++) assert.ok(numbers[i] > numbers[i - 1], `${m.name}：${m.code}${numbers[i]} 排在 ${m.code}${numbers[i - 1]} 後面`);
  }
});

test('每個節點綁的骨段都存在、推離方向也有定義', () => {
  for (const m of MERIDIANS) {
    for (const p of m.points) {
      assert.ok(p.hub in HUBS, `${m.name} ${p.name ?? ''} 的 hub「${p.hub}」不存在`);
      assert.ok(p.hub in HUB_PUSH, `${p.hub} 沒有推離距離`);
      for (const side of MERIDIAN_SIDES(m)) assert.ok(SEGMENT_KEYS.includes(nodeSegment(p, side)), `骨段 ${nodeSegment(p, side)} 不存在`);
    }
  }
});

test('節點都落在模型的範圍內（含推離身體的距離）', () => {
  const pad = 4; // 推到體表後可能比骨頭外框再外面一些
  for (const m of MERIDIANS) {
    for (const side of MERIDIAN_SIDES(m)) {
      for (const n of meridianNodes(m, side)) {
        for (let a = 0; a < 3; a++) {
          assert.ok(n.pos[a] >= meta.quant.min[a] - pad && n.pos[a] <= meta.quant.max[a] + pad, `${m.name} ${n.name ?? ''} 的第 ${a} 軸 ${n.pos[a]} 超出模型範圍`);
        }
      }
    }
  }
});

test('中線經脈的 x 為 0；左右兩側互為鏡像', () => {
  for (const m of MERIDIANS.filter(x => x.midline)) {
    for (const n of meridianNodes(m, 'm')) assert.equal(n.pos[0], 0, `${m.name} ${n.name} 不在中線`);
  }
  for (const m of MERIDIANS.filter(x => !x.midline)) {
    const l = meridianNodes(m, 'l');
    const r = meridianNodes(m, 'r');
    assert.equal(l.length, r.length);
    for (let i = 0; i < l.length; i++) {
      assert.ok(Math.abs(l[i].pos[0] + r[i].pos[0]) < 1e-9, `${m.name} 第 ${i} 點左右不對稱`);
      assert.equal(l[i].pos[1], r[i].pos[1]);
      assert.equal(l[i].pos[2], r[i].pos[2]);
      assert.equal(l[i].seg.replace(/\.l$/, ''), r[i].seg.replace(/\.r$/, ''));
    }
  }
});

test('相鄰節點之間不會跳太遠（線條才不會穿過身體）', () => {
  for (const m of MERIDIANS) {
    const nodes = meridianNodes(m, MERIDIAN_SIDES(m)[0]);
    for (let i = 1; i < nodes.length; i++) {
      const d = Math.hypot(...nodes[i].pos.map((v, a) => v - nodes[i - 1].pos[a]));
      assert.ok(d < 29, `${m.name}：${nodes[i - 1].name ?? '轉折點'} 到 ${nodes[i].name ?? '轉折點'} 相距 ${d.toFixed(1)} 公分`);
    }
  }
});

test('推離身體：節點會往離開中軸的方向移動，距離等於該區段的設定', () => {
  const node = { seg: 'arm', hub: 'arm', p: [20, 120, 0] };
  const moved = pushedPosition(node, 'l');
  assert.ok(Math.hypot(...moved.map((v, i) => v - node.p[i])) - HUB_PUSH.arm < 1e-6);
  const right = pushedPosition(node, 'r');
  assert.ok(Math.abs(moved[0] + right[0]) < 1e-9);
  // hub 為 none 的（指尖、趾尖）不推
  assert.deepEqual(pushedPosition({ seg: 'foot', hub: 'none', p: [1, 2, 3] }, 'l'), [1, 2, 3]);
});

test('meridianAcupoints 只回傳有代號的穴位；acupointCount 兩側都算', () => {
  const bl = meridianById('bl');
  assert.ok(meridianAcupoints(bl, 'l').every(p => p.code));
  assert.ok(meridianAcupoints(bl, 'l').length < meridianNodes(bl, 'l').length); // 膀胱經有過頭頂的轉折點
  const expected = MERIDIANS.reduce((s, m) => s + m.points.filter(p => p.code).length * (m.midline ? 1 : 2), 0);
  assert.equal(acupointCount(), expected);
  assert.equal(meridianById('nope'), null);
});

test('Catmull-Rom 補點：通過原本的節點、段數隨距離增加', () => {
  const pts = [[0, 0, 0], [0, 10, 0], [0, 20, 0]];
  const dense = densify(pts);
  assert.ok(dense.length > pts.length);
  assert.deepEqual(dense[0], [0, 0, 0]);
  assert.deepEqual(dense[dense.length - 1], [0, 20, 0]);
  assert.equal(densifyIndex(pts).length, dense.length);
  assert.ok(subdivisions([0, 0, 0], [0, 20, 0]) > subdivisions([0, 0, 0], [0, 2, 0]));
  assert.deepEqual(catmullRom([0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], 0), [1, 0, 0]);
  assert.deepEqual(densify([[1, 2, 3]]), [[1, 2, 3]]);
});

test('distanceToPath：點到折線的最短距離', () => {
  const path = [[0, 0, 0], [10, 0, 0]];
  assert.equal(distanceToPath([5, 3, 0], path), 3);
  assert.equal(distanceToPath([-4, 0, 0], path), 4);
});

test('重要穴位放在合理的位置（公分，y 向上、z 向前）', () => {
  const find = (id, code) => meridianAcupoints(meridianById(id), meridianById(id).midline ? 'm' : 'l').find(p => p.code === code);
  const baihui = find('gv', 'GV20'); // 百會在頭頂
  assert.ok(baihui.pos[1] > 168, `百會 y=${baihui.pos[1]}`);
  const yongquan = find('ki', 'KI1'); // 湧泉在腳底
  assert.ok(yongquan.pos[1] < 4, `湧泉 y=${yongquan.pos[1]}`);
  const hegu = find('li', 'LI4'); // 合谷在手背虎口，綁在手骨段上
  assert.equal(hegu.seg, 'hand.l');
  const zusanli = find('st', 'ST36'); // 足三里在小腿，綁在小腿骨段上
  assert.equal(zusanli.seg, 'shank.l');
  const shanzhong = find('cv', 'CV17'); // 膻中在胸骨前面
  assert.ok(shanzhong.pos[2] > 8 && Math.abs(shanzhong.pos[0]) < 1e-9);
  const mingmen = find('gv', 'GV4'); // 命門在腰椎後面
  assert.ok(mingmen.pos[2] < -5 && mingmen.seg === 'L2');
});
