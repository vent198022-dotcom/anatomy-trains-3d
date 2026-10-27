import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { netCoords, tubeNetCoords, createNet, NET_BLUE } from '../src/trains/net.js';
import { linePartIds } from '../src/trains/lines.js';
import { lengthColor, PALETTE } from '../src/muscles/colors.js';

test('網格座標：第一個方向沿起點 → 止點，以網格間距為單位；另兩個方向與它垂直', () => {
  const rest = new Float32Array([0, 3, 0, 1.5, 0, 0]);
  const c = netCoords(rest, [0, 0, 0], [0, 10, 0], 1.5);
  assert.ok(Math.abs(c[0] - 2) < 1e-6, '沿軸 3 公分＝2 格');
  assert.ok(Math.abs(c[1]) < 1e-6 && Math.abs(c[2]) < 1e-6);
  assert.ok(Math.abs(c[3]) < 1e-6, '垂直方向的點沿軸座標為 0');
  assert.ok(Math.abs(Math.hypot(c[4], c[5]) - 1) < 1e-6, '垂直距離 1.5 公分＝1 格');
});

test('細帶的網格座標：沿長度一組、圓周四條縱線、第三組不畫線', () => {
  assert.deepEqual(Array.from(tubeNetCoords(new Float32Array([0.5, 0.25]), 6, 1.5)), [2, 1, 0.5]);
});

// 線上部件做成小三角形；預設是前功能線：胸大肌腹部 → 腹直肌 → 對側內收長肌
function fakeParts(lineIds = ['ffl']) {
  const ids = [...new Set(lineIds.flatMap(l => [...linePartIds(l)]))];
  return ids.flatMap((id, i) =>
    ['l', 'r'].map(side => {
      const x = side === 'r' ? -5 : 5;
      const rest = new Float32Array([x, 100 - i * 20, 0, x + 1, 90 - i * 20, 0, x, 90 - i * 20, 1]);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(rest.slice(), 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(9), 3));
      // 第二站當作不計算長度的筋膜
      const info = { id, key: `${id}.${side}`, side, measure: i !== 1, segA: 'torso', segB: 'torso', vias: [], a: [x, 100 - i * 20, 0], b: [x, 90 - i * 20, 0] };
      return { info, rest, mesh: new THREE.Mesh(geometry), delta: side === 'r' ? -0.12 : 0.08, target: [0, 0, 0] };
    }),
  );
}
const mats = new Map([['torso', new THREE.Matrix4()]]);
const colorOf = shell => shell.material.uniforms.uColor.value.toArray();
const close = (p, q) => p.every((v, i) => Math.abs(v - q[i]) < 1e-6);

test('選線時每個部件掛一層網格外殼（共用肌肉的頂點），站與站之間有細帶', () => {
  const parts = fakeParts();
  const net = createNet('ffl', parts);
  assert.equal(net.shells.length, 6);
  for (const p of parts) {
    assert.equal(p.mesh.children.length, 1, p.info.key);
    assert.equal(p.mesh.children[0].geometry, p.mesh.geometry, '外殼與肌肉共用幾何');
    assert.ok(p.mesh.geometry.getAttribute('netCoord'), p.info.key);
  }
  net.update(mats, p => p.target, false);
  assert.equal(net.group.children.length, 4, '每側 3 站、2 條細帶');
  net.dispose();
  for (const p of parts) assert.equal(p.mesh.children.length, 0, '移除外殼');
});

test('網格顏色：中立姿勢藍色；改變姿勢後依長度狀態，不計算長度的部件灰色', () => {
  const parts = fakeParts();
  const net = createNet('ffl', parts);
  net.update(mats, p => p.target, false);
  for (const s of net.shells) assert.ok(close(colorOf(s), NET_BLUE));
  net.update(mats, p => p.target, true);
  for (const s of net.shells) assert.ok(close(colorOf(s), s.part.info.measure ? lengthColor(s.part.delta) : PALETTE.same), s.part.info.key);
  net.dispose();
});

test('複選列車線：共用的部件只掛一層外殼，細帶只連同一條線的站', () => {
  // 後功能線（闊背肌 → 胸腰筋膜 → 對側臀大肌 → 對側股外側肌）與同側功能線（闊背肌 → 腹外斜肌 → 縫匠肌）共用闊背肌
  const parts = fakeParts(['bfl', 'ifl']);
  const net = createNet(['bfl', 'ifl'], parts);
  assert.equal(net.shells.length, parts.length, '每個部件一層');
  for (const p of parts) assert.equal(p.mesh.children.length, 1, p.info.key);
  net.update(mats, p => p.target, false);
  assert.equal(net.group.children.length, 2 * 3 + 2 * 2, '後功能線每側 3 條、同側功能線每側 2 條');
  net.dispose();
});
