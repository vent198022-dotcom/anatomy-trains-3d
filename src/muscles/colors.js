// 長度變化 → 顏色與文字

export const THRESHOLD = 0.03; // |Δ| 小於 3% 視為不變
export const FULL = 0.2; // |Δ| 到 20% 顏色最飽和

// sRGB 0–1
export const PALETTE = {
  natural: [0.62, 0.25, 0.22], // 中立姿勢時的肌肉色
  same: [0.7, 0.68, 0.66],
  short: [0.86, 0.16, 0.12],
  long: [0.14, 0.4, 0.88],
  selected: [0.72, 0.42, 1], // 點選中的肌肉（紫色，與肌肉色、紅、藍、灰都分得開）
};

export const STATE_TEXT = { short: '鎖短', long: '鎖長', same: '不變' };

// 四捨五入到整數 %（正負對稱）；狀態判斷也用它，讓畫面上的數字與「不變／鎖短／鎖長」一致
function percent(delta) {
  return Math.sign(delta) * Math.round(Math.abs(delta) * 100);
}

export function lengthState(delta) {
  const pct = percent(delta);
  if (pct <= -THRESHOLD * 100) return 'short';
  if (pct >= THRESHOLD * 100) return 'long';
  return 'same';
}

// 肌肉的顯示顏色：選取中紫色；中立姿勢肌肉色；改變姿勢後依長度狀態（不計算長度的筋膜、肌腱灰色）
export function partColor({ selected, poseActive, measure, delta }) {
  if (selected) return PALETTE.selected.slice();
  if (!poseActive) return PALETTE.natural.slice();
  return measure ? lengthColor(delta) : PALETTE.same.slice();
}

export function lengthColor(delta) {
  const state = lengthState(delta);
  if (state === 'same') return PALETTE.same.slice();
  const k = 0.35 + 0.65 * Math.min(1, Math.max(0, (Math.abs(delta) - THRESHOLD) / (FULL - THRESHOLD)));
  return PALETTE.same.map((c, i) => c + (PALETTE[state][i] - c) * k);
}

// −0.137 → '−14%'；用全形減號，與 + 號等寬好讀
export function deltaText(delta) {
  const pct = percent(delta);
  if (pct === 0) return '0%';
  return `${pct > 0 ? '+' : '−'}${Math.abs(pct)}%`;
}
