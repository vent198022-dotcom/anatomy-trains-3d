// 肌肉變形：每個頂點依它在「近端 → 遠端」連線上的位置，混合兩個骨段的變換，並維持肌腹體積
import { transformPoint } from './length.js';

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

// rest：中立姿勢的頂點；a、b：近端、遠端附著點
export function prepareDeform(rest, a, b) {
  const n = rest.length / 3;
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const len2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2 || 1;
  const weight = new Float32Array(n);
  const belly = new Float32Array(n);
  for (let v = 0; v < n; v++) {
    const t = ((rest[v * 3] - a[0]) * ab[0] + (rest[v * 3 + 1] - a[1]) * ab[1] + (rest[v * 3 + 2] - a[2]) * ab[2]) / len2;
    const w = smoothstep(0.1, 0.9, t);
    weight[v] = w;
    belly[v] = 4 * w * (1 - w);
  }
  return { rest, a, b, restLength: Math.sqrt(len2), weight, belly };
}

// Ma、Mb：近端、遠端骨段的 THREE.Matrix4；結果寫進 out（長度與 rest 相同）
export function deformInto(prep, Ma, Mb, out) {
  const { rest, weight, belly } = prep;
  const ea = Ma.elements, eb = Mb.elements;
  const A = transformPoint(ea, prep.a);
  const B = transformPoint(eb, prep.b);
  const len = Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]) || 1;
  const u = [(B[0] - A[0]) / len, (B[1] - A[1]) / len, (B[2] - A[2]) / len];
  const radial = 1 / Math.sqrt(len / prep.restLength); // 縮短變粗、拉長變細
  for (let v = 0, n = weight.length; v < n; v++) {
    const x = rest[v * 3], y = rest[v * 3 + 1], z = rest[v * 3 + 2];
    const w = weight[v], k = 1 - w;
    let px = k * (ea[0] * x + ea[4] * y + ea[8] * z + ea[12]) + w * (eb[0] * x + eb[4] * y + eb[8] * z + eb[12]);
    let py = k * (ea[1] * x + ea[5] * y + ea[9] * z + ea[13]) + w * (eb[1] * x + eb[5] * y + eb[9] * z + eb[13]);
    let pz = k * (ea[2] * x + ea[6] * y + ea[10] * z + ea[14]) + w * (eb[2] * x + eb[6] * y + eb[10] * z + eb[14]);
    const s = 1 + (radial - 1) * belly[v];
    if (s !== 1) {
      const t = (px - A[0]) * u[0] + (py - A[1]) * u[1] + (pz - A[2]) * u[2];
      const cx = A[0] + u[0] * t, cy = A[1] + u[1] * t, cz = A[2] + u[2] * t;
      px = cx + (px - cx) * s;
      py = cy + (py - cy) * s;
      pz = cz + (pz - cz) * s;
    }
    out[v * 3] = px;
    out[v * 3 + 1] = py;
    out[v * 3 + 2] = pz;
  }
}

// 跨三個以上骨段的肌肉：每個頂點依轉檔時算好的權重（最近的兩個骨段），混合兩個骨段的變換；不做體積縮放
// skin：每頂點 3 位元組（骨段序號 s1、s2、s2 的權重 0–255）；segKeys：序號對應的骨段名稱
export function deformChain(rest, skin, segKeys, mats, out) {
  const els = segKeys.map(k => mats.get(k).elements);
  for (let v = 0, n = rest.length / 3; v < n; v++) {
    const a = els[skin[v * 3]], b = els[skin[v * 3 + 1]];
    const w = skin[v * 3 + 2] / 255, k = 1 - w;
    const x = rest[v * 3], y = rest[v * 3 + 1], z = rest[v * 3 + 2];
    out[v * 3] = k * (a[0] * x + a[4] * y + a[8] * z + a[12]) + w * (b[0] * x + b[4] * y + b[8] * z + b[12]);
    out[v * 3 + 1] = k * (a[1] * x + a[5] * y + a[9] * z + a[13]) + w * (b[1] * x + b[5] * y + b[9] * z + b[13]);
    out[v * 3 + 2] = k * (a[2] * x + a[6] * y + a[10] * z + a[14]) + w * (b[2] * x + b[6] * y + b[10] * z + b[14]);
  }
}
