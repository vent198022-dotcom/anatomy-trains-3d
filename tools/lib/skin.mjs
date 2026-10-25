// 多骨段肌肉（例如豎脊肌、腹直肌）的頂點權重與轉折點、痠痛點位置

// 每隔固定步長取點，最多 maxCount 個（骨頭頂點太多時加速最近距離計算）
export function samplePoints(points, maxCount) {
  const n = points.length / 3;
  if (n <= maxCount) return points;
  const step = n / maxCount;
  const out = new Float32Array(maxCount * 3);
  for (let i = 0; i < maxCount; i++) {
    const v = Math.floor(i * step);
    out.set(points.subarray(v * 3, v * 3 + 3), i * 3);
  }
  return out;
}

function nearestDistance(points, x, y, z) {
  let best = Infinity;
  for (let i = 0; i < points.length; i += 3) {
    const d = (points[i] - x) ** 2 + (points[i + 1] - y) ** 2 + (points[i + 2] - z) ** 2;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

// segPoints：每個骨段的骨頭取樣點（Float32Array）。每個頂點記 3 位元組：
// 最近骨段序號 s1、第二近 s2、s2 的權重（0–255）。兩段距離差 ≥ blend 公分時完全跟 s1，相等時各半。
export function skinWeights(positions, segPoints, blend = 3) {
  const n = positions.length / 3;
  const out = new Uint8Array(n * 3);
  for (let v = 0; v < n; v++) {
    const x = positions[v * 3], y = positions[v * 3 + 1], z = positions[v * 3 + 2];
    let s1 = 0, s2 = 0, d1 = Infinity, d2 = Infinity;
    segPoints.forEach((pts, s) => {
      const d = nearestDistance(pts, x, y, z);
      if (d < d1) {
        s2 = s1;
        d2 = d1;
        s1 = s;
        d1 = d;
      } else if (d < d2) {
        s2 = s;
        d2 = d;
      }
    });
    const w = Number.isFinite(d2) ? 0.5 * Math.max(0, 1 - (d2 - d1) / blend) : 0;
    out[v * 3] = s1;
    out[v * 3 + 1] = s2;
    out[v * 3 + 2] = Math.round(w * 255);
  }
  return out;
}

// 離某點最近的骨段序號
export function nearestSegment(p, segPoints) {
  let best = 0, bestD = Infinity;
  segPoints.forEach((pts, s) => {
    const d = nearestDistance(pts, p[0], p[1], p[2]);
    if (d < bestD) {
      bestD = d;
      best = s;
    }
  });
  return best;
}

// 頂點投影在 a→b 連線上的位置（a 為 0、b 為 1）
export function axisT(positions, v, a, b) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const len2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2 || 1;
  return ((positions[v * 3] - a[0]) * ab[0] + (positions[v * 3 + 1] - a[1]) * ab[1] + (positions[v * 3 + 2] - a[2]) * ab[2]) / len2;
}

// 中間骨段的轉折點：主要跟著該骨段（s1）的頂點平均位置，依連線位置排序；太靠兩端的不要
export function chainVias(positions, skin, segIndices, a, b) {
  const vias = [];
  for (const s of segIndices) {
    let sx = 0, sy = 0, sz = 0, n = 0;
    for (let v = 0; v < skin.length / 3; v++) {
      if (skin[v * 3] !== s) continue;
      sx += positions[v * 3];
      sy += positions[v * 3 + 1];
      sz += positions[v * 3 + 2];
      n++;
    }
    if (!n) continue;
    const p = [sx / n, sy / n, sz / n];
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const t = ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1] + (p[2] - a[2]) * ab[2]) / (ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2 || 1);
    if (t > 0.05 && t < 0.95) vias.push({ s, p, t });
  }
  return vias.sort((x, y) => x.t - y.t);
}

// 痠痛點：連線上位置 t 附近的一圈頂點中，離骨頭最遠（最表淺）的那一個
export function superficialVertex(positions, a, b, t, bonePoints) {
  const n = positions.length / 3;
  let slice = [];
  for (let v = 0; v < n; v++) if (Math.abs(axisT(positions, v, a, b) - t) < 0.06) slice.push(v);
  if (!slice.length) {
    let best = 0, bestGap = Infinity;
    for (let v = 0; v < n; v++) {
      const gap = Math.abs(axisT(positions, v, a, b) - t);
      if (gap < bestGap) {
        bestGap = gap;
        best = v;
      }
    }
    slice = [best];
  }
  let pick = slice[0], far = -1;
  for (const v of slice) {
    const d = nearestDistance(bonePoints, positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    if (d > far) {
      far = d;
      pick = v;
    }
  }
  return pick;
}


// 跨手肘、手腕的力臂（公分，帶正負號）：關節上下 2 公分內的肌肉頂點平均位置，投影到「遠端骨段正向轉動時移動的方向」
// 正值＝關節正向轉動（屈曲）時肌肉變短；肌肉沒有經過這一段（例如肌腱沒有建模）時改用最靠近關節面的 5% 頂點
// pivot：轉軸上一點；dir：沿肢體往遠端的單位向量；axis：轉軸（與 rig.js 用的方向相同）
export function momentArm(positions, pivot, dir, axis, maxArm) {
  const n = positions.length / 3;
  const along = v => (positions[v * 3] - pivot[0]) * dir[0] + (positions[v * 3 + 1] - pivot[1]) * dir[1] + (positions[v * 3 + 2] - pivot[2]) * dir[2];
  let pick = [];
  for (let v = 0; v < n; v++) if (Math.abs(along(v)) <= 2) pick.push(v);
  if (!pick.length) {
    const order = Array.from({ length: n }, (_, v) => v).sort((x, y) => Math.abs(along(x)) - Math.abs(along(y)));
    pick = order.slice(0, Math.max(1, Math.ceil(n * 0.05)));
  }
  const c = [0, 0, 0];
  for (const v of pick) for (let i = 0; i < 3; i++) c[i] += positions[v * 3 + i] / pick.length;
  // 遠端骨段繞 axis 正向轉時，關節下方的點往 axis × dir 方向移動
  const move = [axis[1] * dir[2] - axis[2] * dir[1], axis[2] * dir[0] - axis[0] * dir[2], axis[0] * dir[1] - axis[1] * dir[0]];
  const len = Math.hypot(...move);
  const m = ((c[0] - pivot[0]) * move[0] + (c[1] - pivot[1]) * move[1] + (c[2] - pivot[2]) * move[2]) / len;
  return Math.max(-maxArm, Math.min(maxArm, m));
}
