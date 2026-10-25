// 拆解與列車線的顯示規則（純函式，不碰 three.js）

export const LAYER_PUSH = { superficial: 1, middle: 0.6, deep: 0.3 }; // 爆炸圖時外層先離開
export const EXPLODE_MAX = 15; // 爆炸圖滑桿拉滿時，淺層移出的距離（公分）
export const PULL_DISTANCE = 8; // 「拉出」的距離（公分）

export function createDisplayState() {
  return {
    layers: { superficial: true, middle: true, deep: true, bones: true },
    hidden: new Set(), // 部件 key，例如 'pecMinor.r'
    ghost: new Set(),
    pulled: new Set(),
    explode: 0, // 0–1
    selectedKey: null,
    lineParts: null, // 目前列車線的部件 id 集合；null 表示沒選線
  };
}

// part：{ key, id, layer }；回傳 { visible, opacity, glow }
export function partDisplay(part, st) {
  if (!st.layers[part.layer] || st.hidden.has(part.key)) return { visible: false, opacity: 0, glow: 0 };
  let opacity = st.ghost.has(part.key) ? 0.3 : 1;
  let glow = 0;
  if (st.lineParts) {
    if (st.lineParts.has(part.id)) glow = 0.25;
    else opacity = Math.min(opacity, 0.15);
  }
  if (st.selectedKey === part.key) glow = 0.45;
  return { visible: true, opacity, glow };
}

// 爆炸圖與拉出的位移：從身體中軸（axis = [x, z]）沿水平方向往外
export function partOffset(part, st, axis) {
  const dx = part.centroid[0] - axis[0];
  const dz = part.centroid[2] - axis[1];
  const len = Math.hypot(dx, dz) || 1;
  const dist = st.explode * EXPLODE_MAX * LAYER_PUSH[part.layer] + (st.pulled.has(part.key) ? PULL_DISTANCE : 0);
  return [(dx / len) * dist, 0, (dz / len) * dist];
}

// 復原：清掉拆解狀態與選取；姿勢與列車線不變
export function resetDisplay(st) {
  Object.assign(st.layers, { superficial: true, middle: true, deep: true, bones: true });
  st.hidden.clear();
  st.ghost.clear();
  st.pulled.clear();
  st.explode = 0;
  st.selectedKey = null;
}
