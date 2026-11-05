// 把轉移痛的範圍染在肌肉（與骨頭）表面：算出每個頂點離各區域中心多近，愈近染得愈濃
//
// 權重在「中立姿勢」的頂點上算：區域座標與 rest 頂點都在同一個座標系，
// 所以算一次就好，改變姿勢時頂點帶著自己的權重一起變形，不必重算。

export const PAINT_STRENGTH = 0.9; // 權重 1 的地方，顏色往轉移痛色混多少
export const PAINT_GLOW = 0.4; // 另外加一點自發光，染色才不會被打光壓暗
export const CORE = 0.45; // 半徑的這個比例以內是實心，往外淡出到邊緣為 0
export const REACH = 1.15; // 染色範圍比標示球再放寬一點，邊緣才不會切得太硬

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

// 頂點陣列的外接球（中心、半徑），用來快速排除離區域很遠的部件
export function restBounds(rest) {
  const n = rest.length / 3;
  if (!n) return { center: [0, 0, 0], radius: 0 };
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < rest.length; i++) {
    const a = i % 3;
    if (rest[i] < min[a]) min[a] = rest[i];
    if (rest[i] > max[a]) max[a] = rest[i];
  }
  const center = min.map((v, i) => (v + max[i]) / 2);
  let r2 = 0;
  for (let v = 0; v < n; v++) {
    const d = (rest[v * 3] - center[0]) ** 2 + (rest[v * 3 + 1] - center[1]) ** 2 + (rest[v * 3 + 2] - center[2]) ** 2;
    if (d > r2) r2 = d;
  }
  return { center, radius: Math.sqrt(r2) };
}

// 單一區域對某個距離的權重：核心實心、邊緣淡出
export function falloff(distance, radius) {
  return 1 - smoothstep(CORE, 1, distance / (radius * REACH));
}

// 這顆外接球有沒有可能碰到任何一個區域
export function mayTouch(bounds, zones) {
  return zones.some(z => {
    const d = Math.hypot(bounds.center[0] - z.pos[0], bounds.center[1] - z.pos[1], bounds.center[2] - z.pos[2]);
    return d < bounds.radius + z.radius * REACH;
  });
}

// rest：中立姿勢的頂點；zones：referredZones() 的結果
// 回傳 { weights, hit }：hit 是真的染到色的區域索引；完全沒染到時回傳 null
export function zoneWeights(rest, bounds, zones) {
  if (!mayTouch(bounds, zones)) return null;
  const n = rest.length / 3;
  const weights = new Float32Array(n);
  const hit = new Set();
  let any = false;
  for (let zi = 0; zi < zones.length; zi++) {
    const z = zones[zi];
    const reach = z.radius * REACH;
    const [zx, zy, zz] = z.pos;
    // 區域與這個部件的外接球沒有交集就跳過
    if (Math.hypot(bounds.center[0] - zx, bounds.center[1] - zy, bounds.center[2] - zz) >= bounds.radius + reach) continue;
    for (let v = 0; v < n; v++) {
      const d = Math.hypot(rest[v * 3] - zx, rest[v * 3 + 1] - zy, rest[v * 3 + 2] - zz);
      if (d >= reach) continue;
      const w = falloff(d, z.radius);
      if (w <= weights[v]) continue;
      weights[v] = w;
      if (w > 0.05) {
        hit.add(zi);
        any = true;
      }
    }
  }
  return any ? { weights, hit } : null;
}

// 這個部件該染哪一種深度的顏色：取離它最近的那個區域
export function dominantZone(bounds, zones, hit) {
  let best = null;
  for (const zi of hit) {
    const z = zones[zi];
    const d = Math.hypot(bounds.center[0] - z.pos[0], bounds.center[1] - z.pos[1], bounds.center[2] - z.pos[2]);
    if (!best || d < best.d) best = { d, zone: z };
  }
  return best?.zone ?? null;
}
