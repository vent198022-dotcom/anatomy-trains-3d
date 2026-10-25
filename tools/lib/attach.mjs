// 附著區偵測：找出肌肉頂點中最靠近指定骨頭的那一帶

const OFFSET = 512;
const cellKey = (ix, iy, iz) => ((ix + OFFSET) * 1024 + (iy + OFFSET)) * 1024 + (iz + OFFSET);

// 把骨頭頂點放進均勻格網，快速查最近距離
export class PointGrid {
  constructor(positions, cell = 1) {
    this.positions = positions;
    this.cell = cell;
    this.cells = new Map();
    for (let i = 0; i < positions.length; i += 3) {
      const k = cellKey(Math.floor(positions[i] / cell), Math.floor(positions[i + 1] / cell), Math.floor(positions[i + 2] / cell));
      let list = this.cells.get(k);
      if (!list) this.cells.set(k, (list = []));
      list.push(i);
    }
  }

  // 到最近骨頭頂點的距離；maxRadius 格內都沒有點就回傳 Infinity
  nearest(x, y, z, maxRadius = 6) {
    const { cell, positions: p } = this;
    const cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
    let best = Infinity;
    for (let r = 1; r <= maxRadius; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dz = -r; dz <= r; dz++) {
            // r > 1 時只看最外一圈（內圈上一輪已經找過）
            if (r > 1 && Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz)) < r) continue;
            const list = this.cells.get(cellKey(cx + dx, cy + dy, cz + dz));
            if (!list) continue;
            for (const i of list) {
              const d = (p[i] - x) ** 2 + (p[i + 1] - y) ** 2 + (p[i + 2] - z) ** 2;
              if (d < best) best = d;
            }
          }
        }
      }
      // 還沒搜過的格子至少相距 r 格，已找到的點若更近就可以停
      if (Math.sqrt(best) <= r * cell) return Math.sqrt(best);
    }
    return Math.sqrt(best);
  }
}

export function centroidOf(positions, indices) {
  const c = [0, 0, 0];
  for (const v of indices) {
    c[0] += positions[v * 3];
    c[1] += positions[v * 3 + 1];
    c[2] += positions[v * 3 + 2];
  }
  return c.map(x => x / indices.length);
}

export function meanPoint(positions) {
  return centroidOf(positions, Array.from({ length: positions.length / 3 }, (_, i) => i));
}

// 距離骨頭在「最近距離 + band」以內的肌肉頂點
export function attachmentRegion(positions, grid, band = 0.5) {
  const n = positions.length / 3;
  const dist = new Float32Array(n);
  let dmin = Infinity;
  for (let v = 0; v < n; v++) {
    const d = grid.nearest(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    dist[v] = d;
    if (d < dmin) dmin = d;
  }
  if (!Number.isFinite(dmin)) throw new Error('肌肉離指定的骨頭超過 6 公分，請檢查 parts.js 的骨頭清單');
  const indices = [];
  for (let v = 0; v < n; v++) if (dist[v] <= dmin + band) indices.push(v);
  return { indices, dmin, centroid: centroidOf(positions, indices) };
}

// 頂點 v 投影在 a→b 連線上的位置（a 為 0、b 為 1）
function projT(positions, v, a, b) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const len2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2 || 1;
  return ((positions[v * 3] - a[0]) * ab[0] + (positions[v * 3 + 1] - a[1]) * ab[1] + (positions[v * 3 + 2] - a[2]) * ab[2]) / len2;
}

// 兩個附著區只保留靠近各自端點的部分（連線上前／後 endFrac），排除貼著骨頭的肌腹
// （附著區平均位置就在 t = 0 或 1，所以兩邊一定各有頂點留下）
export function refineEnds(positions, regionA, regionB, endFrac = 0.3) {
  const a = regionA.centroid, b = regionB.centroid;
  const t = v => projT(positions, v, a, b);
  const pick = (region, nearA) =>
    centroidOf(positions, region.indices.filter(v => (nearA ? t(v) <= endFrac : t(v) >= 1 - endFrac)));
  return { a: pick(regionA, true), b: pick(regionB, false) };
}

// 肌腹中段（連線上 lo–hi）的平均位置，當作轉折點
export function midBellyCentroid(positions, a, b, lo = 0.4, hi = 0.6) {
  const n = positions.length / 3;
  const kept = [];
  for (let v = 0; v < n; v++) {
    const t = projT(positions, v, a, b);
    if (t >= lo && t <= hi) kept.push(v);
  }
  if (!kept.length) return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
  return centroidOf(positions, kept);
}
