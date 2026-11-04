// 轉移痛範圍的 3D 標示：點選痠痛點後，在可能痛到的區域罩上一顆半透明的球
// 球綁在骨段上，姿勢改變時跟著身體走；而且一律畫在最上層——轉移痛常在身體深處或另一面，
// 被肌肉擋住就失去意義，所以不跟著「穿透顯示」開關走。
import * as THREE from 'three';

export const ZONE_COLOR = [1, 0.38, 0.62]; // 淡洋紅：和痠痛點同一個色系，但是一團而不是一點
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
  m.color.setRGB(...ZONE_COLOR, THREE.SRGBColorSpace);
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
      for (const m of pair(i)) {
        m.position.copy(point);
        m.scale.setScalar(z.radius);
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
