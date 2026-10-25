// 拆解、列車線與痠痛點的顯示規則（純函式，不碰 three.js）
import { lengthState } from '../muscles/colors.js';

export const LAYER_PUSH = { superficial: 1, middle: 0.6, deep: 0.3 }; // 爆炸圖時外層先離開
export const EXPLODE_MAX = 15; // 爆炸圖滑桿拉滿時，淺層移出的距離（公分）
export const PULL_DISTANCE = 8; // 「拉出」的距離（公分）
export const GHOST_OPACITY = 0.1; // 「半透明」的不透明度
export const LINE_FADE_OPACITY = 0.15; // 選了列車線時，線外部件的不透明度
const PICK_MIN_OPACITY = 0.3; // 比這更透明的部件點不到，點選會穿過去選到後面的肌肉

export function createDisplayState() {
  return {
    layers: { superficial: true, middle: true, deep: true, bones: true },
    hidden: new Set(), // 部件 key，例如 'pecMinor.r'
    ghost: new Set(),
    pulled: new Set(),
    explode: 0, // 0–1
    selectedKey: null,
    lineParts: null, // 目前列車線的部件 id 集合；null 表示沒選線
    showPain: false, // 痠痛點開關
  };
}

// part：{ key, id, layer }；回傳 { visible, opacity, glow, pickable }
export function partDisplay(part, st) {
  if (!st.layers[part.layer] || st.hidden.has(part.key)) return { visible: false, opacity: 0, glow: 0, pickable: false };
  let opacity = st.ghost.has(part.key) ? GHOST_OPACITY : 1;
  let glow = 0;
  if (st.lineParts) {
    if (st.lineParts.has(part.id)) glow = 0.25;
    else opacity = Math.min(opacity, LINE_FADE_OPACITY);
  }
  if (st.selectedKey === part.key) glow = 0.45;
  return { visible: true, opacity, glow, pickable: opacity >= PICK_MIN_OPACITY };
}

// 爆炸圖與拉出的位移：從身體中軸（axis = [x, z]）沿水平方向往外
export function partOffset(part, st, axis) {
  const dx = part.centroid[0] - axis[0];
  const dz = part.centroid[2] - axis[1];
  const len = Math.hypot(dx, dz) || 1;
  const dist = st.explode * EXPLODE_MAX * LAYER_PUSH[part.layer] + (st.pulled.has(part.key) ? PULL_DISTANCE : 0);
  return [(dx / len) * dist, 0, (dz / len) * dist];
}

// 全部恢復：只把隱藏、半透明的部件顯示回來；分層、爆炸圖、拉出不變
export function restoreParts(st) {
  st.hidden.clear();
  st.ghost.clear();
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

// 痠痛點要不要顯示、用哪種顏色：null（不顯示）、'focus'（選取的肌肉，姿勢中立）、'short'、'long'
// 打開開關後：選取的肌肉一定顯示；姿勢改變時，所有鎖短／鎖長的肌肉自動標出
export function painMarkerState(part, st, poseActive, delta) {
  if (!st.showPain || !partDisplay(part, st).visible) return null;
  const state = poseActive && part.measure ? lengthState(delta) : 'same';
  if (state !== 'same') return state;
  return st.selectedKey === part.key ? 'focus' : null;
}
