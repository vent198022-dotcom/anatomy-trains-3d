# 解剖列車 3D 上肢（前臂、手，手肘／前臂旋轉／手腕）實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal：** 補齊上肢：新增前臂與手的 42 種部件（含中文說明與痠痛點），加入手肘屈伸、前臂旋轉、手腕屈伸三個可分左右的關節與「滑手機」姿勢，並把四條手臂線延伸到手。

**Architecture：** 上臂骨段拆成上臂、尺骨、橈骨、手四段，骨架依「上臂 → 尺骨（手肘）→ 橈骨（前臂旋轉）→ 手（手腕）」串接。跨手肘、手腕的部件用每頂點兩骨段權重變形；長度改用「手肘、手腕鎖住時的折線長＋各關節的 −力臂 × 轉角」，力臂在轉檔時由關節附近的肌肉頂點算出。繞橈骨捲的旋後肌群用文獻力臂處理前臂旋轉。

**Tech Stack：** 同前兩階段：three 0.170.0、esbuild 0.24.0、meshoptimizer 1.3.0、`node --test`。

設計文件：`docs/superpowers/specs/2026-10-25-anatomy-trains-3d-upper-limb-design.md`

## Global Constraints

- 所有指令都在專案根目錄 `C:\Users\user\Desktop\AI用\claue 工作\解剖列車3D` 執行（Git Bash）；在分支 `feat/upper-limb` 上做，不直接改 main。
- 前兩階段的限制全部沿用：
  - 可用 `file://` 雙擊開啟（不可 fetch、不可 ES module）；
  - 座標單位公分、+y 上、+z 前、右側在 −x；
  - 使用者看到的文字用繁體中文，程式註解也用繁體中文。
- 長度配色：四捨五入到整數 % 後，|Δ| < 3% 灰色、≥ 20% 最飽和；紅＝鎖短、藍＝鎖長；中立姿勢顯示自然肌肉色；筋膜、肌腱、橫膈不計算長度。
- 關節方向用解剖意義定義：
  - 手肘彎曲：前臂往前上方；
  - 前臂旋前：拇指由外側轉向前方；
  - 手腕屈曲：手指往掌側。
  - 解剖姿勢（參數 0）是手肘伸直、前臂完全旋後。
- 預算：三角面 ≤ 80 萬、`meshes.bin` ≤ 7.5 MB（`model.js` 約 10.3 MB）；全身動作每幀 < 40 毫秒。
- 頁尾與 README 標示模型出處，並註明「痠痛點與轉移痛為常見位置，不能取代專業評估」。
- Git 只在本機；每個 commit 訊息結尾加上 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`。
- `解剖列車網頁/app.js`、`model.js` 是產生的檔案：提交前 `npm run build`；`npm run serve` 只在記憶體打包，不會改到它們。
- 暫時失敗的測試：
  - Task 2 起：`parts.test` 的「骨段名稱」與 `postures.test`，Task 4 恢復；
  - Task 4 起：`content.test`，Task 6 恢復。
  - 每個任務只要求它自己的測試通過；Task 6 起全部測試要通過。

## 檔案結構（改動）

| 路徑 | 責任 |
|---|---|
| `tools/lib/skin.mjs` | 新增力臂 `momentArm` |
| `tools/lib/joints.mjs` | 手肘轉軸、前臂旋轉軸、手腕轉動中心 |
| `tools/parts.js` | 42 個新部件、骨頭分到上臂／尺骨／橈骨／手、旋後肌群的文獻力臂 |
| `tools/convert.mjs` | 跨手肘、手腕的權重與力臂；前臂骨中間群組不加轉折點 |
| `src/rig/segments.js`、`presets.js`、`rig.js` | 30 個骨段、上肢 6 個滑桿與「滑手機」、手肘／前臂旋轉／手腕 |
| `src/muscles/length.js` | 鎖住手肘、手腕的折線長＋力臂 × 轉角 |
| `src/ui/postureBar.js` | 滑桿組改名「上肢（可分左右）」 |
| `src/trains/lines.js` | 四條手臂線延伸到手 |
| `解剖列車網頁/content.js` | 42 條新說明、上臂肌肉備註、手臂線與「滑手機」說明 |

---

### Task 1：開分支；轉檔工具（力臂、手肘／前臂／手腕的轉軸）

**Files:**
- Modify: `tools/lib/skin.mjs`（新增 `momentArm`）、`tools/lib/joints.mjs`（新增 `bottomSlab`、`meanOf`，`estimateJoints` 多三個關節）
- Modify: `test/skin.test.js`、`test/joints.test.js`

**Interfaces:**
- Produces：`momentArm(positions, pivot, dir, axis, maxArm): number`（公分，帶正負；正值＝遠端繞 `axis` 正向轉時肌肉變短）
- Produces：`bottomSlab(points, depth): Float32Array`、`meanOf(points): [x, y, z]`
- Produces：`estimateJoints` 多回傳 `elbowAxis: { l, r }`（`[內上髁, 外上髁]`）、`forearmAxis: { l, r }`（`[橈骨頭, 尺骨頭]`）、`wrist: { l, r }`（頭狀骨頭部）；需要 `Radius.{s}`、`Ulna.{s}`、`Capitate bone.{s}` 三種骨頭（2A 的骨頭清單裡已經有）

- [ ] **Step 0：從 main 開分支**

執行：

```bash
git checkout -b feat/upper-limb && git status --short
```

預期：切到新分支、工作區乾淨。

- [ ] **Step 1：寫（或更新）測試**

`test/skin.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex, axisT, momentArm } from '../tools/lib/skin.mjs';

test('取樣點數不超過上限', () => {
  const pts = new Float32Array(3000);
  assert.equal(samplePoints(pts, 100).length, 300);
  assert.equal(samplePoints(pts, 5000), pts);
});

// 兩個骨段：A 在 x = 0，B 在 x = 10
const segPoints = [new Float32Array([0, 0, 0]), new Float32Array([10, 0, 0])];

test('頂點權重：靠近哪段就跟哪段，中間平均', () => {
  const skin = skinWeights(new Float32Array([1, 0, 0, 5, 0, 0, 9.5, 0, 0]), segPoints, 3);
  assert.deepEqual([skin[0], skin[2]], [0, 0]); // x = 1：完全跟 A
  assert.equal(skin[5], Math.round(0.5 * 255)); // x = 5：兩段各半
  assert.equal(skin[6], 1); // x = 9.5：最近 B
  assert.equal(skin[8], 0);
});

test('離某點最近的骨段', () => {
  assert.equal(nearestSegment([8, 1, 0], segPoints), 1);
});

test('中間骨段的轉折點依連線位置排序，太靠端點的不要', () => {
  const positions = new Float32Array([2, 0, 0, 3, 0, 0, 7, 0, 0, 0.1, 0, 0]);
  const skin = new Uint8Array([1, 1, 0, 1, 1, 0, 2, 2, 0, 3, 3, 0]);
  const vias = chainVias(positions, skin, [1, 2, 3], [0, 0, 0], [10, 0, 0]);
  assert.deepEqual(vias.map(v => v.s), [1, 2]);
  assert.deepEqual(vias[0].p, [2.5, 0, 0]);
});

test('痠痛點取連線位置附近最表淺的頂點', () => {
  // x = 5 一圈：離骨頭（y 軸上的點）最遠的是 y = 3 那個
  const positions = new Float32Array([5, 1, 0, 5, 3, 0, 5, 2, 0, 0, 0, 0]);
  const bone = new Float32Array([5, 0, 0]);
  assert.equal(superficialVertex(positions, [0, 0, 0], [10, 0, 0], 0.5, bone), 1);
  assert.ok(Math.abs(axisT(positions, 1, [0, 0, 0], [10, 0, 0]) - 0.5) < 1e-9);
});

test('力臂：關節附近的肌肉在遠端轉動方向那側為正，超過上限時截斷', () => {
  // 轉軸 +x、肢體往 −y：遠端繞 +x 正向轉時往 x × (−y) = −z 移動
  const front = new Float32Array([0, 1, 2, 0, -1, 2]); // 關節前方（+z）2 公分
  assert.ok(Math.abs(momentArm(front, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4) + 2) < 1e-9);
  assert.equal(momentArm(new Float32Array([0, 0, -9]), [0, 0, 0], [0, -1, 0], [1, 0, 0], 4), 4);
  // 關節上下 2 公分內沒有頂點時，用最靠近關節面的頂點
  const far = new Float32Array([0, -5, 1, 0, -20, 3]);
  assert.ok(Math.abs(momentArm(far, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4) + 1) < 1e-9);
});
```

`test/joints.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitSphere, extremeCentroid, topSlab, bottomSlab, meanOf, vertebraPivot, boxEllipsoid } from '../tools/lib/joints.mjs';

test('球面擬合找回球心與半徑', () => {
  const pts = [];
  for (let i = 0; i < 200; i++) {
    const z = 1 - (2 * i + 1) / 200, r = Math.sqrt(1 - z * z), th = i * 2.399963;
    pts.push(1 + 5 * r * Math.cos(th), 2 + 5 * z, 3 + 5 * r * Math.sin(th));
  }
  const s = fitSphere(Float32Array.from(pts));
  assert.ok(Math.hypot(s.center[0] - 1, s.center[1] - 2, s.center[2] - 3) < 1e-3, JSON.stringify(s));
  assert.ok(Math.abs(s.radius - 5) < 1e-3);
});

test('沿某方向最遠的一批頂點', () => {
  const pts = new Float32Array([0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0]);
  assert.deepEqual(extremeCentroid(pts, [1, 0, 0], 0.5), [2.5, 0, 0]);
  assert.deepEqual(extremeCentroid(pts, [-1, 0, 0], 0.25), [0, 0, 0]);
});

test('最上方一層', () => {
  assert.deepEqual(Array.from(topSlab(new Float32Array([0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0]), 1.5)), [0, 2, 0, 0, 3, 0]);
});

test('最下方一層、平均位置', () => {
  assert.deepEqual(Array.from(bottomSlab(new Float32Array([0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0]), 1.5)), [0, 0, 0, 0, 1, 0]);
  assert.deepEqual(meanOf(new Float32Array([0, 0, 0, 2, 4, 6])), [1, 2, 3]);
});

test('椎骨轉軸取椎體（最前方 2 公分）', () => {
  const pts = new Float32Array([0, 10, 5, 2, 12, 4, 1, 8, 0]); // 前兩點是椎體，最後一點是棘突
  assert.deepEqual(vertebraPivot(pts, 'bottom'), [1, 10, 4.5]);
  assert.deepEqual(vertebraPivot(pts, 'top'), [1, 12, 4.5]);
});

test('外框橢球', () => {
  assert.deepEqual(boxEllipsoid(new Float32Array([-1, 0, 2, 3, 4, 6])), { center: [1, 2, 4], radii: [2, 2, 2] });
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/skin.test.js test/joints.test.js
```

預期：FAIL，`momentArm`、`bottomSlab`、`meanOf` 不存在（SyntaxError: does not provide an export named …）

- [ ] **Step 3：實作**

`tools/lib/skin.mjs`：

```js
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
```

`tools/lib/joints.mjs`：

```js
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

// 只留 y ≤ 最低點 + depth 的頂點（例如肱骨遠端）
export function bottomSlab(points, depth) {
  let minY = Infinity;
  for (let i = 1; i < points.length; i += 3) minY = Math.min(minY, points[i]);
  const out = [];
  for (let i = 0; i < points.length; i += 3) if (points[i + 1] <= minY + depth) out.push(points[i], points[i + 1], points[i + 2]);
  return new Float32Array(out);
}

export function meanOf(points) {
  const c = [0, 0, 0];
  const n = points.length / 3;
  for (let i = 0; i < points.length; i++) c[i % 3] += points[i] / n;
  return c;
}

const RIB_NAMES = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];

// geo：骨頭名稱 → 世界座標頂點（Float32Array）
export function estimateJoints(geo) {
  const need = name => {
    const p = geo.get(name);
    if (!p) throw new Error(`估算關節需要的骨頭 ${name} 不存在`);
    return p;
  };
  const joints = { sc: {}, ac: {}, gh: {}, elbow: {}, scapAnchor: {}, elbowAxis: {}, forearmAxis: {}, wrist: {} };
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
    // 手肘屈伸：通過肱骨遠端內、外上髁的連線；[內上髁, 外上髁]
    const distalHumerus = bottomSlab(humerus, 5);
    joints.elbowAxis[s] = [extremeCentroid(distalHumerus, medial, 0.03), extremeCentroid(distalHumerus, lateral, 0.03)];
    // 前臂旋轉：橈骨頭 → 尺骨頭；[橈骨頭, 尺骨頭]
    const radius = need(`Radius.${s}`), ulna = need(`Ulna.${s}`);
    const ulnarHead = meanOf(bottomSlab(ulna, 1.5));
    joints.forearmAxis[s] = [meanOf(topSlab(radius, 1.5)), ulnarHead];
    // 手腕屈伸：轉動中心在頭狀骨頭部（頭狀骨最上方 1 公分的平均位置）
    joints.wrist[s] = meanOf(topSlab(need(`Capitate bone.${s}`), 1));
  }
  // 脊椎各骨段的轉軸：該骨段最下方那節椎體的下緣；頭段在寰椎上緣
  joints.pivots = {
    L5: vertebraPivot(need('Vertebra L5'), 'bottom'),
    L4: vertebraPivot(need('Vertebra L4'), 'bottom'),
    L3: vertebraPivot(need('Vertebra L3'), 'bottom'),
    L2: vertebraPivot(need('Vertebra L2'), 'bottom'),
    L1: vertebraPivot(need('Vertebra L1'), 'bottom'),
    thoraxLow: vertebraPivot(need('Vertebra T12'), 'bottom'),
    thoraxMid: vertebraPivot(need('Vertebra T8'), 'bottom'),
    thoraxUp: vertebraPivot(need('Vertebra T4'), 'bottom'),
    neckLow: vertebraPivot(need('Vertebra C7'), 'bottom'),
    neckUp: vertebraPivot(need('Vertebra C4'), 'bottom'),
    head: vertebraPivot(need('Atlas (C1)'), 'top'),
  };
  // 髖關節：股骨頭（股骨最內上方一帶）做球面擬合
  joints.hip = {};
  for (const s of ['l', 'r']) {
    const femur = need(`Femur.${s}`);
    const dir = [s === 'r' ? 0.7071 : -0.7071, 0.7071, 0];
    const seed = extremeCentroid(femur, dir, 0.01);
    const head = [];
    for (let i = 0; i < femur.length; i += 3) {
      if (Math.hypot(femur[i] - seed[0], femur[i + 1] - seed[1], femur[i + 2] - seed[2]) < 3) head.push(femur[i], femur[i + 1], femur[i + 2]);
    }
    joints.hip[s] = fitSphere(Float32Array.from(head)).center;
  }
  const ribs = RIB_NAMES.flatMap(n => ['l', 'r'].map(s => need(`${n} rib.${s}`)));
  joints.thorax = boxEllipsoid(Float32Array.from(ribs.flatMap(r => Array.from(r))));
  return joints;
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/skin.test.js test/joints.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/skin.test.js test/joints.test.js tools/lib/skin.mjs tools/lib/joints.mjs
git commit -m "feat: moment-arm helper and elbow, forearm and wrist joint estimates" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2：骨段與骨架（手肘、前臂旋轉、手腕）、上肢滑桿與「滑手機」

**Files:**
- Modify: `src/rig/segments.js`（30 個骨段）、`src/rig/presets.js`、`src/rig/rig.js`、`src/ui/postureBar.js`（滑桿組改名）
- Modify: `test/rig.test.js`、`test/presets.test.js`

**Interfaces:**
- Consumes：Task 1 的 `meta.joints.elbowAxis`、`forearmAxis`、`wrist`（骨架測試用合成資料）
- Produces：`SEGMENT_KEYS` 多 `ulna.l/r`、`radius.l/r`、`hand.l/r`；`computePose` 回傳這 6 個骨段的矩陣（上臂 → 尺骨 → 橈骨 → 手）
- Produces：`SIDED_PARAMS` 多 `elbowFlexion`、`forearmPronation`、`wristFlexion`；`LIMITS.elbowFlexion = 140`、`elbowExtension = 10`、`pronation = 150`、`supination = 10`、`wristFlexion = 70`、`wristExtension = 60`
- Produces：`PRESETS.phone`（9 個預設姿勢）；滑桿組 `'shoulder'` 改名 `'upperLimb'`（`SLIDER_GROUPS` 顯示「上肢（可分左右）」）
- 注意：這個任務之後 `test/parts.test.js` 的「骨段名稱」與 `test/postures.test.js` 會暫時失敗（骨頭還沒分到新骨段、舊的轉檔資料沒有新關節），Task 4 轉檔後恢復。

- [ ] **Step 1：寫（或更新）測試**

`test/rig.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computePose, ellipsoidLevel } from '../src/rig/rig.js';
import { bilateral } from '../src/rig/presets.js';

// 合成的關節資料（數值接近真實模型；右側在 −x）
const J = {
  sc: { r: [-2, 140, 3], l: [2, 140, 3] },
  ac: { r: [-15, 142, -3], l: [15, 142, -3] },
  gh: { r: [-17, 138, -3], l: [17, 138, -3] },
  elbow: { r: [-21, 109, -3], l: [21, 109, -3] },
  scapAnchor: { r: [-6.5, 135, -10], l: [6.5, 135, -10] },
  hip: { r: [-8.4, 86, -0.5], l: [8.4, 86, -0.5] },
  // 手肘轉軸 [內上髁, 外上髁]、前臂旋轉軸 [橈骨頭, 尺骨頭]、手腕轉動中心（頭狀骨頭部）
  elbowAxis: { r: [[-18.5, 110.7, -3.6], [-24.8, 111.1, -4.2]], l: [[18.5, 110.7, -3.6], [24.8, 111.1, -4.2]] },
  forearmAxis: { r: [[-23.9, 108.7, -3.2], [-24.8, 86.3, 1.4]], l: [[23.9, 108.7, -3.2], [24.8, 86.3, 1.4]] },
  wrist: { r: [-26.4, 85.1, 2], l: [26.4, 85.1, 2] },
  pivots: {
    L5: [0, 95.8, 0.2], L4: [0, 99.7, 0.9], L3: [0, 103.3, 1.2], L2: [0, 106.8, 0.9], L1: [0, 110.2, 0.2],
    thoraxLow: [0, 113.7, -0.5], thoraxMid: [0, 125.5, -3.4], thoraxUp: [0, 136, -3.6],
    neckLow: [0, 143.9, -2.1], neckUp: [0, 148.6, -1.2], head: [0, 155.3, -0.8],
  },
  thorax: { center: [0, 129, 0], radii: [14, 15.5, 10] },
};
const at = (mats, seg, p) => new THREE.Vector3(...p).applyMatrix4(mats.get(seg));
const isIdentity = m => m.elements.every((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) < 1e-6);
// 只看旋轉部分是否為單位矩陣（允許平移）
const noRotation = m => [0, 1, 2, 4, 5, 6, 8, 9, 10].every(i => Math.abs(m.elements[i] - (i % 5 === 0 ? 1 : 0)) < 1e-6);

test('中立姿勢每個骨段都不動', () => {
  for (const [k, m] of computePose(J, {})) assert.ok(isIdentity(m), k);
});

test('肩胛前伸：肩鎖關節往前、左右對稱', () => {
  const mats = computePose(J, bilateral({ scapProtraction: 1 }));
  const r = at(mats, 'clavicle.r', J.ac.r), l = at(mats, 'clavicle.l', J.ac.l);
  assert.ok(r.z > J.ac.r[2] + 3, `右 z=${r.z}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
});

test('肩胛內緣錨點維持貼著胸廓', () => {
  const mats = computePose(J, bilateral({ scapProtraction: 1, scapElevation: 0.5 }));
  for (const s of ['l', 'r']) {
    const level0 = ellipsoidLevel(J.scapAnchor[s], J.thorax);
    assert.ok(Math.abs(ellipsoidLevel(at(mats, `scapula.${s}`, J.scapAnchor[s]), J.thorax) - level0) < 0.01, s);
  }
});

test('肩關節內旋：上臂前面轉向內側', () => {
  const mats = computePose(J, bilateral({ shoulderRotation: 1 }));
  const front = s => [J.gh[s][0], J.gh[s][1] - 10, J.gh[s][2] + 3];
  assert.ok(at(mats, 'arm.r', front('r')).x > front('r')[0] + 1);
  assert.ok(at(mats, 'arm.l', front('l')).x < front('l')[0] - 1);
});

test('只調右側：右肩上提，左肩不動', () => {
  const mats = computePose(J, { 'scapElevation.r': 1 });
  assert.ok(at(mats, 'clavicle.r', J.ac.r).y > J.ac.r[1] + 2);
  assert.ok(isIdentity(mats.get('clavicle.l')));
  assert.ok(isIdentity(mats.get('scapula.l')));
});

test('頭頸前移：頭往前，骨盆與腰椎不動', () => {
  const mats = computePose(J, { headForward: 1 });
  assert.ok(at(mats, 'head', [0, 165, 0]).z > 3);
  assert.ok(isIdentity(mats.get('pelvis')) && isIdentity(mats.get('L3')));
});

test('骨盆前傾：雙腳不動、骨盆上緣往前，腰椎代償後胸廓不再旋轉', () => {
  const mats = computePose(J, { pelvicTilt: 1 });
  assert.ok(isIdentity(mats.get('femur.l')) && isIdentity(mats.get('shank.r')), '雙腳固定');
  assert.ok(at(mats, 'pelvis', [0, 100, 5]).z > 5 + 2, '骨盆上緣往前');
  assert.ok(noRotation(mats.get('thoraxLow')), '胸廓維持直立');
});

test('胸椎駝背：上胸往前彎，頭部轉回水平', () => {
  const mats = computePose(J, { thoracicFlexion: 1 });
  assert.ok(at(mats, 'thoraxUp', [0, 140, 0]).z > 3);
  assert.ok(noRotation(mats.get('head')), '頭部方向回到中立');
});

test('長短腳（左短）：左腿整條下移，右腿不動，胸廓維持直立', () => {
  const mats = computePose(J, { pelvicObliquity: 1 });
  assert.ok(isIdentity(mats.get('femur.r')));
  const drop = at(mats, 'femur.l', J.hip.l).y - J.hip.l[1];
  assert.ok(drop < -1, `左髖下移 ${drop}`);
  assert.ok(Math.abs(at(mats, 'pelvis', J.hip.l).y - at(mats, 'femur.l', J.hip.l).y) < 1e-6, '左髖仍在股骨頭上');
  assert.ok(noRotation(mats.get('thoraxLow')));
});

test('手肘彎曲：前臂往前、往上，上臂不動，左右對稱；橈骨與手跟著尺骨', () => {
  const mats = computePose(J, bilateral({ elbowFlexion: 0.6 })); // 84°
  const r = at(mats, 'ulna.r', J.wrist.r), l = at(mats, 'ulna.l', J.wrist.l);
  assert.ok(r.z > J.wrist.r[2] + 10 && r.y > J.wrist.r[1] + 10, `右手腕 ${r.toArray()}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('arm.r')));
  assert.ok(at(mats, 'hand.r', J.wrist.r).distanceTo(r) < 1e-6);
});

test('前臂旋前：拇指側（橈骨莖突一帶）轉到前方，尺骨不動', () => {
  const mats = computePose(J, bilateral({ forearmPronation: 0.6 })); // 90°
  const thumbSide = s => [J.forearmAxis[s][1][0] + (s === 'r' ? -3 : 3), 86.3, 1.4];
  const r = at(mats, 'radius.r', thumbSide('r')), l = at(mats, 'radius.l', thumbSide('l'));
  assert.ok(r.z > 1.4 + 2, `右 z=${r.z}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('ulna.r')));
});

test('手腕屈曲：手指往掌側（前方）彎，前臂不動', () => {
  const mats = computePose(J, bilateral({ wristFlexion: 1 }));
  for (const s of ['l', 'r']) {
    const tip = [J.wrist[s][0], J.wrist[s][1] - 15, J.wrist[s][2]];
    assert.ok(at(mats, `hand.${s}`, tip).z > J.wrist[s][2] + 10, s);
    assert.ok(isIdentity(mats.get(`radius.${s}`)) && isIdentity(mats.get(`ulna.${s}`)), s);
  }
});

test('只彎右手肘：左手不動', () => {
  const mats = computePose(J, { 'elbowFlexion.r': 1 });
  assert.ok(!isIdentity(mats.get('ulna.r')));
  for (const k of ['ulna.l', 'radius.l', 'hand.l']) assert.ok(isIdentity(mats.get(k)), k);
});
```

`test/presets.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NEUTRAL, PRESETS, SLIDERS, lerpParams, easeInOut, isNeutral, snapSlider, bilateral, sliderValue, setSlider } from '../src/rig/presets.js';

test('預設姿勢與滑桿都對應同一組參數', () => {
  const keys = Object.keys(NEUTRAL).sort();
  for (const p of Object.values(PRESETS)) assert.deepEqual(Object.keys(p.params).sort(), keys);
  const fromSliders = SLIDERS.flatMap(s => (s.sided ? [`${s.key}.l`, `${s.key}.r`] : [s.key])).sort();
  assert.deepEqual(fromSliders, keys);
});

test('9 個預設姿勢', () => {
  assert.deepEqual(Object.keys(PRESETS), ['neutral', 'roundedShoulders', 'forwardHead', 'kyphosis', 'anteriorTilt', 'posteriorTilt', 'unevenShoulders', 'legLength', 'phone']);
  assert.equal(PRESETS.phone.params['elbowFlexion.l'], 0.7);
  assert.equal(PRESETS.phone.params['forearmPronation.r'], 0.8);
  assert.equal(PRESETS.unevenShoulders.params['scapElevation.r'], 0.7);
  assert.equal(PRESETS.unevenShoulders.params['scapElevation.l'], -0.3);
});

test('bilateral：分左右的參數兩側同值，其餘為 0', () => {
  const p = bilateral({ scapProtraction: 0.8, headForward: 0.2 });
  assert.equal(p['scapProtraction.l'], 0.8);
  assert.equal(p['scapProtraction.r'], 0.8);
  assert.equal(p['scapElevation.r'], 0);
  assert.equal(p.headForward, 0.2);
});

test('滑桿：只調一側、兩側一起', () => {
  let p = setSlider(NEUTRAL, 'scapElevation', 0.6, 'r');
  assert.equal(p['scapElevation.r'], 0.6);
  assert.equal(p['scapElevation.l'], 0);
  assert.equal(sliderValue(p, 'scapElevation', 'r'), 0.6);
  assert.equal(sliderValue(p, 'scapElevation', 'l'), 0);
  assert.equal(sliderValue(p, 'scapElevation', 'both'), 0.3); // 兩側一起時顯示平均
  p = setSlider(p, 'scapElevation', -0.2, 'both');
  assert.equal(p['scapElevation.l'], -0.2);
  assert.equal(p['scapElevation.r'], -0.2);
  p = setSlider(p, 'headForward', 0.5, 'l'); // 中線參數不分左右
  assert.equal(p.headForward, 0.5);
  assert.equal(sliderValue(p, 'headForward', 'r'), 0.5);
});

test('參數內插', () => {
  const mid = lerpParams(NEUTRAL, PRESETS.roundedShoulders.params, 0.5);
  assert.equal(mid['scapProtraction.l'], 0.4);
  assert.equal(mid['shoulderRotation.r'], 0.3);
});

test('緩動曲線端點與中點', () => {
  assert.equal(easeInOut(0), 0);
  assert.equal(easeInOut(0.5), 0.5);
  assert.equal(easeInOut(1), 1);
});

test('是否為中立姿勢', () => {
  assert.equal(isNeutral(NEUTRAL), true);
  assert.equal(isNeutral(PRESETS.roundedShoulders.params), false);
});

test('滑桿接近 0 時吸附回 0（不小心碰到不會整個變色）', () => {
  assert.equal(snapSlider(0.01), 0);
  assert.equal(snapSlider(-0.04), 0);
  assert.equal(snapSlider(0.06), 0.06);
  assert.equal(snapSlider(-0.5), -0.5);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/rig.test.js test/presets.test.js
```

預期：FAIL，9 個預設姿勢的測試失敗（沒有 `phone`）；手肘、前臂、手腕的測試讀不到 `ulna.r` 等骨段

- [ ] **Step 3：實作**

`src/rig/segments.js`：

```js
// 骨段名稱：軀幹與頭頸（中線）只有一個；肩帶、上肢（上臂、尺骨、橈骨、手）、下肢分左右（例如 'scapula.r'）
export const AXIAL = ['pelvis', 'L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'];
const LIMB = ['clavicle', 'scapula', 'arm', 'ulna', 'radius', 'hand', 'femur', 'shank', 'foot'];
export const SIDED = new Set(LIMB);

export const SEGMENT_KEYS = [...AXIAL, ...LIMB.flatMap(s => [`${s}.l`, `${s}.r`])];

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}
```

`src/rig/presets.js`：

```js
// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具
//
// 分左右的參數存成 'scapProtraction.l'、'scapProtraction.r'；頭頸、胸椎、骨盆在身體中線，不分左右。

export const SIDED_PARAMS = ['scapProtraction', 'scapElevation', 'shoulderRotation', 'elbowFlexion', 'forearmPronation', 'wristFlexion'];
const MIDLINE_PARAMS = ['headForward', 'thoracicFlexion', 'pelvicTilt', 'pelvicObliquity'];

export const NEUTRAL = Object.freeze({
  ...Object.fromEntries(SIDED_PARAMS.flatMap(k => [[`${k}.l`, 0], [`${k}.r`, 0]])),
  ...Object.fromEntries(MIDLINE_PARAMS.map(k => [k, 0])),
});

// { scapProtraction: 0.8 } → 兩側同值的完整參數（沒寫到的為 0）；也可直接寫 'scapElevation.r'
export function bilateral(values) {
  const out = { ...NEUTRAL };
  for (const [k, v] of Object.entries(values)) {
    if (SIDED_PARAMS.includes(k)) out[`${k}.l`] = out[`${k}.r`] = v;
    else out[k] = v;
  }
  return out;
}

export const PRESETS = {
  neutral: { label: '中立', params: NEUTRAL },
  roundedShoulders: { label: '圓肩', params: bilateral({ scapProtraction: 0.8, shoulderRotation: 0.6 }) },
  forwardHead: { label: '頭前傾', params: bilateral({ headForward: 1 }) },
  kyphosis: { label: '胸椎駝背', params: bilateral({ thoracicFlexion: 1 }) },
  anteriorTilt: { label: '骨盆前傾', params: bilateral({ pelvicTilt: 1 }) },
  posteriorTilt: { label: '骨盆後傾', params: bilateral({ pelvicTilt: -1 }) },
  unevenShoulders: { label: '高低肩', params: bilateral({ 'scapElevation.r': 0.7, 'scapElevation.l': -0.3 }) },
  legLength: { label: '長短腳', params: bilateral({ pelvicObliquity: 1 }) },
  phone: { label: '滑手機', params: bilateral({ headForward: 0.8, scapProtraction: 0.6, shoulderRotation: 0.4, elbowFlexion: 0.7, forearmPronation: 0.8, wristFlexion: 0.3 }) },
};

// group：滑桿分組（前後方向／左右方向／上肢）
export const SLIDERS = [
  { key: 'headForward', group: 'sagittal', sided: false, label: '頭頸前移', minLabel: '後收', maxLabel: '前移' },
  { key: 'thoracicFlexion', group: 'sagittal', sided: false, label: '胸椎伸展／屈曲', minLabel: '伸展', maxLabel: '駝背' },
  { key: 'pelvicTilt', group: 'sagittal', sided: false, label: '骨盆後傾／前傾', minLabel: '後傾', maxLabel: '前傾' },
  { key: 'pelvicObliquity', group: 'frontal', sided: false, label: '骨盆側傾（長短腳）', minLabel: '右側低', maxLabel: '左側低' },
  { key: 'scapProtraction', group: 'upperLimb', sided: true, label: '肩胛前伸／後縮', minLabel: '後縮', maxLabel: '前伸' },
  { key: 'scapElevation', group: 'upperLimb', sided: true, label: '肩胛上提／下壓', minLabel: '下壓', maxLabel: '上提' },
  { key: 'shoulderRotation', group: 'upperLimb', sided: true, label: '肩關節內旋／外旋', minLabel: '外旋', maxLabel: '內旋' },
  { key: 'elbowFlexion', group: 'upperLimb', sided: true, label: '手肘伸直／彎曲', minLabel: '過伸', maxLabel: '彎曲' },
  { key: 'forearmPronation', group: 'upperLimb', sided: true, label: '前臂旋後／旋前', minLabel: '旋後', maxLabel: '旋前' },
  { key: 'wristFlexion', group: 'upperLimb', sided: true, label: '手腕伸展／屈曲', minLabel: '伸展', maxLabel: '屈曲' },
];

export const SLIDER_GROUPS = [
  ['sagittal', '前後方向'],
  ['frontal', '左右方向'],
  ['upperLimb', '上肢（可分左右）'],
];

// 分左右滑桿的調整方式
export const SIDE_MODES = [
  ['both', '兩側一起'],
  ['l', '只調左側'],
  ['r', '只調右側'],
];

// 滑桿目前要顯示的值：兩側一起時顯示左右平均
export function sliderValue(params, key, mode) {
  if (!SIDED_PARAMS.includes(key)) return params[key];
  if (mode === 'both') return (params[`${key}.l`] + params[`${key}.r`]) / 2;
  return params[`${key}.${mode}`];
}

// 拖動滑桿後的新參數：兩側一起時左右設成同一個值
export function setSlider(params, key, value, mode) {
  const out = { ...params };
  if (!SIDED_PARAMS.includes(key)) out[key] = value;
  else if (mode === 'both') out[`${key}.l`] = out[`${key}.r`] = value;
  else out[`${key}.${mode}`] = value;
  return out;
}

export function lerpParams(a, b, t) {
  return Object.fromEntries(Object.keys(NEUTRAL).map(k => [k, a[k] + (b[k] - a[k]) * t]));
}

export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

// 滑桿值在 ±0.05 以內視為 0
export function snapSlider(value) {
  return Math.abs(value) < 0.05 ? 0 : value;
}

export function isNeutral(params) {
  return Object.keys(NEUTRAL).every(k => Math.abs(params[k] ?? 0) < 1e-3);
}
```

`src/rig/rig.js`：

```js
// 姿勢參數 → 每個骨段的變換矩陣（相對於中立姿勢，世界座標）
import * as THREE from 'three';
import { SEGMENT_KEYS } from './segments.js';
import { NEUTRAL } from './presets.js';

// 參數為 ±1 時的角度（度）
export const LIMITS = {
  clavProtraction: 20, // 鎖骨繞胸鎖關節往前轉
  clavElevation: 15, // 鎖骨上提
  scapTilt: 12, // 肩胛前傾（隨前伸）
  humeralRotation: 40, // 肱骨內旋
  neckFlexion: 25, // 頸段前屈
  headExtension: 22, // 頭段後仰（讓視線大致水平）
  thoracicFlexion: 30, // 胸椎屈曲（三段合計）
  pelvicTilt: 18, // 骨盆前傾（示範用，比一般幅度大，讓顏色看得出來）
  pelvicObliquity: 8, // 骨盆側傾（示範用，約等於 2 公分的長短腳）
  // 以下關節正、負方向的範圍不同（解剖姿勢是手肘伸直、前臂完全旋後）
  elbowFlexion: 140, // 手肘彎曲
  elbowExtension: 10, // 手肘過伸
  pronation: 150, // 前臂旋前
  supination: 10, // 前臂再旋後
  wristFlexion: 70, // 手腕屈曲
  wristExtension: 60, // 手腕伸展
};

// 參數 → 角度（弧度）；正、負方向用不同的上限
const jointAngle = (p, positive, negative) => DEG * (p >= 0 ? positive * p : negative * p);

// 胸椎屈曲分給下、中、上三段的比例；頭頸各補回一半，讓視線維持水平
const THORACIC_SHARE = { thoraxLow: 0.3, thoraxMid: 0.4, thoraxUp: 0.3 };
const LUMBAR = ['L5', 'L4', 'L3', 'L2', 'L1'];

const DEG = Math.PI / 180;
const X = new THREE.Vector3(1, 0, 0);
const Y = new THREE.Vector3(0, 1, 0);
const Z = new THREE.Vector3(0, 0, 1);
const vec = p => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2]));

// 繞某點、某軸旋轉
function rotateAbout(point, axis, angle) {
  const p = vec(point);
  return new THREE.Matrix4()
    .makeTranslation(p.x, p.y, p.z)
    .multiply(new THREE.Matrix4().makeRotationAxis(axis.clone().normalize(), angle))
    .multiply(new THREE.Matrix4().makeTranslation(-p.x, -p.y, -p.z));
}

function rotateAboutQuat(point, q) {
  const p = vec(point);
  return new THREE.Matrix4()
    .makeTranslation(p.x, p.y, p.z)
    .multiply(new THREE.Matrix4().makeRotationFromQuaternion(q))
    .multiply(new THREE.Matrix4().makeTranslation(-p.x, -p.y, -p.z));
}

// 點在胸廓橢球上的「等高值」：1 代表剛好在橢球面上
export function ellipsoidLevel(p, thorax) {
  const v = vec(p);
  const [cx, cy, cz] = thorax.center;
  const [rx, ry, rz] = thorax.radii;
  return Math.hypot((v.x - cx) / rx, (v.y - cy) / ry, (v.z - cz) / rz);
}

// 沿著從橢球中心出發的射線，把點移到指定等高值
function toLevel(p, thorax, level) {
  const c = vec(thorax.center);
  return p.clone().sub(c).multiplyScalar(level / ellipsoidLevel(p, thorax)).add(c);
}

// 肩胛骨隨鎖骨移動後，繞肩鎖關節轉回去貼著胸廓（內緣錨點維持原本的等高值）
function glideScapula(joints, side, clavicle) {
  const ac = vec(joints.ac[side]).applyMatrix4(clavicle);
  const anchor0 = vec(joints.scapAnchor[side]);
  const anchor = anchor0.clone().applyMatrix4(clavicle);
  const reach = anchor0.distanceTo(vec(joints.ac[side]));
  const level = ellipsoidLevel(anchor0, joints.thorax);
  let target = anchor.clone();
  for (let i = 0; i < 8; i++) {
    target = toLevel(target, joints.thorax, level);
    target = ac.clone().add(target.sub(ac).setLength(reach));
  }
  const q = new THREE.Quaternion().setFromUnitVectors(anchor.clone().sub(ac).normalize(), target.clone().sub(ac).normalize());
  return { glide: rotateAboutQuat(ac, q), ac, anchor: target };
}

// params：見 presets.js 的 NEUTRAL（分左右的參數如 'scapElevation.r'），各為 −1…+1
// 雙腳固定在地上：骨盆繞髖關節轉，腰椎反向代償讓胸廓維持直立；長短腳時短腳那側整條腿隨髖關節下移
export function computePose(joints, params = {}) {
  const p = { ...NEUTRAL, ...params };
  const mats = new Map(SEGMENT_KEYS.map(k => [k, new THREE.Matrix4()]));
  const piv = joints.pivots;

  // 骨盆：前後傾繞兩側髖關節連線；側傾繞長腳那側的髖關節（正值＝左側下降、左腳短）
  const tilt = LIMITS.pelvicTilt * DEG * p.pelvicTilt;
  const obliquity = LIMITS.pelvicObliquity * DEG * p.pelvicObliquity;
  const hipMid = vec(joints.hip.l).add(vec(joints.hip.r)).multiplyScalar(0.5);
  const pivotHip = p.pelvicObliquity >= 0 ? joints.hip.r : joints.hip.l;
  const pelvis = rotateAbout(hipMid, X, tilt).multiply(rotateAbout(pivotHip, Z, -obliquity));
  mats.set('pelvis', pelvis);
  for (const s of ['l', 'r']) {
    const shift = vec(joints.hip[s]).applyMatrix4(pelvis).sub(vec(joints.hip[s]));
    const leg = new THREE.Matrix4().makeTranslation(shift.x, shift.y, shift.z);
    for (const seg of ['femur', 'shank', 'foot']) mats.set(`${seg}.${s}`, leg);
  }

  // 腰椎：五節平均反向轉回去
  let parent = pelvis;
  for (const seg of LUMBAR) {
    const m = parent.clone().multiply(rotateAbout(piv[seg], X, -tilt / 5)).multiply(rotateAbout(piv[seg], Z, obliquity / 5));
    mats.set(seg, m);
    parent = m;
  }

  // 胸椎三段屈曲
  const kyphosis = LIMITS.thoracicFlexion * DEG * p.thoracicFlexion;
  for (const seg of ['thoraxLow', 'thoraxMid', 'thoraxUp']) {
    const m = parent.clone().multiply(rotateAbout(piv[seg], X, kyphosis * THORACIC_SHARE[seg]));
    mats.set(seg, m);
    parent = m;
  }
  const thoraxUp = parent;

  // 頸與頭：頭前移＝下頸段前屈＋頭段後仰；駝背時頸、頭各補回一半屈曲角
  const neckLow = thoraxUp.clone().multiply(rotateAbout(piv.neckLow, X, LIMITS.neckFlexion * DEG * p.headForward - kyphosis / 2));
  const head = neckLow.clone().multiply(rotateAbout(piv.head, X, -LIMITS.headExtension * DEG * p.headForward - kyphosis / 2));
  mats.set('neckLow', neckLow);
  mats.set('neckUp', neckLow.clone());
  mats.set('head', head);

  // 肩帶：在胸廓上段的座標系裡計算（與第一階段相同），再套上胸廓上段的變換
  for (const s of ['l', 'r']) {
    const sgn = s === 'r' ? 1 : -1; // 右側在 −x，左右的轉向相反
    const protraction = p[`scapProtraction.${s}`];
    const clavicle = rotateAbout(joints.sc[s], Y, sgn * LIMITS.clavProtraction * DEG * protraction)
      .multiply(rotateAbout(joints.sc[s], Z, -sgn * LIMITS.clavElevation * DEG * p[`scapElevation.${s}`]));
    const { glide, ac, anchor } = glideScapula(joints, s, clavicle);
    const tiltScap = rotateAbout(ac, anchor.clone().sub(ac), sgn * LIMITS.scapTilt * DEG * protraction);
    const scapula = tiltScap.multiply(glide).multiply(clavicle);
    const axis = vec(joints.gh[s]).sub(vec(joints.elbow[s]));
    const arm = scapula.clone().multiply(rotateAbout(joints.gh[s], axis, sgn * LIMITS.humeralRotation * DEG * p[`shoulderRotation.${s}`]));
    // 手肘：尺骨繞內、外上髁連線轉；前臂旋轉：橈骨（和手）繞橈骨頭 → 尺骨頭的軸轉；手腕：手繞腕部、與手肘平行的軸轉
    const [medialEpicondyle, lateralEpicondyle] = joints.elbowAxis[s];
    const elbowAxis = vec(lateralEpicondyle).sub(vec(medialEpicondyle));
    const elbowPivot = vec(medialEpicondyle).add(vec(lateralEpicondyle)).multiplyScalar(0.5);
    const ulna = arm.clone().multiply(rotateAbout(elbowPivot, elbowAxis, sgn * jointAngle(p[`elbowFlexion.${s}`], LIMITS.elbowFlexion, LIMITS.elbowExtension)));
    const [radialHead, ulnarHead] = joints.forearmAxis[s];
    // 旋前時拇指由外側轉向前方：右側繞「橈骨頭 → 尺骨頭」軸轉負角
    const radius = ulna.clone().multiply(rotateAbout(radialHead, vec(ulnarHead).sub(vec(radialHead)), -sgn * jointAngle(p[`forearmPronation.${s}`], LIMITS.pronation, LIMITS.supination)));
    const hand = radius.clone().multiply(rotateAbout(joints.wrist[s], elbowAxis, sgn * jointAngle(p[`wristFlexion.${s}`], LIMITS.wristFlexion, LIMITS.wristExtension)));
    mats.set(`clavicle.${s}`, thoraxUp.clone().multiply(clavicle));
    mats.set(`scapula.${s}`, thoraxUp.clone().multiply(scapula));
    mats.set(`arm.${s}`, thoraxUp.clone().multiply(arm));
    mats.set(`ulna.${s}`, thoraxUp.clone().multiply(ulna));
    mats.set(`radius.${s}`, thoraxUp.clone().multiply(radius));
    mats.set(`hand.${s}`, thoraxUp.clone().multiply(hand));
  }
  return mats;
}
```

`src/ui/postureBar.js`：

```js
// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、分組的關節滑桿（上肢可兩側一起或只調一側）
import { PRESETS, SLIDERS, SLIDER_GROUPS, SIDE_MODES, NEUTRAL, lerpParams, easeInOut, snapSlider, isNeutral, sliderValue, setSlider } from '../rig/presets.js';

const DURATION = 1500; // 毫秒

export function initPostureBar(el, ctrl, content) {
  let active = 'neutral'; // 目前的預設姿勢；拖過滑桿後為 null（自訂）
  let mode = 'both'; // 分左右滑桿的調整方式：'both'、'l'、'r'
  let frame = 0;

  const slider = s =>
    `<label><span>${s.label}</span><small>${s.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${s.key}"><small>${s.maxLabel}</small></label>`;
  el.innerHTML = `
    <div class="presets">
      <span class="label">姿勢</span>
      ${Object.entries(PRESETS).map(([k, p]) => `<button type="button" data-preset="${k}">${p.label}</button>`).join('')}
      <button type="button" data-play>▶ 播放</button>
    </div>
    <div class="slider-groups">
      ${SLIDER_GROUPS.map(([g, title]) => `
        <fieldset class="slider-group">
          <legend>${title}</legend>
          ${g === 'upperLimb' ? `<div class="side-modes">${SIDE_MODES.map(([k, label]) => `<button type="button" data-mode="${k}">${label}</button>`).join('')}</div>` : ''}
          ${SLIDERS.filter(s => s.group === g).map(slider).join('')}
        </fieldset>`).join('')}
    </div>
    <p class="posture-note"></p>`;

  function animate(from, to) {
    cancelAnimationFrame(frame);
    const start = performance.now();
    const step = now => {
      const t = Math.min(1, (now - start) / DURATION);
      ctrl.setParams(lerpParams(from, to, easeInOut(t)));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  }

  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.preset) {
      active = btn.dataset.preset;
      animate(ctrl.params, PRESETS[active].params);
    } else if ('play' in btn.dataset) {
      // 從中立重播到目前的預設姿勢（目前是中立或自訂時改播圓肩）
      if (!active || active === 'neutral') active = 'roundedShoulders';
      animate(NEUTRAL, PRESETS[active].params);
    } else if (btn.dataset.mode) {
      mode = btn.dataset.mode;
    }
    sync();
  });

  el.addEventListener('input', e => {
    const key = e.target.dataset.param;
    if (!key) return;
    cancelAnimationFrame(frame);
    const params = setSlider(ctrl.params, key, snapSlider(Number(e.target.value)), mode);
    active = isNeutral(params) ? 'neutral' : null; // 全部滑回 0 就是中立
    ctrl.setParams(params);
  });

  function sync() {
    const params = ctrl.params;
    for (const s of SLIDERS) el.querySelector(`[data-param="${s.key}"]`).value = sliderValue(params, s.key, mode);
    for (const b of el.querySelectorAll('[data-preset]')) b.classList.toggle('active', b.dataset.preset === active);
    for (const b of el.querySelectorAll('[data-mode]')) b.classList.toggle('active', b.dataset.mode === mode);
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節；上肢可切換「兩側一起」或只調左側、右側。';
  }
  ctrl.onChange(sync);
  sync();
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/rig.test.js test/presets.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/rig.test.js test/presets.test.js src/rig/segments.js src/rig/presets.js src/rig/rig.js src/ui/postureBar.js
git commit -m "feat: elbow, forearm rotation and wrist in the rig, upper-limb sliders and phone preset" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3：跨手肘、手腕的長度（力臂 × 轉角）

**Files:**
- Modify: `src/muscles/length.js`、`test/muscles.test.js`

**Interfaces:**
- Produces：`jointAngleOf(prox, dist, axis): number`（弧度；遠端骨段相對近端繞 `axis` 的轉角）
- Produces：`lengthDelta(part, mats)` 支援 `part.wraps = [{ prox, dist, axis, m }]`：折線在手肘、手腕鎖住的姿勢量（有 `ulna → radius` 的力臂時連前臂旋轉也鎖住），再加上每個 −m × 轉角；需要 `part.side`

- [ ] **Step 1：寫（或更新）測試**

`test/muscles.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { polylineLength, lengthDelta, jointAngleOf } from '../src/muscles/length.js';
import { prepareDeform, deformInto, deformChain } from '../src/muscles/deform.js';
import { lengthState, lengthColor, deltaText, PALETTE } from '../src/muscles/colors.js';

const I = new THREE.Matrix4();
const move = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const mats = Mb => new Map([['torso', I], ['arm.r', Mb]]);
const part = { segA: 'torso', segB: 'arm.r', a: [0, 0, 0], b: [10, 0, 0], vias: [] };

test('折線長度', () => {
  assert.equal(polylineLength([[0, 0, 0], [3, 4, 0], [3, 4, 12]]), 17);
});

test('長度變化率', () => {
  assert.equal(lengthDelta(part, mats(I)), 0);
  assert.ok(Math.abs(lengthDelta(part, mats(move(2, 0, 0))) - 0.2) < 1e-9);
});

test('轉折點跟著它的骨段移動', () => {
  const p = { ...part, vias: [{ seg: 'arm.r', p: [5, 5, 0] }] };
  // 中立：(0,0,0)→(5,5,0)→(10,0,0)；遠端下移 5 後：(0,0,0)→(5,0,0)→(10,−5,0)
  const expected = (5 + Math.hypot(5, 5)) / (2 * Math.hypot(5, 5)) - 1;
  assert.ok(Math.abs(lengthDelta(p, mats(move(0, -5, 0))) - expected) < 1e-9);
});

// 沿 x 軸、半徑 1 的「肌肉」：x = 0…10，每個位置一圈 4 個點
const rest = Float32Array.from(Array.from({ length: 11 }, (_, i) => [[i, 1, 0], [i, -1, 0], [i, 0, 1], [i, 0, -1]]).flat(2));
const prep = prepareDeform(rest, [0, 0, 0], [10, 0, 0]);

test('兩端不動時頂點不變', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, I, I, out);
  assert.deepEqual(Array.from(out), Array.from(rest));
});

test('兩端同一個變換時整塊剛體移動', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, move(3, -2, 5), move(3, -2, 5), out);
  for (let i = 0; i < rest.length; i += 3) {
    assert.ok(Math.abs(out[i] - rest[i] - 3) < 1e-5 && Math.abs(out[i + 1] - rest[i + 1] + 2) < 1e-5 && Math.abs(out[i + 2] - rest[i + 2] - 5) < 1e-5);
  }
});

test('遠端拉長：近端不動、遠端跟著走、肌腹變細', () => {
  const out = new Float32Array(rest.length);
  deformInto(prep, I, move(5, 0, 0), out);
  assert.deepEqual(Array.from(out.slice(0, 3)), [0, 1, 0]); // x = 0 那圈不動
  assert.ok(Math.abs(out[40 * 3] - 15) < 1e-5); // x = 10 那圈移到 15
  const mid = 20 * 3; // x = 5 那圈的第一個點
  assert.ok(Math.abs(out[mid + 1]) < 0.9, `肌腹半徑 ${out[mid + 1]}`);
});

test('兩端幾乎重合時變化率視為 0', () => {
  assert.equal(lengthDelta({ ...part, b: [0.1, 0, 0] }, mats(move(5, 0, 0))), 0);
});

test('關節轉角：遠端相對近端繞軸轉了多少', () => {
  const dist = move(3, 0, 0).multiply(new THREE.Matrix4().makeRotationX(0.5));
  assert.ok(Math.abs(jointAngleOf(move(3, 0, 0), dist, [1, 0, 0]) - 0.5) < 1e-9);
  assert.ok(Math.abs(jointAngleOf(I, new THREE.Matrix4().makeRotationX(-0.3), [1, 0, 0]) + 0.3) < 1e-9);
});

test('跨手肘的肌肉：折線在手肘鎖住的姿勢量，再加上 −力臂 × 轉角', () => {
  // 上臂不動，尺骨（與橈骨、手）繞 x 軸彎 1 弧度；肌肉長 20 公分、力臂 2 公分 → 短 2 公分
  const bend = new THREE.Matrix4().makeRotationX(1);
  const m = new Map([['arm.r', I], ['ulna.r', bend], ['radius.r', bend], ['hand.r', bend]]);
  const p = { side: 'r', segA: 'arm.r', segB: 'ulna.r', a: [0, 10, 0], b: [0, -10, 0], vias: [], wraps: [{ prox: 'arm.r', dist: 'ulna.r', axis: [1, 0, 0], m: 2 }] };
  assert.ok(Math.abs(lengthDelta(p, m) + 0.1) < 1e-9);
});

test('前臂旋轉：一般照直線量；有旋轉力臂的肌肉，折線連前臂旋轉也鎖住', () => {
  const turn = new THREE.Matrix4().makeRotationY(1);
  const m = new Map([['arm.r', I], ['ulna.r', I], ['radius.r', turn], ['hand.r', turn]]);
  const base = { side: 'r', segA: 'arm.r', segB: 'radius.r', a: [-3, 10, 0], b: [2, -10, 0], vias: [] };
  const L0 = Math.hypot(5, 20);
  const straight = Math.hypot(2 * Math.cos(1) + 3, 20, 2 * Math.sin(1));
  const elbowOnly = { ...base, wraps: [{ prox: 'arm.r', dist: 'ulna.r', axis: [1, 0, 0], m: 2 }] };
  assert.ok(Math.abs(lengthDelta(elbowOnly, m) - (straight / L0 - 1)) < 1e-9);
  const wrapped = { ...base, wraps: [{ prox: 'ulna.r', dist: 'radius.r', axis: [0, 1, 0], m: -1 }] };
  assert.ok(Math.abs(lengthDelta(wrapped, m) - 1 / L0) < 1e-9);
});

test('多骨段變形：依頂點權重混合兩個骨段', () => {
  const rest = new Float32Array([0, 0, 0, 1, 0, 0]);
  const skin = new Uint8Array([0, 1, 0, 0, 1, 255]); // 第一點完全跟骨段 0，第二點完全跟骨段 1
  const out = new Float32Array(6);
  deformChain(rest, skin, ['torso', 'arm.r'], mats(move(0, 2, 0)), out);
  assert.deepEqual(Array.from(out), [0, 0, 0, 1, 2, 0]);
});

test('長度狀態門檻', () => {
  assert.equal(lengthState(0.024), 'same');
  assert.equal(lengthState(-0.03), 'short');
  assert.equal(lengthState(0.03), 'long');
});

test('狀態與畫面上四捨五入的 % 一致（+2.6% 顯示 +3%，就算鎖長）', () => {
  assert.equal(deltaText(0.026), '+3%');
  assert.equal(lengthState(0.026), 'long');
  assert.equal(deltaText(-0.025), '−3%');
  assert.equal(lengthState(-0.025), 'short');
  const c = lengthColor(0.026);
  assert.ok(c[2] > PALETTE.same[2]);
});

test('顏色隨變化加深，20% 以上飽和', () => {
  const r3 = c => c.map(v => Math.round(v * 1000) / 1000);
  assert.deepEqual(lengthColor(0), PALETTE.same);
  assert.deepEqual(r3(lengthColor(-0.2)), r3(PALETTE.short));
  assert.deepEqual(r3(lengthColor(0.5)), r3(PALETTE.long));
  const c = lengthColor(-0.05);
  assert.ok(c[0] > PALETTE.same[0] && c[0] < PALETTE.short[0]);
});

test('變化率文字', () => {
  assert.equal(deltaText(-0.137), '−14%');
  assert.equal(deltaText(0.081), '+8%');
  assert.equal(deltaText(0.004), '0%');
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/muscles.test.js
```

預期：FAIL，`jointAngleOf` 不存在

- [ ] **Step 3：實作**

`src/muscles/length.js`：

```js
// 肌肉長度：起點 →（轉折點，可多個）→ 止點的折線長，與中立姿勢比較
import * as THREE from 'three';

// 用 THREE.Matrix4 的 elements（行優先存成列優先陣列）變換一個點
export function transformPoint(e, p) {
  return [
    e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12],
    e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13],
    e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14],
  ];
}

export function restPath(part) {
  return [part.a, ...part.vias.map(v => v.p), part.b];
}

// mats：骨段名稱 → THREE.Matrix4
export function partPath(part, mats) {
  return [
    transformPoint(mats.get(part.segA).elements, part.a),
    ...part.vias.map(v => transformPoint(mats.get(v.seg).elements, v.p)),
    transformPoint(mats.get(part.segB).elements, part.b),
  ];
}

export function polylineLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]);
  return len;
}

// 關節轉角（弧度）：遠端骨段相對近端骨段繞 axis 轉了多少
export function jointAngleOf(prox, dist, axis) {
  const k = new THREE.Vector3(...axis).normalize();
  const rel = prox.clone().invert().multiply(dist);
  const e = new THREE.Vector3(1, 0, 0).cross(k);
  if (e.lengthSq() < 1e-6) e.set(0, 1, 0).cross(k);
  e.normalize();
  const turned = e.clone().transformDirection(rel);
  return Math.atan2(k.dot(e.clone().cross(turned)), e.dot(turned));
}

// 把手肘、手腕「鎖住」的骨段變換：尺骨跟著上臂；橈骨與手只保留前臂旋轉（lockPronation 時連前臂旋轉也鎖住）
function lockedLimbs(mats, side, lockPronation) {
  const get = k => mats.get(`${k}.${side}`);
  const forearm = lockPronation ? get('arm') : get('arm').clone().multiply(get('ulna').clone().invert()).multiply(get('radius'));
  const locked = new Map([[`ulna.${side}`, get('arm')], [`radius.${side}`, forearm], [`hand.${side}`, forearm]]);
  return { get: k => locked.get(k) ?? mats.get(k) };
}

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）；兩端幾乎重合（例如兩端都在骨盆內）時視為 0
// 跨手肘、手腕的肌肉（part.wraps）：折線在手肘、手腕鎖住的姿勢量，再加上各關節的「−力臂 × 轉角」
// （肌腱繞著關節走，轉折點放在關節旁邊的話，彎到 90° 以上連線會穿過骨頭、長度反而變長）
export function lengthDelta(part, mats) {
  const rest = polylineLength(restPath(part));
  if (rest < 0.5) return 0;
  if (!part.wraps) return polylineLength(partPath(part, mats)) / rest - 1;
  const lockPronation = part.wraps.some(w => w.prox.startsWith('ulna.'));
  let len = polylineLength(partPath(part, lockedLimbs(mats, part.side, lockPronation)));
  for (const w of part.wraps) len -= w.m * jointAngleOf(mats.get(w.prox), mats.get(w.dist), w.axis);
  return len / rest - 1;
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/muscles.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/muscles.test.js src/muscles/length.js
git commit -m "feat: moment-arm length model for muscles crossing the elbow and wrist" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4：上肢部件清單與轉檔

**Files:**
- Modify: `tools/parts.js`（42 個新部件、肱二頭肌／肱三頭肌長頭加肱骨中間群組、骨頭分到上臂／尺骨／橈骨／手）、`tools/convert.mjs`（跨手肘、手腕的權重與力臂）
- Modify: `test/parts.test.js`、`test/data.test.js`
- 產出（進 git）：`data/processed/meta.json`、`data/processed/meshes.bin`

**Interfaces:**
- Consumes：Task 1 的 `momentArm`、新關節；Task 2 的 `SEGMENT_KEYS`
- Produces：`PARTS[i].pronationArm`（null 或公分）；`meta.parts[i].wraps`（null 或 `[{ prox, dist, axis, m }]`）；`meta.joints` 多三個關節
- 注意：這個任務之後 `test/content.test.js` 會暫時失敗（新部件還沒有說明），Task 6 恢復。

- [ ] **Step 1：更新測試**

`test/parts.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PARTS, BONE_SEGMENTS } from '../tools/parts.js';
import { segKey, SEGMENT_KEYS, AXIAL } from '../src/rig/segments.js';

test('部件 id 不重複，層、分區、附著群組都合法', () => {
  const ids = PARTS.map(p => p.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(PARTS.length >= 140, `部件數 ${PARTS.length}`);
  for (const p of PARTS) {
    assert.ok(['superficial', 'middle', 'deep'].includes(p.layer), p.id);
    assert.ok(['headNeck', 'trunk', 'upperLimb', 'lowerLimb'].includes(p.region), p.id);
    assert.ok(p.attach.length >= 2, p.id);
    for (const a of p.attach) assert.ok(a.bones.length > 0, p.id);
    for (const t of p.tp) assert.ok(t > 0 && t < 1, `${p.id} 痠痛點位置 ${t}`);
  }
});

test('中線部件的骨頭不用 {s}', () => {
  for (const p of PARTS.filter(q => q.unsided)) {
    for (const a of p.attach) for (const b of a.bones) assert.ok(!b.includes('{s}'), `${p.id}：${b}`);
  }
});

test('肋骨與肋軟骨名稱符合 Z-Anatomy 格式', () => {
  assert.deepEqual(PARTS.find(p => p.id === 'pecMinor').attach[0].bones, ['Third rib.{s}', 'Fourth rib.{s}', 'Fifth rib.{s}']);
  assert.ok(PARTS.find(p => p.id === 'pecMajorStern').attach[0].bones.includes('Costal cartilage of second rib.{s}'));
});

test('斜方肌上下部依幾何位置對應（Z-Anatomy 名稱相反）', () => {
  assert.equal(PARTS.find(p => p.id === 'trapUpper').zName, 'Ascending part of trapezius muscle');
  assert.equal(PARTS.find(p => p.id === 'trapLower').zName, 'Descending part of trapezius muscle');
});

test('骨段名稱', () => {
  assert.equal(segKey('scapula', 'r'), 'scapula.r');
  assert.equal(segKey('femur', 'l'), 'femur.l');
  assert.equal(segKey('L3', 'r'), 'L3');
  assert.equal(SEGMENT_KEYS.length, AXIAL.length + 18);
  const defined = new Set(BONE_SEGMENTS.map(s => (s.sided ? `${s.segment}.r` : s.segment)));
  for (const k of SEGMENT_KEYS.filter(k => !k.endsWith('.l'))) assert.ok(defined.has(k), `骨段 ${k} 沒有骨頭`);
});
```

`test/data.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { PARTS } from '../tools/parts.js';
import { SEGMENT_KEYS } from '../src/rig/segments.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const find = key => meta.parts.find(p => p.key === key);
const keysOf = p => (p.unsided ? [`${p.id}.m`] : [`${p.id}.l`, `${p.id}.r`]);

test('部件齊全（中線部件只有一個）', () => {
  const expected = PARTS.flatMap(keysOf);
  assert.equal(meta.parts.length, expected.length);
  for (const k of expected) assert.ok(find(k), k);
});

test('附著區都貼近指定的骨頭，端點沒有無效值', () => {
  for (const p of meta.parts) {
    for (const d of p.dmin) assert.ok(d < p.maxGap, `${p.key} 附著區離骨頭 ${d} 公分`);
    assert.ok([...p.a, ...p.b].every(Number.isFinite), p.key);
  }
});

test('骨段、權重、痠痛點的資料一致', () => {
  const segs = new Set(SEGMENT_KEYS);
  for (const p of meta.parts) {
    for (const s of [p.segA, p.segB, ...p.vias.map(v => v.seg), ...(p.skinSegs ?? [])]) assert.ok(segs.has(s), `${p.key}：${s}`);
    assert.equal(p.skinSegs ? p.sOffset !== undefined : p.sOffset === undefined, true, `${p.key} 權重資料`);
    for (const v of p.tps) assert.ok(v >= 0 && v < p.vCount, `${p.key} 痠痛點頂點 ${v}`);
    for (const w of p.wraps ?? []) {
      // 手腕一律是「手相對橈骨」的轉動，所以近端骨段不一定是這塊肌肉附著的骨頭
      assert.ok(segs.has(w.prox) && segs.has(w.dist) && w.dist.endsWith(`.${p.side}`), `${p.key} 力臂骨段 ${w.prox} → ${w.dist}`);
      assert.ok(Number.isFinite(w.m) && Math.abs(Math.hypot(...w.axis) - 1) < 0.01, `${p.key} 力臂`);
    }
  }
  for (const b of meta.bones) assert.ok(segs.has(b.segment), b.name);
});

test('斜方肌上、中、下部的高度順序正確', () => {
  for (const s of ['l', 'r']) {
    const y = id => find(`${id}.${s}`).centroid[1];
    assert.ok(y('trapUpper') > y('trapMiddle') && y('trapMiddle') > y('trapLower'));
  }
});

test('右側在 −x、左側在 +x', () => {
  for (const p of meta.parts.filter(q => q.side !== 'm')) assert.ok(p.side === 'r' ? p.centroid[0] < 0 : p.centroid[0] > 0, p.key);
});

test('關節位置合理', () => {
  const j = meta.joints;
  assert.ok(j.gh.r[0] > -22 && j.gh.r[0] < -12 && j.gh.r[1] > 132 && j.gh.r[1] < 144, `肱骨頭 ${j.gh.r}`);
  assert.ok(j.hip.r[0] > -12 && j.hip.r[0] < -5 && j.hip.r[1] > 80 && j.hip.r[1] < 92, `股骨頭 ${j.hip.r}`);
  const order = ['L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'].map(k => j.pivots[k][1]);
  assert.deepEqual([...order].sort((x, y) => x - y), order, '脊椎轉軸由下往上');
  const [medial, lateral] = j.elbowAxis.r;
  assert.ok(medial[0] > lateral[0] && medial[1] > 105 && medial[1] < 116, `手肘轉軸 ${j.elbowAxis.r}`);
  assert.ok(j.wrist.r[1] > 80 && j.wrist.r[1] < 90 && j.wrist.r[1] < j.forearmAxis.r[1][1], `手腕 ${j.wrist.r}`);
});

test('三角面與檔案大小在預算內', () => {
  const tris = [...meta.bones, ...meta.parts].reduce((n, e) => n + e.iCount / 3, 0);
  assert.ok(tris <= 800000, `三角面 ${tris}`);
  assert.ok(statSync('data/processed/meshes.bin').size <= 7.5 * 1048576); // base64 後約 10 MB
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/parts.test.js test/data.test.js
```

預期：FAIL：骨段 `ulna.r` 沒有骨頭；資料沒有 `elbowAxis`。

- [ ] **Step 3：寫部件清單與轉檔程式**

`tools/parts.js`：

```js
// 部件與骨頭清單（第一階段肩帶＋2A 軀幹、頸、頭皮、下肢）
//
// zName：Z-Anatomy 的網格名稱（不含 .l/.r）；zNames 可個別覆寫某一側的名稱。
// attach：附著骨頭群組，第一組是近端、最後一組是遠端，中間的群組只參與變形（例如脊椎沿線）；
//         {s} 代表側別 l/r。骨頭屬於哪個骨段由 BONE_SEGMENTS 決定，這裡不必寫。
// region：肌肉清單的分區；tp：痠痛點在「近端 → 遠端」連線上的位置（0–1）。
// 注意：Z-Anatomy 把斜方肌上部、下部的名稱標反了（Ascending part 網格其實在上方），這裡依幾何位置對應。

const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const cap = s => s[0].toUpperCase() + s.slice(1);
const rib = n => `${cap(ORD[n - 1])} rib.{s}`;
const cartilage = n => `Costal cartilage of ${ORD[n - 1]} rib.{s}`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const C = n => (n === 1 ? 'Atlas (C1)' : n === 2 ? 'Axis (C2)' : `Vertebra C${n}`);
const T = n => `Vertebra T${n}`;
const L = n => `Vertebra L${n}`;
const ribs = (a, b) => range(a, b).map(rib);
const Cs = (a, b) => range(a, b).map(C);
const Ts = (a, b) => range(a, b).map(T);
const Ls = (a, b) => range(a, b).map(L);
const both = list => list.flatMap(b => (b.includes('{s}') ? [b.replace('{s}', 'l'), b.replace('{s}', 'r')] : [b]));

const CLAVICLE = ['Clavicle.{s}'];
const SCAPULA = ['Scapula.{s}'];
const HUMERUS = ['Humerus.{s}'];
const RADIUS = ['Radius.{s}'];
const ULNA = ['Ulna.{s}'];
const FOREARM = [...RADIUS, ...ULNA]; // 從肱骨到手的肌肉以前臂骨當中間群組，肌腹才會跟著前臂
const FINGER = ['first', 'second', 'third', 'fourth', 'fifth'];
const phalanges = (fingers, kinds = ['Proximal', 'Middle', 'Distal']) =>
  fingers.flatMap(f => kinds.filter(k => !(f === 1 && k === 'Middle')).map(k => `${k} phalanx of ${FINGER[f - 1]} finger of hand.{s}`));
const metacarpal = n => `${cap(FINGER[n - 1])} metacarpal bone.{s}`;
const CARPALS = ['Scaphoid', 'Lunate', 'Triquetrum', 'Pisiform', 'Trapezium', 'Trapezoid', 'Capitate', 'Hamate'].map(b => `${b} bone.{s}`);
const METACARPALS = [1, 2, 3, 4, 5].map(metacarpal);
const HIP = ['Hip bone.{s}'];
const PELVIS = ['Hip bone.{s}', 'Sacrum', 'Coccyx'];
const FEMUR = ['Femur.{s}'];
const TIBIA = ['Tibia.{s}'];
const FIBULA = ['Fibula.{s}'];
const LEG = ['Tibia.{s}', 'Fibula.{s}'];
const OCCIPUT = ['Occipital bone'];
const MASTOID = ['Temporal bone.{s}'];
const MANDIBLE = ['Mandible'];
const HYOID = ['Hyoid bone'];
const CALCANEUS = ['Calcaneus.{s}'];
const TOES = ['Proximal phalanx', 'Middle phalanx', 'Distal phalanx'].flatMap(p => ['second', 'third', 'fourth', 'fifth'].map(f => `${p} of ${f} finger of foot.{s}`));
const HALLUX = ['Proximal phalanx of first finger of foot.{s}', 'Distal phalanx of first finger of foot.{s}'];
const MIDFOOT = ['Navicular bone.{s}', 'Medial cuneiform bone.{s}', 'Intermediate cuneiform bone.{s}', 'Lateral cuneiform bone.{s}', 'Cuboid bone.{s}'];
const METATARSALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth'].map(n => `${n} metatarsal bone.{s}`);

function part(id, zName, layer, region, attach, opts = {}) {
  return {
    id,
    zName,
    zNames: opts.zNames ?? null,
    unsided: Boolean(opts.unsided), // 中線的單一網格（橫膈、白線），側別記為 'm'
    layer,
    region,
    attach: attach.map(bones => ({ bones })),
    via: Boolean(opts.via), // 繞過肱骨頭：加一個肌腹中段的轉折點
    measure: opts.measure ?? true, // 筋膜、肌腱不計算長度
    maxGap: opts.maxGap ?? 2, // 附著區與骨頭的最大容許距離（公分）
    tp: opts.tp ?? [0.5],
    // 繞著橈骨捲的旋後肌群：前臂旋轉改用文獻力臂（公分；負值＝旋前時拉長），直線量不出捲繞
    pronationArm: opts.pronationArm ?? null,
  };
}
const fascia = { measure: false };

export const PARTS = [
  // ── 第一階段：肩帶 ──
  part('pecMajorClav', 'Clavicular head of pectoralis major muscle', 'superficial', 'trunk', [CLAVICLE, HUMERUS], { tp: [0.6] }),
  part('pecMajorStern', 'Sternocostal head of pectoralis major muscle', 'superficial', 'trunk', [['Manubrium of sternum', 'Body of sternum', ...range(2, 6).map(cartilage)], HUMERUS], { tp: [0.45, 0.75] }),
  part('pecMajorAbd', '(Abdominal part of pectoralis major muscle)', 'superficial', 'trunk', [[cartilage(6), cartilage(7), rib(6), rib(7)], HUMERUS], { tp: [0.7] }),
  part('pecMinor', 'Pectoralis minor muscle', 'middle', 'trunk', [ribs(3, 5), SCAPULA], { tp: [0.35, 0.8] }),
  part('subclavius', 'Subclavius muscle', 'deep', 'trunk', [[rib(1), cartilage(1)], CLAVICLE]),
  part('clavipectoralFascia', 'Clavipectoral fascia', 'middle', 'trunk', [CLAVICLE, SCAPULA], { ...fascia, tp: [] }),
  part('serratusAnterior', 'Serratus anterior muscle', 'middle', 'trunk', [ribs(1, 9), SCAPULA], { tp: [0.4] }),
  part('trapUpper', 'Ascending part of trapezius muscle', 'superficial', 'trunk', [[...OCCIPUT, C(7)], CLAVICLE], { tp: [0.65] }),
  part('trapMiddle', 'Transverse part of trapezius muscle', 'superficial', 'trunk', [Ts(1, 3), SCAPULA], { tp: [0.6] }),
  part('trapLower', 'Descending part of trapezius muscle', 'superficial', 'trunk', [Ts(4, 12), SCAPULA], { tp: [0.5, 0.85] }),
  part('rhomboidMajor', 'Rhomboid major muscle', 'middle', 'trunk', [Ts(2, 5), SCAPULA], { tp: [0.75] }),
  part('rhomboidMinor', 'Rhomboid minor muscle', 'middle', 'trunk', [[C(7), T(1)], SCAPULA], { tp: [0.75] }),
  part('levatorScapulae', 'Levator scapulae', 'middle', 'headNeck', [Cs(1, 4), SCAPULA], { tp: [0.45, 0.85] }),
  part('deltoidAnt', 'Clavicular part of deltoid muscle', 'superficial', 'upperLimb', [CLAVICLE, HUMERUS], { via: true, tp: [0.4] }),
  part('deltoidMid', 'Acromial part of deltoid muscle', 'superficial', 'upperLimb', [SCAPULA, HUMERUS], { via: true, tp: [0.45] }),
  part('deltoidPost', 'Scapular spinal part of deltoid muscle', 'superficial', 'upperLimb', [SCAPULA, HUMERUS], { via: true, tp: [0.45] }),
  // 肱二頭肌、肱三頭肌長頭以肱骨當中間群組：肌腹跟著肱骨，屈肘時才會真的縮短或拉長
  part('bicepsLong', 'Long head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, RADIUS], { tp: [0.6], pronationArm: -0.8 }),
  // Z-Anatomy 的短頭網格止於肘上方（共同肌腱沒有建模），離橈骨約 4 公分
  part('bicepsShort', 'Short head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, RADIUS], { maxGap: 5, tp: [0.6], pronationArm: -0.8 }),
  part('coracobrachialis', 'Coracobrachialis muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('tricepsLong', 'Long head of triceps brachii', 'superficial', 'upperLimb', [SCAPULA, HUMERUS, ULNA], { tp: [0.35] }),
  part('tricepsLat', 'Lateral head of triceps brachii', 'superficial', 'upperLimb', [HUMERUS, ['Ulna.{s}']]),
  part('tricepsMed', 'Medial head of triceps brachii', 'deep', 'upperLimb', [HUMERUS, ['Ulna.{s}']], { tp: [0.7] }),
  part('latissimus', 'Latissimus dorsi muscle', 'superficial', 'trunk', [[...Ts(7, 12), ...Ls(1, 5), 'Hip bone.{s}', ...ribs(9, 12)], HUMERUS], { tp: [0.75] }),
  part('teresMajor', 'Teres major muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('supraspinatus', 'Supraspinatus muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('infraspinatus', 'Infraspinatus muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('teresMinor', 'Teres minor muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('subscapularis', 'Subscapularis muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.7] }),

  // ── 上肢：上臂前側、前臂前側（屈肌群） ──
  part('brachialis', 'Brachialis muscle', 'deep', 'upperLimb', [HUMERUS, ULNA], { tp: [0.6] }),
  part('pronatorTeresHum', 'Superficial head of pronator teres', 'superficial', 'upperLimb', [HUMERUS, RADIUS], { tp: [0.3] }),
  part('pronatorTeresUln', 'Deep head of pronator teres', 'deep', 'upperLimb', [ULNA, RADIUS], { tp: [] }),
  part('flexorCarpiRadialis', 'Flexor carpi radialis', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(2), metacarpal(3)]], { tp: [0.25], maxGap: 3 }),
  part('palmarisLongus', 'Palmaris longus muscle', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [...CARPALS, ...METACARPALS]], { tp: [0.25], maxGap: 4 }),
  part('fcuHumeral', 'Humeral head of flexor carpi ulnaris', 'superficial', 'upperLimb', [HUMERUS, FOREARM, ['Pisiform bone.{s}', 'Hamate bone.{s}', metacarpal(5)]], { tp: [0.3], maxGap: 3 }),
  part('fcuUlnar', 'Ulnar head of flexor carpi ulnaris', 'superficial', 'upperLimb', [ULNA, ['Pisiform bone.{s}', 'Hamate bone.{s}', metacarpal(5)]], { tp: [], maxGap: 4 }),
  part('fdsHumeroUlnar', 'Humero-ulnar head of flexor digitorum superficialis', 'middle', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS, phalanges([2, 3, 4, 5], ['Middle'])], { tp: [0.3], maxGap: 3 }),
  // 橈側頭的網格只到手腕（肌腱併在肱尺頭裡），遠端以腕骨為準
  part('fdsRadial', 'Radial head of flexor digitorum superficialis', 'middle', 'upperLimb', [RADIUS, CARPALS], { tp: [], maxGap: 4 }),
  part('flexorDigitorumProfundus', 'Flexor digitorum profundus', 'deep', 'upperLimb', [ULNA, phalanges([2, 3, 4, 5], ['Distal'])], { tp: [0.3], maxGap: 3 }),
  part('flexorPollicisLongus', 'Flexor pollicis longus', 'deep', 'upperLimb', [RADIUS, phalanges([1], ['Distal'])], { tp: [0.4], maxGap: 4 }),
  part('pronatorQuadratus', 'Pronator quadratus', 'deep', 'upperLimb', [ULNA, RADIUS], { tp: [] }),

  // ── 上肢：前臂後側（伸肌群） ──
  part('anconeus', 'Anconeus muscle', 'middle', 'upperLimb', [HUMERUS, ULNA], { tp: [] }),
  part('brachioradialis', 'Brachioradialis muscle', 'superficial', 'upperLimb', [HUMERUS, RADIUS], { tp: [0.35] }),
  part('extensorCarpiRadialisLongus', 'Extensor carpi radialis longus', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(2)]], { tp: [0.25], maxGap: 3 }),
  part('extensorCarpiRadialisBrevis', 'Extensor carpi radialis brevis', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(3)]], { tp: [0.25], maxGap: 3 }),
  part('extensorDigitorum', 'Extensor digitorum', 'superficial', 'upperLimb', [HUMERUS, FOREARM, phalanges([2, 3, 4, 5])], { tp: [0.3], maxGap: 3 }),
  part('extensorDigitiMinimi', 'Extensor digiti minimi', 'superficial', 'upperLimb', [HUMERUS, FOREARM, phalanges([5])], { tp: [0.3], maxGap: 3 }),
  part('ecuHumeral', 'Humeral head of extensor carpi ulnaris', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(5)]], { tp: [0.3], maxGap: 3 }),
  part('ecuUlnar', 'Ulnar head of extensor carpi ulnaris', 'superficial', 'upperLimb', [ULNA, [metacarpal(5)]], { tp: [], maxGap: 3 }),
  part('supinator', 'Supinator', 'deep', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS], { tp: [0.5], pronationArm: -1 }),
  part('abductorPollicisLongus', 'Abductor pollicis longus', 'deep', 'upperLimb', [[...ULNA, ...RADIUS], [metacarpal(1)]], { tp: [], maxGap: 3 }),
  part('extensorPollicisLongus', 'Extensor pollicis longus', 'deep', 'upperLimb', [ULNA, phalanges([1], ['Distal'])], { tp: [], maxGap: 4 }),
  part('extensorPollicisBrevis', 'Extensor pollicis brevis', 'deep', 'upperLimb', [RADIUS, phalanges([1], ['Proximal'])], { tp: [], maxGap: 4 }),
  part('extensorIndicis', 'Extensor indicis', 'deep', 'upperLimb', [ULNA, phalanges([2])], { tp: [], maxGap: 3 }),

  // ── 上肢：手部（手指關節沒有建模，長度不會改變） ──
  part('abductorPollicisBrevis', 'Abductor pollicis brevis', 'superficial', 'upperLimb', [['Scaphoid bone.{s}', 'Trapezium bone.{s}'], phalanges([1], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('flexorPollicisBrevisSup', 'Superficial head of flexor pollicis brevis', 'superficial', 'upperLimb', [['Trapezium bone.{s}'], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('flexorPollicisBrevisDeep', 'Deep head of flexor pollicis brevis', 'deep', 'upperLimb', [['Trapezoid bone.{s}', 'Capitate bone.{s}'], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('opponensPollicis', 'Opponens pollicis muscle', 'deep', 'upperLimb', [['Trapezium bone.{s}'], [metacarpal(1)]], { tp: [0.5], maxGap: 3 }),
  part('adductorPollicisObl', 'Oblique head of adductor pollicis', 'deep', 'upperLimb', [['Capitate bone.{s}', metacarpal(2), metacarpal(3)], phalanges([1], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('adductorPollicisTrans', 'Transverse head of adductor pollicis', 'deep', 'upperLimb', [[metacarpal(3)], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('abductorDigitiMinimi', 'Abductor digiti minimi of hand', 'superficial', 'upperLimb', [['Pisiform bone.{s}'], phalanges([5], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('flexorDigitiMinimi', 'Flexor digiti minimi of hand', 'superficial', 'upperLimb', [['Hamate bone.{s}'], phalanges([5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('opponensDigitiMinimi', 'Opponens digiti minimi muscle of hand', 'deep', 'upperLimb', [['Hamate bone.{s}'], [metacarpal(5)]], { tp: [], maxGap: 3 }),
  part('lumbricalsHand', 'Lumbrical muscles of hand', 'middle', 'upperLimb', [METACARPALS.slice(1), phalanges([2, 3, 4, 5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('palmarInterossei', 'Palmar interossei muscles', 'deep', 'upperLimb', [[metacarpal(2), metacarpal(4), metacarpal(5)], phalanges([2, 4, 5], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('dorsalInterosseiHand', 'Dorsal interossei muscles of hand', 'deep', 'upperLimb', [METACARPALS, phalanges([2, 3, 4], ['Proximal'])], { tp: [0.5], maxGap: 3 }),

  // ── 上肢：筋膜與支持帶（列車線用，不計算長度） ──
  part('medialIntermuscularSeptum', 'Medial intermuscular septum of arm', 'deep', 'upperLimb', [HUMERUS, HUMERUS], { ...fascia, tp: [] }),
  part('lateralIntermuscularSeptum', 'Lateral intermuscular septum of arm', 'deep', 'upperLimb', [HUMERUS, HUMERUS], { ...fascia, tp: [] }),
  part('flexorRetinaculum', 'Flexor retinaculum of wrist', 'superficial', 'upperLimb', [['Pisiform bone.{s}', 'Hamate bone.{s}'], ['Scaphoid bone.{s}', 'Trapezium bone.{s}']], { ...fascia, tp: [], maxGap: 3 }),
  part('extensorRetinaculum', 'Extensor retinaculum of wrist', 'superficial', 'upperLimb', [RADIUS, [...ULNA, 'Triquetrum bone.{s}', 'Pisiform bone.{s}']], { ...fascia, tp: [], maxGap: 3 }),
  part('palmarAponeurosis', 'Palmar aponeurosis', 'superficial', 'upperLimb', [['Scaphoid bone.{s}', 'Trapezium bone.{s}', 'Hamate bone.{s}', 'Pisiform bone.{s}'], phalanges([2, 3, 4, 5], ['Proximal'])], { ...fascia, tp: [], maxGap: 3 }),

  // ── 2A：枕下肌群與頸部 ──
  part('rectusCapPostMajor', 'Rectus posterior major capitis muscle', 'deep', 'headNeck', [[C(2)], OCCIPUT]),
  part('rectusCapPostMinor', 'Rectus posterior minor capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('obliquusCapSup', 'Obliquus superior capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('obliquusCapInf', 'Obliquus inferior capitis muscle', 'deep', 'headNeck', [[C(2)], [C(1)]]),
  part('rectusCapAnt', 'Rectus anterior capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('rectusCapLat', 'Rectus lateralis capitis muscle', 'deep', 'headNeck', [[C(1)], OCCIPUT]),
  part('longusColli', 'Longus colli muscle', 'deep', 'headNeck', [Ts(1, 3), Cs(3, 7), Cs(1, 2)]),
  part('longusCapitis', 'Longus capitis muscle', 'deep', 'headNeck', [Cs(3, 6), OCCIPUT]),
  part('scalenusAnterior', 'Scalenus anterior muscle', 'middle', 'headNeck', [Cs(3, 6), [rib(1)]], { tp: [0.5] }),
  part('scalenusMedius', 'Scalenus medius muscle', 'middle', 'headNeck', [Cs(2, 7), [rib(1)]]),
  part('scalenusPosterior', 'Scalenus posterior muscle', 'middle', 'headNeck', [Cs(5, 7), [rib(2)]]),
  part('sternocleidomastoid', 'Sternocleidomastoid muscle', 'superficial', 'headNeck', [['Manubrium of sternum', ...CLAVICLE], [...MASTOID, ...OCCIPUT]], { tp: [0.35, 0.65] }),
  part('platysma', 'Platysma', 'superficial', 'headNeck', [[...CLAVICLE, rib(1), rib(2)], MANDIBLE], { maxGap: 4 }),
  part('digastricPost', 'Posterior belly of digastric muscle', 'deep', 'headNeck', [MASTOID, HYOID]),
  part('digastricTendon', 'Intermediate tendon of digastric muscle', 'deep', 'headNeck', [HYOID, MANDIBLE], { ...fascia, tp: [] }),
  part('digastricAnt', 'Anterior belly of digastric muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('stylohyoid', 'Stylohyoid muscle', 'deep', 'headNeck', [MASTOID, HYOID]),
  part('geniohyoid', 'Geniohyoid muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('mylohyoid', 'Mylohyoid muscle', 'deep', 'headNeck', [HYOID, MANDIBLE]),
  part('sternohyoid', 'Sternohyoid muscle', 'middle', 'headNeck', [['Manubrium of sternum', ...CLAVICLE], HYOID]),
  part('sternothyroid', 'Sternothyroid muscle', 'deep', 'headNeck', [['Manubrium of sternum', cartilage(1)], ['Thyroid cartilage']]),
  part('thyrohyoid', 'Thyrohyoid muscle', 'deep', 'headNeck', [['Thyroid cartilage'], HYOID]),
  part('omohyoid', 'Omohyoid muscle', 'middle', 'headNeck', [SCAPULA, HYOID], { maxGap: 3 }),

  // ── 2A：頭皮 ──
  part('epicranialAponeurosis', 'Epicranial aponeurosis', 'superficial', 'headNeck', [OCCIPUT, ['Frontal bone']], { ...fascia, tp: [], maxGap: 3 }),
  part('occipitalis', 'Occipitalis muscle', 'superficial', 'headNeck', [OCCIPUT, ['Parietal bone.{s}']], { maxGap: 3 }),
  part('frontalis', 'Frontalis muscle', 'superficial', 'headNeck', [['Parietal bone.{s}'], ['Frontal bone']], { maxGap: 3 }),
  part('temporoparietalis', 'Temporoparietalis muscle', 'superficial', 'headNeck', [MASTOID, ['Parietal bone.{s}']], { maxGap: 3 }),

  // ── 2A：背部深層（豎脊肌、橫突棘肌群等） ──
  part('spleniusCapitis', 'Splenius capitis muscle', 'middle', 'headNeck', [[C(7), ...Ts(1, 3)], [...MASTOID, ...OCCIPUT]], { tp: [0.6] }),
  part('spleniusColli', 'Splenius colli muscle', 'middle', 'headNeck', [Ts(3, 6), Cs(1, 3)], { tp: [0.5] }),
  part('iliocostalisLumborum', 'Iliocostalis lumborum muscle', 'middle', 'trunk', [PELVIS, Ls(1, 4), ribs(6, 12)], { tp: [0.3, 0.7] }),
  part('iliocostalisThoracis', 'Iliocostalis thoracis muscle', 'middle', 'trunk', [ribs(7, 12), [...ribs(1, 6), C(7)]], { tp: [0.5] }),
  part('iliocostalisColli', 'Iliocostalis colli muscle', 'middle', 'headNeck', [ribs(3, 6), Cs(4, 6)], { zNames: { l: 'Iliocostalis colli muscle' } }),
  part('longissimusThoracis', 'Longissimus thoracis muscle', 'middle', 'trunk', [PELVIS, Ls(1, 5), [...Ts(1, 12), ...ribs(2, 12)]], { tp: [0.35, 0.7] }),
  part('longissimusColli', 'Longissimus colli muscle', 'middle', 'headNeck', [Ts(1, 5), Cs(2, 6)]),
  part('longissimusCapitis', 'Longissimus capitis muscle', 'middle', 'headNeck', [[...Ts(1, 5), ...Cs(4, 7)], MASTOID]),
  part('spinalisThoracis', 'Spinalis thoracis muscle', 'middle', 'trunk', [[...Ts(11, 12), ...Ls(1, 2)], Ts(1, 8)]),
  part('spinalisColli', 'Spinalis colli muscle', 'deep', 'headNeck', [[C(7), ...Ts(1, 2)], Cs(2, 4)]),
  part('spinalisCapitis', 'Spinalis capitis muscle', 'deep', 'headNeck', [[C(7), T(1)], OCCIPUT]),
  part('semispinalisThoracis', 'Semispinalis thoracis muscle', 'deep', 'trunk', [Ts(6, 10), [...Cs(6, 7), ...Ts(1, 4)]]),
  part('semispinalisColli', 'Semispinalis colli muscle', 'deep', 'headNeck', [Ts(1, 6), Cs(2, 5)], { tp: [0.6] }),
  part('multifidusLumborum', 'Multifidus lumborum muscle', 'deep', 'trunk', [['Sacrum', 'Hip bone.{s}'], [...Ls(1, 5), T(12)]], { tp: [0.4] }),
  part('multifidusThoracis', 'Multifidus thoracis muscle', 'deep', 'trunk', [Ts(7, 12), [C(7), ...Ts(1, 6)]]),
  part('multifidusColli', 'Multifidus colli muscle', 'deep', 'headNeck', [Cs(4, 7), Cs(2, 5)]),
  part('rotatores', 'Rotatores', 'deep', 'trunk', [[...Ts(2, 12), ...Ls(1, 5)], [C(7), ...Ts(1, 11), ...Ls(1, 4)]], { tp: [] }),
  part('interspinalesColli', 'Interspinales colli muscles', 'deep', 'headNeck', [Cs(3, 7), Cs(2, 6)], { tp: [] }),
  part('interspinalesThoracis', 'Interspinales thoracis muscles', 'deep', 'trunk', [[T(1), T(2)], [C(7), T(1)]], { tp: [] }),
  part('interspinalesLumborum', 'Interspinales lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('intertransversariiVentral', 'Ventral parts of lateral intertransversarii lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('intertransversariiDorsal', 'Dorsal parts of lateral intertransversarii lumborum muscles', 'deep', 'trunk', [Ls(2, 5), Ls(1, 4)], { tp: [] }),
  part('serratusPostSup', 'Serratus posterior superior muscle', 'middle', 'trunk', [[C(7), ...Ts(1, 3)], ribs(2, 5)]),
  part('serratusPostInf', 'Serratus posterior inferior muscle', 'middle', 'trunk', [[...Ts(11, 12), ...Ls(1, 2)], ribs(9, 12)]),
  part('levatoresCostarumLongi', 'Levatores longi costarum', 'deep', 'trunk', [Ts(1, 11), ribs(2, 12)], { tp: [] }),
  part('levatoresCostarumBreves', 'Levatores breves costarum', 'deep', 'trunk', [Ts(1, 11), ribs(2, 12)], { tp: [] }),
  part('thoracolumbarFascia', 'Posterior layer of thoracolumbar fascia', 'superficial', 'trunk', [PELVIS, [...Ls(1, 5), T(12)]], { ...fascia, tp: [] }),

  // ── 2A：胸壁與橫膈 ──
  part('externalIntercostals', 'External intercostal muscles', 'middle', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('internalIntercostals', 'Internal intercostal muscles', 'deep', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('innermostIntercostals', 'Innermost intercostal muscles', 'deep', 'trunk', [ribs(1, 6), ribs(7, 12)], { tp: [] }),
  part('transversusThoracis', 'Transversus thoracis muscle', 'deep', 'trunk', [['Body of sternum', 'Xiphoid process'], range(2, 6).map(cartilage)], { tp: [] }),
  part('diaphragm', 'Diaphragm', 'deep', 'trunk', [Ls(1, 3), both(['Xiphoid process', ...range(7, 10).map(cartilage), rib(11), rib(12)])], { unsided: true, measure: false, tp: [] }), // 穹頂形，不以起止點距離衡量

  // ── 2A：腹部 ──
  part('rectusAbdominis', 'Rectus abdominis muscle', 'superficial', 'trunk', [HIP, ['Xiphoid process', ...range(5, 7).map(cartilage)]], { tp: [0.25, 0.75] }),
  part('externalOblique', 'External abdominal oblique muscle', 'superficial', 'trunk', [ribs(5, 12), HIP], { tp: [0.4] }),
  part('internalOblique', 'Internal abdominal oblique muscle', 'middle', 'trunk', [HIP, ribs(10, 12)], { tp: [0.4] }),
  part('transversusAbdominis', 'Transversus abdominis muscle', 'deep', 'trunk', [HIP, [...range(7, 10).map(cartilage), ...ribs(11, 12)]], { tp: [] }),
  part('pyramidalis', 'Pyramidalis muscle', 'superficial', 'trunk', [HIP, HIP], { tp: [] }),
  part('quadratusLumborum', 'Quadratus lumborum muscle', 'deep', 'trunk', [HIP, Ls(1, 4), [rib(12)]], { tp: [0.3, 0.75] }),
  part('lineaAlba', 'Linea alba', 'superficial', 'trunk', [both(['Hip bone.{s}']), ['Xiphoid process']], { unsided: true, ...fascia, tp: [] }),
  part('inguinalLigament', 'Inguinal ligament', 'superficial', 'trunk', [HIP, HIP], { ...fascia, tp: [] }),

  // ── 2A：骨盆底 ──
  part('externalAnalSphincter', 'External anal sphincter', 'deep', 'trunk', [['Coccyx'], HIP], { tp: [], maxGap: 4 }),
  part('puboanalis', 'Pubo-analis muscle', 'deep', 'trunk', [HIP, ['Coccyx']], { tp: [] }),
  part('levatorAniArch', 'Tendinous arch of levator ani', 'deep', 'trunk', [HIP, HIP], { ...fascia, tp: [] }),
  part('pubococcygeus', 'Pubococcygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),
  part('iliococcygeus', 'Iliococcygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),
  part('coccygeus', 'Coccygeus muscle', 'deep', 'trunk', [HIP, ['Coccyx', 'Sacrum']], { tp: [] }),

  // ── 2A：臀部與髖 ──
  part('gluteusMaximus', 'Gluteus maximus muscle', 'superficial', 'lowerLimb', [PELVIS, FEMUR], { tp: [0.35, 0.7] }),
  part('gluteusMedius', 'Gluteus medius muscle', 'middle', 'lowerLimb', [HIP, FEMUR], { tp: [0.35, 0.65] }),
  part('gluteusMinimus', 'Gluteus minimus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.5] }),
  part('tensorFasciaeLatae', 'Tensor fasciae latae', 'superficial', 'lowerLimb', [HIP, [...FEMUR, ...TIBIA]], { tp: [0.2], maxGap: 3 }),
  part('iliotibialTract', 'Iliotibial tract', 'superficial', 'lowerLimb', [HIP, TIBIA], { ...fascia, measure: true, tp: [] }),
  part('piriformis', 'Piriformis muscle', 'deep', 'lowerLimb', [['Sacrum'], FEMUR], { tp: [0.4, 0.75] }),
  part('gemellusSup', 'Superior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gemellusInf', 'Inferior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorInternus', 'Obturator internus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorExternus', 'Obturator externus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('quadratusFemoris', 'Quadratus femoris muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('psoasMajor', 'Psoas major', 'deep', 'lowerLimb', [[T(12), ...Ls(1, 4)], ['Vertebra L5'], FEMUR], { tp: [0.4, 0.75] }),
  part('iliacus', 'Iliacus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),

  // ── 2A：大腿 ──
  part('sartorius', 'Sartorius muscle', 'superficial', 'lowerLimb', [HIP, TIBIA], { tp: [0.3, 0.7] }),
  part('rectusFemoris', 'Rectus femoris muscle', 'superficial', 'lowerLimb', [HIP, ['Patella.{s}', ...TIBIA]], { tp: [0.2, 0.8] }),
  part('vastusLateralis', 'Vastus lateralis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.3, 0.75] }),
  part('vastusMedialis', 'Vastus medialis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.75] }),
  part('vastusIntermedius', 'Vastus intermedius muscle', 'deep', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.5] }),
  part('patellarRetinaculumMed', 'Medial patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('patellarRetinaculumLat', 'Lateral patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('adductorLongus', 'Adductor longus', 'middle', 'lowerLimb', [HIP, FEMUR], { tp: [0.3] }),
  part('adductorBrevis', 'Adductor brevis', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('adductorMagnus', 'Adductor magnus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4, 0.75] }),
  part('adductorMinimus', '(Adductor minimus)', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gracilis', 'Gracilis muscle', 'middle', 'lowerLimb', [HIP, TIBIA], { tp: [0.4] }),
  part('pectineus', 'Pectineus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('bicepsFemorisLong', 'Long head of biceps femoris', 'superficial', 'lowerLimb', [HIP, [...FIBULA, ...TIBIA]], { tp: [0.65] }),
  part('bicepsFemorisShort', 'Short head of biceps femoris', 'deep', 'lowerLimb', [FEMUR, [...FIBULA, ...TIBIA]], { tp: [0.6] }),
  part('semitendinosus', 'Semitendinosus muscle', 'superficial', 'lowerLimb', [HIP, TIBIA], { tp: [0.6] }),
  part('semimembranosus', 'Semimembranosus muscle', 'middle', 'lowerLimb', [HIP, TIBIA], { tp: [0.6] }),

  // ── 2A：小腿 ──
  // 腓腸肌、比目魚肌的網格止於小腿中段（跟腱另外建模），遠端以跟骨為準
  part('gastrocnemiusMed', 'Medial head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('gastrocnemiusLat', 'Lateral head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('calcanealTendon', 'Calcaneal tendon', 'superficial', 'lowerLimb', [LEG, CALCANEUS], { ...fascia, tp: [] }),
  part('soleus', 'Soleus muscle', 'middle', 'lowerLimb', [LEG, CALCANEUS], { tp: [0.55, 0.8], maxGap: 10 }),
  part('plantaris', 'Plantaris muscle', 'middle', 'lowerLimb', [FEMUR, CALCANEUS], { tp: [] }),
  part('popliteus', 'Popliteus muscle', 'deep', 'lowerLimb', [FEMUR, TIBIA], { tp: [0.6] }),
  part('tibialisPosterior', 'Tibialis posterior muscle', 'deep', 'lowerLimb', [LEG, [...MIDFOOT, ...METATARSALS]], { tp: [0.3] }),
  part('flexorDigitorumLongus', 'Flexor digitorum longus', 'deep', 'lowerLimb', [TIBIA, TOES], { tp: [0.3] }),
  part('flexorHallucisLongus', 'Flexor hallucis longus', 'deep', 'lowerLimb', [FIBULA, HALLUX], { tp: [0.35] }),
  part('tibialisAnterior', 'Tibialis anterior muscle', 'superficial', 'lowerLimb', [TIBIA, ['Medial cuneiform bone.{s}', 'First metatarsal bone.{s}']], { tp: [0.3] }),
  part('extensorDigitorumLongus', 'Extensor digitorum longus', 'superficial', 'lowerLimb', [LEG, [...TOES, ...METATARSALS]], { tp: [0.3], maxGap: 5 }),
  part('extensorDigitorumLongusTendon', 'Tendon of extensor digitorum longus', 'superficial', 'lowerLimb', [[...MIDFOOT, 'Talus.{s}'], TOES], { ...fascia, tp: [] }),
  part('extensorHallucisLongus', 'Extensor hallucis longus', 'middle', 'lowerLimb', [FIBULA, HALLUX], { tp: [0.5] }),
  part('fibularisTertius', 'Fibularis tertius muscle', 'middle', 'lowerLimb', [FIBULA, ['Fifth metatarsal bone.{s}']], { tp: [] }),
  part('fibularisLongus', 'Fibularis longus muscle', 'superficial', 'lowerLimb', [FIBULA, ['Medial cuneiform bone.{s}', 'First metatarsal bone.{s}', 'Cuboid bone.{s}']], { tp: [0.25] }),
  part('fibularisBrevis', 'Fibularis brevis muscle', 'middle', 'lowerLimb', [FIBULA, ['Fifth metatarsal bone.{s}']], { tp: [0.5] }),
  part('plantarAponeurosis', 'Plantar aponeurosis', 'superficial', 'lowerLimb', [CALCANEUS, [...METATARSALS, ...TOES]], { ...fascia, tp: [] }),
];

// 骨頭來源：依序比對，已分配的骨頭不會再被後面的規則改；sided 的骨段依名稱 .l/.r 分左右
const ribsOf = (a, b) => range(a, b).flatMap(n => [rib(n), cartilage(n)].filter(x => !(x.startsWith('Costal') && n > 10)));
export const BONE_SEGMENTS = [
  { segment: 'pelvis', names: ['Hip bone.{s}', 'Sacrum', 'Coccyx'] },
  ...[5, 4, 3, 2, 1].map(n => ({ segment: `L${n}`, names: [L(n)] })),
  { segment: 'thoraxLow', names: [...Ts(9, 12), ...ribsOf(9, 12)] },
  { segment: 'thoraxMid', names: [...Ts(5, 8), ...ribsOf(5, 8), 'Body of sternum', 'Xiphoid process'] },
  { segment: 'thoraxUp', names: [...Ts(1, 4), ...ribsOf(1, 4), 'Manubrium of sternum'] },
  { segment: 'neckLow', names: Cs(5, 7) },
  { segment: 'neckUp', names: Cs(1, 4) },
  // 舌骨懸吊在下頷與胸骨之間，喉跟著舌骨；這裡讓兩者隨頭部移動，避免舌骨上肌群算出不合理的長度變化
  { segment: 'head', groups: ['Bones of cranium.g'], names: ['Mandible', 'Hyoid bone', 'Thyroid cartilage'] },
  { segment: 'clavicle', sided: true, names: ['Clavicle.{s}'] },
  { segment: 'scapula', sided: true, names: ['Scapula.{s}'] },
  { segment: 'arm', sided: true, names: ['Humerus.{s}'] },
  { segment: 'ulna', sided: true, names: ['Ulna.{s}'] },
  { segment: 'radius', sided: true, names: ['Radius.{s}'] },
  { segment: 'hand', sided: true, groups: ['Bones of free part of upper limb.g'] }, // 上肢自由部其餘的骨頭（腕骨、掌骨、指骨）
  { segment: 'femur', sided: true, names: ['Femur.{s}'] },
  { segment: 'shank', sided: true, names: ['Tibia.{s}', 'Fibula.{s}', 'Patella.{s}'] },
  { segment: 'foot', sided: true, groups: ['Bones of free part of lower limb.g'] }, // 下肢自由部其餘的骨頭（足骨）
];

// 簡化後保留的三角面比例
export const PART_RATIO = 0.35;
export const BONE_RATIO = 0.25;
```

`tools/convert.mjs`：

```js
// 把 Z-Anatomy FBX 轉成網頁用的資料：data/processed/meta.json ＋ meshes.bin
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { loadFbx, indexMeshes, indexGroups, meshesUnder } from './lib/fbx.mjs';
import { isAnnotation, sideOf, withSide } from './lib/names.mjs';
import { worldGeometry, simplify } from './lib/geometry.mjs';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, meanPoint } from './lib/attach.mjs';
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex, momentArm } from './lib/skin.mjs';
import { estimateJoints } from './lib/joints.mjs';
import { packMeshes } from './lib/pack.mjs';
import { PARTS, BONE_SEGMENTS, PART_RATIO, BONE_RATIO } from './parts.js';
import { segKey } from '../src/rig/segments.js';

const RAW = 'data/raw';
const LARGE_ROTATION = /^(ulna|radius|hand)\./; // 手肘、前臂旋轉、手腕的骨段
const OUT = 'data/processed';
const FILES = ['MuscularSystem100.fbx', 'SkeletalSystem100.fbx'];
for (const f of FILES) {
  if (!existsSync(`${RAW}/${f}`)) throw new Error(`找不到 ${RAW}/${f}，請先執行 npm run fetch-data`);
}

// JSON 裡的座標取到小數 3 位（0.01 mm）
const round = v => (Array.isArray(v) ? v.map(round) : typeof v === 'number' ? Math.round(v * 1000) / 1000 : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, round(x)])) : v);
const concat = arrays => {
  const out = new Float32Array(arrays.reduce((n, a) => n + a.length, 0));
  let o = 0;
  for (const a of arrays) {
    out.set(a, o);
    o += a.length;
  }
  return out;
};

console.log('讀取 FBX …');
const muscleMeshes = indexMeshes(loadFbx(`${RAW}/${FILES[0]}`));
const skeleton = loadFbx(`${RAW}/${FILES[1]}`);
const boneMeshes = indexMeshes(skeleton);
const boneGroups = indexGroups(skeleton);

console.log('處理骨頭 …');
const bones = new Map(); // 名稱 → { segment, positions, indices }
for (const def of BONE_SEGMENTS) {
  const found = [];
  for (const pattern of def.names ?? []) {
    for (const side of pattern.includes('{s}') ? ['l', 'r'] : [null]) {
      const name = side ? withSide(pattern, side) : pattern;
      const mesh = boneMeshes.get(name);
      if (!mesh) throw new Error(`找不到骨頭 ${name}`);
      found.push(mesh);
    }
  }
  for (const g of def.groups ?? []) {
    const group = boneGroups.get(g);
    if (!group) throw new Error(`找不到骨頭群組 ${g}`);
    found.push(...meshesUnder(group, isAnnotation));
  }
  for (const mesh of found) {
    const name = mesh.userData.originalName;
    if (bones.has(name)) continue; // 先出現的規則優先（例如股骨先歸大腿，其餘才歸足部）
    const side = sideOf(name);
    if (def.sided && !side) throw new Error(`${name} 應該分左右，但名稱沒有 .l/.r`);
    const geo = await simplify(worldGeometry(mesh), BONE_RATIO);
    bones.set(name, { segment: def.sided ? segKey(def.segment, side) : def.segment, ...geo });
  }
}
const bone = name => {
  const b = bones.get(name);
  if (!b) throw new Error(`附著骨頭 ${name} 不在骨頭清單內`);
  return b;
};
const sampled = new Map(); // 骨頭名稱 → 取樣點（算權重、痠痛點用）
const samplesOf = name => {
  if (!sampled.has(name)) sampled.set(name, samplePoints(bone(name).positions, 300));
  return sampled.get(name);
};

const joints = estimateJoints(new Map([...bones].map(([name, b]) => [name, b.positions])));

console.log('處理肌肉 …');
const parts = [];
for (const p of PARTS) {
  for (const side of p.unsided ? ['m'] : ['l', 'r']) {
    const meshName = p.zNames?.[side] ?? (p.unsided ? p.zName : `${p.zName}.${side}`);
    const mesh = muscleMeshes.get(meshName);
    if (!mesh) throw new Error(`找不到肌肉 ${meshName}`);
    const geo = await simplify(worldGeometry(mesh), PART_RATIO);
    const groups = p.attach.map(at => at.bones.map(b => (p.unsided ? b : withSide(b, side))));
    const regions = groups.map(names => {
      try {
        return attachmentRegion(geo.positions, new PointGrid(concat(names.map(n => bone(n).positions)), 1), 0.5, Math.ceil(p.maxGap) + 1);
      } catch (err) {
        throw new Error(`${p.id}.${side}（${names[0]} 等）：${err.message}`);
      }
    });
    const ends = refineEnds(geo.positions, regions[0], regions[regions.length - 1]);

    // 這個部件跨過的骨段（依附著骨頭）；端點跟著離它最近的骨頭所屬骨段
    const allNames = [...new Set(groups.flat())];
    const segs = [...new Set(allNames.map(n => bone(n).segment))];
    const segPoints = segs.map(s => concat(allNames.filter(n => bone(n).segment === s).map(samplesOf)));
    const endSeg = (names, point) => {
      const own = [...new Set(names.map(n => bone(n).segment))];
      return own[nearestSegment(point, own.map(s => segPoints[segs.indexOf(s)]))];
    };
    const segA = endSeg(groups[0], ends.a);
    const segB = endSeg(groups[groups.length - 1], ends.b);

    let skin = null, skinSegs = null, wraps = null;
    let vias = p.via ? [{ seg: segB, p: round(midBellyCentroid(geo.positions, ends.a, ends.b)) }] : [];
    const crossesLimbJoint = segs.length >= 2 && segs.some(s => LARGE_ROTATION.test(s));
    if (segs.length > 2 || crossesLimbJoint) {
      // 跨三個以上骨段、或跨過手肘／手腕（轉動角度大，沿連線混合會塌陷）：每個頂點跟著最近的兩個骨段
      skin = skinWeights(geo.positions, segPoints);
      skinSegs = segs;
      // 端點群組以外的骨段各加一個轉折點；前臂骨不加（前臂旋轉時，分別跟著尺骨、橈骨的兩個轉折點會讓連線打折）
      const endSegs = new Set([...groups[0], ...groups[groups.length - 1]].map(n => bone(n).segment));
      const middle = segs.map((s, i) => i).filter(i => !endSegs.has(segs[i]) && !/^(ulna|radius)\./.test(segs[i]));
      vias = chainVias(geo.positions, skin, middle, ends.a, ends.b).map(v => ({ seg: segs[v.s], p: round(v.p) }));
    }
    if (crossesLimbJoint) {
      // 跨手肘、手腕：這兩個關節的長度變化用「力臂 × 轉角」（見 src/muscles/length.js）
      const has = name => segs.includes(`${name}.${side}`);
      const [medialEpicondyle, lateralEpicondyle] = joints.elbowAxis[side];
      const elbowPivot = medialEpicondyle.map((v, i) => (v + lateralEpicondyle[i]) / 2);
      const unit = v => v.map(x => x / Math.hypot(...v));
      const axis = unit(lateralEpicondyle.map((v, i) => v - medialEpicondyle[i]));
      const forearmDir = unit(joints.wrist[side].map((v, i) => v - elbowPivot[i]));
      const distalOfElbow = has('ulna') || has('radius') || has('hand');
      const proximalOfWrist = has('arm') || has('ulna') || has('radius');
      wraps = [];
      if (has('arm') && distalOfElbow) wraps.push({ prox: `arm.${side}`, dist: `ulna.${side}`, axis: round(axis), m: round(momentArm(geo.positions, elbowPivot, forearmDir, axis, 4)) });
      if (p.pronationArm) {
        // 旋前方向：拇指由外側轉向前方；轉軸取「橈骨頭 → 尺骨頭」並調整正負，讓正向轉動＝旋前
        const [radialHead, ulnarHead] = joints.forearmAxis[side];
        let k = unit(ulnarHead.map((v, i) => v - radialHead[i]));
        const lateral = side === 'r' ? -1 : 1;
        if (-k[1] * lateral < 0) k = k.map(v => -v); // (k × 外側方向)·前方 = −k_y × 外側 x，要大於 0
        wraps.push({ prox: `ulna.${side}`, dist: `radius.${side}`, axis: round(k), m: p.pronationArm });
      }
      if (has('hand') && proximalOfWrist) wraps.push({ prox: `radius.${side}`, dist: `hand.${side}`, axis: round(axis), m: round(momentArm(geo.positions, joints.wrist[side], forearmDir, axis, 2)) });
    }

    const allBonePoints = concat(segPoints);
    parts.push({
      key: `${p.id}.${side}`,
      id: p.id,
      side,
      layer: p.layer,
      region: p.region,
      measure: p.measure,
      maxGap: p.maxGap,
      segA,
      segB,
      skinSegs,
      wraps,
      a: round(ends.a),
      b: round(ends.b),
      vias,
      tps: p.tp.map(t => superficialVertex(geo.positions, ends.a, ends.b, t, allBonePoints)),
      centroid: round(meanPoint(geo.positions)),
      dmin: regions.map(r => round(r.dmin)),
      ...geo,
      skin,
    });
  }
}

const boneList = [...bones].map(([name, b]) => ({ name, ...b }));
const { quant, entries, bin } = packMeshes([...boneList, ...parts]);
const strip = ({ positions, indices, skin, ...rest }) => rest;
const meta = {
  version: 2,
  units: 'cm',
  source: 'Z-Anatomy (CC BY-SA 4.0), derived from BodyParts3D (c) The Database Center for Life Science',
  quant,
  joints: round(joints),
  bones: boneList.map((b, i) => ({ ...strip(b), ...entries[i] })),
  parts: parts.map((p, i) => ({ ...strip(p), ...entries[boneList.length + i] })),
};
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/meta.json`, JSON.stringify(meta));
writeFileSync(`${OUT}/meshes.bin`, bin);

const tris = [...boneList, ...parts].reduce((n, m) => n + m.indices.length / 3, 0);
console.log(`完成：骨頭 ${boneList.length} 個、肌肉部件 ${parts.length} 個、三角面 ${tris}、meshes.bin ${(bin.length / 1048576).toFixed(1)} MB`);
const far = parts.filter(p => p.dmin.some(d => d > p.maxGap));
if (far.length) console.log('附著區離骨頭太遠（請檢查 parts.js）：' + far.map(p => `${p.key} ${p.dmin.join('/')}`).join('、'));
```

- [ ] **Step 4：轉檔**

執行：

```bash
npm run model
```

預期：約 1 分鐘，印出「完成：骨頭 233 個、肌肉部件 378 個、三角面 783415、meshes.bin 7.2 MB」（數字可能略有差異），沒有「附著區離骨頭太遠」。若出現「某部件.側別（骨頭 等）：…超過 … 公分」，依訊息檢查該部件的骨頭清單或 `maxGap`。

- [ ] **Step 5：執行測試，確認通過**

執行：

```bash
node --test test/parts.test.js test/data.test.js test/postures.test.js
```

預期：全部 PASS（postures 的 2A 檢查清單也恢復通過）。

- [ ] **Step 6：提交**

```bash
git add tools/parts.js tools/convert.mjs test/parts.test.js test/data.test.js data/processed
git commit -m "feat: forearm and hand parts, 30-segment conversion with elbow/wrist moment arms" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5：檢查清單：滑手機與手肘、前臂旋轉、手腕

**Files:**
- Modify: `test/postures.test.js`

**Interfaces:**
- Consumes：`data/processed/meta.json`、`computePose`、`PRESETS`、`bilateral`、`lengthDelta`

- [ ] **Step 1：更新檢查清單**

`test/postures.test.js`：

```js
// 對照書本的檢查清單：每個預設姿勢下，這些肌肉的鎖短／鎖長方向必須成立（用真實模型資料）
// 只列幾何上明確、離 3% 門檻有餘裕的肌肉；變化很小的（例如骨盆前傾時的腰大肌、股直肌）不列入，畫面上照實顯示
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { computePose } from '../src/rig/rig.js';
import { PRESETS, bilateral } from '../src/rig/presets.js';
import { lengthDelta } from '../src/muscles/length.js';
import { THRESHOLD, deltaText } from '../src/muscles/colors.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));

// 名稱不帶側別的，左右兩側都檢查；帶 .l/.r 的只檢查那一側
const CHECKS = {
  roundedShoulders: {
    short: ['pecMinor', 'pecMajorStern', 'serratusAnterior', 'subscapularis'],
    long: ['rhomboidMajor', 'rhomboidMinor', 'trapMiddle', 'trapLower', 'infraspinatus', 'teresMinor'],
  },
  forwardHead: { short: ['rectusCapPostMajor', 'rectusCapPostMinor', 'obliquusCapSup', 'sternocleidomastoid'], long: [] },
  kyphosis: { short: ['rectusAbdominis'], long: ['spinalisThoracis', 'iliocostalisThoracis', 'longissimusThoracis'] },
  anteriorTilt: {
    short: ['iliacus', 'multifidusLumborum', 'iliocostalisLumborum'],
    long: ['rectusAbdominis', 'bicepsFemorisLong', 'semitendinosus', 'semimembranosus', 'gluteusMaximus'],
  },
  posteriorTilt: { short: ['gluteusMaximus', 'rectusAbdominis'], long: ['multifidusLumborum', 'iliocostalisLumborum'] },
  unevenShoulders: { short: ['trapUpper.r', 'levatorScapulae.r'], long: ['trapUpper.l'] },
  legLength: { short: ['quadratusLumborum.r', 'gluteusMedius.l'], long: ['quadratusLumborum.l', 'gluteusMedius.r'] },
  phone: {
    short: ['bicepsShort', 'brachialis', 'brachioradialis', 'pronatorTeresHum', 'pronatorQuadratus', 'flexorCarpiRadialis', 'rectusCapPostMinor'],
    long: ['tricepsMed', 'anconeus', 'supinator', 'extensorDigitorum', 'ecuHumeral', 'rhomboidMinor'],
  },
};

// 上肢單一關節（自訂姿勢的滑桿推到底）
const JOINT_CHECKS = {
  手肘彎曲: {
    params: bilateral({ elbowFlexion: 1 }),
    short: ['bicepsLong', 'bicepsShort', 'brachialis', 'brachioradialis', 'pronatorTeresHum'],
    long: ['tricepsLong', 'tricepsLat', 'tricepsMed', 'anconeus'],
  },
  前臂旋前: {
    params: bilateral({ forearmPronation: 1 }),
    short: ['pronatorTeresHum', 'pronatorTeresUln', 'pronatorQuadratus'],
    long: ['supinator', 'bicepsLong', 'bicepsShort'],
  },
  手腕屈曲: {
    params: bilateral({ wristFlexion: 1 }),
    short: ['flexorCarpiRadialis', 'palmarisLongus', 'fdsRadial', 'flexorPollicisLongus'],
    long: ['extensorDigitorum', 'extensorDigitiMinimi', 'extensorPollicisLongus', 'extensorIndicis'],
  },
};
const keys = name => (/\.[lr]$/.test(name) ? [name] : [`${name}.l`, `${name}.r`]);

for (const [preset, { short, long }] of Object.entries(CHECKS)) {
  const mats = computePose(meta.joints, PRESETS[preset].params);
  const delta = key => lengthDelta(meta.parts.find(p => p.key === key), mats);
  for (const key of short.flatMap(keys)) {
    test(`${PRESETS[preset].label}：${key} 鎖短`, () => assert.ok(delta(key) <= -THRESHOLD, deltaText(delta(key))));
  }
  for (const key of long.flatMap(keys)) {
    test(`${PRESETS[preset].label}：${key} 鎖長`, () => assert.ok(delta(key) >= THRESHOLD, deltaText(delta(key))));
  }
}

for (const [label, { params, short, long }] of Object.entries(JOINT_CHECKS)) {
  const mats = computePose(meta.joints, params);
  const delta = key => lengthDelta(meta.parts.find(p => p.key === key), mats);
  for (const key of short.flatMap(keys)) test(`${label}：${key} 鎖短`, () => assert.ok(delta(key) <= -THRESHOLD, deltaText(delta(key))));
  for (const key of long.flatMap(keys)) test(`${label}：${key} 鎖長`, () => assert.ok(delta(key) >= THRESHOLD, deltaText(delta(key))));
}

test('列出每個姿勢變化最大的部件（供人工審閱）', t => {
  for (const preset of Object.keys(CHECKS)) {
    const mats = computePose(meta.joints, PRESETS[preset].params);
    const top = meta.parts
      .filter(p => p.measure)
      .map(p => [p.key, lengthDelta(p, mats)])
      .sort((x, y) => Math.abs(y[1]) - Math.abs(x[1]))
      .slice(0, 8);
    t.diagnostic(`${PRESETS[preset].label}：${top.map(([k, d]) => `${k} ${deltaText(d)}`).join('、')}`);
  }
});
```

- [ ] **Step 2：執行**

執行：

```bash
node --test test/postures.test.js
```

預期：全部 PASS；診斷輸出多了「滑手機」（例如肘肌 +49%、旋後肌 +35%、旋前圓肌肱骨頭 −33%）。若失敗，只能調整 `LIMITS`、預設姿勢或 `parts.js` 的附著骨頭／`pronationArm`（理由寫進設計文件），不可以改測試的期望方向。

- [ ] **Step 3：提交**

```bash
git add test/postures.test.js
git commit -m "test: locked-short/long checklist for the phone preset, elbow, forearm and wrist" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6：中文說明（前臂與手）與手臂線延伸到手

**Files:**
- Modify: `解剖列車網頁/content.js`（新增一段、改寫幾處）、`src/trains/lines.js`
- `test/content.test.js` 不用改

**Interfaces:**
- Consumes：`PARTS`（Task 4）
- Produces：`LINES` 的 sfal、dfal、sbal、dbal 多出前臂與手的站

- [ ] **Step 1：執行測試，確認失敗**

執行：

```bash
node --test test/content.test.js
```

預期：FAIL：「缺少 brachialis」；列車線測試也會失敗。

- [ ] **Step 2：插入前臂與手的說明**

在 `解剖列車網頁/content.js` 的 `// ── 解剖列車線 ──` 那一行**之前**插入以下整段（42 個條目），結尾的 `});` 與該行之間空一行：

```js
// ── 前臂與手（上肢） ──
Object.assign(window.CONTENT.muscles, {
  brachialis: {
    name: '肱肌', en: 'Brachialis', latin: 'Musculus brachialis',
    origin: '肱骨前面下半部', insertion: '尺骨粗隆、冠狀突',
    action: '肘關節屈曲（前臂旋前、旋後都一樣有力）', nerve: '肌皮神經（C5–C6），外側部分常有橈神經分支', lines: [],
    lockedShort: '長期屈肘（滑手機、抱小孩、提東西）', lockedLong: '手肘長時間伸直並往下拉（例如提重物）',
    painPoints: '上臂前面下段、手肘上方幾公分（肱二頭肌深層）', referredPain: '拇指根部背側、手肘前面，有時到肩膀前側',
    notes: '在肱二頭肌下面，是屈肘的主力。',
  },
  pronatorTeresHum: {
    name: '旋前圓肌肱骨頭', en: 'Pronator teres, humeral head', latin: 'Caput humerale musculi pronatoris teretis',
    origin: '肱骨內上髁（屈肌總腱）', insertion: '橈骨中段外側面（旋前圓肌粗隆）',
    action: '前臂旋前；輔助肘關節屈曲', nerve: '正中神經（C6–C7）', lines: [],
    lockedShort: '長期屈肘合併前臂旋前（打字、用滑鼠、滑手機）', lockedLong: '前臂長時間旋後（端碗、手掌朝上）',
    painPoints: '前臂前面上段、手肘橫紋內下方', referredPain: '手腕掌側的拇指側深處，沿前臂掌側往下',
    notes: '正中神經從兩個頭之間穿過；旋前圓肌緊繃可能壓迫神經（旋前圓肌症候群）。',
  },
  pronatorTeresUln: {
    name: '旋前圓肌尺骨頭', en: 'Pronator teres, ulnar head', latin: 'Caput ulnare musculi pronatoris teretis',
    origin: '尺骨冠狀突內側', insertion: '橈骨中段外側面（與肱骨頭共用肌腱）',
    action: '前臂旋前', nerve: '正中神經（C6–C7）', lines: [],
    lockedShort: '長期前臂旋前（打字、用滑鼠）', lockedLong: '前臂長時間旋後',
    painPoints: '—', referredPain: '—',
    notes: '只跨過前臂的旋轉，手肘彎曲時長度幾乎不變。',
  },
  flexorCarpiRadialis: {
    name: '橈側屈腕肌', en: 'Flexor carpi radialis', latin: 'Musculus flexor carpi radialis',
    origin: '肱骨內上髁（屈肌總腱）', insertion: '第二、三掌骨底掌側',
    action: '手腕屈曲、橈側偏；輔助前臂旋前與屈肘', nerve: '正中神經（C6–C7）', lines: ['淺前臂線'],
    lockedShort: '手腕長期屈曲（滑手機、睡覺時彎著手腕）', lockedLong: '手腕長期伸展撐地或撐桌（伏地挺身、撐著讀書）',
    painPoints: '前臂掌側上段的肌腹', referredPain: '手腕掌側橫紋中央，延伸到掌心',
    notes: '',
  },
  palmarisLongus: {
    name: '掌長肌', en: 'Palmaris longus', latin: 'Musculus palmaris longus',
    origin: '肱骨內上髁（屈肌總腱）', insertion: '屈肌支持帶、掌腱膜',
    action: '手腕屈曲；拉緊掌腱膜', nerve: '正中神經（C7–C8）', lines: ['淺前臂線'],
    lockedShort: '手腕長期屈曲、長時間握持', lockedLong: '手腕長期伸展合併手指張開',
    painPoints: '前臂掌側上段中央', referredPain: '掌心表淺的刺痛感，前臂掌側下段',
    notes: '約一成多的人沒有掌長肌，不影響功能。',
  },
  fcuHumeral: {
    name: '尺側屈腕肌肱骨頭', en: 'Flexor carpi ulnaris, humeral head', latin: 'Caput humerale musculi flexoris carpi ulnaris',
    origin: '肱骨內上髁（屈肌總腱）', insertion: '豌豆骨、鉤骨鉤、第五掌骨底',
    action: '手腕屈曲、尺側偏', nerve: '尺神經（C7–T1）', lines: ['淺前臂線'],
    lockedShort: '手腕屈曲合併往小指側偏（例如握滑鼠時手腕外撇）', lockedLong: '手腕伸展合併往拇指側偏',
    painPoints: '前臂掌側內緣（小指側）上段', referredPain: '手腕掌側的小指側',
    notes: '尺神經在手肘從兩個頭之間（肘隧道）穿過。',
  },
  fcuUlnar: {
    name: '尺側屈腕肌尺骨頭', en: 'Flexor carpi ulnaris, ulnar head', latin: 'Caput ulnare musculi flexoris carpi ulnaris',
    origin: '尺骨鷹嘴內側緣、尺骨後緣上三分之二', insertion: '豌豆骨、鉤骨鉤、第五掌骨底（與肱骨頭共用肌腱）',
    action: '手腕屈曲、尺側偏', nerve: '尺神經（C7–T1）', lines: ['淺前臂線'],
    lockedShort: '手腕屈曲合併往小指側偏', lockedLong: '手腕伸展合併往拇指側偏',
    painPoints: '—', referredPain: '—',
    notes: '模型的尺骨頭網格止於手腕上方（共同肌腱併在肱骨頭裡），手腕屈伸時變化很小，請看肱骨頭。',
  },
  fdsHumeroUlnar: {
    name: '屈指淺肌肱尺頭', en: 'Flexor digitorum superficialis, humero-ulnar head', latin: 'Caput humeroulnare musculi flexoris digitorum superficialis',
    origin: '肱骨內上髁、尺骨冠狀突', insertion: '第二到五指中節指骨兩側',
    action: '屈曲第二到五指的近端指間關節與掌指關節；輔助手腕屈曲', nerve: '正中神經（C7–T1）', lines: ['淺前臂線'],
    lockedShort: '長時間握緊（方向盤、工具、手機），手指與手腕同時彎', lockedLong: '手腕與手指同時長時間伸直（撐地）',
    painPoints: '前臂掌側中段', referredPain: '中指、無名指、小指的掌面，像電到一樣竄到指尖',
    notes: '模型沒有手指關節，長度只反映手肘、手腕與前臂旋轉。',
  },
  fdsRadial: {
    name: '屈指淺肌橈骨頭', en: 'Flexor digitorum superficialis, radial head', latin: 'Caput radiale musculi flexoris digitorum superficialis',
    origin: '橈骨前面上半（斜線）', insertion: '第二到五指中節指骨兩側（經共同肌腱）',
    action: '屈曲第二到五指的近端指間關節與掌指關節；輔助手腕屈曲', nerve: '正中神經（C7–T1）', lines: ['淺前臂線'],
    lockedShort: '長時間握緊、手腕屈曲', lockedLong: '手腕與手指同時長時間伸直',
    painPoints: '—', referredPain: '—',
    notes: '模型的橈骨頭網格只到手腕（肌腱併在肱尺頭裡），長度以腕骨為終點計算。',
  },
  flexorDigitorumProfundus: {
    name: '屈指深肌', en: 'Flexor digitorum profundus', latin: 'Musculus flexor digitorum profundus',
    origin: '尺骨前面與內側面上四分之三、骨間膜', insertion: '第二到五指遠節指骨底',
    action: '屈曲遠端指間關節（唯一能彎指尖的肌肉），也屈曲其他指關節與手腕', nerve: '食指、中指部分：前骨間神經（正中神經）；無名指、小指部分：尺神經（C8–T1）', lines: ['淺前臂線'],
    lockedShort: '長時間用指尖出力（打字、彈琴、抓握）', lockedLong: '手腕與手指同時長時間伸直',
    painPoints: '前臂掌側上段深處（尺骨旁）', referredPain: '手指掌面一路到指尖',
    notes: '模型沒有手指關節，長度只反映手肘、手腕與前臂旋轉。',
  },
  flexorPollicisLongus: {
    name: '屈拇長肌', en: 'Flexor pollicis longus', latin: 'Musculus flexor pollicis longus',
    origin: '橈骨前面中段、骨間膜', insertion: '拇指遠節指骨底',
    action: '屈曲拇指的指間關節與掌指關節；輔助手腕屈曲', nerve: '前骨間神經（正中神經，C7–C8）', lines: [],
    lockedShort: '拇指長期彎曲出力（握筆、滑手機時拇指按壓）', lockedLong: '拇指與手腕長時間伸直',
    painPoints: '前臂掌側中段、拇指側深處', referredPain: '拇指掌面到指尖',
    notes: '',
  },
  pronatorQuadratus: {
    name: '旋前方肌', en: 'Pronator quadratus', latin: 'Musculus pronator quadratus',
    origin: '尺骨遠端前面', insertion: '橈骨遠端前面',
    action: '前臂旋前（主要的旋前肌）；穩定遠端橈尺關節', nerve: '前骨間神經（正中神經，C7–C8）', lines: [],
    lockedShort: '長期前臂旋前（打字、用滑鼠）', lockedLong: '長期前臂旋後',
    painPoints: '手腕掌側上方深處', referredPain: '手腕掌側',
    notes: '只跨過前臂的旋轉。',
  },
  anconeus: {
    name: '肘肌', en: 'Anconeus', latin: 'Musculus anconeus',
    origin: '肱骨外上髁後面', insertion: '尺骨鷹嘴外側面、尺骨後面上段',
    action: '輔助肘關節伸直；穩定肘關節', nerve: '橈神經（C7–C8）', lines: [],
    lockedShort: '長期伸肘撐體', lockedLong: '長期屈肘',
    painPoints: '手肘後外側、鷹嘴旁', referredPain: '肱骨外上髁（類似網球肘）',
    notes: '肌肉很短，所以屈肘時的百分比變化很大。',
  },
  brachioradialis: {
    name: '肱橈肌', en: 'Brachioradialis', latin: 'Musculus brachioradialis',
    origin: '肱骨外側髁上嵴上三分之二', insertion: '橈骨莖突底部',
    action: '肘關節屈曲（前臂在半旋前、拇指朝上時最有力）；把前臂帶回中間位置', nerve: '橈神經（C5–C6）', lines: [],
    lockedShort: '長期屈肘、拇指朝上提東西', lockedLong: '手肘長時間伸直',
    painPoints: '前臂拇指側上段、手肘下方 1–2 公分', referredPain: '肱骨外上髁、手腕背側拇指側、虎口',
    notes: '',
  },
  extensorCarpiRadialisLongus: {
    name: '橈側伸腕長肌', en: 'Extensor carpi radialis longus', latin: 'Musculus extensor carpi radialis longus',
    origin: '肱骨外側髁上嵴下三分之一、外上髁', insertion: '第二掌骨底背側',
    action: '手腕伸展、橈側偏；輔助屈肘', nerve: '橈神經（C6–C7）', lines: ['淺後臂線'],
    lockedShort: '手腕長期上翹（打字、用滑鼠時手腕懸空上抬）', lockedLong: '手腕屈曲合併手肘伸直、前臂旋前（提重物時手腕下垂）',
    painPoints: '手肘外側、外上髁下方', referredPain: '肱骨外上髁、手背虎口一帶',
    notes: '模型的伸腕長肌在手腕處偏拇指側，手腕屈伸的變化比伸腕短肌小。',
  },
  extensorCarpiRadialisBrevis: {
    name: '橈側伸腕短肌', en: 'Extensor carpi radialis brevis', latin: 'Musculus extensor carpi radialis brevis',
    origin: '肱骨外上髁（伸肌總腱）', insertion: '第三掌骨底背側',
    action: '手腕伸展；輔助橈側偏', nerve: '橈神經深支（C7–C8）', lines: ['淺後臂線'],
    lockedShort: '手腕長期上翹', lockedLong: '手腕屈曲合併前臂旋前、手肘伸直（網球反拍、拿重物）',
    painPoints: '前臂背側上段、外上髁下方 5 公分左右', referredPain: '手腕背側、手背中央',
    notes: '網球肘（肱骨外上髁炎）最常牽涉的肌肉。',
  },
  extensorDigitorum: {
    name: '伸指肌', en: 'Extensor digitorum', latin: 'Musculus extensor digitorum',
    origin: '肱骨外上髁（伸肌總腱）', insertion: '第二到五指指背腱膜（中節、遠節指骨底）',
    action: '伸展第二到五指；輔助手腕伸展', nerve: '後骨間神經（橈神經，C7–C8）', lines: ['淺後臂線'],
    lockedShort: '手指長期上翹（打字時手指懸空）、手腕伸展', lockedLong: '握拳合併手腕屈曲',
    painPoints: '前臂背側上段、外上髁下方 3–4 公分', referredPain: '前臂背側到手背，以及中指、無名指的背面',
    notes: '模型沒有手指關節，長度只反映手肘、手腕與前臂旋轉。',
  },
  extensorDigitiMinimi: {
    name: '伸小指肌', en: 'Extensor digiti minimi', latin: 'Musculus extensor digiti minimi',
    origin: '肱骨外上髁（伸肌總腱）', insertion: '小指指背腱膜',
    action: '伸展小指；輔助手腕伸展', nerve: '後骨間神經（橈神經，C7–C8）', lines: ['淺後臂線'],
    lockedShort: '小指長期翹起', lockedLong: '握拳合併手腕屈曲',
    painPoints: '前臂背側上段、伸指肌旁', referredPain: '小指背面',
    notes: '',
  },
  ecuHumeral: {
    name: '尺側伸腕肌肱骨頭', en: 'Extensor carpi ulnaris, humeral head', latin: 'Caput humerale musculi extensoris carpi ulnaris',
    origin: '肱骨外上髁（伸肌總腱）', insertion: '第五掌骨底內側',
    action: '手腕伸展、尺側偏', nerve: '後骨間神經（橈神經，C7–C8）', lines: ['淺後臂線'],
    lockedShort: '手腕上翹合併往小指側偏（打字時常見）', lockedLong: '手腕屈曲合併往拇指側偏',
    painPoints: '前臂背側小指側的上段', referredPain: '手腕背側的小指側',
    notes: '',
  },
  ecuUlnar: {
    name: '尺側伸腕肌尺骨頭', en: 'Extensor carpi ulnaris, ulnar head', latin: 'Caput ulnare musculi extensoris carpi ulnaris',
    origin: '尺骨後緣', insertion: '第五掌骨底內側（與肱骨頭共用肌腱）',
    action: '手腕伸展、尺側偏', nerve: '後骨間神經（橈神經，C7–C8）', lines: ['淺後臂線'],
    lockedShort: '手腕上翹合併往小指側偏', lockedLong: '手腕屈曲合併往拇指側偏',
    painPoints: '—', referredPain: '—',
    notes: '只從尺骨出發，手肘彎曲時長度幾乎不變。',
  },
  supinator: {
    name: '旋後肌', en: 'Supinator', latin: 'Musculus supinator',
    origin: '肱骨外上髁、橈側副韌帶、環狀韌帶、尺骨旋後肌嵴', insertion: '橈骨上三分之一的外側面與前、後面',
    action: '前臂旋後（手肘伸直時主要靠它）', nerve: '後骨間神經（橈神經，C5–C6）', lines: [],
    lockedShort: '長期前臂旋後（端碗、手掌朝上撐）', lockedLong: '長期前臂旋前合併伸肘（提公事包、打字、滑手機）',
    painPoints: '手肘橫紋外下方、橈骨頭前面深處', referredPain: '肱骨外上髁、虎口背側',
    notes: '繞著橈骨捲，前臂旋轉的長度改用文獻力臂（約 1 公分）計算；後骨間神經從它中間穿過，緊繃時可能壓迫神經。',
  },
  abductorPollicisLongus: {
    name: '外展拇長肌', en: 'Abductor pollicis longus', latin: 'Musculus abductor pollicis longus',
    origin: '尺骨、橈骨後面中段與骨間膜', insertion: '第一掌骨底外側',
    action: '拇指外展與伸展（腕掌關節）；輔助手腕橈側偏', nerve: '後骨間神經（橈神經，C7–C8）', lines: [],
    lockedShort: '拇指長期撐開上翹（單手滑手機）', lockedLong: '拇指包在拳頭內合併手腕往小指側偏',
    painPoints: '橈骨莖突一帶（手腕拇指側）', referredPain: '手腕拇指側、拇指根部',
    notes: '與伸拇短肌一起走第一伸肌腔，是媽媽手（狹窄性肌腱滑膜炎）的部位。',
  },
  extensorPollicisLongus: {
    name: '伸拇長肌', en: 'Extensor pollicis longus', latin: 'Musculus extensor pollicis longus',
    origin: '尺骨後面中段、骨間膜', insertion: '拇指遠節指骨底背側',
    action: '伸展拇指的指間關節與掌指關節；輔助手腕伸展', nerve: '後骨間神經（橈神經，C7–C8）', lines: [],
    lockedShort: '拇指長期上翹', lockedLong: '拇指彎曲合併手腕屈曲',
    painPoints: '—', referredPain: '—',
    notes: '肌腱繞過橈骨背側的 Lister 結節，構成解剖鼻煙壺的尺側邊。',
  },
  extensorPollicisBrevis: {
    name: '伸拇短肌', en: 'Extensor pollicis brevis', latin: 'Musculus extensor pollicis brevis',
    origin: '橈骨後面遠端、骨間膜', insertion: '拇指近節指骨底背側',
    action: '伸展拇指掌指關節；輔助拇指外展', nerve: '後骨間神經（橈神經，C7–C8）', lines: [],
    lockedShort: '拇指長期撐開上翹（單手滑手機）', lockedLong: '拇指包在拳頭內合併手腕往小指側偏',
    painPoints: '—', referredPain: '—',
    notes: '與外展拇長肌一起走第一伸肌腔（媽媽手）。',
  },
  extensorIndicis: {
    name: '伸食指肌', en: 'Extensor indicis', latin: 'Musculus extensor indicis',
    origin: '尺骨後面遠端、骨間膜', insertion: '食指指背腱膜',
    action: '伸展食指；輔助手腕伸展', nerve: '後骨間神經（橈神經，C7–C8）', lines: [],
    lockedShort: '食指長期伸直（指點、按滑鼠）', lockedLong: '握拳合併手腕屈曲',
    painPoints: '—', referredPain: '—',
    notes: '',
  },
  abductorPollicisBrevis: {
    name: '外展拇短肌', en: 'Abductor pollicis brevis', latin: 'Musculus abductor pollicis brevis',
    origin: '屈肌支持帶、舟狀骨結節、大多角骨結節', insertion: '拇指近節指骨底外側',
    action: '拇指外展（往掌心前方）；輔助對掌', nerve: '正中神經返支（C8–T1）', lines: ['深前臂線'],
    lockedShort: '拇指長期往前撐開（握大杯子）', lockedLong: '拇指長期貼著食指',
    painPoints: '大魚際（拇指根部掌側）外側', referredPain: '拇指外側、手腕掌側拇指側',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  flexorPollicisBrevisSup: {
    name: '屈拇短肌淺頭', en: 'Flexor pollicis brevis, superficial head', latin: 'Caput superficiale musculi flexoris pollicis brevis',
    origin: '屈肌支持帶、大多角骨', insertion: '拇指近節指骨底外側',
    action: '屈曲拇指掌指關節；輔助對掌', nerve: '正中神經返支（C8–T1）', lines: ['深前臂線'],
    lockedShort: '拇指長期彎曲握持（握筆、滑手機）', lockedLong: '拇指長期伸直撐開',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  flexorPollicisBrevisDeep: {
    name: '屈拇短肌深頭', en: 'Flexor pollicis brevis, deep head', latin: 'Caput profundum musculi flexoris pollicis brevis',
    origin: '小多角骨、頭狀骨', insertion: '拇指近節指骨底',
    action: '屈曲拇指掌指關節；輔助對掌', nerve: '尺神經深支（C8–T1）', lines: ['深前臂線'],
    lockedShort: '拇指長期彎曲握持', lockedLong: '拇指長期伸直撐開',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  opponensPollicis: {
    name: '拇對掌肌', en: 'Opponens pollicis', latin: 'Musculus opponens pollicis',
    origin: '屈肌支持帶、大多角骨結節', insertion: '第一掌骨外側緣全長',
    action: '拇指對掌（把拇指轉向掌心，與其他指尖相碰）', nerve: '正中神經返支（C8–T1）', lines: ['深前臂線'],
    lockedShort: '長時間捏、握（握筆、滑手機、針線活）', lockedLong: '拇指長期往後撐開',
    painPoints: '大魚際中段，第一掌骨旁', referredPain: '拇指掌面、手腕掌側拇指側',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  adductorPollicisObl: {
    name: '內收拇肌斜頭', en: 'Adductor pollicis, oblique head', latin: 'Caput obliquum musculi adductoris pollicis',
    origin: '頭狀骨、第二與第三掌骨底', insertion: '拇指近節指骨底內側（尺側籽骨）',
    action: '拇指內收（把拇指拉向手掌）', nerve: '尺神經深支（C8–T1）', lines: [],
    lockedShort: '拇指長期內收夾緊（夾著手機、捏東西）', lockedLong: '虎口長期撐開',
    painPoints: '虎口（拇指與食指之間的蹼）', referredPain: '拇指根部的掌側與背側、大魚際',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  adductorPollicisTrans: {
    name: '內收拇肌橫頭', en: 'Adductor pollicis, transverse head', latin: 'Caput transversum musculi adductoris pollicis',
    origin: '第三掌骨掌面', insertion: '拇指近節指骨底內側（尺側籽骨）',
    action: '拇指內收', nerve: '尺神經深支（C8–T1）', lines: [],
    lockedShort: '拇指長期內收夾緊', lockedLong: '虎口長期撐開',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  abductorDigitiMinimi: {
    name: '小指外展肌', en: 'Abductor digiti minimi of hand', latin: 'Musculus abductor digiti minimi manus',
    origin: '豌豆骨、尺側屈腕肌腱', insertion: '小指近節指骨底內側',
    action: '小指外展', nerve: '尺神經深支（C8–T1）', lines: ['深後臂線'],
    lockedShort: '小指長期撐開（打字、彈琴）', lockedLong: '小指長期併攏',
    painPoints: '小魚際（手掌小指側）', referredPain: '小指外側',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  flexorDigitiMinimi: {
    name: '屈小指短肌', en: 'Flexor digiti minimi brevis of hand', latin: 'Musculus flexor digiti minimi brevis manus',
    origin: '鉤骨鉤、屈肌支持帶', insertion: '小指近節指骨底',
    action: '屈曲小指掌指關節', nerve: '尺神經深支（C8–T1）', lines: ['深後臂線'],
    lockedShort: '小指長期彎曲握持', lockedLong: '手掌長時間攤平',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  opponensDigitiMinimi: {
    name: '小指對掌肌', en: 'Opponens digiti minimi', latin: 'Musculus opponens digiti minimi',
    origin: '鉤骨鉤、屈肌支持帶', insertion: '第五掌骨內側緣',
    action: '小指對掌（把第五掌骨往前、往內轉，讓手掌成杯狀）', nerve: '尺神經深支（C8–T1）', lines: ['深後臂線'],
    lockedShort: '手掌長期握成杯狀', lockedLong: '手掌長時間攤平',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  lumbricalsHand: {
    name: '蚓狀肌', en: 'Lumbricals of hand', latin: 'Musculi lumbricales manus',
    origin: '屈指深肌腱', insertion: '第二到五指指背腱膜（拇指側）',
    action: '屈曲掌指關節，同時伸直指間關節', nerve: '第一、二蚓狀肌：正中神經；第三、四蚓狀肌：尺神經深支（C8–T1）', lines: [],
    lockedShort: '長時間握持手機、書本（掌指關節彎、指頭伸直）', lockedLong: '握拳',
    painPoints: '—', referredPain: '—',
    notes: '起點在屈指深肌腱上，模型以掌骨代替；手指關節沒有建模，長度不會改變。',
  },
  palmarInterossei: {
    name: '掌側骨間肌', en: 'Palmar interossei', latin: 'Musculi interossei palmares',
    origin: '第二、四、五掌骨', insertion: '同一指的近節指骨底與指背腱膜',
    action: '手指內收（往中指靠攏）；屈曲掌指關節、伸直指間關節', nerve: '尺神經深支（C8–T1）', lines: [],
    lockedShort: '手指長時間併攏握持', lockedLong: '手指長時間張開',
    painPoints: '—', referredPain: '—',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  dorsalInterosseiHand: {
    name: '背側骨間肌', en: 'Dorsal interossei of hand', latin: 'Musculi interossei dorsales manus',
    origin: '相鄰兩掌骨的對向面（雙頭）', insertion: '第二到四指近節指骨底與指背腱膜',
    action: '手指外展（離開中指）；屈曲掌指關節、伸直指間關節', nerve: '尺神經深支（C8–T1）', lines: [],
    lockedShort: '手指長時間張開出力（彈琴、打字）', lockedLong: '手指長時間併攏',
    painPoints: '手背掌骨之間', referredPain: '沿手指側面到遠端指間關節',
    notes: '手指關節沒有建模，長度不會改變。',
  },
  medialIntermuscularSeptum: {
    name: '上臂內側肌間隔', en: 'Medial intermuscular septum of arm', latin: 'Septum intermusculare brachii mediale',
    origin: '肱骨內側髁上嵴', insertion: '肱骨內上髁',
    action: '分隔上臂前、後肌群，是淺前臂線從胸大肌、闊背肌接到前臂屈肌群的筋膜', nerve: '無（筋膜組織）', lines: ['淺前臂線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化，姿勢改變時以灰色顯示。',
  },
  lateralIntermuscularSeptum: {
    name: '上臂外側肌間隔', en: 'Lateral intermuscular septum of arm', latin: 'Septum intermusculare brachii laterale',
    origin: '肱骨外側髁上嵴', insertion: '肱骨外上髁',
    action: '分隔上臂前、後肌群，是淺後臂線從三角肌接到前臂伸肌群的筋膜', nerve: '無（筋膜組織）', lines: ['淺後臂線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化，姿勢改變時以灰色顯示。',
  },
  flexorRetinaculum: {
    name: '屈肌支持帶', en: 'Flexor retinaculum of wrist', latin: 'Retinaculum musculorum flexorum manus',
    origin: '豌豆骨、鉤骨鉤', insertion: '舟狀骨結節、大多角骨結節',
    action: '形成腕隧道的頂，讓屈指肌腱與正中神經通過', nerve: '無（筋膜組織）', lines: ['淺前臂線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化；腕隧道症候群就是正中神經在這裡受壓。',
  },
  extensorRetinaculum: {
    name: '伸肌支持帶', en: 'Extensor retinaculum of wrist', latin: 'Retinaculum musculorum extensorum manus',
    origin: '橈骨遠端外側', insertion: '尺骨莖突、三角骨、豌豆骨',
    action: '把伸肌腱固定在手腕背側，分成六個腔室', nerve: '無（筋膜組織）', lines: ['淺後臂線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化。',
  },
  palmarAponeurosis: {
    name: '掌腱膜', en: 'Palmar aponeurosis', latin: 'Aponeurosis palmaris',
    origin: '屈肌支持帶、掌長肌腱', insertion: '第二到五指的屈肌腱鞘與掌指關節',
    action: '保護掌心的血管、神經，加強抓握；淺前臂線的終點', nerve: '無（筋膜組織）', lines: ['淺前臂線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化；掌腱膜攣縮（杜普伊特朗攣縮）會讓手指慢慢無法伸直。',
  },
});
```

- [ ] **Step 3：改寫既有文字**

(a) 肱二頭肌長頭的 `notes`：

原文：

```js
    notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
  },
  bicepsShort: {
```

改成：

```js
    notes: '前臂旋前時肌腱繞著橈骨捲而拉長，以文獻力臂（約 0.8 公分）計算。',
  },
  bicepsShort: {
```

(b) 肱二頭肌短頭的 `notes`：

原文：

```js
    notes: '模型的短頭網格止於手肘上方（共同肌腱未建模）；第一階段沒有手肘關節。',
```

改成：

```js
    notes: '模型的短頭網格止於手肘上方（共同肌腱未建模）；前臂旋前時的拉長以文獻力臂（約 0.8 公分）計算。',
```

(c) 肱三頭肌長頭的 `notes`（在 `tricepsLong` 條目內）：

原文：

```js
    notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
```

改成：

```js
    notes: '同時跨過肩關節與手肘。',
```

(d) 肱三頭肌外側頭、內側頭的 `notes`（兩處都改）：

原文：

```js
    notes: '只跨過手肘；第一階段沒有手肘關節，長度不會改變。',
```

改成：

```js
    notes: '只跨過手肘。',
```

(e) 四條手臂線的說明，把句尾換掉：

| 線 | 原句尾 | 新句尾 |
|---|---|---|
| 淺前臂線 | 與手臂在身體前方的推、拉、抓握有關。2A 只畫到肱骨，2B 延伸到手。 | 與手臂在身體前方的推、拉、抓握有關；滑手機、長時間握持時整條線縮短。 |
| 深前臂線 | 與肩胛前傾、拇指側的穩定有關。2A 只畫到上臂，2B 延伸到手。 | 與肩胛前傾、拇指側的穩定與捏握有關。 |
| 淺後臂線 | 與手臂外展、舉高有關。2A 只畫到三角肌，2B 延伸到手。 | 與手臂外展、舉高有關；滑手機時前臂段被拉長，常與網球肘、手腕背側痠痛有關。 |
| 深後臂線 | 負責穩定肩胛骨與肱骨頭。2A 只畫到上臂，2B 延伸到手。 | 負責穩定肩胛骨與肱骨頭，以及小指側的握持。 |

(f) 在 `postures` 的 `legLength` 之前加一行：

```js
  phone: '滑手機：頭前傾、肩胛前伸、肩關節內旋，手肘彎曲約 100°、前臂旋前約 120°、手腕微屈。肱二頭肌、肱肌、肱橈肌、旋前圓肌、旋前方肌鎖短（橈側屈腕肌、掌長肌也跟著縮短）；肱三頭肌、肘肌、旋後肌與前臂伸肌群（伸指肌、尺側伸腕肌、橈側伸腕短肌）鎖長，枕下肌群也鎖短。淺後臂線在前臂整段被拉長，是網球肘、手腕背側痠痛常見的背景。',
```

- [ ] **Step 4：手臂線延伸到手**

`src/trains/lines.js`：

```js
// 解剖列車線（12 條線；四條手臂線從軀幹一路到手）
// stations 依線的走向排列；同一站內的部件是並行的軌道。opp() 表示這一站在對側（螺旋線、功能線會跨到另一側）。

const opp = ids => ({ ids, opp: true });
const station = s => (Array.isArray(s) ? { ids: s, opp: false } : s);

export const LINES = [
  {
    id: 'sbl',
    name: '淺背線',
    stations: [
      ['plantarAponeurosis'],
      ['calcanealTendon'],
      ['gastrocnemiusMed', 'gastrocnemiusLat'],
      ['bicepsFemorisLong', 'semitendinosus', 'semimembranosus'],
      ['thoracolumbarFascia', 'iliocostalisLumborum', 'longissimusThoracis', 'spinalisThoracis', 'iliocostalisThoracis'],
      ['rectusCapPostMajor', 'rectusCapPostMinor', 'obliquusCapSup', 'obliquusCapInf'],
      ['epicranialAponeurosis', 'occipitalis', 'frontalis'],
    ],
  },
  {
    id: 'sfl',
    name: '淺前線',
    stations: [
      ['tibialisAnterior', 'extensorDigitorumLongus', 'extensorHallucisLongus'],
      ['rectusFemoris', 'vastusLateralis', 'vastusMedialis', 'vastusIntermedius'],
      ['rectusAbdominis'],
      ['sternocleidomastoid'],
      ['epicranialAponeurosis'],
    ],
  },
  {
    id: 'll',
    name: '體側線',
    stations: [
      ['fibularisLongus', 'fibularisBrevis'],
      ['iliotibialTract', 'tensorFasciaeLatae', 'gluteusMaximus'],
      ['externalOblique', 'internalOblique'],
      ['externalIntercostals', 'internalIntercostals'],
      ['spleniusCapitis', 'sternocleidomastoid'],
    ],
  },
  {
    id: 'spl',
    name: '螺旋線',
    stations: [
      ['spleniusCapitis', 'spleniusColli'],
      opp(['rhomboidMajor', 'rhomboidMinor']),
      opp(['serratusAnterior']),
      opp(['externalOblique']),
      ['internalOblique'],
      ['tensorFasciaeLatae', 'iliotibialTract'],
      ['tibialisAnterior'],
      ['fibularisLongus'],
      ['bicepsFemorisLong'],
      ['iliocostalisLumborum', 'longissimusThoracis'],
    ],
  },
  {
    id: 'sfal',
    name: '淺前臂線',
    stations: [
      ['pecMajorClav', 'pecMajorStern', 'pecMajorAbd', 'latissimus'],
      ['medialIntermuscularSeptum'],
      ['flexorCarpiRadialis', 'palmarisLongus', 'fcuHumeral', 'fcuUlnar', 'fdsHumeroUlnar', 'fdsRadial', 'flexorDigitorumProfundus'],
      ['flexorRetinaculum'],
      ['palmarAponeurosis'],
    ],
  },
  {
    id: 'dfal',
    name: '深前臂線',
    stations: [
      ['pecMinor', 'clavipectoralFascia'],
      ['bicepsShort', 'bicepsLong', 'coracobrachialis'],
      ['abductorPollicisBrevis', 'flexorPollicisBrevisSup', 'flexorPollicisBrevisDeep', 'opponensPollicis'],
    ],
  },
  {
    id: 'sbal',
    name: '淺後臂線',
    stations: [
      ['trapUpper', 'trapMiddle', 'trapLower'],
      ['deltoidAnt', 'deltoidMid', 'deltoidPost'],
      ['lateralIntermuscularSeptum'],
      ['extensorCarpiRadialisLongus', 'extensorCarpiRadialisBrevis', 'extensorDigitorum', 'extensorDigitiMinimi', 'ecuHumeral', 'ecuUlnar'],
      ['extensorRetinaculum'],
    ],
  },
  {
    id: 'dbal',
    name: '深後臂線',
    stations: [
      ['rhomboidMajor', 'rhomboidMinor', 'levatorScapulae'],
      ['supraspinatus', 'infraspinatus', 'teresMinor', 'subscapularis'],
      ['tricepsLong', 'tricepsLat', 'tricepsMed'],
      ['abductorDigitiMinimi', 'flexorDigitiMinimi', 'opponensDigitiMinimi'],
    ],
  },
  { id: 'bfl', name: '後功能線', stations: [['latissimus'], ['thoracolumbarFascia'], opp(['gluteusMaximus']), opp(['vastusLateralis'])] },
  { id: 'ffl', name: '前功能線', stations: [['pecMajorAbd'], ['rectusAbdominis'], opp(['adductorLongus'])] },
  { id: 'ifl', name: '同側功能線', stations: [['latissimus'], ['externalOblique'], ['sartorius']] },
  {
    id: 'dfl',
    name: '深前線',
    stations: [
      ['tibialisPosterior', 'flexorDigitorumLongus', 'flexorHallucisLongus'],
      ['popliteus'],
      ['adductorMagnus', 'adductorMinimus', 'adductorBrevis', 'adductorLongus', 'pectineus'],
      ['pubococcygeus', 'iliococcygeus', 'coccygeus'],
      ['psoasMajor', 'iliacus', 'quadratusLumborum'],
      ['diaphragm'],
      ['longusColli', 'longusCapitis', 'scalenusAnterior', 'scalenusMedius', 'scalenusPosterior'],
      ['sternohyoid', 'omohyoid', 'thyrohyoid', 'digastricPost', 'digastricAnt', 'mylohyoid', 'geniohyoid', 'stylohyoid'],
    ],
  },
].map(line => ({ ...line, stations: line.stations.map(station) }));

export function linePartIds(lineId) {
  const line = LINES.find(l => l.id === lineId);
  return line ? new Set(line.stations.flatMap(s => s.ids)) : null;
}
```

- [ ] **Step 5：執行全部測試**

執行：

```bash
npm test
```

預期：全部 PASS（約 236 個）。

- [ ] **Step 6：提交**

```bash
git add 解剖列車網頁/content.js src/trains/lines.js
git commit -m "feat: Traditional Chinese notes for 42 forearm and hand parts; arm lines reach the hand" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7：打包與瀏覽器驗證

**Files:**
- 產生：`解剖列車網頁/app.js`、`model.js`、`index.html`（版本參數）

**Interfaces:**
- Consumes：Task 1–6 的全部內容

- [ ] **Step 1：測試與打包**

執行：

```bash
npm test && npm run build
```

預期：測試全部 PASS；打包成功，`解剖列車網頁/model.js` 約 10.3 MB。

- [ ] **Step 2：瀏覽器驗證**

預覽伺服器（`npm run serve`，port 8124；若被占用可用 `npm run serve -- --port=8125`）開啟後，用 javascript_tool 逐項確認：

| 檢查 | 指令或操作 | 預期 |
|---|---|---|
| 載入 | `({ parts: app.model.parts.length, bones: app.model.bones.length, rows: document.querySelectorAll('.muscle-rows li').length })` | `{ parts: 378, bones: 233, rows: 190 }`，主控台沒有錯誤 |
| 效能 | 連續 10 次 `app.ctrl.setParams({ 'elbowFlexion.l': i / 10, 'elbowFlexion.r': i / 10 })` 量時間 | 每次 < 40 毫秒；0.3 秒後 `app.model.parts.filter(p => p.stale).length === 0`；把實測數字寫進設計文件第 11 節 |
| 滑手機 | 按「滑手機」等 2 秒，看 `app.ctrl.partByKey('supinator.r').delta`、`partByKey('brachialis.r').delta` | 約 +0.35、約 −0.18；側面看手臂連續彎曲，沒有撕裂或飛出的頂點 |
| 說明卡 | 肌肉清單搜尋「旋後」，按「右」 | 說明卡「旋後肌右側」，顯示「目前 +35%　鎖長」 |
| 只調一側 | 按「中立」，上肢組按「只調右側」，把「手肘伸直／彎曲」拖到底 | `partByKey('brachialis.r').delta` 約 −0.26，`partByKey('brachialis.l').delta` 為 0 |
| 痠痛點 | 勾選「顯示痠痛點」後按「滑手機」 | 前臂上有橘紅點（旋前圓肌、肱橈肌）與藍點（伸指肌、旋後肌） |
| 列車線 | 按「中立」，點「淺後臂線」、按「後」 | 軌道從斜方肌、三角肌一路到手腕背側 |

最後截圖（滑手機側面、淺後臂線背面），再用 resize_window 的 mobile 預設確認版面沒有水平捲軸後還原。

- [ ] **Step 3：提交**

```bash
git add 解剖列車網頁/index.html 解剖列車網頁/app.js 解剖列車網頁/model.js docs/superpowers/specs/2026-10-25-anatomy-trains-3d-upper-limb-design.md
git commit -m "feat: upper-limb viewer build (forearm, hand, elbow, forearm rotation and wrist)" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8：文件與收尾

**Files:**
- Modify: `README.md`、`解剖列車網頁/使用說明.txt`

**Interfaces:**
- 無新介面

- [ ] **Step 1：更新說明文件**

`README.md`：

````markdown
# 解剖列車 3D

3D 人體肌肉互動網頁：

- **拆解**：一層層關掉淺層、中層肌肉，或單獨隱藏、半透明、拉出某條肌肉，看到深層構造；隱藏的肌肉可以從清單逐條顯示回來。
- **連動**：改變姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾／後傾、高低肩、長短腳、滑手機，或用滑桿自訂；肩胛、肩關節、手肘、前臂旋轉、手腕可分左右）時，肌肉跟著骨頭變形，並用顏色標出《解剖列車》概念中的「鎖短」（紅）與「鎖長」（藍）。
- **痠痛點**：打開開關後，姿勢改變時會在鎖短、鎖長的肌肉上標出常見的痠痛點；說明卡寫出痠痛位置與轉移痛範圍。
- **中文說明**：點選肌肉或從肌肉清單搜尋，顯示起止點、作用、神經、所屬列車線、常見鎖短／鎖長情況與痠痛點。

目前完成第一階段（肩帶）、2A（軀幹、頸、頭皮、下肢）與上肢（前臂、手）：每側約 190 個部件、12 條列車線。足部內在肌、咀嚼肌，以及膝、踝、手指關節留到之後。

## 使用

雙擊 `解剖列車網頁/index.html`，用 Chrome 或 Edge 開啟，不需要網路。操作方式見 `解剖列車網頁/使用說明.txt`。

## 修改說明文字

所有中文說明都在 `解剖列車網頁/content.js`，用記事本修改引號內的文字，存檔時選 UTF-8。

## 開發

```bash
npm install
npm run fetch-data   # 下載 Z-Anatomy 原始 FBX 到 data/raw/（約 78 MB，不進 git）
npm run model        # 轉檔 → data/processed/（meta.json、meshes.bin）
npm test             # 單元測試（含 9 個姿勢與手肘、前臂、手腕的鎖短／鎖長檢查清單）
npm run serve        # 本機預覽 http://localhost:8124（修改 src/ 會自動重建；可加 -- --port=8125 換埠）
npm run build        # 產生 解剖列車網頁/app.js 與 model.js（提交前請執行）
```

程式碼在 `src/`（瀏覽器端）與 `tools/`（轉檔），設計見 `docs/superpowers/specs/`。

## 出處與授權

3D 模型資料來自：

- Z-Anatomy - The open source atlas of anatomy - CC-BY-SA 4.0（https://github.com/LluisV/Z-Anatomy）
- BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan（現行授權為 CC BY 4.0）

本專案轉檔後的模型資料（`data/processed/`、`解剖列車網頁/model.js`）同樣以 CC BY-SA 4.0 釋出。

肌肉說明、痠痛點與轉移痛是依解剖學教科書、Thomas Myers《解剖列車》與常見激痛點描述自行撰寫的摘要，**尚待物理治療師或醫師審閱**。

## 注意

教學示意用。長度變化以骨骼幾何計算（起止點距離；跨手肘、手腕的肌肉用力臂乘以轉角），不代表肌肉的活化程度或張力；預設姿勢的幅度刻意比一般人大，讓顏色看得出來。痠痛點與轉移痛為常見位置，不能取代專業評估。
````

`解剖列車網頁/使用說明.txt`：

```text
解剖列車 3D 使用說明

【開啟】
雙擊 index.html，用 Chrome 或 Edge 開啟（不需要網路）。第一次載入需要幾秒鐘。

【操作】
- 旋轉：滑鼠左鍵拖曳（平板：單指拖曳）
- 平移：滑鼠右鍵拖曳（平板：雙指拖曳）
- 縮放：滾輪（平板：雙指開合）
- 視角：上方「前、後、右側、左側」回到全身視角
- 點選肌肉：右側出現中文說明，可「隱藏」「半透明」「拉出」
- 肌肉清單：左側可用中文或英文搜尋，也可只看頭頸、軀幹、上肢或下肢；按「左」「右」會轉到看得到的方向並選取
- 拆解：左側關掉「淺層」就能看到中層；「爆炸圖」讓肌肉往外散開；隱藏或半透明的肌肉會列在下方，可逐條「顯示」或「全部恢復」；「復原」回到原狀
- 姿勢：下方按預設姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾、骨盆後傾、高低肩、長短腳、滑手機）會播放動畫，也可以拖動滑桿自由調整；上肢（肩胛、肩關節、手肘、前臂旋轉、手腕）可選「兩側一起」或只調左側、右側
- 顏色：中立姿勢時是肌肉色；改變姿勢後，紅色＝鎖短、藍色＝鎖長、灰色＝長度不變
- 痠痛點：勾選左側「顯示痠痛點」後，姿勢改變時會在鎖短（橘紅點）、鎖長（藍點）的肌肉上標出常見痠痛點；選取的肌肉以黃點標示
- 列車線：上方選一條線，線上的肌肉會加亮並用軌道串起來

【修改說明文字】
用記事本開啟 content.js，修改引號內的文字，存檔時選 UTF-8。

【注意】
教學示意用。長度變化以骨骼幾何計算，不代表肌肉用力的程度；預設姿勢的幅度刻意放大；手指關節沒有建模，手指不會彎。痠痛點與轉移痛為常見位置，不能取代專業評估。
```

- [ ] **Step 2：最後檢查**

執行：

```bash
npm test && npm run build && git status --short
```

預期：測試全部 PASS；打包成功；`git status` 只列出 README.md、使用說明.txt（以及打包產物若有變）。

提醒使用者：雙擊 `解剖列車網頁/index.html`（file://）確認離線可用、載入時間可接受。

- [ ] **Step 3：提交**

```bash
git add README.md 解剖列車網頁/使用說明.txt 解剖列車網頁/app.js 解剖列車網頁/index.html
git commit -m "docs: README and user guide for the upper limb" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 4：收尾**：用 superpowers:finishing-a-development-branch，請使用者決定是否合併回 main。
