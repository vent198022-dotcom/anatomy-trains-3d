// 長度變化 → 顏色與文字

export const THRESHOLD = 0.03; // |Δ| 小於 3% 視為不變
export const FULL = 0.2; // |Δ| 到 20% 顏色最飽和

// sRGB 0–1
export const PALETTE = {
  natural: [0.62, 0.25, 0.22], // 中立姿勢時的肌肉色
  same: [0.7, 0.68, 0.66],
  short: [0.86, 0.16, 0.12],
  long: [0.14, 0.4, 0.88],
};

export const STATE_TEXT = { short: '鎖短', long: '鎖長', same: '不變' };

export function lengthState(delta) {
  if (delta <= -THRESHOLD) return 'short';
  if (delta >= THRESHOLD) return 'long';
  return 'same';
}

export function lengthColor(delta) {
  const state = lengthState(delta);
  if (state === 'same') return PALETTE.same.slice();
  const k = 0.35 + 0.65 * Math.min(1, (Math.abs(delta) - THRESHOLD) / (FULL - THRESHOLD));
  return PALETTE.same.map((c, i) => c + (PALETTE[state][i] - c) * k);
}

// −0.137 → '−14%'；用全形減號，與 + 號等寬好讀
export function deltaText(delta) {
  const pct = Math.round(delta * 100);
  if (pct === 0) return '0%';
  return `${pct > 0 ? '+' : '−'}${Math.abs(pct)}%`;
}
