// 從骨頭幾何估算關節中心與胸廓外形

// 最小平方球面擬合：|p − c|² = r²
export function fitSphere(points) {
  const n = points.length / 3;
  const m = [0, 0, 0];
  for (let i = 0; i < points.length; i++) m[i % 3] += points[i] / n;
  const A = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  const B = [0, 0, 0, 0];
  for (let i = 0; i < points.length; i += 3) {
    const x = points[i] - m[0], y = points[i + 1] - m[1], z = points[i + 2] - m[2];
    const row = [2 * x, 2 * y, 2 * z, 1];
    const rhs = x * x + y * y + z * z;
    for (let r = 0; r < 4; r++) {
      B[r] += row[r] * rhs;
      for (let c = 0; c < 4; c++) A[r][c] += row[r] * row[c];
    }
  }
  const [a, b, c, d] = solveLinear(A, B);
  return { center: [a + m[0], b + m[1], c + m[2]], radius: Math.sqrt(d + a * a + b * b + c * c) };
}

// 高斯消去（部分選主元）
function solveLinear(A, B) {
  const n = B.length;
  const M = A.map((row, i) => [...row, B[i]]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
    [M[col], M[pivot]] = [M[pivot], M[col]];
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = M[r][col] / M[col][col];
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c];
    }
  }
  return M.map((row, i) => row[n] / row[i]);
}

// 沿 dir 方向最遠的 frac 比例頂點的平均位置
export function extremeCentroid(points, dir, frac) {
  const n = points.length / 3;
  const proj = Array.from({ length: n }, (_, v) => [points[v * 3] * dir[0] + points[v * 3 + 1] * dir[1] + points[v * 3 + 2] * dir[2], v]);
  proj.sort((p, q) => q[0] - p[0]);
  const k = Math.max(1, Math.ceil(n * frac));
  const c = [0, 0, 0];
  for (let i = 0; i < k; i++) {
    const v = proj[i][1];
    c[0] += points[v * 3] / k;
    c[1] += points[v * 3 + 1] / k;
    c[2] += points[v * 3 + 2] / k;
  }
  return c;
}

// 只留 y ≥ 最高點 − depth 的頂點（例如肱骨頭）
export function topSlab(points, depth) {
  let maxY = -Infinity;
  for (let i = 1; i < points.length; i += 3) maxY = Math.max(maxY, points[i]);
  const out = [];
  for (let i = 0; i < points.length; i += 3) if (points[i + 1] >= maxY - depth) out.push(points[i], points[i + 1], points[i + 2]);
  return new Float32Array(out);
}

// 椎骨轉軸：取最前方 2 公分（椎體）的平均 x、z，y 取下緣或上緣
export function vertebraPivot(points, edge) {
  let maxZ = -Infinity;
  for (let i = 2; i < points.length; i += 3) maxZ = Math.max(maxZ, points[i]);
  let sx = 0, sz = 0, n = 0, y = edge === 'bottom' ? Infinity : -Infinity;
  for (let i = 0; i < points.length; i += 3) {
    if (points[i + 2] < maxZ - 2) continue;
    sx += points[i];
    sz += points[i + 2];
    n++;
    y = edge === 'bottom' ? Math.min(y, points[i + 1]) : Math.max(y, points[i + 1]);
  }
  return [sx / n, y, sz / n];
}

// 外框橢球：中心＝外框中心，半徑＝外框半長
export function boxEllipsoid(points) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < points.length; i++) {
    min[i % 3] = Math.min(min[i % 3], points[i]);
    max[i % 3] = Math.max(max[i % 3], points[i]);
  }
  return { center: min.map((v, a) => (v + max[a]) / 2), radii: min.map((v, a) => (max[a] - v) / 2) };
}

const RIB_NAMES = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];

// geo：骨頭名稱 → 世界座標頂點（Float32Array）
export function estimateJoints(geo) {
  const need = name => {
    const p = geo.get(name);
    if (!p) throw new Error(`估算關節需要的骨頭 ${name} 不存在`);
    return p;
  };
  const joints = { sc: {}, ac: {}, gh: {}, elbow: {}, scapAnchor: {} };
  for (const s of ['l', 'r']) {
    const medial = [s === 'r' ? 1 : -1, 0, 0];
    const lateral = [-medial[0], 0, 0];
    const clavicle = need(`Clavicle.${s}`);
    const humerus = need(`Humerus.${s}`);
    joints.sc[s] = extremeCentroid(clavicle, medial, 0.05);
    joints.ac[s] = extremeCentroid(clavicle, lateral, 0.05);
    joints.gh[s] = fitSphere(topSlab(humerus, 3)).center;
    joints.elbow[s] = extremeCentroid(humerus, [0, -1, 0], 0.03);
    joints.scapAnchor[s] = extremeCentroid(need(`Scapula.${s}`), medial, 0.05);
  }
  joints.neck = vertebraPivot(need('Vertebra C7'), 'bottom');
  joints.head = vertebraPivot(need('Atlas (C1)'), 'top');
  const ribs = RIB_NAMES.flatMap(n => ['l', 'r'].map(s => need(`${n} rib.${s}`)));
  joints.thorax = boxEllipsoid(Float32Array.from(ribs.flatMap(r => Array.from(r))));
  return joints;
}
