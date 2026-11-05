// 轉移痛範圍的「備援」標示：主要畫法是把範圍染在肌肉表面（見 pain/paint.js），
// 只有那一塊完全沒有東西可以染時（關節腔、體腔內，或那一層被關掉了），才退回用半透明的球罩出來。
// 球綁在骨段上，姿勢改變時跟著身體走；而且一律畫在最上層，不跟著「穿透顯示」開關走。
import * as THREE from 'three';

// 依「痛感覺起來有多深」上色（不是肌肉層次，轉移痛不屬於任何一層肌肉）。
// 三個顏色要染在紅褐色的肌肉上，所以選亮度、色相都差很多的一組：黃 → 橙 → 洋紅紫，愈深愈濃。
// 也避開肌肉本身會用到的紅（鎖短）、藍（鎖長）、紫（選取中）。
export const ZONE_COLORS = {
  surface: [1, 0.92, 0.25], // 表淺：檸檬黃
  mid: [1, 0.52, 0.08], // 肌肉層：亮橙
  deep: [0.85, 0.12, 0.72], // 深處：洋紅紫
};
export const ZONE_COLOR = ZONE_COLORS.mid;
export const ZONE_OPACITY = 0.22;
const EDGE_OPACITY = 0.55;
const ZONE_GEOMETRY = new THREE.SphereGeometry(1, 20, 14); // 半徑 1，再用 scale 放大成各區域的大小
const EDGE_GEOMETRY = new THREE.SphereGeometry(1, 12, 8);

function material(opacity, wireframe) {
  const m = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity,
    wireframe,
    depthTest: false, // 永遠看得到，不然深處的區域會被肌肉蓋掉
    depthWrite: false,
    side: THREE.DoubleSide, // 相機進到球裡面時仍然看得到
    toneMapped: false,
  });
  return m;
}

export function createReferredZones() {
  const group = new THREE.Group();
  group.renderOrder = 8; // 畫在肌肉、痠痛點與穴位之後
  const pool = [];
  let shown = []; // 目前顯示的區域（含骨段與中立姿勢座標）

  function pair(i) {
    if (!pool[i]) {
      const blob = new THREE.Mesh(ZONE_GEOMETRY, material(ZONE_OPACITY, false));
      const edge = new THREE.Mesh(EDGE_GEOMETRY, material(EDGE_OPACITY, true)); // 網格外框，看得出是一個範圍
      for (const m of [blob, edge]) {
        m.renderOrder = 8;
        m.frustumCulled = false;
        m.raycast = () => {}; // 不擋點選
        group.add(m);
      }
      pool[i] = [blob, edge];
    }
    return pool[i];
  }

  const point = new THREE.Vector3();
  const identity = new THREE.Matrix4();
  let lastMats = null;

  function place(mats) {
    for (let i = 0; i < shown.length; i++) {
      const z = shown[i];
      point.fromArray(z.pos);
      if (mats) point.applyMatrix4(mats.get(z.seg) ?? identity);
      const rgb = ZONE_COLORS[z.depth] ?? ZONE_COLORS.mid;
      for (const m of pair(i)) {
        m.position.copy(point);
        m.scale.setScalar(z.radius);
        m.material.color.setRGB(...rgb, THREE.SRGBColorSpace);
        m.visible = true;
      }
    }
    for (let i = shown.length; i < pool.length; i++) for (const m of pool[i]) (m.visible = false);
  }

  return {
    group,
    // zones：zones.js 的 referredZones() 結果；傳空陣列就全部收起來
    show(zones, mats = lastMats) {
      shown = zones ?? [];
      lastMats = mats;
      place(mats);
    },
    update(mats) {
      lastMats = mats;
      if (shown.length) place(mats);
    },
    get count() {
      return shown.length;
    },
  };
}
