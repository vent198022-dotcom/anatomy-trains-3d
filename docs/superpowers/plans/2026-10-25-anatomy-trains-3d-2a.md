# 解剖列車 3D 2A（軀幹、頸、頭皮、下肢＋痠痛點）實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal：** 把肩帶原型擴充到全身的軀幹、頸部、頭皮與下肢（每側約 150 個部件），加入脊椎、骨盆、下肢骨段與六種新姿勢，畫出 12 條列車線，並在鎖短／鎖長的肌肉上標出痠痛點。

**Architecture：** 轉檔程式依附著骨頭自動決定部件跨過的骨段；跨三個以上骨段的部件在轉檔時算好每頂點的兩骨段權重與中間轉折點，網頁端混合骨段矩陣變形。骨架以骨盆繞髖關節轉、雙腳固定、腰椎代償計算。痠痛點是轉檔時選定的表淺頂點，網頁依開關與長度狀態顯示。只重算有動到的部件，法向量延後補算。

**Tech Stack：** 同第一階段：three 0.170.0、esbuild 0.24.0、meshoptimizer 1.3.0、`node --test`。

設計文件：`docs/superpowers/specs/2026-10-25-anatomy-trains-3d-2a-design.md`

## Global Constraints

- 所有指令都在專案根目錄 `C:\Users\user\Desktop\AI用\claue 工作\解剖列車3D` 執行（Git Bash）；在分支 `feat/full-body-2a` 上做，不直接改 main。
- 第一階段的限制全部沿用：可用 `file://` 雙擊開啟（不可 fetch、不可 ES module）、座標單位公分、+y 上、+z 前、右側在 −x、使用者看到的文字用繁體中文、程式註解用繁體中文。
- 長度配色：四捨五入到整數 % 後，|Δ| < 3% 灰色、≥ 20% 最飽和；紅＝鎖短、藍＝鎖長；中立姿勢顯示自然肌肉色；筋膜、肌腱、橫膈不計算長度。
- 預算：三角面 ≤ 80 萬、`meshes.bin` ≤ 7.5 MB（`model.js` ≤ 10 MB）；全身動作每幀 < 40 毫秒。
- 頁尾與 README 標示模型出處，並註明「痠痛點與轉移痛為常見位置，不能取代專業評估」。
- Git 只在本機；每個 commit 訊息結尾加上 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`。
- `解剖列車網頁/app.js`、`model.js` 是產生的檔案：提交前 `npm run build`；`npm run serve` 只在記憶體打包，不會改到它們。
- Task 2 到 Task 6 之間，`content.test`、舊的圓肩測試會暫時失敗；每個任務只要求它自己的測試通過，Task 6 起全部測試要通過。

## 檔案結構（新增或改動）

| 路徑 | 責任 |
|---|---|
| `tools/lib/skin.mjs` | 多骨段權重、轉折點、痠痛點頂點 |
| `tools/parts.js` | 全部部件（附著骨頭、層、分區、痠痛點位置）與骨頭來源 |
| `tools/convert.mjs` | 依附著骨頭決定骨段；多骨段權重與轉折點；痠痛點 |
| `src/rig/segments.js`、`presets.js`、`rig.js` | 24 個骨段、8 個預設姿勢與分組滑桿、全身骨架 |
| `src/muscles/length.js`、`deform.js` | 多轉折點長度、多骨段變形 |
| `src/trains/lines.js`、`track.js` | 12 條線（含對側站）、最近端點連接 |
| `src/app/display.js`、`controller.js` | 痠痛點顯示規則；變更偵測、延後補算法向量、痠痛點標記 |
| `src/ui/muscleList.js`、`viewBar.js` | 肌肉清單搜尋、視角按鈕 |
| `解剖列車網頁/content.js` | 148 條中文說明（含痠痛點、轉移痛）、12 條線、8 個姿勢、鎖短／鎖長提示 |

---

### Task 1：開分支；轉檔工具擴充（多骨段權重、痠痛點頂點、權重打包、擴大搜尋半徑、髖關節與脊椎轉軸）

**Files:**
- Create: `tools/lib/skin.mjs`、`test/skin.test.js`
- Modify: `tools/lib/pack.mjs`、`src/model/decode.js`、`tools/lib/attach.mjs`、`tools/lib/joints.mjs`、`test/pack.test.js`

**Interfaces:**
- Produces：`samplePoints(points, maxCount)`、`skinWeights(positions, segPoints, blend = 3): Uint8Array`（每頂點 s1、s2、w255）、`nearestSegment(p, segPoints)`、`axisT(positions, v, a, b)`、`chainVias(positions, skin, segIndices, a, b): [{ s, p, t }]`、`superficialVertex(positions, a, b, t, bonePoints): number`
- Produces：`packMeshes` 接受網格的 `skin`（entry 多 `sOffset`）；`decodeMesh` 回傳 `{ positions, indices, skin }`（沒有時為 null）
- Produces：`attachmentRegion(positions, grid, band = 0.5, maxRadius = 6)`；`refineEnds` 在附著區退化時退回平均位置
- Produces：`estimateJoints` 多回傳 `pivots: { L5, L4, L3, L2, L1, thoraxLow, thoraxMid, thoraxUp, neckLow, neckUp, head }` 與 `hip: { l, r }`（不再有 `neck`、`head` 欄位）

- [ ] **Step 0：從 main 開分支**

執行：

```bash
git checkout -b feat/full-body-2a && git status --short
```

預期：切到新分支、工作區乾淨。

- [ ] **Step 1：寫（或更新）測試**

`test/skin.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex, axisT } from '../tools/lib/skin.mjs';

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
```

`test/pack.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { packMeshes } from '../tools/lib/pack.mjs';
import { decodeMesh, base64ToBytes } from '../src/model/decode.js';

const a = { positions: new Float32Array([0, 0, 0, 10, 0, 0, 0, 20, 0]), indices: new Uint32Array([0, 1, 2]) };
const b = { positions: new Float32Array([5, 5, 5, -3, 1, 2, 4, 4, -6, 1, 1, 1]), indices: new Uint32Array([0, 1, 2, 0, 2, 3]) };

test('打包、轉 base64 再解碼：座標誤差在量化範圍內，索引不變', () => {
  const { quant, entries, bin } = packMeshes([a, b]);
  const bytes = base64ToBytes(Buffer.from(bin).toString('base64'));
  for (const [mesh, entry] of [[a, entries[0]], [b, entries[1]]]) {
    const out = decodeMesh(bytes, quant, entry);
    assert.deepEqual(Array.from(out.indices), Array.from(mesh.indices));
    for (let i = 0; i < mesh.positions.length; i++) assert.ok(Math.abs(out.positions[i] - mesh.positions[i]) < 1e-3);
  }
});

test('超過 65535 個頂點改用 32 位元索引', () => {
  const n = 70000;
  const mesh = { positions: new Float32Array(n * 3), indices: new Uint32Array([0, 1, n - 1]) };
  const { quant, entries, bin } = packMeshes([mesh]);
  assert.equal(entries[0].wide, true);
  assert.deepEqual(Array.from(decodeMesh(bin, quant, entries[0]).indices), [0, 1, n - 1]);
});

test('位元組沒有對齊也能解碼', () => {
  const { quant, entries, bin } = packMeshes([a, b]);
  const shifted = new Uint8Array(bin.length + 1);
  shifted.set(bin, 1);
  const out = decodeMesh(shifted.subarray(1), quant, entries[1]);
  assert.deepEqual(Array.from(out.indices), Array.from(b.indices));
});

test('多骨段權重（skin）一起打包、解碼', () => {
  const skin = new Uint8Array([0, 1, 128, 2, 0, 255, 1, 1, 0]);
  const { quant, entries, bin } = packMeshes([a, { ...a, skin }]);
  assert.equal(decodeMesh(bin, quant, entries[0]).skin, null);
  assert.deepEqual(Array.from(decodeMesh(bin, quant, entries[1]).skin), Array.from(skin));
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/skin.test.js test/pack.test.js test/attach.test.js test/joints.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/skin.mjs`；pack 的權重測試失敗

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
```

`tools/lib/pack.mjs`：

```js
// 把多個網格量化（16 位元座標）並串成一個二進位檔；網格可附帶 skin（Uint8Array，每頂點 3 位元組）

export function packMeshes(meshes) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const m of meshes) {
    for (let i = 0; i < m.positions.length; i++) {
      min[i % 3] = Math.min(min[i % 3], m.positions[i]);
      max[i % 3] = Math.max(max[i % 3], m.positions[i]);
    }
  }
  const chunks = [];
  const entries = [];
  let offset = 0;
  const push = bytes => {
    const pad = (4 - (offset % 4)) % 4; // 每段對齊 4 位元組，解碼時可直接建 typed array
    if (pad) {
      chunks.push(new Uint8Array(pad));
      offset += pad;
    }
    const at = offset;
    chunks.push(bytes);
    offset += bytes.length;
    return at;
  };
  for (const m of meshes) {
    const vCount = m.positions.length / 3;
    const q = new Int16Array(m.positions.length);
    for (let i = 0; i < q.length; i++) {
      const a = i % 3;
      const span = max[a] - min[a] || 1;
      q[i] = Math.round(((m.positions[i] - min[a]) / span) * 65535) - 32768;
    }
    const wide = vCount > 65535;
    const idx = wide ? Uint32Array.from(m.indices) : Uint16Array.from(m.indices);
    const vOffset = push(new Uint8Array(q.buffer));
    const iOffset = push(new Uint8Array(idx.buffer));
    const entry = { vOffset, vCount, iOffset, iCount: idx.length, wide };
    // 多骨段肌肉：每個頂點 3 位元組（兩個骨段序號＋第二骨段權重 0–255）
    if (m.skin) entry.sOffset = push(m.skin);
    entries.push(entry);
  }
  const bin = new Uint8Array(offset);
  let o = 0;
  for (const c of chunks) {
    bin.set(c, o);
    o += c.length;
  }
  return { quant: { min, max }, entries, bin };
}
```

`src/model/decode.js`：

```js
// 解開 tools/lib/pack.mjs 打包的網格

export function base64ToBytes(text) {
  const bin = atob(text);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// entry：{ vOffset, vCount, iOffset, iCount, wide, sOffset? }；有 sOffset 時另外回傳 skin（每頂點 3 位元組）
export function decodeMesh(bytes, quant, entry) {
  const buf = bytes.byteOffset % 4 ? bytes.slice() : bytes; // typed array 需要對齊
  const q = new Int16Array(buf.buffer, buf.byteOffset + entry.vOffset, entry.vCount * 3);
  const positions = new Float32Array(q.length);
  for (let i = 0; i < q.length; i++) {
    const a = i % 3;
    positions[i] = quant.min[a] + ((q[i] + 32768) / 65535) * (quant.max[a] - quant.min[a]);
  }
  const Index = entry.wide ? Uint32Array : Uint16Array;
  const indices = new Index(buf.buffer, buf.byteOffset + entry.iOffset, entry.iCount).slice();
  const skin = entry.sOffset === undefined ? null : buf.slice(entry.sOffset, entry.sOffset + entry.vCount * 3);
  return { positions, indices, skin };
}
```

`tools/lib/attach.mjs`：

```js
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
export function attachmentRegion(positions, grid, band = 0.5, maxRadius = 6) {
  const n = positions.length / 3;
  const dist = new Float32Array(n);
  let dmin = Infinity;
  for (let v = 0; v < n; v++) {
    const d = grid.nearest(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2], maxRadius);
    dist[v] = d;
    if (d < dmin) dmin = d;
  }
  if (!Number.isFinite(dmin)) throw new Error(`肌肉離指定的骨頭超過 ${maxRadius} 公分，請檢查 parts.js 的骨頭清單`);
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
  const pick = (region, nearA) => {
    const kept = region.indices.filter(v => (nearA ? t(v) <= endFrac : t(v) >= 1 - endFrac));
    return kept.length ? centroidOf(positions, kept) : region.centroid; // 兩端重合等退化情況
  };
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
node --test test/skin.test.js test/pack.test.js test/attach.test.js test/joints.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/skin.test.js test/pack.test.js tools/lib/skin.mjs tools/lib/pack.mjs src/model/decode.js tools/lib/attach.mjs tools/lib/joints.mjs
git commit -m "feat: converter support for multi-segment skinning, pain-point vertices and hip/spine pivots" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2：2A 部件清單、骨段與轉檔

**Files:**
- Modify: `tools/parts.js`（全部重寫：約 148 個部件、新的骨頭來源）、`src/rig/segments.js`、`tools/convert.mjs`
- Modify: `test/parts.test.js`、`test/data.test.js`
- 產出（進 git）：`data/processed/meta.json`、`data/processed/meshes.bin`

**Interfaces:**
- Consumes：Task 1 的全部工具
- Produces：`PARTS[i] = { id, zName, zNames, unsided, layer, region, attach: [{ bones }], via, measure, maxGap, tp }`；`AXIAL`、`SEGMENT_KEYS`（24 個）、`segKey`
- Produces：`meta.parts[i]` 多了 `region`、`skinSegs`（null 或骨段名稱陣列）、`vias: [{ seg, p }]`（取代 `via`）、`tps`（頂點序號陣列）、`sOffset`；中線部件的 `side` 為 `'m'`
- 注意：這個任務之後，`test/roundedShoulders.test.js`、`test/content.test.js` 會暫時失敗（舊骨架讀不到新的關節欄位、新部件還沒有說明），分別在 Task 3、Task 6 修好。

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
  assert.equal(SEGMENT_KEYS.length, AXIAL.length + 12);
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

預期：FAIL：部件數不到 140、`AXIAL` 不存在、資料沒有 `skinSegs` 等。

- [ ] **Step 3：寫部件清單、骨段與轉檔程式**

`src/rig/segments.js`：

```js
// 骨段名稱：軀幹與頭頸（中線）只有一個；肩帶、上肢、下肢分左右（例如 'scapula.r'）
export const AXIAL = ['pelvis', 'L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'];
const LIMB = ['clavicle', 'scapula', 'arm', 'femur', 'shank', 'foot'];
export const SIDED = new Set(LIMB);

export const SEGMENT_KEYS = [...AXIAL, ...LIMB.flatMap(s => [`${s}.l`, `${s}.r`])];

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}
```

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
  part('bicepsLong', 'Long head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, ['Radius.{s}']], { tp: [0.6] }),
  // Z-Anatomy 的短頭網格止於肘上方（共同肌腱沒有建模），離橈骨約 4 公分
  part('bicepsShort', 'Short head of biceps brachii', 'superficial', 'upperLimb', [SCAPULA, ['Radius.{s}']], { maxGap: 5, tp: [0.6] }),
  part('coracobrachialis', 'Coracobrachialis muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('tricepsLong', 'Long head of triceps brachii', 'superficial', 'upperLimb', [SCAPULA, ['Ulna.{s}']], { tp: [0.35] }),
  part('tricepsLat', 'Lateral head of triceps brachii', 'superficial', 'upperLimb', [HUMERUS, ['Ulna.{s}']]),
  part('tricepsMed', 'Medial head of triceps brachii', 'deep', 'upperLimb', [HUMERUS, ['Ulna.{s}']], { tp: [0.7] }),
  part('latissimus', 'Latissimus dorsi muscle', 'superficial', 'trunk', [[...Ts(7, 12), ...Ls(1, 5), 'Hip bone.{s}', ...ribs(9, 12)], HUMERUS], { tp: [0.75] }),
  part('teresMajor', 'Teres major muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('supraspinatus', 'Supraspinatus muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('infraspinatus', 'Infraspinatus muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.35] }),
  part('teresMinor', 'Teres minor muscle', 'middle', 'upperLimb', [SCAPULA, HUMERUS]),
  part('subscapularis', 'Subscapularis muscle', 'deep', 'upperLimb', [SCAPULA, HUMERUS], { tp: [0.7] }),

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
  { segment: 'arm', sided: true, groups: ['Bones of free part of upper limb.g'] },
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
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex } from './lib/skin.mjs';
import { estimateJoints } from './lib/joints.mjs';
import { packMeshes } from './lib/pack.mjs';
import { PARTS, BONE_SEGMENTS, PART_RATIO, BONE_RATIO } from './parts.js';
import { segKey } from '../src/rig/segments.js';

const RAW = 'data/raw';
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
    const regions = groups.map(names => attachmentRegion(geo.positions, new PointGrid(concat(names.map(n => bone(n).positions)), 1), 0.5, Math.ceil(p.maxGap) + 1));
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

    let skin = null, skinSegs = null;
    let vias = p.via ? [{ seg: segB, p: round(midBellyCentroid(geo.positions, ends.a, ends.b)) }] : [];
    if (segs.length > 2) {
      // 跨三個以上骨段：每個頂點跟著最近的兩個骨段；端點群組以外的骨段各加一個轉折點
      skin = skinWeights(geo.positions, segPoints);
      skinSegs = segs;
      const endSegs = new Set([...groups[0], ...groups[groups.length - 1]].map(n => bone(n).segment));
      const middle = segs.map((s, i) => i).filter(i => !endSegs.has(segs[i]));
      vias = chainVias(geo.positions, skin, middle, ends.a, ends.b).map(v => ({ seg: segs[v.s], p: round(v.p) }));
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

預期：約 35 秒，印出「完成：骨頭 233 個、肌肉部件 294 個、三角面 722259、meshes.bin 6.6 MB」（數字可能略有差異），沒有「附著區離骨頭太遠」。

- [ ] **Step 5：執行測試，確認通過**

執行：

```bash
node --test test/parts.test.js test/data.test.js
```

預期：全部 PASS。若附著區距離失敗，訊息會指出部件 key：檢查 `tools/parts.js` 的骨頭清單或 `maxGap`，改完重跑 Step 4。

- [ ] **Step 6：提交**

```bash
git add src/rig/segments.js tools/parts.js tools/convert.mjs test/parts.test.js test/data.test.js data/processed
git commit -m "feat: 2A part list (trunk, neck, scalp, lower limb) and 24-segment conversion" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3：姿勢參數與全身骨架

**Files:**
- Modify: `src/rig/presets.js`、`src/rig/rig.js`、`test/presets.test.js`、`test/rig.test.js`

**Interfaces:**
- Produces：`NEUTRAL` 多了 `thoracicFlexion`、`pelvicTilt`、`pelvicObliquity`；`PRESETS` 8 個（neutral、roundedShoulders、forwardHead、kyphosis、anteriorTilt、posteriorTilt、unevenShoulders、legLength）；`SLIDERS[i].group`（sagittal／frontal／shoulder）、`SLIDER_GROUPS`
- Produces：`computePose(joints, params)` 回傳 24 個骨段的矩陣；`LIMITS.pelvicTilt = 18`、`LIMITS.pelvicObliquity = 8`、`LIMITS.thoracicFlexion = 30`

- [ ] **Step 1：寫（或更新）測試**

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

test('8 個預設姿勢', () => {
  assert.deepEqual(Object.keys(PRESETS), ['neutral', 'roundedShoulders', 'forwardHead', 'kyphosis', 'anteriorTilt', 'posteriorTilt', 'unevenShoulders', 'legLength']);
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
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/presets.test.js test/rig.test.js
```

預期：FAIL，8 個預設姿勢的測試失敗；骨架測試讀不到 `pivots`

- [ ] **Step 3：實作**

`src/rig/presets.js`：

```js
// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具
//
// 分左右的參數存成 'scapProtraction.l'、'scapProtraction.r'；頭頸、胸椎、骨盆在身體中線，不分左右。

export const SIDED_PARAMS = ['scapProtraction', 'scapElevation', 'shoulderRotation'];
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
};

// group：滑桿分組（前後方向／左右方向／肩膀）
export const SLIDERS = [
  { key: 'headForward', group: 'sagittal', sided: false, label: '頭頸前移', minLabel: '後收', maxLabel: '前移' },
  { key: 'thoracicFlexion', group: 'sagittal', sided: false, label: '胸椎伸展／屈曲', minLabel: '伸展', maxLabel: '駝背' },
  { key: 'pelvicTilt', group: 'sagittal', sided: false, label: '骨盆後傾／前傾', minLabel: '後傾', maxLabel: '前傾' },
  { key: 'pelvicObliquity', group: 'frontal', sided: false, label: '骨盆側傾（長短腳）', minLabel: '右側低', maxLabel: '左側低' },
  { key: 'scapProtraction', group: 'shoulder', sided: true, label: '肩胛前伸／後縮', minLabel: '後縮', maxLabel: '前伸' },
  { key: 'scapElevation', group: 'shoulder', sided: true, label: '肩胛上提／下壓', minLabel: '下壓', maxLabel: '上提' },
  { key: 'shoulderRotation', group: 'shoulder', sided: true, label: '肩關節內旋／外旋', minLabel: '外旋', maxLabel: '內旋' },
];

export const SLIDER_GROUPS = [
  ['sagittal', '前後方向'],
  ['frontal', '左右方向'],
  ['shoulder', '肩膀（可分左右）'],
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
};

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
    mats.set(`clavicle.${s}`, thoraxUp.clone().multiply(clavicle));
    mats.set(`scapula.${s}`, thoraxUp.clone().multiply(scapula));
    mats.set(`arm.${s}`, thoraxUp.clone().multiply(arm));
  }
  return mats;
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/presets.test.js test/rig.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/presets.test.js test/rig.test.js src/rig/presets.js src/rig/rig.js
git commit -m "feat: full-body rig (pelvis with planted feet, lumbar compensation, kyphosis, leg-length) and 8 presets" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4：多轉折點長度與多骨段變形

**Files:**
- Modify: `src/muscles/length.js`、`src/muscles/deform.js`、`test/muscles.test.js`

**Interfaces:**
- Produces：`restPath`／`partPath` 讀 `part.vias`（陣列）；`lengthDelta` 在兩端距離 < 0.5 公分時回傳 0
- Produces：`deformChain(rest, skin, segKeys, mats, out)`

- [ ] **Step 1：寫（或更新）測試**

`test/muscles.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { polylineLength, lengthDelta } from '../src/muscles/length.js';
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

預期：FAIL，`deformChain` 不存在；轉折點測試讀 `vias` 失敗

- [ ] **Step 3：實作**

`src/muscles/length.js`：

```js
// 肌肉長度：起點 →（轉折點，可多個）→ 止點的折線長，與中立姿勢比較

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

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）；兩端幾乎重合（例如兩端都在骨盆內）時視為 0
export function lengthDelta(part, mats) {
  const rest = polylineLength(restPath(part));
  return rest < 0.5 ? 0 : polylineLength(partPath(part, mats)) / rest - 1;
}
```

`src/muscles/deform.js`：

```js
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
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/muscles.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/muscles.test.js src/muscles/length.js src/muscles/deform.js
git commit -m "feat: multi-via muscle length and multi-segment deformation" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5：8 個姿勢的檢查清單

**Files:**
- Create: `test/postures.test.js`
- Delete: `test/roundedShoulders.test.js`（已併入）

**Interfaces:**
- Consumes：`data/processed/meta.json`、`computePose`、`PRESETS`、`lengthDelta`

- [ ] **Step 1：寫檢查清單測試、刪掉舊的圓肩測試**

`test/postures.test.js`：

```js
// 對照書本的檢查清單：每個預設姿勢下，這些肌肉的鎖短／鎖長方向必須成立（用真實模型資料）
// 只列幾何上明確、離 3% 門檻有餘裕的肌肉；變化很小的（例如骨盆前傾時的腰大肌、股直肌）不列入，畫面上照實顯示
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { computePose } from '../src/rig/rig.js';
import { PRESETS } from '../src/rig/presets.js';
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

執行：

```bash
git rm test/roundedShoulders.test.js
```

預期：刪除舊檔。

- [ ] **Step 2：執行**

執行：

```bash
node --test test/postures.test.js
```

預期：全部 PASS；診斷輸出列出每個姿勢變化最大的 8 個部件（例如頭前傾：頭後小直肌 −28%、頸棘肌 +27%）。若失敗，只能調整 `LIMITS` 或預設姿勢（理由要寫進設計文件），不可以改測試的期望方向。

- [ ] **Step 3：提交**

```bash
git add test/postures.test.js test/roundedShoulders.test.js
git commit -m "test: locked-short/long checklist for all 8 postures" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6：中文說明（含痠痛點）與 12 條列車線

**Files:**
- Modify: `解剖列車網頁/content.js`（全部重寫）、`src/trains/lines.js`、`test/content.test.js`

**Interfaces:**
- Produces：`window.CONTENT = { muscles, lines, postures, painHints }`；每條肌肉多 `painPoints`、`referredPain`
- Produces：`LINES[i].stations[j] = { ids, opp }`（`opp` 表示對側）；`linePartIds(lineId)`

- [ ] **Step 1：寫（或更新）測試**

`test/content.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { PARTS } from '../tools/parts.js';
import { LINES, linePartIds } from '../src/trains/lines.js';
import { PRESETS } from '../src/rig/presets.js';

// content.js 是給瀏覽器用的一般 script（設定 window.CONTENT），在沙箱裡執行取出
const sandbox = { window: {} };
vm.runInNewContext(readFileSync('解剖列車網頁/content.js', 'utf8'), sandbox);
const C = sandbox.window.CONTENT;
const FIELDS = ['name', 'en', 'latin', 'origin', 'insertion', 'action', 'nerve', 'lockedShort', 'lockedLong', 'painPoints', 'referredPain'];

test('每個部件都有完整的中文說明（含痠痛點、轉移痛）', () => {
  for (const p of PARTS) {
    const m = C.muscles[p.id];
    assert.ok(m, `缺少 ${p.id}`);
    for (const f of FIELDS) assert.ok(typeof m[f] === 'string' && m[f].trim(), `${p.id}.${f} 是空的`);
    assert.ok(Array.isArray(m.lines), `${p.id}.lines`);
    for (const l of m.lines) assert.ok(C.lines[l], `${p.id} 的列車線「${l}」沒有說明`);
  }
  assert.equal(Object.keys(C.muscles).length, PARTS.length, '說明裡有多餘的部件');
});

test('有痠痛點標記的肌肉，說明裡也寫了痠痛位置', () => {
  for (const p of PARTS.filter(q => q.tp.length)) assert.notEqual(C.muscles[p.id].painPoints, '—', p.id);
});

test('列車線的部件與說明一致（雙向）', () => {
  for (const line of LINES) {
    assert.ok(C.lines[line.name], line.name);
    const ids = linePartIds(line.id);
    for (const id of ids) {
      assert.ok(PARTS.find(p => p.id === id), `${line.name}：${id} 不是部件`);
      assert.ok(C.muscles[id].lines.includes(line.name), `${id} 的說明少了 ${line.name}`);
    }
    for (const [id, m] of Object.entries(C.muscles)) {
      if (m.lines.includes(line.name)) assert.ok(ids.has(id), `${id} 寫了 ${line.name}，但軌道上沒有它`);
    }
  }
});

test('linePartIds', () => {
  assert.ok(linePartIds('dfal').has('pecMinor'));
  assert.ok(linePartIds('spl').has('rhomboidMajor'));
  assert.equal(linePartIds('nope'), null);
});

test('每個預設姿勢都有說明；鎖短、鎖長的痠痛提示都在', () => {
  for (const k of Object.keys(PRESETS)) assert.ok(C.postures[k], k);
  assert.ok(C.painHints.short && C.painHints.long);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/content.test.js
```

預期：FAIL，缺少新部件的說明、`painPoints` 欄位、`painHints`

- [ ] **Step 3：實作**

`src/trains/lines.js`：

```js
// 解剖列車線（2A：12 條線在軀幹、頸、下肢與肩、上臂的部分；手臂線延伸到手留到 2B）
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
  { id: 'sfal', name: '淺前臂線', stations: [['pecMajorClav', 'pecMajorStern', 'pecMajorAbd', 'latissimus']] },
  { id: 'dfal', name: '深前臂線', stations: [['pecMinor', 'clavipectoralFascia'], ['bicepsShort', 'bicepsLong', 'coracobrachialis']] },
  { id: 'sbal', name: '淺後臂線', stations: [['trapUpper', 'trapMiddle', 'trapLower'], ['deltoidAnt', 'deltoidMid', 'deltoidPost']] },
  {
    id: 'dbal',
    name: '深後臂線',
    stations: [
      ['rhomboidMajor', 'rhomboidMinor', 'levatorScapulae'],
      ['supraspinatus', 'infraspinatus', 'teresMinor', 'subscapularis'],
      ['tricepsLong', 'tricepsLat', 'tricepsMed'],
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

`解剖列車網頁/content.js`：

```js
// 解剖列車 3D 的中文說明
// 用記事本修改引號內的文字即可；存檔時請選 UTF-8。
// 名詞依國家教育研究院「解剖學名詞」；列車線概念依 Thomas Myers《解剖列車》、痠痛點與轉移痛依常見的激痛點（trigger point）描述，皆為自行整理，非原文。
// 內容尚待物理治療師或醫師審閱。
window.CONTENT = { muscles: {}, lines: {}, postures: {}, painHints: {} };

// ── 肩帶（第一階段） ──
Object.assign(window.CONTENT.muscles, {
  pecMajorClav: {
    name: '胸大肌鎖骨部', en: 'Pectoralis major, clavicular head', latin: 'Pars clavicularis musculi pectoralis majoris',
    origin: '鎖骨內側半的前面', insertion: '肱骨大結節嵴（結節間溝外側唇）',
    action: '肩關節屈曲、水平內收、內旋', nerve: '胸外側神經（C5–C7）', lines: ['淺前臂線'],
    lockedShort: '肩關節長期內旋、手臂長時間在身體前方工作（打字、開車）', lockedLong: '肩胛長期過度後縮、手臂長時間外展外旋',
    painPoints: '鎖骨下方、靠近腋前的肌腹', referredPain: '肩膀前側、三角肌前部',
    notes: '幾何計算顯示圓肩時此部略為拉長：起點（鎖骨）會隨肩胛一起前移。這與「胸大肌緊繃」的常見說法不同，請審閱。',
  },
  pecMajorStern: {
    name: '胸大肌胸肋部', en: 'Pectoralis major, sternocostal head', latin: 'Pars sternocostalis musculi pectoralis majoris',
    origin: '胸骨前面、第 1–6 肋軟骨', insertion: '肱骨大結節嵴（結節間溝外側唇）',
    action: '肩關節內收、內旋；由屈曲位置伸展肩關節', nerve: '胸外側神經與胸內側神經（C5–T1）', lines: ['淺前臂線'],
    lockedShort: '圓肩、駝背、長期縮胸或抱胸姿勢', lockedLong: '少見；肩胛長期過度後縮、挺胸時',
    painPoints: '胸骨旁、乳頭上方的肌腹，以及腋窩前緣（腋前皺襞）', referredPain: '前胸、乳房區、手臂內側，嚴重時到前臂尺側',
    notes: '',
  },
  pecMajorAbd: {
    name: '胸大肌腹部', en: 'Pectoralis major, abdominal part', latin: 'Pars abdominalis musculi pectoralis majoris',
    origin: '腹外斜肌腱膜（腹直肌鞘前層）', insertion: '肱骨大結節嵴的最上方',
    action: '肩關節內收、內旋；手臂固定時把軀幹往上拉', nerve: '胸內側神經（C8–T1）', lines: ['淺前臂線', '前功能線'],
    lockedShort: '圓肩合併胸廓下沉、駝背', lockedLong: '手臂長時間高舉過頭',
    painPoints: '下胸外側、肋弓上方的肌腹', referredPain: '下胸、乳房下緣',
    notes: '',
  },
  pecMinor: {
    name: '胸小肌', en: 'Pectoralis minor', latin: 'Musculus pectoralis minor',
    origin: '第 3–5 肋骨前面，近肋軟骨處', insertion: '肩胛骨喙突',
    action: '使肩胛骨前傾、下壓、前伸；肩胛骨固定時協助提肋（輔助吸氣）', nerve: '胸內側神經（C8–T1）', lines: ['深前臂線'],
    lockedShort: '圓肩、駝背、長時間低頭使用手機或電腦', lockedLong: '少見；肩胛骨長期過度後縮、後傾時',
    painPoints: '喙突下方，以及第 3–5 肋骨附著處', referredPain: '肩膀前側、前胸，沿手臂內側到小指側；鎖短時可能壓迫臂神經叢，造成手麻',
    notes: '',
  },
  subclavius: {
    name: '鎖骨下肌', en: 'Subclavius', latin: 'Musculus subclavius',
    origin: '第 1 肋骨與第 1 肋軟骨交界處', insertion: '鎖骨中段下面（鎖骨下肌溝）',
    action: '把鎖骨往內下拉，穩定胸鎖關節', nerve: '鎖骨下肌神經（C5–C6）', lines: [],
    lockedShort: '肩帶長期下壓、前伸', lockedLong: '長期聳肩',
    painPoints: '鎖骨中段正下方', referredPain: '肩膀前側、上臂前面，沿前臂橈側到拇指與食指',
    notes: '包覆在鎖胸筋膜內，與深前臂線關係密切。',
  },
  clavipectoralFascia: {
    name: '鎖胸筋膜', en: 'Clavipectoral fascia', latin: 'Fascia clavipectoralis',
    origin: '鎖骨（包覆鎖骨下肌）', insertion: '向下包覆胸小肌，延續到腋筋膜；外側附著於喙突',
    action: '連結鎖骨、胸小肌與腋窩，是深前臂線在胸前的筋膜連續', nerve: '無（筋膜組織）', lines: ['深前臂線'],
    lockedShort: '圓肩時隨胸小肌一起處於縮短位置', lockedLong: '肩胛長期後縮時',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化，姿勢改變時以灰色顯示。',
  },
  serratusAnterior: {
    name: '前鋸肌', en: 'Serratus anterior', latin: 'Musculus serratus anterior',
    origin: '第 1–8（或 9）肋骨外側面', insertion: '肩胛骨內側緣的前面（肋面）',
    action: '肩胛骨前伸、上迴旋，使肩胛骨貼緊胸廓', nerve: '胸長神經（C5–C7）', lines: ['螺旋線'],
    lockedShort: '圓肩（肩胛長期前伸）', lockedLong: '肩胛長期後縮',
    painPoints: '腋中線上、約第 5–6 肋骨的肌齒', referredPain: '胸廓側面，以及肩胛骨下角內側；深呼吸時側胸刺痛（岔氣感）',
    notes: '',
  },
  trapUpper: {
    name: '上斜方肌', en: 'Trapezius, upper (descending) part', latin: 'Pars descendens musculi trapezii',
    origin: '枕外隆凸、上項線內側 1/3、項韌帶', insertion: '鎖骨外側 1/3 後緣',
    action: '肩胛骨上提、上迴旋；頭頸側屈並轉向對側；兩側同時收縮時伸展頭頸', nerve: '副神經（第十一對腦神經）；本體感覺經 C3–C4', lines: ['淺後臂線'],
    lockedShort: '長期聳肩、壓力性肩頸緊繃', lockedLong: '肩帶長期下壓、垂肩；圓肩時鎖骨前移也會拉長',
    painPoints: '肩膀最高點（肩井穴一帶）的肌腹前緣', referredPain: '頸部側後方、耳後，往上到太陽穴與眼眶外側（緊張型頭痛）',
    notes: '',
  },
  trapMiddle: {
    name: '中斜方肌', en: 'Trapezius, middle (transverse) part', latin: 'Pars transversa musculi trapezii',
    origin: 'C7–T3 棘突', insertion: '肩峰內側緣、肩胛棘上緣',
    action: '肩胛骨後縮', nerve: '副神經（第十一對腦神經）', lines: ['淺後臂線'],
    lockedShort: '肩胛長期後縮（過度挺胸、軍人姿勢）', lockedLong: '圓肩、駝背',
    painPoints: '肩胛骨內緣與脊椎之間（靠近肩胛棘根）', referredPain: '肩胛骨之間灼熱或痠痛，靠近脊椎',
    notes: '',
  },
  trapLower: {
    name: '下斜方肌', en: 'Trapezius, lower (ascending) part', latin: 'Pars ascendens musculi trapezii',
    origin: 'T4–T12 棘突', insertion: '肩胛棘內側端（棘根）',
    action: '肩胛骨下壓、後縮、上迴旋', nerve: '副神經（第十一對腦神經）', lines: ['淺後臂線'],
    lockedShort: '少見；肩胛長期下壓、後縮', lockedLong: '圓肩、肩胛前傾與上提',
    painPoints: '肩胛骨下角內下方的肌腹', referredPain: '頸部後側、乳突附近，以及肩胛骨上方',
    notes: '',
  },
  rhomboidMajor: {
    name: '大菱形肌', en: 'Rhomboid major', latin: 'Musculus rhomboideus major',
    origin: 'T2–T5 棘突', insertion: '肩胛骨內側緣（肩胛棘根到下角）',
    action: '肩胛骨後縮、上提、下迴旋', nerve: '肩胛背神經（C4–C5）', lines: ['深後臂線', '螺旋線'],
    lockedShort: '肩胛長期後縮、下迴旋', lockedLong: '圓肩、肩胛長期前伸',
    painPoints: '肩胛骨內緣，沿內緣一整排', referredPain: '肩胛骨內緣與脊椎之間的表淺痠痛，常被形容為「背上卡一塊」',
    notes: '',
  },
  rhomboidMinor: {
    name: '小菱形肌', en: 'Rhomboid minor', latin: 'Musculus rhomboideus minor',
    origin: 'C7–T1 棘突、項韌帶下部', insertion: '肩胛骨內側緣（肩胛棘根處）',
    action: '肩胛骨後縮、上提、下迴旋', nerve: '肩胛背神經（C4–C5）', lines: ['深後臂線', '螺旋線'],
    lockedShort: '肩胛長期後縮、下迴旋', lockedLong: '圓肩、肩胛長期前伸',
    painPoints: '肩胛骨上角內側、靠近肩胛棘根', referredPain: '肩胛骨內緣上段',
    notes: '',
  },
  levatorScapulae: {
    name: '提肩胛肌', en: 'Levator scapulae', latin: 'Musculus levator scapulae',
    origin: 'C1–C4 橫突後結節', insertion: '肩胛骨上角到肩胛棘根之間的內側緣',
    action: '肩胛骨上提、下迴旋；頸部側屈並轉向同側', nerve: '肩胛背神經（C5）與 C3–C4 頸神經', lines: ['深後臂線'],
    lockedShort: '長期聳肩、肩胛下迴旋、頭頸長期側傾', lockedLong: '頭前傾時頸段被拉長（常見於肩頸僵硬）',
    painPoints: '頸肩交界的轉角處，以及肩胛骨上角', referredPain: '頸肩交角、肩胛骨內緣；轉頭困難（落枕）',
    notes: '',
  },
  deltoidAnt: {
    name: '三角肌前部', en: 'Deltoid, anterior (clavicular) part', latin: 'Pars clavicularis musculi deltoidei',
    origin: '鎖骨外側 1/3 前緣', insertion: '肱骨三角肌粗隆',
    action: '肩關節屈曲、內旋、水平內收', nerve: '腋神經（C5–C6）', lines: ['淺後臂線'],
    lockedShort: '圓肩合併肩關節內旋', lockedLong: '肩關節長期伸展、外旋',
    painPoints: '肩膀前方、肌腹上段', referredPain: '肩膀前側與三角肌區域本身',
    notes: '',
  },
  deltoidMid: {
    name: '三角肌中部', en: 'Deltoid, middle (acromial) part', latin: 'Pars acromialis musculi deltoidei',
    origin: '肩峰外側緣', insertion: '肱骨三角肌粗隆',
    action: '肩關節外展', nerve: '腋神經（C5–C6）', lines: ['淺後臂線'],
    lockedShort: '手臂長時間外展（例如持續撐肘工作）', lockedLong: '手臂長期貼身下垂、肩胛下迴旋',
    painPoints: '肩膀外側、肌腹中段', referredPain: '肩膀外側',
    notes: '',
  },
  deltoidPost: {
    name: '三角肌後部', en: 'Deltoid, posterior (spinal) part', latin: 'Pars spinalis musculi deltoidei',
    origin: '肩胛棘下緣', insertion: '肱骨三角肌粗隆',
    action: '肩關節伸展、外旋、水平外展', nerve: '腋神經（C5–C6）', lines: ['淺後臂線'],
    lockedShort: '肩關節長期外旋、後伸', lockedLong: '圓肩合併肩關節內旋',
    painPoints: '肩膀後方、肌腹中段', referredPain: '肩膀後側，有時到上臂後面',
    notes: '',
  },
  bicepsLong: {
    name: '肱二頭肌長頭', en: 'Biceps brachii, long head', latin: 'Caput longum musculi bicipitis brachii',
    origin: '肩胛骨盂上結節', insertion: '橈骨粗隆、肱二頭肌腱膜',
    action: '肘關節屈曲、前臂旋後；輔助肩關節屈曲，穩定肱骨頭', nerve: '肌皮神經（C5–C6）', lines: ['深前臂線'],
    lockedShort: '長期屈肘（例如滑手機、抱小孩）', lockedLong: '肩關節伸展合併肘關節伸直',
    painPoints: '上臂前面的肌腹下段（手肘上方幾公分）', referredPain: '肩膀前側（結節間溝一帶）、手肘前面',
    notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
  },
  bicepsShort: {
    name: '肱二頭肌短頭', en: 'Biceps brachii, short head', latin: 'Caput breve musculi bicipitis brachii',
    origin: '肩胛骨喙突', insertion: '橈骨粗隆、肱二頭肌腱膜',
    action: '肘關節屈曲、前臂旋後；輔助肩關節屈曲、內收', nerve: '肌皮神經（C5–C6）', lines: ['深前臂線'],
    lockedShort: '圓肩合併肩胛前傾、長期屈肘', lockedLong: '肩關節伸展、外展合併肘關節伸直',
    painPoints: '上臂前內側的肌腹下段', referredPain: '肩膀前側、手肘前面',
    notes: '模型的短頭網格止於手肘上方（共同肌腱未建模）；第一階段沒有手肘關節。',
  },
  coracobrachialis: {
    name: '喙肱肌', en: 'Coracobrachialis', latin: 'Musculus coracobrachialis',
    origin: '肩胛骨喙突', insertion: '肱骨中段內側面',
    action: '肩關節屈曲、內收', nerve: '肌皮神經（C5–C7）', lines: ['深前臂線'],
    lockedShort: '圓肩合併手臂內收', lockedLong: '肩關節外展、伸展',
    painPoints: '腋窩前方、上臂內側上段', referredPain: '肩膀前側，沿上臂、前臂背側到手背',
    notes: '',
  },
  tricepsLong: {
    name: '肱三頭肌長頭', en: 'Triceps brachii, long head', latin: 'Caput longum musculi tricipitis brachii',
    origin: '肩胛骨盂下結節', insertion: '尺骨鷹嘴',
    action: '肘關節伸直；肩關節伸展、內收', nerve: '橈神經（C6–C8）', lines: ['深後臂線'],
    lockedShort: '肩關節長期伸展（手臂往後）', lockedLong: '手臂長時間高舉並屈肘',
    painPoints: '上臂後面的肌腹上段', referredPain: '肩膀後側、上臂後面，往上到頸肩交界',
    notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
  },
  tricepsLat: {
    name: '肱三頭肌外側頭', en: 'Triceps brachii, lateral head', latin: 'Caput laterale musculi tricipitis brachii',
    origin: '肱骨後面，橈神經溝上外側', insertion: '尺骨鷹嘴',
    action: '肘關節伸直', nerve: '橈神經（C6–C8）', lines: ['深後臂線'],
    lockedShort: '長期伸肘撐體', lockedLong: '長期屈肘',
    painPoints: '上臂後外側的肌腹中段', referredPain: '上臂後面，往下到前臂背側',
    notes: '只跨過手肘；第一階段沒有手肘關節，長度不會改變。',
  },
  tricepsMed: {
    name: '肱三頭肌內側頭', en: 'Triceps brachii, medial head', latin: 'Caput mediale musculi tricipitis brachii',
    origin: '肱骨後面，橈神經溝下內側', insertion: '尺骨鷹嘴',
    action: '肘關節伸直', nerve: '橈神經（C6–C8）', lines: ['深後臂線'],
    lockedShort: '長期伸肘撐體', lockedLong: '長期屈肘',
    painPoints: '手肘上方、鷹嘴附近', referredPain: '手肘外側（類似網球肘）、前臂內側',
    notes: '只跨過手肘；第一階段沒有手肘關節，長度不會改變。',
  },
  latissimus: {
    name: '闊背肌', en: 'Latissimus dorsi', latin: 'Musculus latissimus dorsi',
    origin: 'T7–L5 棘突、胸腰筋膜、髂嵴後部、第 9–12 肋骨', insertion: '肱骨結節間溝底',
    action: '肩關節伸展、內收、內旋；手臂固定時上提骨盆', nerve: '胸背神經（C6–C8）', lines: ['淺前臂線', '後功能線', '同側功能線'],
    lockedShort: '肩關節長期內收內旋、手臂難以完全上舉', lockedLong: '手臂長時間高舉過頭；圓肩時肱骨前移也會拉長',
    painPoints: '腋窩後方（腋後皺襞）的肌腹', referredPain: '肩胛骨下角一帶的持續悶痛，沿手臂內側到無名指、小指',
    notes: '',
  },
  teresMajor: {
    name: '大圓肌', en: 'Teres major', latin: 'Musculus teres major',
    origin: '肩胛骨下角背面', insertion: '肱骨小結節嵴',
    action: '肩關節內旋、內收、伸展', nerve: '肩胛下神經下支（C5–C7）', lines: [],
    lockedShort: '圓肩合併肩關節內旋', lockedLong: '手臂上舉合併外旋',
    painPoints: '肩胛骨外緣下段、腋後', referredPain: '肩膀後側、上臂後面',
    notes: '與闊背肌一起止於肱骨前內側；在列車線中的歸屬請對照書本確認。',
  },
  supraspinatus: {
    name: '棘上肌', en: 'Supraspinatus', latin: 'Musculus supraspinatus',
    origin: '肩胛骨棘上窩', insertion: '肱骨大結節上面',
    action: '肩關節外展（起始階段）；把肱骨頭穩定在關節盂', nerve: '肩胛上神經（C5–C6）', lines: ['深後臂線'],
    lockedShort: '手臂長時間外展', lockedLong: '垂肩、肩胛下迴旋',
    painPoints: '棘上窩內的肌腹（肩胛棘上方）', referredPain: '肩膀外側（三角肌中部），往下到手肘外側',
    notes: '',
  },
  infraspinatus: {
    name: '棘下肌', en: 'Infraspinatus', latin: 'Musculus infraspinatus',
    origin: '肩胛骨棘下窩', insertion: '肱骨大結節中面',
    action: '肩關節外旋；穩定肱骨頭', nerve: '肩胛上神經（C5–C6）', lines: ['深後臂線'],
    lockedShort: '肩關節長期外旋', lockedLong: '圓肩合併肩關節內旋',
    painPoints: '肩胛棘下方、棘下窩的肌腹', referredPain: '肩關節深處前側（像肩膀裡面痛），沿上臂前外側往下',
    notes: '',
  },
  teresMinor: {
    name: '小圓肌', en: 'Teres minor', latin: 'Musculus teres minor',
    origin: '肩胛骨外側緣上 2/3 背面', insertion: '肱骨大結節下面',
    action: '肩關節外旋、內收；穩定肱骨頭', nerve: '腋神經（C5–C6）', lines: ['深後臂線'],
    lockedShort: '肩關節長期外旋', lockedLong: '圓肩合併肩關節內旋',
    painPoints: '肩胛骨外緣中段', referredPain: '肩膀後側、三角肌後部下方一小塊',
    notes: '',
  },
  subscapularis: {
    name: '肩胛下肌', en: 'Subscapularis', latin: 'Musculus subscapularis',
    origin: '肩胛骨肩胛下窩', insertion: '肱骨小結節',
    action: '肩關節內旋；穩定肱骨頭', nerve: '肩胛下神經上、下支（C5–C7）', lines: ['深後臂線'],
    lockedShort: '圓肩合併肩關節內旋', lockedLong: '肩關節長期外旋',
    painPoints: '腋窩後壁深處，肩胛骨前面的外緣', referredPain: '肩膀後側、肩胛骨，手腕背側一圈；手臂舉不高（類似五十肩）',
    notes: '',
  },
});

// ── 頸部、枕下肌群、舌骨肌群、頭皮（2A） ──
Object.assign(window.CONTENT.muscles, {
  rectusCapPostMajor: {
    name: '頭後大直肌', en: 'Rectus capitis posterior major', latin: 'Musculus rectus capitis posterior major',
    origin: '樞椎（C2）棘突', insertion: '枕骨下項線外側',
    action: '頭部後仰、轉向同側', nerve: '枕下神經（C1 後枝）', lines: ['淺背線'],
    lockedShort: '頭前傾（下頸前屈、上頸後仰以維持視線）、長時間仰頭看螢幕', lockedLong: '下巴長期內收過度',
    painPoints: '後腦勺下緣、枕骨與頸椎交界的深處', referredPain: '從枕下往前繞到太陽穴、眼眶後方（頭痛像戴緊帽子）',
    notes: '',
  },
  rectusCapPostMinor: {
    name: '頭後小直肌', en: 'Rectus capitis posterior minor', latin: 'Musculus rectus capitis posterior minor',
    origin: '寰椎（C1）後結節', insertion: '枕骨下項線內側',
    action: '頭部後仰；與硬腦膜有筋膜連結', nerve: '枕下神經（C1 後枝）', lines: ['淺背線'],
    lockedShort: '頭前傾、長時間仰頭', lockedLong: '下巴長期內收過度',
    painPoints: '後腦勺正中下緣的深處', referredPain: '後腦、頭頂，往前到眼眶',
    notes: '',
  },
  obliquusCapSup: {
    name: '頭上斜肌', en: 'Obliquus capitis superior', latin: 'Musculus obliquus capitis superior',
    origin: '寰椎橫突', insertion: '枕骨上、下項線之間外側',
    action: '頭部後仰、側屈', nerve: '枕下神經（C1 後枝）', lines: ['淺背線'],
    lockedShort: '頭前傾、頭部長期側傾', lockedLong: '下巴長期內收過度',
    painPoints: '乳突內後方的深處', referredPain: '同側後腦、太陽穴',
    notes: '',
  },
  obliquusCapInf: {
    name: '頭下斜肌', en: 'Obliquus capitis inferior', latin: 'Musculus obliquus capitis inferior',
    origin: '樞椎（C2）棘突', insertion: '寰椎橫突',
    action: '使寰椎與頭部轉向同側', nerve: '枕下神經（C1 後枝）', lines: ['淺背線'],
    lockedShort: '頭部長期轉向一側', lockedLong: '頭部長期轉向對側',
    painPoints: '頸椎最上段兩側的深處', referredPain: '後腦、耳後',
    notes: '兩端都在上頸段，本模型的頸段沒有細分，長度不會改變。',
  },
  rectusCapAnt: {
    name: '頭前直肌', en: 'Rectus capitis anterior', latin: 'Musculus rectus capitis anterior',
    origin: '寰椎側塊前面', insertion: '枕骨基底部',
    action: '頭部前屈（點頭）', nerve: 'C1–C2 前枝', lines: [],
    lockedShort: '下巴長期內收', lockedLong: '頭前傾、長時間仰頭',
    painPoints: '咽後深處，無法直接觸摸', referredPain: '頸部前上方深處',
    notes: '',
  },
  rectusCapLat: {
    name: '頭外側直肌', en: 'Rectus capitis lateralis', latin: 'Musculus rectus capitis lateralis',
    origin: '寰椎橫突', insertion: '枕骨頸靜脈突',
    action: '頭部側屈', nerve: 'C1–C2 前枝', lines: [],
    lockedShort: '頭部長期側傾', lockedLong: '頭部長期往對側側傾',
    painPoints: '乳突下方的深處', referredPain: '同側後腦',
    notes: '',
  },
  longusColli: {
    name: '頸長肌', en: 'Longus colli', latin: 'Musculus longus colli',
    origin: 'T1–T3 與 C3–C7 椎體前面、橫突', insertion: 'C1–C6 椎體與橫突前面（寰椎前結節）',
    action: '頸椎前屈、維持頸椎前凸的穩定（深層頸屈肌）', nerve: 'C2–C6 前枝', lines: ['深前線'],
    lockedShort: '下頸段長期前屈（低頭）', lockedLong: '頸椎前凸過大、長期仰頭',
    painPoints: '喉嚨兩側深處（胸鎖乳突肌內側）', referredPain: '頸部前面、喉嚨深處；吞嚥時不適',
    notes: '依幾何計算，頭前傾時下頸段前屈使頸長肌略縮短；臨床上常說「深層頸屈肌無力」，指的是肌力，不一定是長度，請審閱。',
  },
  longusCapitis: {
    name: '頭長肌', en: 'Longus capitis', latin: 'Musculus longus capitis',
    origin: 'C3–C6 橫突前結節', insertion: '枕骨基底部',
    action: '頭與上頸段前屈', nerve: 'C1–C3 前枝', lines: ['深前線'],
    lockedShort: '下巴長期內收', lockedLong: '頭前傾（上頸段後仰）、長時間仰頭',
    painPoints: '頸部前上方、咽後深處', referredPain: '頸部前面、喉嚨深處',
    notes: '',
  },
  scalenusAnterior: {
    name: '前斜角肌', en: 'Scalenus anterior', latin: 'Musculus scalenus anterior',
    origin: 'C3–C6 橫突前結節', insertion: '第 1 肋骨上面（斜角肌結節）',
    action: '上提第 1 肋（輔助吸氣）；頸部側屈、輕微前屈', nerve: 'C4–C6 前枝', lines: ['深前線'],
    lockedShort: '胸式淺呼吸、頭頸長期側傾', lockedLong: '頸部長期往對側側傾',
    painPoints: '鎖骨上方、胸鎖乳突肌後緣深處', referredPain: '前胸、肩胛骨內緣，沿手臂前後側到拇指、食指；可能壓迫臂神經叢（胸廓出口）',
    notes: '',
  },
  scalenusMedius: {
    name: '中斜角肌', en: 'Scalenus medius', latin: 'Musculus scalenus medius',
    origin: 'C2–C7 橫突後結節', insertion: '第 1 肋骨上面（鎖骨下動脈溝後方）',
    action: '上提第 1 肋；頸部側屈', nerve: 'C3–C8 前枝', lines: ['深前線'],
    lockedShort: '胸式淺呼吸、頭頸長期側傾', lockedLong: '頸部長期往對側側傾',
    painPoints: '頸部側面中段的深處', referredPain: '肩膀、上臂外側、肩胛骨內緣，往下到手',
    notes: '',
  },
  scalenusPosterior: {
    name: '後斜角肌', en: 'Scalenus posterior', latin: 'Musculus scalenus posterior',
    origin: 'C5–C7 橫突後結節', insertion: '第 2 肋骨外面',
    action: '上提第 2 肋；頸部側屈', nerve: 'C6–C8 前枝', lines: ['深前線'],
    lockedShort: '胸式淺呼吸、聳肩', lockedLong: '頸部長期往對側側傾',
    painPoints: '頸根部側後方、提肩胛肌前面', referredPain: '肩胛骨內緣上段',
    notes: '',
  },
  sternocleidomastoid: {
    name: '胸鎖乳突肌', en: 'Sternocleidomastoid', latin: 'Musculus sternocleidomastoideus',
    origin: '胸骨柄前面（胸骨頭）、鎖骨內側 1/3（鎖骨頭）', insertion: '顳骨乳突、枕骨上項線外側',
    action: '單側：頭頸側屈、臉轉向對側；雙側：頸部前屈並使頭前移、輔助吸氣', nerve: '副神經（第十一對腦神經）；本體感覺經 C2–C3', lines: ['淺前線', '體側線'],
    lockedShort: '頭前傾、長期轉頭往一側（單側）', lockedLong: '頭頸長期後收、轉向同側',
    painPoints: '胸骨頭與鎖骨頭的肌腹中段，用手指捏得到', referredPain: '胸骨頭：前額、眼眶、臉頰、頭頂；鎖骨頭：前額、耳後與耳內；可能伴隨頭暈',
    notes: '',
  },
  platysma: {
    name: '頸闊肌', en: 'Platysma', latin: 'Platysma',
    origin: '上胸與三角肌前方的皮下筋膜', insertion: '下頷骨下緣、嘴角皮膚',
    action: '拉緊頸部皮膚、嘴角往下拉', nerve: '顏面神經頸枝（第七對腦神經）', lines: [],
    lockedShort: '長期咬緊牙、嘴角下拉的表情', lockedLong: '長時間仰頭',
    painPoints: '鎖骨上方的皮下', referredPain: '下頷、臉頰下半部的刺痛感',
    notes: '',
  },
  digastricPost: {
    name: '二腹肌後腹', en: 'Digastric, posterior belly', latin: 'Venter posterior musculi digastrici',
    origin: '顳骨乳突切跡', insertion: '經中間腱附著於舌骨',
    action: '上提舌骨；舌骨固定時協助張口', nerve: '顏面神經（第七對腦神經）', lines: ['深前線'],
    lockedShort: '頭前傾、張口呼吸', lockedLong: '長時間仰頭',
    painPoints: '下頷角後方、乳突下方', referredPain: '乳突、耳下、喉嚨上方',
    notes: '模型讓舌骨隨頭部移動（實際上舌骨懸吊在肌肉之間），所以這條舌骨上肌的長度不會隨姿勢改變。',
  },
  digastricTendon: {
    name: '二腹肌中間腱', en: 'Digastric, intermediate tendon', latin: 'Tendo intermedius musculi digastrici',
    origin: '連結二腹肌前、後腹', insertion: '以纖維環固定於舌骨',
    action: '把前、後腹的拉力傳到舌骨', nerve: '無（肌腱）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '肌腱不計算長度變化。',
  },
  digastricAnt: {
    name: '二腹肌前腹', en: 'Digastric, anterior belly', latin: 'Venter anterior musculi digastrici',
    origin: '下頷骨二腹肌窩', insertion: '經中間腱附著於舌骨',
    action: '張口、上提舌骨', nerve: '三叉神經下頷枝的下頷舌骨肌神經', lines: ['深前線'],
    lockedShort: '頭前傾、張口呼吸', lockedLong: '長時間仰頭',
    painPoints: '下巴下方正中兩側', referredPain: '下排門牙、下巴',
    notes: '模型讓舌骨隨頭部移動（實際上舌骨懸吊在肌肉之間），所以這條舌骨上肌的長度不會隨姿勢改變。',
  },
  stylohyoid: {
    name: '莖突舌骨肌', en: 'Stylohyoid', latin: 'Musculus stylohyoideus',
    origin: '顳骨莖突', insertion: '舌骨體',
    action: '吞嚥時把舌骨往後上拉', nerve: '顏面神經（第七對腦神經）', lines: ['深前線'],
    lockedShort: '頭前傾', lockedLong: '長時間仰頭',
    painPoints: '下頷角內側深處', referredPain: '喉嚨上方、耳下',
    notes: '模型讓舌骨隨頭部移動（實際上舌骨懸吊在肌肉之間），所以這條舌骨上肌的長度不會隨姿勢改變。',
  },
  geniohyoid: {
    name: '頦舌骨肌', en: 'Geniohyoid', latin: 'Musculus geniohyoideus',
    origin: '下頷骨頦棘', insertion: '舌骨體',
    action: '把舌骨往前上拉；舌骨固定時協助張口', nerve: 'C1 前枝（經舌下神經走行）', lines: ['深前線'],
    lockedShort: '頭前傾、下巴長期內收', lockedLong: '長時間仰頭',
    painPoints: '下巴下方正中的深處', referredPain: '下巴、舌根',
    notes: '模型讓舌骨隨頭部移動（實際上舌骨懸吊在肌肉之間），所以這條舌骨上肌的長度不會隨姿勢改變。',
  },
  mylohyoid: {
    name: '下頷舌骨肌', en: 'Mylohyoid', latin: 'Musculus mylohyoideus',
    origin: '下頷骨內面的下頷舌骨線', insertion: '舌骨體、正中縫',
    action: '構成口底、吞嚥時上提口底與舌骨', nerve: '三叉神經下頷枝的下頷舌骨肌神經', lines: ['深前線'],
    lockedShort: '頭前傾、舌頭長期下壓', lockedLong: '長時間仰頭',
    painPoints: '下頷骨內側下緣', referredPain: '舌頭、下排牙齒',
    notes: '模型讓舌骨隨頭部移動（實際上舌骨懸吊在肌肉之間），所以這條舌骨上肌的長度不會隨姿勢改變。',
  },
  sternohyoid: {
    name: '胸骨舌骨肌', en: 'Sternohyoid', latin: 'Musculus sternohyoideus',
    origin: '胸骨柄後面、鎖骨內側端', insertion: '舌骨體下緣',
    action: '下拉舌骨', nerve: '頸袢（C1–C3）', lines: ['深前線'],
    lockedShort: '長期低頭', lockedLong: '頭前傾、長時間仰頭',
    painPoints: '喉結兩側', referredPain: '喉嚨前面',
    notes: '',
  },
  sternothyroid: {
    name: '胸骨甲狀肌', en: 'Sternothyroid', latin: 'Musculus sternothyroideus',
    origin: '胸骨柄後面、第 1 肋軟骨', insertion: '甲狀軟骨斜線',
    action: '下拉甲狀軟骨（喉）', nerve: '頸袢（C1–C3）', lines: [],
    lockedShort: '長期低頭', lockedLong: '長時間仰頭',
    painPoints: '喉結下方兩側深處', referredPain: '喉嚨前面',
    notes: '',
  },
  thyrohyoid: {
    name: '甲狀舌骨肌', en: 'Thyrohyoid', latin: 'Musculus thyrohyoideus',
    origin: '甲狀軟骨斜線', insertion: '舌骨大角與體',
    action: '下拉舌骨；舌骨固定時上提喉', nerve: 'C1 前枝（經舌下神經走行）', lines: ['深前線'],
    lockedShort: '長期低頭', lockedLong: '長時間仰頭',
    painPoints: '喉結上方兩側', referredPain: '喉嚨前面',
    notes: '模型讓甲狀軟骨與舌骨一起隨頭部移動，所以這條肌肉的長度不會隨姿勢改變。',
  },
  omohyoid: {
    name: '肩胛舌骨肌', en: 'Omohyoid', latin: 'Musculus omohyoideus',
    origin: '肩胛骨上緣（肩胛切跡內側）', insertion: '舌骨體下緣',
    action: '下拉舌骨；繃緊頸部筋膜', nerve: '頸袢（C1–C3）', lines: ['深前線'],
    lockedShort: '長期聳肩、低頭', lockedLong: '肩胛長期下壓、頭轉向對側',
    painPoints: '鎖骨上窩、斜角肌前方', referredPain: '頸部側面、鎖骨上方',
    notes: '',
  },
  epicranialAponeurosis: {
    name: '帽狀腱膜', en: 'Epicranial aponeurosis (galea)', latin: 'Galea aponeurotica',
    origin: '連結枕肌', insertion: '連結額肌',
    action: '傳遞額肌、枕肌的拉力，覆蓋頭頂；淺背線與淺前線的終點', nerve: '無（腱膜）', lines: ['淺背線', '淺前線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '腱膜不計算長度變化；頭皮緊繃感常與枕下肌群、額肌有關。',
  },
  occipitalis: {
    name: '枕肌', en: 'Occipitalis', latin: 'Venter occipitalis musculi occipitofrontalis',
    origin: '枕骨上項線外側 2/3、乳突', insertion: '帽狀腱膜',
    action: '把頭皮往後拉', nerve: '顏面神經耳後枝（第七對腦神經）', lines: ['淺背線'],
    lockedShort: '長期皺眉、用力睜眼', lockedLong: '—',
    painPoints: '後腦勺上項線上方', referredPain: '後腦，往前穿過頭顱到眼睛後方',
    notes: '兩端都在頭骨上，長度不會隨姿勢改變。',
  },
  frontalis: {
    name: '額肌', en: 'Frontalis', latin: 'Venter frontalis musculi occipitofrontalis',
    origin: '帽狀腱膜', insertion: '眉毛皮膚、眼輪匝肌',
    action: '抬眉、皺額頭', nerve: '顏面神經顳枝（第七對腦神經）', lines: ['淺背線'],
    lockedShort: '長期抬眉、皺額頭（用力看螢幕）', lockedLong: '—',
    painPoints: '額頭眉毛上方', referredPain: '前額同側',
    notes: '兩端都在頭骨上，長度不會隨姿勢改變。',
  },
  temporoparietalis: {
    name: '顳頂肌', en: 'Temporoparietalis', latin: 'Musculus temporoparietalis',
    origin: '耳上方的顳筋膜', insertion: '帽狀腱膜外側',
    action: '繃緊頭皮、輕微上提耳廓', nerve: '顏面神經顳枝（第七對腦神經）', lines: [],
    lockedShort: '長期咬緊牙、頭皮緊繃', lockedLong: '—',
    painPoints: '耳朵上方', referredPain: '太陽穴、耳上',
    notes: '兩端都在頭骨上，長度不會隨姿勢改變。',
  },
  spleniusCapitis: {
    name: '頭夾肌', en: 'Splenius capitis', latin: 'Musculus splenius capitis',
    origin: '項韌帶下半、C7–T3 棘突', insertion: '顳骨乳突、枕骨上項線外側',
    action: '單側：頭頸側屈、轉向同側；雙側：伸展頭頸', nerve: '中段頸神經後枝（C3–C5）', lines: ['體側線', '螺旋線'],
    lockedShort: '頭部長期轉向同側、仰頭', lockedLong: '頭前傾、長期低頭',
    painPoints: '乳突下方、頸後上段的肌腹', referredPain: '頭頂（像有東西壓在頭頂）',
    notes: '',
  },
  spleniusColli: {
    name: '頸夾肌', en: 'Splenius cervicis', latin: 'Musculus splenius cervicis',
    origin: 'T3–T6 棘突', insertion: 'C1–C3 橫突後結節',
    action: '頸部伸展、轉向同側', nerve: '下段頸神經後枝', lines: ['螺旋線'],
    lockedShort: '頸部長期轉向同側、仰頭', lockedLong: '頭前傾、長期低頭',
    painPoints: '頸肩交界、肩胛骨上角內側', referredPain: '眼眶後方、後腦、頸肩交角；轉頭時頸部僵硬',
    notes: '',
  },
});

// ── 背部深層：豎脊肌、橫突棘肌群等（2A） ──
Object.assign(window.CONTENT.muscles, {
  iliocostalisLumborum: {
    name: '腰髂肋肌', en: 'Iliocostalis lumborum', latin: 'Musculus iliocostalis lumborum',
    origin: '髂嵴、薦骨、胸腰筋膜', insertion: '第 6–12 肋骨角、腰椎橫突',
    action: '脊柱伸展、側屈；下拉肋骨', nerve: '腰、胸神經後枝', lines: ['淺背線', '螺旋線'],
    lockedShort: '骨盆前傾、腰椎前凸過大', lockedLong: '骨盆後傾、彎腰駝背坐姿、平背',
    painPoints: '腰部兩側、約 L1 高度與第 12 肋下緣的肌腹', referredPain: '下背、臀部上方，有時到下腹',
    notes: '',
  },
  iliocostalisThoracis: {
    name: '胸髂肋肌', en: 'Iliocostalis thoracis', latin: 'Musculus iliocostalis thoracis',
    origin: '第 7–12 肋骨角', insertion: '第 1–6 肋骨角、C7 橫突',
    action: '胸椎伸展、側屈', nerve: '胸神經後枝', lines: ['淺背線'],
    lockedShort: '胸椎長期過度伸展（過度挺胸）', lockedLong: '駝背、長期彎腰',
    painPoints: '肩胛骨下角內下方、約 T6 高度', referredPain: '肩胛骨內緣、前胸外側，往下到腹部',
    notes: '',
  },
  iliocostalisColli: {
    name: '頸髂肋肌', en: 'Iliocostalis cervicis', latin: 'Musculus iliocostalis cervicis',
    origin: '第 3–6 肋骨角', insertion: 'C4–C6 橫突後結節',
    action: '頸椎伸展、側屈', nerve: '頸、上胸神經後枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭、駝背',
    painPoints: '上背、肩胛骨上角內側', referredPain: '頸根部、肩胛骨上方',
    notes: '模型中左側網格名稱沒有側別標記，已依位置對應。',
  },
  longissimusThoracis: {
    name: '胸最長肌', en: 'Longissimus thoracis', latin: 'Musculus longissimus thoracis',
    origin: '薦骨、髂嵴、腰椎棘突與橫突', insertion: 'T1–T12 橫突、第 2–12 肋骨',
    action: '脊柱伸展、側屈', nerve: '胸、腰神經後枝', lines: ['淺背線', '螺旋線'],
    lockedShort: '骨盆前傾、腰椎前凸過大', lockedLong: '駝背、骨盆後傾、長期彎腰坐姿',
    painPoints: '胸腰交界（T10–L1）兩側的肌腹', referredPain: '下背、臀部（常被誤以為是臀部的問題）',
    notes: '',
  },
  longissimusColli: {
    name: '頸最長肌', en: 'Longissimus cervicis', latin: 'Musculus longissimus cervicis',
    origin: 'T1–T5 橫突', insertion: 'C2–C6 橫突後結節',
    action: '頸椎伸展、側屈', nerve: '下頸、上胸神經後枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭、頭前傾',
    painPoints: '頸後側面、頸根部', referredPain: '頸後、肩胛骨上方',
    notes: '',
  },
  longissimusCapitis: {
    name: '頭最長肌', en: 'Longissimus capitis', latin: 'Musculus longissimus capitis',
    origin: 'T1–T5 橫突、C4–C7 關節突', insertion: '顳骨乳突後緣',
    action: '頭部伸展、側屈並轉向同側', nerve: '中、下頸神經後枝', lines: [],
    lockedShort: '長期仰頭、頭部側傾', lockedLong: '長期低頭',
    painPoints: '乳突下方、頸後外側', referredPain: '耳後、眼眶後方',
    notes: '',
  },
  spinalisThoracis: {
    name: '胸棘肌', en: 'Spinalis thoracis', latin: 'Musculus spinalis thoracis',
    origin: 'T11–L2 棘突', insertion: 'T1–T8 棘突',
    action: '胸椎伸展', nerve: '胸神經後枝', lines: ['淺背線'],
    lockedShort: '胸椎長期過度伸展', lockedLong: '駝背、長期彎腰',
    painPoints: '胸椎棘突兩旁緊貼的細長肌腹', referredPain: '胸椎正中附近',
    notes: '',
  },
  spinalisColli: {
    name: '頸棘肌', en: 'Spinalis cervicis', latin: 'Musculus spinalis cervicis',
    origin: '項韌帶下部、C7–T2 棘突', insertion: 'C2–C4 棘突',
    action: '頸椎伸展', nerve: '頸神經後枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭',
    painPoints: '頸椎棘突兩旁', referredPain: '頸後正中',
    notes: '',
  },
  spinalisCapitis: {
    name: '頭棘肌', en: 'Spinalis capitis', latin: 'Musculus spinalis capitis',
    origin: 'C7–T1 棘突', insertion: '枕骨上、下項線之間',
    action: '頭部伸展', nerve: '頸神經後枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭、頭前傾',
    painPoints: '頸後上段正中兩旁', referredPain: '後腦',
    notes: '常與頭半棘肌融合。',
  },
  semispinalisThoracis: {
    name: '胸半棘肌', en: 'Semispinalis thoracis', latin: 'Musculus semispinalis thoracis',
    origin: 'T6–T10 橫突', insertion: 'C6–T4 棘突',
    action: '胸椎伸展、轉向對側', nerve: '胸神經後枝', lines: [],
    lockedShort: '胸椎長期過度伸展', lockedLong: '駝背',
    painPoints: '上背脊椎兩旁深處', referredPain: '上背正中附近',
    notes: '',
  },
  semispinalisColli: {
    name: '頸半棘肌', en: 'Semispinalis cervicis', latin: 'Musculus semispinalis cervicis',
    origin: 'T1–T6 橫突', insertion: 'C2–C5 棘突',
    action: '頸椎伸展、轉向對側', nerve: '頸神經後枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭、頭前傾',
    painPoints: '頸後中下段、棘突旁深處', referredPain: '後腦、頸後',
    notes: '',
  },
  multifidusLumborum: {
    name: '腰多裂肌', en: 'Multifidus (lumbar part)', latin: 'Musculus multifidus lumborum',
    origin: '薦骨後面、髂後上棘、腰椎乳狀突', insertion: '上方 2–4 節腰椎與 T12 的棘突',
    action: '穩定腰椎節段、伸展、轉向對側', nerve: '腰神經後枝內側枝', lines: [],
    lockedShort: '骨盆前傾、腰椎前凸過大', lockedLong: '骨盆後傾、長期彎腰坐姿',
    painPoints: '腰椎棘突旁深處、薦骨上方', referredPain: '腰椎正中附近、薦骨，有時到腹部',
    notes: '下背痛患者常見此肌萎縮與控制不良。',
  },
  multifidusThoracis: {
    name: '胸多裂肌', en: 'Multifidus (thoracic part)', latin: 'Musculus multifidus thoracis',
    origin: 'T7–T12 橫突', insertion: '上方 2–4 節胸椎的棘突',
    action: '穩定胸椎節段、伸展、轉向對側', nerve: '胸神經後枝內側枝', lines: [],
    lockedShort: '胸椎長期過度伸展', lockedLong: '駝背',
    painPoints: '胸椎棘突旁深處', referredPain: '胸椎旁，有時繞到前胸或腹部',
    notes: '',
  },
  multifidusColli: {
    name: '頸多裂肌', en: 'Multifidus (cervical part)', latin: 'Musculus multifidus cervicis',
    origin: 'C4–C7 關節突', insertion: 'C2–C5 棘突',
    action: '穩定頸椎節段、伸展、轉向對側', nerve: '頸神經後枝內側枝', lines: [],
    lockedShort: '長期仰頭', lockedLong: '長期低頭、頭前傾',
    painPoints: '頸椎棘突旁深處', referredPain: '後腦下方、頸後、肩胛骨內緣上段',
    notes: '',
  },
  rotatores: {
    name: '迴旋肌', en: 'Rotatores', latin: 'Musculi rotatores',
    origin: '各椎骨橫突', insertion: '上方 1–2 節椎骨的椎板與棘突根部',
    action: '穩定椎骨節段、感受位置（本體感覺）、輕微轉向對側', nerve: '脊神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '脊椎正中旁最深處', referredPain: '脊椎正中、按壓棘突時疼痛',
    notes: '很短的節段肌，本模型只粗略呈現整體位置。',
  },
  interspinalesColli: {
    name: '頸棘間肌', en: 'Interspinales cervicis', latin: 'Musculi interspinales cervicis',
    origin: '下一節頸椎棘突', insertion: '上一節頸椎棘突',
    action: '頸椎節段伸展', nerve: '頸神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '頸椎棘突之間', referredPain: '頸後正中',
    notes: '很短的節段肌。',
  },
  interspinalesThoracis: {
    name: '胸棘間肌', en: 'Interspinales thoracis', latin: 'Musculi interspinales thoracis',
    origin: '下一節胸椎棘突（僅上、下端數節）', insertion: '上一節棘突',
    action: '胸椎節段伸展', nerve: '胸神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '棘突之間', referredPain: '背部正中',
    notes: '很短的節段肌。',
  },
  interspinalesLumborum: {
    name: '腰棘間肌', en: 'Interspinales lumborum', latin: 'Musculi interspinales lumborum',
    origin: '下一節腰椎棘突', insertion: '上一節腰椎棘突',
    action: '腰椎節段伸展', nerve: '腰神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '腰椎棘突之間', referredPain: '下背正中',
    notes: '很短的節段肌。',
  },
  intertransversariiVentral: {
    name: '腰外側橫突間肌（腹側部）', en: 'Lateral intertransversarii lumborum, ventral part', latin: 'Musculi intertransversarii laterales lumborum, pars ventralis',
    origin: '下一節腰椎橫突', insertion: '上一節腰椎橫突',
    action: '腰椎節段側屈', nerve: '腰神經前枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '腰椎兩側深處', referredPain: '下背側面',
    notes: '很短的節段肌。',
  },
  intertransversariiDorsal: {
    name: '腰外側橫突間肌（背側部）', en: 'Lateral intertransversarii lumborum, dorsal part', latin: 'Musculi intertransversarii laterales lumborum, pars dorsalis',
    origin: '下一節腰椎副突', insertion: '上一節腰椎橫突',
    action: '腰椎節段側屈', nerve: '腰神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '腰椎兩側深處', referredPain: '下背側面',
    notes: '很短的節段肌。',
  },
  serratusPostSup: {
    name: '上後鋸肌', en: 'Serratus posterior superior', latin: 'Musculus serratus posterior superior',
    origin: '項韌帶下部、C7–T3 棘突', insertion: '第 2–5 肋骨上緣（肋骨角外側）',
    action: '上提上段肋骨（輔助吸氣）', nerve: '第 2–5 肋間神經', lines: [],
    lockedShort: '胸式淺呼吸', lockedLong: '圓肩、駝背',
    painPoints: '肩胛骨上半深處（肩胛骨前伸時才摸得到）', referredPain: '肩胛骨深處的持續悶痛，沿手臂後側到小指；胸前也可能痛',
    notes: '',
  },
  serratusPostInf: {
    name: '下後鋸肌', en: 'Serratus posterior inferior', latin: 'Musculus serratus posterior inferior',
    origin: 'T11–L2 棘突、胸腰筋膜', insertion: '第 9–12 肋骨下緣',
    action: '下拉下段肋骨（穩定橫膈）', nerve: '第 9–12 胸神經前枝', lines: [],
    lockedShort: '腰椎前凸過大', lockedLong: '彎腰、駝背',
    painPoints: '下背、第 9–12 肋骨上方', referredPain: '下胸背的痠痛，深呼吸或轉身時明顯',
    notes: '',
  },
  levatoresCostarumLongi: {
    name: '長提肋肌', en: 'Levatores costarum longi', latin: 'Musculi levatores costarum longi',
    origin: 'T1–T11 橫突', insertion: '下方第二根肋骨',
    action: '上提肋骨、輔助胸椎伸展與側屈', nerve: '胸神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '肋骨與橫突交界的深處', referredPain: '背部肋骨旁',
    notes: '',
  },
  levatoresCostarumBreves: {
    name: '短提肋肌', en: 'Levatores costarum breves', latin: 'Musculi levatores costarum breves',
    origin: 'C7–T11 橫突', insertion: '下方相鄰的肋骨',
    action: '上提肋骨、輔助胸椎伸展與側屈', nerve: '胸神經後枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '肋骨與橫突交界的深處', referredPain: '背部肋骨旁',
    notes: '',
  },
  thoracolumbarFascia: {
    name: '胸腰筋膜（後層）', en: 'Thoracolumbar fascia, posterior layer', latin: 'Fascia thoracolumbalis, lamina posterior',
    origin: '薦骨、髂嵴後部', insertion: '腰椎與下胸椎棘突，向上延續到背部',
    action: '連結闊背肌、臀大肌、腹肌與豎脊肌，傳遞左右對角的力量（後功能線的交會點）', nerve: '無（筋膜組織）', lines: ['淺背線', '後功能線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化。',
  },
});

// ── 胸壁、橫膈、腹部、骨盆底（2A） ──
Object.assign(window.CONTENT.muscles, {
  externalIntercostals: {
    name: '肋間外肌', en: 'External intercostals', latin: 'Musculi intercostales externi',
    origin: '上一根肋骨下緣', insertion: '下一根肋骨上緣（纖維往前下斜）',
    action: '上提肋骨（吸氣）、穩定胸壁', nerve: '肋間神經（T1–T11）', lines: ['體側線'],
    lockedShort: '駝背（胸前肋間）、側彎凹側', lockedLong: '過度挺胸、側彎凸側',
    painPoints: '肋骨之間的肌肉', referredPain: '局部肋間痛，深呼吸、咳嗽時加劇',
    notes: '',
  },
  internalIntercostals: {
    name: '肋間內肌', en: 'Internal intercostals', latin: 'Musculi intercostales interni',
    origin: '下一根肋骨上緣', insertion: '上一根肋骨下緣（纖維往後下斜）',
    action: '下拉肋骨（用力呼氣）、穩定胸壁', nerve: '肋間神經（T1–T11）', lines: ['體側線'],
    lockedShort: '駝背、側彎凹側', lockedLong: '過度挺胸、側彎凸側',
    painPoints: '肋骨之間、靠近胸骨與肋軟骨處', referredPain: '局部肋間痛',
    notes: '',
  },
  innermostIntercostals: {
    name: '肋間最內肌', en: 'Innermost intercostals', latin: 'Musculi intercostales intimi',
    origin: '上一根肋骨內面', insertion: '下一根肋骨內面',
    action: '輔助肋間內肌、穩定胸壁', nerve: '肋間神經', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '肋間深處', referredPain: '局部肋間痛',
    notes: '',
  },
  transversusThoracis: {
    name: '胸橫肌', en: 'Transversus thoracis', latin: 'Musculus transversus thoracis',
    origin: '胸骨體下部與劍突的內面', insertion: '第 2–6 肋軟骨內面',
    action: '下拉肋軟骨（用力呼氣）', nerve: '肋間神經（T2–T6）', lines: [],
    lockedShort: '駝背', lockedLong: '過度挺胸',
    painPoints: '胸骨內側深處', referredPain: '胸骨旁',
    notes: '',
  },
  diaphragm: {
    name: '橫膈', en: 'Diaphragm', latin: 'Diaphragma',
    origin: '劍突、第 7–12 肋軟骨與肋骨內面、L1–L3 椎體（右腳較長）', insertion: '中心腱',
    action: '主要吸氣肌：收縮時中心腱下降、胸廓擴大；也參與腹內壓與軀幹穩定', nerve: '膈神經（C3–C5）', lines: ['深前線'],
    lockedShort: '長期胸式淺呼吸、焦慮時呼吸急促、肋骨外翻', lockedLong: '駝背使胸腔下沉',
    painPoints: '肋弓下緣內側（吸氣時用手指勾進肋骨下方）', referredPain: '肋弓下、側胸，有時到同側肩膀（經膈神經）',
    notes: '單一網格（不分左右）；穹頂形的呼吸肌，不以起止點距離衡量長度，姿勢改變時以灰色顯示。',
  },
  rectusAbdominis: {
    name: '腹直肌', en: 'Rectus abdominis', latin: 'Musculus rectus abdominis',
    origin: '恥骨嵴、恥骨聯合', insertion: '劍突、第 5–7 肋軟骨',
    action: '軀幹前屈、骨盆後傾、增加腹內壓', nerve: '下 6 對胸神經前枝（T7–T12）', lines: ['淺前線', '前功能線'],
    lockedShort: '駝背、骨盆後傾、長期彎腰坐姿', lockedLong: '骨盆前傾、腰椎前凸過大、懷孕',
    painPoints: '肚臍上下兩側、恥骨上方、劍突下方', referredPain: '上段：上腹與背部中段的帶狀痛；下段：下腹、下背；可能被誤以為腸胃或經痛',
    notes: '',
  },
  externalOblique: {
    name: '腹外斜肌', en: 'External abdominal oblique', latin: 'Musculus obliquus externus abdominis',
    origin: '第 5–12 肋骨外面', insertion: '髂嵴前半、腹股溝韌帶、經腹直肌鞘到白線',
    action: '軀幹前屈、側屈、轉向對側；增加腹內壓', nerve: '下 6 對胸神經（T7–T12）、髂腹下神經', lines: ['體側線', '螺旋線', '同側功能線'],
    lockedShort: '側彎凹側、軀幹長期轉向對側', lockedLong: '側彎凸側、骨盆前傾',
    painPoints: '肋弓下緣外側、髂嵴上方', referredPain: '上腹或下腹，像胃痛、腹股溝痛',
    notes: '',
  },
  internalOblique: {
    name: '腹內斜肌', en: 'Internal abdominal oblique', latin: 'Musculus obliquus internus abdominis',
    origin: '胸腰筋膜、髂嵴、腹股溝韌帶外側', insertion: '第 10–12 肋骨下緣、經腹直肌鞘到白線、恥骨',
    action: '軀幹前屈、側屈、轉向同側；增加腹內壓', nerve: '下段胸神經、髂腹下與髂腹股溝神經', lines: ['體側線', '螺旋線'],
    lockedShort: '側彎凹側、軀幹長期轉向同側', lockedLong: '側彎凸側、骨盆前傾',
    painPoints: '髂嵴上方、下腹外側', referredPain: '下腹、腹股溝、恥骨上方',
    notes: '',
  },
  transversusAbdominis: {
    name: '腹橫肌', en: 'Transversus abdominis', latin: 'Musculus transversus abdominis',
    origin: '第 7–12 肋軟骨內面、胸腰筋膜、髂嵴、腹股溝韌帶', insertion: '經腹直肌鞘到白線、恥骨',
    action: '束緊腹部、增加腹內壓、穩定腰椎（核心肌群）', nerve: '下段胸神經、髂腹下與髂腹股溝神經', lines: [],
    lockedShort: '—', lockedLong: '腹部長期鬆弛前凸、懷孕',
    painPoints: '肋弓下緣、下腹深處', referredPain: '肋弓下、上腹，咳嗽時加劇',
    notes: '',
  },
  pyramidalis: {
    name: '錐狀肌', en: 'Pyramidalis', latin: 'Musculus pyramidalis',
    origin: '恥骨嵴', insertion: '白線下段',
    action: '繃緊白線', nerve: '肋下神經（T12）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '恥骨上方正中兩側', referredPain: '恥骨上方、下腹正中',
    notes: '約兩成的人沒有此肌；兩端都在骨盆上，長度不會改變。',
  },
  quadratusLumborum: {
    name: '腰方肌', en: 'Quadratus lumborum', latin: 'Musculus quadratus lumborum',
    origin: '髂嵴後部、髂腰韌帶', insertion: '第 12 肋骨下緣、L1–L4 橫突',
    action: '單側：腰椎側屈、上提同側骨盆；雙側：穩定腰椎、呼吸時固定第 12 肋', nerve: '肋下神經與 L1–L4 前枝', lines: ['深前線'],
    lockedShort: '骨盆較高的那側（長短腳的長腳側）、長期歪坐翹腳', lockedLong: '骨盆較低的那側',
    painPoints: '第 12 肋與髂嵴之間、腰部外側深處', referredPain: '薦髂關節、臀部上外側、髖部外側（大轉子），咳嗽與翻身時下背劇痛',
    notes: '',
  },
  lineaAlba: {
    name: '白線', en: 'Linea alba', latin: 'Linea alba',
    origin: '劍突', insertion: '恥骨聯合',
    action: '左右腹肌腱膜在正中的交會；螺旋線、前功能線在此交叉', nerve: '無（腱膜）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '單一網格（不分左右）；腱膜不計算長度變化。',
  },
  inguinalLigament: {
    name: '腹股溝韌帶', en: 'Inguinal ligament', latin: 'Ligamentum inguinale',
    origin: '髂前上棘', insertion: '恥骨結節',
    action: '腹外斜肌腱膜的下緣，構成腹股溝管底', nerve: '無（韌帶）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '兩端都在骨盆上，不計算長度變化。',
  },
  externalAnalSphincter: {
    name: '肛門外括約肌', en: 'External anal sphincter', latin: 'Musculus sphincter ani externus',
    origin: '尾骨（經肛尾韌帶）', insertion: '會陰體',
    action: '隨意控制肛門閉合', nerve: '陰部神經（S2–S4）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '肛門周圍', referredPain: '肛門、尾骨',
    notes: '兩端都在骨盆內，長度不會隨姿勢改變。',
  },
  puboanalis: {
    name: '恥骨肛門肌', en: 'Puboanalis', latin: 'Musculus puboanalis',
    origin: '恥骨後面', insertion: '肛門周圍',
    action: '骨盆底的一部分，協助控制排便', nerve: '陰部神經、S3–S4 前枝', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '骨盆底深處', referredPain: '肛門、會陰',
    notes: '兩端都在骨盆內，長度不會隨姿勢改變。',
  },
  levatorAniArch: {
    name: '提肛肌腱弓', en: 'Tendinous arch of levator ani', latin: 'Arcus tendineus musculi levatoris ani',
    origin: '恥骨後面', insertion: '坐骨棘',
    action: '閉孔內肌筋膜增厚而成，是提肛肌的起點', nerve: '無（腱弓）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '不計算長度變化。',
  },
  pubococcygeus: {
    name: '恥尾肌', en: 'Pubococcygeus', latin: 'Musculus pubococcygeus',
    origin: '恥骨後面、提肛肌腱弓前段', insertion: '尾骨、肛尾韌帶',
    action: '支撐骨盆臟器、控制排尿排便、穩定骨盆', nerve: '陰部神經、S3–S4 前枝', lines: ['深前線'],
    lockedShort: '長期憋尿、緊繃焦慮', lockedLong: '產後、骨盆底鬆弛',
    painPoints: '骨盆底深處（需內診）', referredPain: '尾骨、薦骨、會陰、下腹',
    notes: '兩端都在骨盆內，長度不會隨姿勢改變。',
  },
  iliococcygeus: {
    name: '髂尾肌', en: 'Iliococcygeus', latin: 'Musculus iliococcygeus',
    origin: '提肛肌腱弓後段、坐骨棘', insertion: '尾骨、肛尾韌帶',
    action: '支撐骨盆臟器、穩定骨盆', nerve: '陰部神經、S3–S4 前枝', lines: ['深前線'],
    lockedShort: '緊繃焦慮、長期憋尿', lockedLong: '產後、骨盆底鬆弛',
    painPoints: '骨盆底深處（需內診）', referredPain: '尾骨、薦骨',
    notes: '兩端都在骨盆內，長度不會隨姿勢改變。',
  },
  coccygeus: {
    name: '尾骨肌', en: 'Coccygeus', latin: 'Musculus coccygeus',
    origin: '坐骨棘', insertion: '尾骨與薦骨下緣',
    action: '支撐骨盆底後部、輕微前拉尾骨', nerve: 'S4–S5 前枝', lines: ['深前線'],
    lockedShort: '久坐壓迫尾骨', lockedLong: '—',
    painPoints: '尾骨兩側深處', referredPain: '尾骨（尾骨痛）、薦骨、髖後',
    notes: '兩端都在骨盆內，長度不會隨姿勢改變。',
  },
});

// ── 臀部、髖、大腿、小腿（2A） ──
const KNEE_FIXED = '2A 沒有膝、踝關節，只跨過膝或踝的肌肉長度不會隨姿勢改變。';
Object.assign(window.CONTENT.muscles, {
  gluteusMaximus: {
    name: '臀大肌', en: 'Gluteus maximus', latin: 'Musculus gluteus maximus',
    origin: '髂骨後面（臀後線後方）、薦骨與尾骨後面、薦結節韌帶、胸腰筋膜', insertion: '股骨臀肌粗隆、髂脛束',
    action: '髖關節伸展、外旋；骨盆後傾；經髂脛束穩定膝外側', nerve: '臀下神經（L5–S2）', lines: ['體側線', '後功能線'],
    lockedShort: '骨盆後傾、平背', lockedLong: '骨盆前傾、久坐（髖關節長時間屈曲）',
    painPoints: '薦骨外側、坐骨結節上方、臀部下緣', referredPain: '臀部、薦骨、尾骨；坐久了臀部痛',
    notes: '',
  },
  gluteusMedius: {
    name: '臀中肌', en: 'Gluteus medius', latin: 'Musculus gluteus medius',
    origin: '髂骨外面（臀前線與臀後線之間）', insertion: '股骨大轉子外側面',
    action: '髖關節外展；單腳站立時穩定骨盆（防止對側骨盆下垂）；前部纖維內旋、後部纖維外旋', nerve: '臀上神經（L4–S1）', lines: [],
    lockedShort: '骨盆較低的那側（長短腳的短腳側）', lockedLong: '骨盆較高的那側、長期單腳站三七步的支撐腳',
    painPoints: '髂嵴下方、臀部上外側', referredPain: '下背、薦髂關節、臀部外側，往下到大腿外後側',
    notes: '在列車線中常被視為體側線的深層夥伴，請對照書本確認。',
  },
  gluteusMinimus: {
    name: '臀小肌', en: 'Gluteus minimus', latin: 'Musculus gluteus minimus',
    origin: '髂骨外面（臀前線與臀下線之間）', insertion: '股骨大轉子前面',
    action: '髖關節外展、內旋；穩定骨盆', nerve: '臀上神經（L4–S1）', lines: [],
    lockedShort: '骨盆較低的那側', lockedLong: '骨盆較高的那側',
    painPoints: '臀部上外側深處（臀中肌下面）', referredPain: '臀部，沿大腿外側或後側一路到小腿外側、腳踝（常被誤以為坐骨神經痛）',
    notes: '',
  },
  tensorFasciaeLatae: {
    name: '闊筋膜張肌', en: 'Tensor fasciae latae', latin: 'Musculus tensor fasciae latae',
    origin: '髂前上棘、髂嵴前部外唇', insertion: '髂脛束（再到脛骨外側髁）',
    action: '髖關節屈曲、外展、內旋；繃緊髂脛束', nerve: '臀上神經（L4–S1）', lines: ['體側線', '螺旋線'],
    lockedShort: '骨盆前傾、久坐、跑步量大', lockedLong: '骨盆後傾',
    painPoints: '髂前上棘下方、大腿前外側上段', referredPain: '髖部前外側，沿大腿外側到膝蓋',
    notes: '',
  },
  iliotibialTract: {
    name: '髂脛束', en: 'Iliotibial tract', latin: 'Tractus iliotibialis',
    origin: '髂嵴（闊筋膜的外側增厚）', insertion: '脛骨外側髁（Gerdy 結節）',
    action: '接受臀大肌與闊筋膜張肌的拉力，穩定髖與膝的外側', nerve: '無（筋膜組織）', lines: ['體側線', '螺旋線'],
    lockedShort: '骨盆較低的那側', lockedLong: '骨盆較高的那側、膝內翻',
    painPoints: '—', referredPain: '—',
    notes: '是筋膜，但本專案仍計算它的長度變化（長短腳時有意義）。',
  },
  piriformis: {
    name: '梨狀肌', en: 'Piriformis', latin: 'Musculus piriformis',
    origin: '薦骨前面（S2–S4）', insertion: '股骨大轉子上緣',
    action: '髖關節外旋；髖屈曲超過 60° 時變成外展', nerve: '梨狀肌神經（S1–S2）', lines: [],
    lockedShort: '長期外八站姿、開車時腿外轉', lockedLong: '長期內八、翹腳',
    painPoints: '薦骨外緣與大轉子連線的中段（臀部深處）', referredPain: '薦髂關節、臀部、大腿後側；壓迫坐骨神經時有類似坐骨神經痛的麻痛',
    notes: '',
  },
  gemellusSup: {
    name: '上孖肌', en: 'Superior gemellus', latin: 'Musculus gemellus superior',
    origin: '坐骨棘', insertion: '與閉孔內肌腱一起止於大轉子內側',
    action: '髖關節外旋', nerve: '閉孔內肌神經（L5–S1）', lines: [],
    lockedShort: '長期外八站姿', lockedLong: '長期內八',
    painPoints: '臀部深處、大轉子後方', referredPain: '臀部深處',
    notes: '',
  },
  gemellusInf: {
    name: '下孖肌', en: 'Inferior gemellus', latin: 'Musculus gemellus inferior',
    origin: '坐骨結節上緣', insertion: '與閉孔內肌腱一起止於大轉子內側',
    action: '髖關節外旋', nerve: '股方肌神經（L5–S1）', lines: [],
    lockedShort: '長期外八站姿', lockedLong: '長期內八',
    painPoints: '臀部深處、大轉子後方', referredPain: '臀部深處',
    notes: '',
  },
  obturatorInternus: {
    name: '閉孔內肌', en: 'Obturator internus', latin: 'Musculus obturator internus',
    origin: '閉孔膜與閉孔周圍的骨盆內面', insertion: '大轉子內側（轉子窩上方）',
    action: '髖關節外旋；構成骨盆側壁', nerve: '閉孔內肌神經（L5–S1）', lines: [],
    lockedShort: '長期外八站姿、骨盆底緊繃', lockedLong: '長期內八',
    painPoints: '坐骨結節內側（骨盆內）', referredPain: '尾骨、肛門、大腿後側上段；有時骨盆內脹痛',
    notes: '',
  },
  obturatorExternus: {
    name: '閉孔外肌', en: 'Obturator externus', latin: 'Musculus obturator externus',
    origin: '閉孔膜外面與周圍骨面', insertion: '股骨轉子窩',
    action: '髖關節外旋', nerve: '閉孔神經（L3–L4）', lines: [],
    lockedShort: '長期外八站姿', lockedLong: '長期內八',
    painPoints: '腹股溝深處', referredPain: '腹股溝、大腿內側上段',
    notes: '',
  },
  quadratusFemoris: {
    name: '股方肌', en: 'Quadratus femoris', latin: 'Musculus quadratus femoris',
    origin: '坐骨結節外緣', insertion: '股骨轉子間嵴',
    action: '髖關節外旋、內收', nerve: '股方肌神經（L5–S1）', lines: [],
    lockedShort: '長期外八站姿', lockedLong: '長期內八',
    painPoints: '坐骨結節與大轉子之間', referredPain: '臀部下方、大腿後側上段',
    notes: '',
  },
  psoasMajor: {
    name: '腰大肌', en: 'Psoas major', latin: 'Musculus psoas major',
    origin: 'T12–L4 椎體側面、椎間盤、L1–L5 橫突', insertion: '股骨小轉子',
    action: '髖關節屈曲；腳固定時使腰椎前屈、側屈，穩定腰椎', nerve: '腰神經叢前枝（L1–L3）', lines: ['深前線'],
    lockedShort: '久坐（髖關節長時間屈曲）、骨盆前傾', lockedLong: '骨盆後傾、長期站立時髖過伸',
    painPoints: '肚臍外側深處（按壓時往下壓到腰椎旁）、腹股溝韌帶下方', referredPain: '同側腰椎旁一條縱向的下背痛，有時到大腿前上方',
    notes: '依幾何計算，骨盆前傾時腰大肌長度變化很小（約 1%）：它從腰椎直接拉到股骨，骨盆轉動時兩端距離改變不大。臨床上「髂腰肌緊」多指久坐造成的適應性縮短與張力，請審閱。',
  },
  iliacus: {
    name: '髂肌', en: 'Iliacus', latin: 'Musculus iliacus',
    origin: '髂窩、髂嵴內唇、薦骨翼', insertion: '與腰大肌合成髂腰肌，止於股骨小轉子',
    action: '髖關節屈曲；腳固定時使骨盆前傾', nerve: '股神經（L2–L3）', lines: ['深前線'],
    lockedShort: '久坐、骨盆前傾', lockedLong: '骨盆後傾',
    painPoints: '髂前上棘內側、沿髂窩的深處', referredPain: '下背、薦髂關節、大腿前上方',
    notes: '',
  },
  sartorius: {
    name: '縫匠肌', en: 'Sartorius', latin: 'Musculus sartorius',
    origin: '髂前上棘', insertion: '脛骨上端內側（鵝足）',
    action: '髖關節屈曲、外展、外旋；膝關節屈曲（盤腿動作）', nerve: '股神經（L2–L3）', lines: ['同側功能線'],
    lockedShort: '骨盆前傾、長期盤腿', lockedLong: '骨盆後傾',
    painPoints: '大腿前面，沿肌肉斜線分布', referredPain: '大腿前內側的表淺刺痛',
    notes: '',
  },
  rectusFemoris: {
    name: '股直肌', en: 'Rectus femoris', latin: 'Musculus rectus femoris',
    origin: '髂前下棘、髖臼上緣', insertion: '經股四頭肌腱、髕骨與髕韌帶到脛骨粗隆',
    action: '膝關節伸直；髖關節屈曲', nerve: '股神經（L2–L4）', lines: ['淺前線'],
    lockedShort: '骨盆前傾、久坐', lockedLong: '骨盆後傾、跪坐',
    painPoints: '大腿前面上段、髂前下棘下方', referredPain: '膝蓋前面、髕骨周圍（膝蓋深處痛）',
    notes: '依幾何計算，膝蓋伸直時骨盆前傾只讓股直肌縮短約 1%；它跨過膝關節，膝彎曲時才會明顯拉長。2A 沒有膝關節。',
  },
  vastusLateralis: {
    name: '股外側肌', en: 'Vastus lateralis', latin: 'Musculus vastus lateralis',
    origin: '股骨大轉子、粗線外唇', insertion: '經股四頭肌腱、髕骨到脛骨粗隆；部分到髕骨外側支持帶',
    action: '膝關節伸直', nerve: '股神經（L2–L4）', lines: ['淺前線', '後功能線'],
    lockedShort: '長期膝過伸站姿', lockedLong: '長期屈膝',
    painPoints: '大腿外側，從上到下多處', referredPain: '大腿外側、膝蓋外側，走路時膝外側痛',
    notes: KNEE_FIXED,
  },
  vastusMedialis: {
    name: '股內側肌', en: 'Vastus medialis', latin: 'Musculus vastus medialis',
    origin: '股骨粗線內唇、轉子間線', insertion: '經股四頭肌腱、髕骨到脛骨粗隆；部分到髕骨內側支持帶',
    action: '膝關節伸直；穩定髕骨', nerve: '股神經（L2–L4）', lines: ['淺前線'],
    lockedShort: '長期膝過伸站姿', lockedLong: '長期屈膝',
    painPoints: '膝蓋內上方的肌腹（淚滴狀）', referredPain: '膝蓋前內側',
    notes: KNEE_FIXED,
  },
  vastusIntermedius: {
    name: '股中間肌', en: 'Vastus intermedius', latin: 'Musculus vastus intermedius',
    origin: '股骨前面與外側面上 2/3', insertion: '經股四頭肌腱、髕骨到脛骨粗隆',
    action: '膝關節伸直', nerve: '股神經（L2–L4）', lines: ['淺前線'],
    lockedShort: '長期膝過伸站姿', lockedLong: '長期屈膝',
    painPoints: '大腿前面中段深處（股直肌下面）', referredPain: '大腿前面、膝蓋上方；上樓梯困難',
    notes: KNEE_FIXED,
  },
  patellarRetinaculumMed: {
    name: '髕骨內側支持帶', en: 'Medial patellar retinaculum', latin: 'Retinaculum patellae mediale',
    origin: '股內側肌腱膜', insertion: '髕骨內緣與脛骨內側髁',
    action: '穩定髕骨內側', nerve: '無（筋膜組織）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '不計算長度變化。',
  },
  patellarRetinaculumLat: {
    name: '髕骨外側支持帶', en: 'Lateral patellar retinaculum', latin: 'Retinaculum patellae laterale',
    origin: '股外側肌腱膜、髂脛束', insertion: '髕骨外緣與脛骨外側髁',
    action: '穩定髕骨外側', nerve: '無（筋膜組織）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '不計算長度變化。',
  },
  adductorLongus: {
    name: '內收長肌', en: 'Adductor longus', latin: 'Musculus adductor longus',
    origin: '恥骨體前面（恥骨結節下方）', insertion: '股骨粗線中段',
    action: '髖關節內收、輔助屈曲', nerve: '閉孔神經（L2–L4）', lines: ['深前線', '前功能線'],
    lockedShort: '骨盆較高的那側（長短腳的長腳側）、長期翹腳', lockedLong: '骨盆較低的那側、髖外展',
    painPoints: '腹股溝下方、大腿內側上段', referredPain: '腹股溝、大腿內側，往下到膝蓋內側與脛骨內側',
    notes: '',
  },
  adductorBrevis: {
    name: '內收短肌', en: 'Adductor brevis', latin: 'Musculus adductor brevis',
    origin: '恥骨下枝', insertion: '股骨粗線上段',
    action: '髖關節內收、輔助屈曲', nerve: '閉孔神經（L2–L4）', lines: ['深前線'],
    lockedShort: '長期翹腳、骨盆較高的那側', lockedLong: '骨盆較低的那側',
    painPoints: '大腿內側上段深處', referredPain: '腹股溝、大腿內側',
    notes: '',
  },
  adductorMagnus: {
    name: '內收大肌', en: 'Adductor magnus', latin: 'Musculus adductor magnus',
    origin: '恥骨下枝、坐骨枝、坐骨結節', insertion: '股骨粗線全長、內收肌結節',
    action: '髖關節內收；前部屈曲、後部伸展', nerve: '閉孔神經（L2–L4）、坐骨神經脛側部（L4）', lines: ['深前線'],
    lockedShort: '長期翹腳', lockedLong: '髖長期外展',
    painPoints: '大腿內側中段、坐骨結節下方', referredPain: '腹股溝、大腿內側；骨盆內深處痛',
    notes: '',
  },
  adductorMinimus: {
    name: '最小內收肌', en: 'Adductor minimus', latin: 'Musculus adductor minimus',
    origin: '恥骨下枝', insertion: '股骨粗線上段（臀肌粗隆下方）',
    action: '髖關節內收、外旋', nerve: '閉孔神經（L2–L4）', lines: ['深前線'],
    lockedShort: '長期翹腳', lockedLong: '髖長期外展',
    painPoints: '大腿內側上段深處', referredPain: '大腿內側上段',
    notes: '內收大肌最上方的部分，有時被分開命名。',
  },
  gracilis: {
    name: '股薄肌', en: 'Gracilis', latin: 'Musculus gracilis',
    origin: '恥骨下枝、恥骨聯合附近', insertion: '脛骨上端內側（鵝足）',
    action: '髖關節內收；膝關節屈曲、內旋', nerve: '閉孔神經（L2–L3）', lines: [],
    lockedShort: '長期翹腳', lockedLong: '髖外展、膝伸直',
    painPoints: '大腿內側中段的表淺細長肌腹', referredPain: '大腿內側的表淺灼熱刺痛',
    notes: '在列車線中的歸屬請對照書本確認。',
  },
  pectineus: {
    name: '恥骨肌', en: 'Pectineus', latin: 'Musculus pectineus',
    origin: '恥骨梳', insertion: '股骨恥骨肌線',
    action: '髖關節內收、屈曲', nerve: '股神經（L2–L3），有時加閉孔神經', lines: ['深前線'],
    lockedShort: '久坐、骨盆前傾', lockedLong: '骨盆後傾、髖外展',
    painPoints: '腹股溝深處、股動脈內側', referredPain: '腹股溝深處、大腿內側上段',
    notes: '',
  },
  bicepsFemorisLong: {
    name: '股二頭肌長頭', en: 'Biceps femoris, long head', latin: 'Caput longum musculi bicipitis femoris',
    origin: '坐骨結節、薦結節韌帶', insertion: '腓骨頭',
    action: '膝關節屈曲、外旋；髖關節伸展；骨盆後傾', nerve: '坐骨神經脛側部（L5–S2）', lines: ['淺背線', '螺旋線'],
    lockedShort: '骨盆後傾、平背、久坐（膝彎曲）', lockedLong: '骨盆前傾',
    painPoints: '大腿後外側的中下段', referredPain: '膝蓋後面（膕窩），往上到大腿後側',
    notes: '',
  },
  bicepsFemorisShort: {
    name: '股二頭肌短頭', en: 'Biceps femoris, short head', latin: 'Caput breve musculi bicipitis femoris',
    origin: '股骨粗線外唇下半', insertion: '腓骨頭',
    action: '膝關節屈曲、外旋', nerve: '坐骨神經腓側部（L5–S2）', lines: [],
    lockedShort: '久坐（膝彎曲）', lockedLong: '長期膝過伸',
    painPoints: '大腿後外側下段深處', referredPain: '膝蓋後外側',
    notes: KNEE_FIXED,
  },
  semitendinosus: {
    name: '半腱肌', en: 'Semitendinosus', latin: 'Musculus semitendinosus',
    origin: '坐骨結節', insertion: '脛骨上端內側（鵝足）',
    action: '膝關節屈曲、內旋；髖關節伸展；骨盆後傾', nerve: '坐骨神經脛側部（L5–S2）', lines: ['淺背線'],
    lockedShort: '骨盆後傾、久坐', lockedLong: '骨盆前傾',
    painPoints: '大腿後內側的中段', referredPain: '臀部下緣、大腿後面，往下到膝蓋後內側與小腿上段',
    notes: '',
  },
  semimembranosus: {
    name: '半膜肌', en: 'Semimembranosus', latin: 'Musculus semimembranosus',
    origin: '坐骨結節', insertion: '脛骨內側髁後面',
    action: '膝關節屈曲、內旋；髖關節伸展；骨盆後傾', nerve: '坐骨神經脛側部（L5–S2）', lines: ['淺背線'],
    lockedShort: '骨盆後傾、久坐', lockedLong: '骨盆前傾',
    painPoints: '大腿後內側中下段（半腱肌深處）', referredPain: '臀部下緣、大腿後面、膝蓋後面',
    notes: '',
  },
  gastrocnemiusMed: {
    name: '腓腸肌內側頭', en: 'Gastrocnemius, medial head', latin: 'Caput mediale musculi gastrocnemii',
    origin: '股骨內上髁後面', insertion: '經跟腱到跟骨',
    action: '踝關節蹠屈（踮腳）；膝關節屈曲', nerve: '脛神經（S1–S2）', lines: ['淺背線'],
    lockedShort: '常穿高跟鞋、長期踮腳', lockedLong: '長期蹲姿、膝過伸',
    painPoints: '小腿後內側上段的肌腹', referredPain: '腳底內側足弓、小腿後面；夜間小腿抽筋',
    notes: KNEE_FIXED,
  },
  gastrocnemiusLat: {
    name: '腓腸肌外側頭', en: 'Gastrocnemius, lateral head', latin: 'Caput laterale musculi gastrocnemii',
    origin: '股骨外上髁後面', insertion: '經跟腱到跟骨',
    action: '踝關節蹠屈；膝關節屈曲', nerve: '脛神經（S1–S2）', lines: ['淺背線'],
    lockedShort: '常穿高跟鞋、長期踮腳', lockedLong: '長期蹲姿、膝過伸',
    painPoints: '小腿後外側上段的肌腹', referredPain: '膝蓋後面、小腿後外側',
    notes: KNEE_FIXED,
  },
  calcanealTendon: {
    name: '跟腱', en: 'Calcaneal (Achilles) tendon', latin: 'Tendo calcaneus',
    origin: '腓腸肌與比目魚肌的共同肌腱', insertion: '跟骨結節後面',
    action: '把小腿三頭肌的力量傳到跟骨', nerve: '無（肌腱）', lines: ['淺背線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '肌腱不計算長度變化。',
  },
  soleus: {
    name: '比目魚肌', en: 'Soleus', latin: 'Musculus soleus',
    origin: '腓骨頭與腓骨上段後面、脛骨比目魚肌線', insertion: '經跟腱到跟骨',
    action: '踝關節蹠屈；站立時防止身體往前倒', nerve: '脛神經（S1–S2）', lines: [],
    lockedShort: '常穿高跟鞋', lockedLong: '長期蹲姿',
    painPoints: '小腿後面下段、跟腱上方兩側', referredPain: '腳跟（類似足底筋膜炎的腳跟痛）、薦髂關節',
    notes: KNEE_FIXED,
  },
  plantaris: {
    name: '蹠肌', en: 'Plantaris', latin: 'Musculus plantaris',
    origin: '股骨外上髁上方', insertion: '跟骨（細長肌腱）',
    action: '輔助蹠屈與膝屈曲', nerve: '脛神經（S1–S2）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '膝蓋後外側', referredPain: '膝蓋後面、小腿上段',
    notes: '約一成的人沒有此肌。' + KNEE_FIXED,
  },
  popliteus: {
    name: '膕肌', en: 'Popliteus', latin: 'Musculus popliteus',
    origin: '股骨外側髁', insertion: '脛骨上端後面（比目魚肌線上方）',
    action: '解鎖伸直的膝關節（膝屈曲起始時使脛骨內旋）', nerve: '脛神經（L4–S1）', lines: ['深前線'],
    lockedShort: '長期屈膝', lockedLong: '長期膝過伸',
    painPoints: '膝蓋後面（膕窩）內下方深處', referredPain: '膝蓋後面；下坡、下樓梯時膝後痛',
    notes: KNEE_FIXED,
  },
  tibialisPosterior: {
    name: '脛後肌', en: 'Tibialis posterior', latin: 'Musculus tibialis posterior',
    origin: '脛骨與腓骨後面、骨間膜', insertion: '舟狀骨粗隆、楔狀骨、第 2–4 蹠骨底',
    action: '踝關節蹠屈、足內翻；支撐足弓', nerve: '脛神經（L4–L5）', lines: ['深前線'],
    lockedShort: '高足弓', lockedLong: '扁平足（足弓塌陷）',
    painPoints: '小腿後面深處（比目魚肌下面）', referredPain: '跟腱、腳跟、腳底',
    notes: KNEE_FIXED,
  },
  flexorDigitorumLongus: {
    name: '屈趾長肌', en: 'Flexor digitorum longus', latin: 'Musculus flexor digitorum longus',
    origin: '脛骨後面中段', insertion: '第 2–5 趾遠節趾骨底',
    action: '屈曲第 2–5 趾；踝關節蹠屈、足內翻', nerve: '脛神經（L5–S2）', lines: ['深前線'],
    lockedShort: '長期抓地（腳趾用力）', lockedLong: '腳趾長期上翹',
    painPoints: '小腿後內側中段深處', referredPain: '腳底前半、腳趾底面',
    notes: KNEE_FIXED,
  },
  flexorHallucisLongus: {
    name: '屈拇長肌', en: 'Flexor hallucis longus', latin: 'Musculus flexor hallucis longus',
    origin: '腓骨後面下 2/3', insertion: '拇趾遠節趾骨底',
    action: '屈曲拇趾；踝關節蹠屈；支撐內側足弓', nerve: '脛神經（L5–S2）', lines: ['深前線'],
    lockedShort: '長期踮腳、芭蕾舞者', lockedLong: '拇趾長期上翹',
    painPoints: '小腿後外側下段深處', referredPain: '拇趾底面、第一蹠骨頭',
    notes: KNEE_FIXED,
  },
  tibialisAnterior: {
    name: '脛前肌', en: 'Tibialis anterior', latin: 'Musculus tibialis anterior',
    origin: '脛骨外側面上 2/3、骨間膜', insertion: '內側楔狀骨、第 1 蹠骨底',
    action: '踝關節背屈（勾腳）、足內翻；支撐內側足弓', nerve: '腓深神經（L4–L5）', lines: ['淺前線', '螺旋線'],
    lockedShort: '長期勾腳（例如開車時腳懸空）', lockedLong: '常穿高跟鞋、長期蹠屈',
    painPoints: '脛骨外側上段的肌腹', referredPain: '踝關節前內側、拇趾',
    notes: KNEE_FIXED,
  },
  extensorDigitorumLongus: {
    name: '伸趾長肌', en: 'Extensor digitorum longus', latin: 'Musculus extensor digitorum longus',
    origin: '脛骨外側髁、腓骨前面上 3/4、骨間膜', insertion: '第 2–5 趾的趾背腱膜',
    action: '伸展第 2–5 趾；踝關節背屈、足外翻', nerve: '腓深神經（L4–S1）', lines: ['淺前線'],
    lockedShort: '腳趾長期上翹', lockedLong: '常穿高跟鞋',
    painPoints: '小腿前外側上段', referredPain: '腳背、第 2–4 趾背面',
    notes: KNEE_FIXED,
  },
  extensorDigitorumLongusTendon: {
    name: '伸趾長肌腱', en: 'Tendons of extensor digitorum longus', latin: 'Tendines musculi extensoris digitorum longi',
    origin: '伸趾長肌在踝前方分出的四條肌腱', insertion: '第 2–5 趾的趾背腱膜',
    action: '把伸趾長肌的拉力傳到腳趾', nerve: '無（肌腱）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '肌腱不計算長度變化。',
  },
  extensorHallucisLongus: {
    name: '伸拇長肌', en: 'Extensor hallucis longus', latin: 'Musculus extensor hallucis longus',
    origin: '腓骨前面中段、骨間膜', insertion: '拇趾遠節趾骨底背面',
    action: '伸展拇趾；踝關節背屈', nerve: '腓深神經（L4–L5）', lines: ['淺前線'],
    lockedShort: '拇趾長期上翹', lockedLong: '常穿高跟鞋',
    painPoints: '小腿前面下段（脛骨外側）', referredPain: '腳背內側、拇趾背面',
    notes: KNEE_FIXED,
  },
  fibularisTertius: {
    name: '第三腓骨肌', en: 'Fibularis (peroneus) tertius', latin: 'Musculus fibularis tertius',
    origin: '腓骨前面下 1/3', insertion: '第 5 蹠骨底背面',
    action: '踝關節背屈、足外翻', nerve: '腓深神經（L5–S1）', lines: [],
    lockedShort: '—', lockedLong: '—',
    painPoints: '小腿前外側下段', referredPain: '踝前外側、腳跟外側',
    notes: KNEE_FIXED,
  },
  fibularisLongus: {
    name: '腓骨長肌', en: 'Fibularis (peroneus) longus', latin: 'Musculus fibularis longus',
    origin: '腓骨頭、腓骨外側面上 2/3', insertion: '繞過腳底，止於內側楔狀骨與第 1 蹠骨底',
    action: '足外翻、踝關節蹠屈；與脛前肌像「馬鐙」一樣托住足弓', nerve: '腓淺神經（L5–S1）', lines: ['體側線', '螺旋線'],
    lockedShort: '扁平足（足外翻）', lockedLong: '高足弓、足內翻、常扭傷腳踝',
    painPoints: '小腿外側上段、腓骨頭下方', referredPain: '外踝周圍、腳的外側緣',
    notes: KNEE_FIXED,
  },
  fibularisBrevis: {
    name: '腓骨短肌', en: 'Fibularis (peroneus) brevis', latin: 'Musculus fibularis brevis',
    origin: '腓骨外側面下 2/3', insertion: '第 5 蹠骨粗隆',
    action: '足外翻、踝關節蹠屈', nerve: '腓淺神經（L5–S1）', lines: ['體側線'],
    lockedShort: '扁平足', lockedLong: '足內翻、常扭傷腳踝',
    painPoints: '小腿外側下段', referredPain: '外踝周圍、腳的外側緣',
    notes: KNEE_FIXED,
  },
  plantarAponeurosis: {
    name: '足底筋膜', en: 'Plantar aponeurosis', latin: 'Aponeurosis plantaris',
    origin: '跟骨結節內側', insertion: '各蹠骨頭與趾骨的屈肌腱鞘',
    action: '支撐縱足弓（絞盤機制）；淺背線的起點', nerve: '無（筋膜組織）', lines: ['淺背線'],
    lockedShort: '—', lockedLong: '—',
    painPoints: '—', referredPain: '—',
    notes: '筋膜不計算長度變化；足底筋膜炎常與小腿後側（淺背線）緊繃有關。',
  },
});

// ── 解剖列車線 ──
Object.assign(window.CONTENT.lines, {
  淺背線: '從腳趾底面與足底筋膜出發，繞過腳跟接跟腱、腓腸肌，經膕旁肌到坐骨結節，再由薦結節韌帶、胸腰筋膜接豎脊肌一路往上，經枕下肌群到帽狀腱膜，止於眉骨。負責維持直立、讓身體往後伸展；任何一段緊繃都可能牽動整條線（例如小腿緊與頭痛有關）。',
  淺前線: '從腳趾背面出發，經脛前肌、伸趾肌到髕骨，接股四頭肌（股直肌）到骨盆，再由腹直肌往上到胸骨，經胸鎖乳突肌到頭顱側面。與淺背線互相拮抗，負責屈曲軀幹與保護身體前面；驚嚇、防衛姿勢時會整條縮緊。',
  體側線: '從腳的外側出發，經腓骨長、短肌到腓骨頭，接髂脛束、闊筋膜張肌、臀大肌到髂嵴，再由腹內外斜肌、肋間肌交錯往上，經頭夾肌、胸鎖乳突肌到耳後。負責左右平衡與側彎；長短腳、側彎時兩側長短不同。',
  螺旋線: '以雙螺旋繞身體：一側頭夾肌跨到對側菱形肌，經前鋸肌、腹外斜肌，再經白線跨回原側的腹內斜肌，往下經闊筋膜張肌、髂脛束、脛前肌繞過足弓接腓骨長肌，再沿股二頭肌、豎脊肌回到頭部。負責旋轉與維持各平面的平衡。',
  淺前臂線: '從胸骨、肋軟骨與下背出發，經胸大肌、闊背肌到肱骨內側，再沿內側肌間隔、前臂屈肌群到手掌與手指掌面。與手臂在身體前方的推、拉、抓握有關。2A 只畫到肱骨，2B 延伸到手。',
  深前臂線: '從第 3–5 肋骨出發，經胸小肌、鎖胸筋膜到喙突，再沿肱二頭肌（並行的喙肱肌）、橈骨到拇指。與肩胛前傾、拇指側的穩定有關。2A 只畫到上臂，2B 延伸到手。',
  淺後臂線: '從枕骨與頸胸椎棘突出發，經斜方肌到肩胛棘與鎖骨，接三角肌、外側肌間隔、前臂伸肌群到手背。與手臂外展、舉高有關。2A 只畫到三角肌，2B 延伸到手。',
  深後臂線: '從頸胸椎棘突出發，經菱形肌、提肩胛肌到肩胛骨內側緣，接旋轉肌袖、肱三頭肌、尺骨到小指側。負責穩定肩胛骨與肱骨頭。2A 只畫到上臂，2B 延伸到手。',
  後功能線: '從一側闊背肌經胸腰筋膜、薦骨交叉到對側臀大肌，再到股外側肌與膝蓋。走路、投擲時把上肢與對側下肢的力量串起來。',
  前功能線: '從胸大肌下緣經腹直肌鞘、恥骨交叉到對側內收長肌。與後功能線一起讓身體在走路、揮擊時做對角旋轉。',
  同側功能線: '從闊背肌外緣經腹外斜肌到同側縫匠肌與膝蓋內側。在單側出力（例如游泳划手、舉重物）時穩定同側。',
  深前線: '身體的「核心」：從腳底深層（脛後肌、屈趾肌）經膕肌、內收肌群到骨盆底與腰大肌，再由橫膈、腰方肌往上，經頸長肌、斜角肌、舌骨肌群到下頷與頭顱底部。負責內在支撐、呼吸與姿勢穩定；常在長期壓力與姿勢失衡時一起縮緊。',
});

// ── 預設姿勢 ──（預設的幅度刻意比一般人大，讓顏色看得出來）
Object.assign(window.CONTENT.postures, {
  neutral: '中立：標準解剖姿勢，是比較長度的基準。肌肉以自然的肌肉色顯示。',
  roundedShoulders: '圓肩：肩胛骨前伸並前傾、肩關節內旋。胸小肌、胸大肌胸肋部、前鋸肌、肩胛下肌鎖短；菱形肌、中下斜方肌、棘下肌、小圓肌鎖長。深前臂線的胸前段縮短，深後臂線的肩胛段被拉長。',
  forwardHead: '頭前傾：下頸段前屈、上頸段與頭部後仰以維持視線。枕下肌群、胸鎖乳突肌鎖短；頭長肌與頸部後側的提肩胛肌、頭夾肌被拉長。淺背線的頸段與淺前線的胸鎖乳突肌同時受影響。',
  kyphosis: '胸椎駝背：胸椎屈曲約 30°，頸部與頭部往後仰以維持視線。腹直肌鎖短；胸段豎脊肌、下斜方肌被拉長；枕下肌群也會鎖短。淺前線前側縮短、淺背線背側拉長。',
  anteriorTilt: '骨盆前傾：骨盆繞髖關節往前轉 18°（示範用的較大幅度），腰椎前凸增加以維持上半身直立。髂肌、腰段豎脊肌、多裂肌鎖短；腹直肌、膕旁肌、臀大肌鎖長（下交叉症候群）。腰大肌、股直肌的長度變化很小，見各自的說明。',
  posteriorTilt: '骨盆後傾：骨盆往後轉 18°，腰椎變平。臀大肌、腹直肌鎖短；腰段豎脊肌、多裂肌鎖長。膕旁肌略縮短（約 3%）。',
  unevenShoulders: '高低肩：右肩上提、左肩下壓。右側上斜方肌、提肩胛肌鎖短；左側被拉長。也可以在下方切換「只調左側／只調右側」自己調整。',
  legLength: '長短腳（左腳短）：左側骨盆下降約 8°（約等於 2 公分），腰椎往右側彎代償，讓上半身維持直立；骨頭長度固定，所以用整條左腿下移來模擬較短的腿。右腰方肌、左臀中肌鎖短；左腰方肌、右臀中肌鎖長（體側線左右不對稱）。',
});

// ── 鎖短、鎖長時痠痛的意義 ──
Object.assign(window.CONTENT.painHints, {
  short: '鎖短：肌肉長期停在縮短的位置，容易形成緊繃結節（激痛點），並把痛「轉移」到別處。處理上以放鬆、伸展這條肌肉為主。',
  long: '鎖長：肌肉長期被拉長、持續出力撐住，常感到痠、緊、拉扯痛——痛的地方不一定是問題的根源，往往要先放鬆另一側鎖短的肌肉，再強化這一側。',
});
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/content.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/content.test.js src/trains/lines.js 解剖列車網頁/content.js
git commit -m "feat: Traditional Chinese notes with pain points for 148 parts and all 12 Anatomy Trains lines" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 6：確認全部測試恢復通過**

執行：

```bash
npm test
```

預期：全部 PASS（約 155 個）。

---

### Task 7：顯示規則（痠痛點）與肌肉清單搜尋

**Files:**
- Modify: `src/app/display.js`、`test/display.test.js`
- Create: `src/ui/muscleList.js`、`test/muscleList.test.js`

**Interfaces:**
- Produces：`createDisplayState()` 多 `showPain`；`painMarkerState(part, st, poseActive, delta): null | 'focus' | 'short' | 'long'`
- Produces：`REGIONS`、`listRows(parts, content, query, region): [{ id, name, en, sides }]`、`initMuscleList(el, ctrl, content)`

- [ ] **Step 1：寫（或更新）測試**

`test/display.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts, painMarkerState, EXPLODE_MAX, PULL_DISTANCE, LAYER_PUSH, GHOST_OPACITY } from '../src/app/display.js';

const part = { key: 'pecMinor.r', id: 'pecMinor', layer: 'middle', measure: true, centroid: [-6, 130, 8] };

test('預設全部顯示', () => {
  assert.deepEqual(partDisplay(part, createDisplayState()), { visible: true, opacity: 1, glow: 0, pickable: true });
});

test('關掉所在的層、或單獨隱藏，就看不到', () => {
  const st = createDisplayState();
  st.layers.middle = false;
  assert.equal(partDisplay(part, st).visible, false);
  const st2 = createDisplayState();
  st2.hidden.add('pecMinor.r');
  assert.equal(partDisplay(part, st2).visible, false);
  assert.equal(partDisplay({ ...part, key: 'pecMinor.l' }, st2).visible, true);
});

test('半透明只剩 10%，而且點不到（才能點到後面的深層肌肉）', () => {
  const st = createDisplayState();
  st.ghost.add('pecMinor.r');
  const d = partDisplay(part, st);
  assert.equal(GHOST_OPACITY, 0.1);
  assert.equal(d.opacity, GHOST_OPACITY);
  assert.equal(d.pickable, false);
});

test('隱藏的部件點不到', () => {
  const st = createDisplayState();
  st.hidden.add('pecMinor.r');
  assert.equal(partDisplay(part, st).pickable, false);
});

test('選了列車線：線上部件發亮，其他變淡且點不到', () => {
  const st = createDisplayState();
  st.lineParts = new Set(['pecMinor']);
  assert.deepEqual(partDisplay(part, st), { visible: true, opacity: 1, glow: 0.25, pickable: true });
  const other = partDisplay({ ...part, id: 'trapUpper', key: 'trapUpper.r' }, st);
  assert.equal(other.opacity, 0.15);
  assert.equal(other.pickable, false);
});

test('全部恢復：清掉隱藏與半透明，其他拆解狀態不變', () => {
  const st = createDisplayState();
  st.hidden.add('a');
  st.ghost.add('b');
  st.pulled.add('c');
  st.layers.deep = false;
  st.explode = 0.4;
  restoreParts(st);
  assert.equal(st.hidden.size, 0);
  assert.equal(st.ghost.size, 0);
  assert.ok(st.pulled.has('c'));
  assert.equal(st.layers.deep, false);
  assert.equal(st.explode, 0.4);
});

test('選取的部件最亮', () => {
  const st = createDisplayState();
  st.selectedKey = 'pecMinor.r';
  assert.equal(partDisplay(part, st).glow, 0.45);
});

test('爆炸圖與拉出沿水平方向往外', () => {
  const st = createDisplayState();
  st.explode = 1;
  st.pulled.add('pecMinor.r');
  const o = partOffset(part, st, [0, 0]);
  const dist = EXPLODE_MAX * LAYER_PUSH.middle + PULL_DISTANCE;
  assert.equal(o[1], 0);
  assert.ok(Math.abs(Math.hypot(o[0], o[2]) - dist) < 1e-9);
  assert.ok(o[0] < 0 && o[2] > 0); // 右前方的肌肉往右前方移
});

test('復原清掉拆解狀態，保留列車線', () => {
  const st = createDisplayState();
  st.layers.superficial = false;
  st.hidden.add('x');
  st.explode = 0.5;
  st.selectedKey = 'x';
  st.lineParts = new Set(['pecMinor']);
  resetDisplay(st);
  assert.equal(st.layers.superficial, true);
  assert.equal(st.hidden.size, 0);
  assert.equal(st.explode, 0);
  assert.equal(st.selectedKey, null);
  assert.ok(st.lineParts.has('pecMinor'));
});

test('痠痛點：開關關閉時都不顯示', () => {
  const st = createDisplayState();
  st.selectedKey = 'pecMinor.r';
  assert.equal(painMarkerState(part, st, true, -0.2), null);
});

test('痠痛點：姿勢改變時自動標出鎖短／鎖長的肌肉', () => {
  const st = createDisplayState();
  st.showPain = true;
  assert.equal(painMarkerState(part, st, true, -0.14), 'short');
  assert.equal(painMarkerState(part, st, true, 0.08), 'long');
  assert.equal(painMarkerState(part, st, true, 0.01), null);
  assert.equal(painMarkerState({ ...part, measure: false }, st, true, -0.2), null); // 筋膜不算
});

test('痠痛點：選取的肌肉一定顯示；隱藏的肌肉不顯示', () => {
  const st = createDisplayState();
  st.showPain = true;
  st.selectedKey = 'pecMinor.r';
  assert.equal(painMarkerState(part, st, false, 0), 'focus');
  st.hidden.add('pecMinor.r');
  assert.equal(painMarkerState(part, st, true, -0.2), null);
});
```

`test/muscleList.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listRows } from '../src/ui/muscleList.js';

const parts = [
  { info: { id: 'pecMinor', side: 'l', region: 'trunk' } },
  { info: { id: 'pecMinor', side: 'r', region: 'trunk' } },
  { info: { id: 'diaphragm', side: 'm', region: 'trunk' } },
  { info: { id: 'soleus', side: 'r', region: 'lowerLimb' } },
];
const content = {
  muscles: {
    pecMinor: { name: '胸小肌', en: 'Pectoralis minor' },
    diaphragm: { name: '橫膈', en: 'Diaphragm' },
    soleus: { name: '比目魚肌', en: 'Soleus' },
  },
};

test('左右合併成一列，中線肌肉只有一個', () => {
  const rows = listRows(parts, content, '', 'all');
  assert.deepEqual(rows.map(r => [r.id, r.sides.join('')]), [['pecMinor', 'lr'], ['diaphragm', 'm'], ['soleus', 'r']]);
});

test('中文、英文搜尋（不分大小寫）', () => {
  assert.deepEqual(listRows(parts, content, '胸小', 'all').map(r => r.id), ['pecMinor']);
  assert.deepEqual(listRows(parts, content, 'DIAPH', 'all').map(r => r.id), ['diaphragm']);
});

test('依分區篩選', () => {
  assert.deepEqual(listRows(parts, content, '', 'lowerLimb').map(r => r.id), ['soleus']);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/display.test.js test/muscleList.test.js
```

預期：FAIL，`painMarkerState`、`listRows` 不存在

- [ ] **Step 3：實作**

`src/app/display.js`：

```js
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
```

`src/ui/muscleList.js`：

```js
// 肌肉清單：中文或英文搜尋、依頭頸／軀幹／上肢／下肢篩選；點「左」「右」選取並轉到看得到的方向
export const REGIONS = [
  ['all', '全部'],
  ['headNeck', '頭頸'],
  ['trunk', '軀幹'],
  ['upperLimb', '上肢'],
  ['lowerLimb', '下肢'],
];

// 清單的一列：同一條肌肉的左右兩側合併（中線肌肉只有一個按鈕）
export function listRows(parts, content, query, region) {
  const q = query.trim().toLowerCase();
  const rows = new Map();
  for (const p of parts) {
    const c = content.muscles[p.info.id];
    if (region !== 'all' && p.info.region !== region) continue;
    if (q && !`${c.name} ${c.en}`.toLowerCase().includes(q)) continue;
    if (!rows.has(p.info.id)) rows.set(p.info.id, { id: p.info.id, name: c.name, en: c.en, sides: [] });
    rows.get(p.info.id).sides.push(p.info.side);
  }
  return [...rows.values()];
}

const SIDE_BUTTON = { l: '左', r: '右', m: '選取' };

export function initMuscleList(el, ctrl, content) {
  let query = '';
  let region = 'all';
  el.innerHTML = `
    <h2>肌肉清單</h2>
    <input type="search" placeholder="搜尋：胸小肌、trapezius…" data-search>
    <div class="regions">${REGIONS.map(([k, label]) => `<button type="button" data-region="${k}">${label}</button>`).join('')}</div>
    <ul class="muscle-rows"></ul>`;
  const list = el.querySelector('.muscle-rows');

  el.addEventListener('input', e => {
    if ('search' in e.target.dataset) {
      query = e.target.value;
      render();
    }
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.region) {
      region = btn.dataset.region;
      render();
    } else if (btn.dataset.key) {
      ctrl.focus(btn.dataset.key);
    }
  });

  function render() {
    for (const b of el.querySelectorAll('[data-region]')) b.classList.toggle('active', b.dataset.region === region);
    const rows = listRows(ctrl.parts, content, query, region);
    list.innerHTML = rows.length
      ? rows
          .map(r => `<li title="${r.en}"><span>${r.name}</span>${r.sides.map(s => `<button type="button" data-key="${r.id}.${s}" class="${ctrl.state.selectedKey === `${r.id}.${s}` ? 'active' : ''}">${SIDE_BUTTON[s]}</button>`).join('')}</li>`)
          .join('')
      : '<li class="hint">找不到符合的肌肉</li>';
  }
  ctrl.onChange(render);
  render();
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/display.test.js test/muscleList.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/display.test.js test/muscleList.test.js src/app/display.js src/ui/muscleList.js
git commit -m "feat: pain-marker display rule and searchable muscle list" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8：網頁：模型、控制器、軌道、面板與版面

**Files:**
- Modify: `src/model/scene.js`、`src/app/controller.js`、`src/trains/track.js`、`src/view/viewer.js`
- Modify: `src/ui/postureBar.js`、`src/ui/dissectPanel.js`、`src/ui/infoCard.js`、`src/main.js`
- Create: `src/ui/viewBar.js`
- Modify: `解剖列車網頁/index.html`、`解剖列車網頁/style.css`、`build.mjs`（預覽可用 `-- --port=` 換埠）

**Interfaces:**
- Consumes：Task 1–7 的全部函式
- Produces：`buildModel(data).parts[i]` 多 `rest`、`skin`、`segments`、`tps: [{ marker, vertex }]`；`createController` 多 `parts`、`setShowPain(on)`、`focus(key)`；`createViewer` 多 `setView(name)`、`lookAt(point)`

- [ ] **Step 1：模型、控制器、軌道、3D 視窗**

`src/model/scene.js`：

```js
// 把 model.js 的資料建成 three.js 網格（骨頭、肌肉部件、痠痛點標記）
import * as THREE from 'three';
import { base64ToBytes, decodeMesh } from './decode.js';
import { prepareDeform } from '../muscles/deform.js';
import { PALETTE } from '../muscles/colors.js';

function makeGeometry(positions, indices) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  return geo;
}

const MARKER_GEOMETRY = new THREE.SphereGeometry(0.7, 14, 10);

// data：window.MODEL_DATA = { meta, bin（base64） }
export function buildModel(data) {
  const { meta } = data;
  const bytes = base64ToBytes(data.bin);
  const group = new THREE.Group();

  const boneMaterial = new THREE.MeshStandardMaterial({ color: 0xe9e0cc, roughness: 0.75 });
  const bones = meta.bones.map(b => {
    const { positions, indices } = decodeMesh(bytes, meta.quant, b);
    const mesh = new THREE.Mesh(makeGeometry(positions, indices), boneMaterial);
    mesh.matrixAutoUpdate = false; // 骨頭直接套骨段矩陣
    group.add(mesh);
    return { mesh, segment: b.segment };
  });

  const markers = new THREE.Group();
  const parts = meta.parts.map(info => {
    const { positions, indices, skin } = decodeMesh(bytes, meta.quant, info);
    const geo = makeGeometry(positions.slice(), indices);
    geo.getAttribute('position').setUsage(THREE.DynamicDrawUsage);
    const material = new THREE.MeshStandardMaterial({ roughness: 0.55 });
    material.color.setRGB(...PALETTE.natural, THREE.SRGBColorSpace);
    const mesh = new THREE.Mesh(geo, material);
    mesh.userData.partKey = info.key;
    group.add(mesh);
    // 痠痛點：記住對應的頂點，姿勢改變後跟著頂點移動；肌肉本身拆解位移時一起移
    const tps = info.tps.map(vertex => {
      const marker = new THREE.Mesh(MARKER_GEOMETRY, new THREE.MeshBasicMaterial());
      marker.visible = false;
      marker.renderOrder = 5;
      markers.add(marker);
      return { marker, vertex };
    });
    return {
      info,
      mesh,
      rest: positions,
      skin, // 跨三個以上骨段時才有
      prep: skin ? null : prepareDeform(positions, info.a, info.b),
      segments: info.skinSegs ?? [info.segA, info.segB, ...info.vias.map(v => v.seg)], // 只要這些骨段沒動，就不必重算
      tps,
      delta: 0, // 目前長度變化率
      target: [0, 0, 0], // 拆解時要移到的位移（每一幀平滑靠近）
    };
  });
  group.add(markers);

  return { group, bones, parts, joints: meta.joints };
}
```

`src/app/controller.js`：

```js
// 把姿勢、拆解狀態、列車線、痠痛點套到 3D 模型上；面板只透過這裡改狀態
import * as THREE from 'three';
import { computePose } from '../rig/rig.js';
import { NEUTRAL, isNeutral } from '../rig/presets.js';
import { deformInto, deformChain } from '../muscles/deform.js';
import { lengthDelta } from '../muscles/length.js';
import { lengthColor, PALETTE } from '../muscles/colors.js';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts, painMarkerState } from './display.js';
import { linePartIds } from '../trains/lines.js';
import { buildTrack } from '../trains/track.js';

const MARKER_COLORS = { focus: [1, 0.85, 0.2], short: [1, 0.4, 0.2], long: [0.4, 0.65, 1] };
const MARKER_LIFT = 0.5; // 標記沿法向量浮出肌肉表面的距離（公分）

export function createController(viewer, model) {
  const state = createDisplayState();
  const axis = [model.joints.thorax.center[0], model.joints.thorax.center[2]]; // 身體中軸（x, z）
  const byKey = new Map(model.parts.map(p => [p.info.key, p]));
  const listeners = [];
  let params = { ...NEUTRAL };
  let mats = null;
  let activeLine = null;
  let track = null;

  const poseActive = () => !isNeutral(params);
  const emit = () => listeners.forEach(fn => fn());

  // 法向量與外接球（點選用）很花時間：動畫、拖動滑桿的過程中先不算，停下 0.12 秒後一次補齊
  let finishTimer = 0;
  function finishPose() {
    for (const p of model.parts) {
      if (!p.stale) continue;
      p.mesh.geometry.computeVertexNormals();
      p.mesh.geometry.computeBoundingSphere();
      p.stale = false;
    }
  }

  function applyPose() {
    const next = computePose(model.joints, params);
    // 只重算骨段有動到的肌肉
    const changed = new Set([...next].filter(([k, m]) => !mats || !m.equals(mats.get(k))).map(([k]) => k));
    mats = next;
    for (const b of model.bones) b.mesh.matrix.copy(mats.get(b.segment));
    for (const p of model.parts) {
      if (!p.segments.some(s => changed.has(s))) continue;
      const pos = p.mesh.geometry.getAttribute('position');
      if (p.skin) deformChain(p.rest, p.skin, p.info.skinSegs, mats, pos.array);
      else deformInto(p.prep, mats.get(p.info.segA), mats.get(p.info.segB), pos.array);
      pos.needsUpdate = true;
      p.stale = true;
      p.delta = lengthDelta(p.info, mats);
    }
    clearTimeout(finishTimer);
    finishTimer = setTimeout(finishPose, 120);
    applyColors();
    applyMarkers();
    rebuildTrack();
  }

  function applyColors() {
    for (const p of model.parts) {
      const rgb = !poseActive() ? PALETTE.natural : p.info.measure ? lengthColor(p.delta) : PALETTE.same;
      p.mesh.material.color.setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
    }
  }

  function applyDisplay() {
    for (const b of model.bones) b.mesh.visible = state.layers.bones;
    for (const p of model.parts) {
      const d = partDisplay(p.info, state);
      const m = p.mesh.material;
      p.mesh.visible = d.visible;
      m.opacity = d.opacity;
      const transparent = d.opacity < 1;
      if (m.transparent !== transparent) {
        m.transparent = transparent;
        m.needsUpdate = true; // 不透明材質的著色器會把 alpha 固定為 1，切換時要重新編譯
      }
      m.depthWrite = !transparent;
      m.emissive.setRGB(d.glow, d.glow * 0.85, d.glow * 0.5);
      p.pickable = d.pickable;
      p.target = partOffset(p.info, state, axis);
    }
    applyMarkers();
    rebuildTrack();
  }

  // 痠痛點的顯示與顏色；位置在每一幀更新（跟著肌肉的拆解位移）
  function applyMarkers() {
    for (const p of model.parts) {
      const kind = painMarkerState(p.info, state, poseActive(), p.delta);
      for (const { marker } of p.tps) {
        marker.visible = Boolean(kind);
        if (kind) marker.material.color.setRGB(...MARKER_COLORS[kind], THREE.SRGBColorSpace);
      }
    }
  }

  function placeMarkers() {
    for (const p of model.parts) {
      if (!p.tps.length || !p.tps[0].marker.visible) continue;
      const pos = p.mesh.geometry.getAttribute('position').array;
      const nor = p.mesh.geometry.getAttribute('normal').array;
      const o = p.mesh.position;
      for (const { marker, vertex: v } of p.tps) {
        marker.position.set(
          pos[v * 3] + nor[v * 3] * MARKER_LIFT + o.x,
          pos[v * 3 + 1] + nor[v * 3 + 1] * MARKER_LIFT + o.y,
          pos[v * 3 + 2] + nor[v * 3 + 2] * MARKER_LIFT + o.z,
        );
      }
    }
  }

  function rebuildTrack() {
    if (track) {
      viewer.scene.remove(track);
      track.traverse(o => {
        o.geometry?.dispose();
        o.material?.dispose();
      });
      track = null;
    }
    if (!activeLine) return;
    track = buildTrack(activeLine, model.parts, mats, p => p.target, poseActive());
    viewer.scene.add(track);
  }

  // 拆解位移每一幀平滑靠近目標（約 0.4 秒到位）；痠痛點跟著移動
  viewer.onFrame(dt => {
    const k = 1 - Math.exp(-dt * 10);
    for (const p of model.parts) {
      const pos = p.mesh.position;
      pos.set(pos.x + (p.target[0] - pos.x) * k, pos.y + (p.target[1] - pos.y) * k, pos.z + (p.target[2] - pos.z) * k);
    }
    placeMarkers();
  });

  applyPose();
  finishPose();
  applyDisplay();

  return {
    state,
    get params() {
      return { ...params };
    },
    get poseActive() {
      return poseActive();
    },
    get activeLine() {
      return activeLine;
    },
    parts: model.parts,
    partByKey: key => byKey.get(key),
    setParams(next) {
      params = { ...params, ...next };
      applyPose();
      emit();
    },
    setLayer(layer, on) {
      state.layers[layer] = on;
      applyDisplay();
      emit();
    },
    setExplode(value) {
      state.explode = value;
      applyDisplay();
      emit();
    },
    setShowPain(on) {
      state.showPain = on;
      applyMarkers();
      emit();
    },
    // setName：'hidden'、'ghost' 或 'pulled'
    toggle(setName, key) {
      const set = state[setName];
      if (set.has(key)) set.delete(key);
      else set.add(key);
      if (setName === 'hidden' && state.selectedKey === key) state.selectedKey = null;
      applyDisplay();
      emit();
    },
    select(key) {
      state.selectedKey = key;
      applyDisplay();
      emit();
    },
    // 從肌肉清單選取：轉到看得到的方向並對準那條肌肉
    focus(key) {
      const p = byKey.get(key);
      if (!p) return;
      state.selectedKey = key;
      viewer.lookAt(p.info.centroid);
      applyDisplay();
      emit();
    },
    setLine(lineId) {
      activeLine = lineId;
      state.lineParts = linePartIds(lineId);
      applyDisplay();
      emit();
    },
    reset() {
      resetDisplay(state);
      applyDisplay();
      emit();
    },
    // 把隱藏、半透明的部件全部顯示回來
    restoreParts() {
      restoreParts(state);
      applyDisplay();
      emit();
    },
    // 只有看得清楚的部件能點（半透明、列車線淡化的部件點不到，點選會穿過去選到後面的肌肉）
    pickAt(x, y) {
      finishPose(); // 確保外接球是最新的
      const candidates = model.parts.filter(p => p.pickable).map(p => p.mesh);
      return viewer.pick(x, y, candidates)?.userData.partKey ?? null;
    },
    onChange(fn) {
      listeners.push(fn);
    },
  };
}
```

`src/trains/track.js`：

```js
// 列車線軌道：每個部件一段管子（顏色＝長度狀態），站與站之間用細管把最接近的兩端連起來
import * as THREE from 'three';
import { partPath } from '../muscles/length.js';
import { lengthColor } from '../muscles/colors.js';
import { LINES } from './lines.js';

const GOLD = [0.98, 0.78, 0.3]; // 中立姿勢時的軌道色
const LINK = [0.85, 0.85, 0.85];
const OTHER = { l: 'r', r: 'l' };

const mean = pts => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length, s[2] + p[2] / pts.length], [0, 0, 0]);
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);

function tube(points, rgb, radius) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], p[1], p[2])));
  const material = new THREE.MeshBasicMaterial({ depthTest: false, transparent: true, opacity: 0.9 });
  material.color.setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, radius, 8, false), material);
  mesh.renderOrder = 10; // 畫在肌肉上面，被擋住也看得到
  return mesh;
}

// parts：scene.js 建立的部件；offsetOf(part) → 拆解位移；colorMode：是否用長度配色
export function buildTrack(lineId, parts, mats, offsetOf, colorMode) {
  const line = LINES.find(l => l.id === lineId);
  const group = new THREE.Group();
  for (const side of ['l', 'r']) {
    let prev = null; // 上一站兩端的平均位置 [起點們, 終點們]
    for (const st of line.stations) {
      const s = st.opp ? OTHER[side] : side;
      const starts = [], ends = [];
      for (const id of st.ids) {
        const p = parts.find(q => q.info.id === id && (q.info.side === s || q.info.side === 'm'));
        const o = offsetOf(p);
        const pts = partPath(p.info, mats).map(q => [q[0] + o[0], q[1] + o[1], q[2] + o[2]]);
        group.add(tube(pts, colorMode && p.info.measure ? lengthColor(p.delta) : GOLD, 0.35));
        starts.push(pts[0]);
        ends.push(pts[pts.length - 1]);
      }
      const here = [mean(starts), mean(ends)];
      if (prev) {
        // 兩站之間取距離最近的一對端點相連（不管肌肉的起止方向）
        let best = null;
        for (const p of prev) for (const q of here) if (!best || dist(p, q) < dist(best[0], best[1])) best = [p, q];
        group.add(tube(best, LINK, 0.15));
      }
      prev = here;
    }
  }
  return group;
}
```

`src/view/viewer.js`：

```js
// 3D 視窗：渲染器、相機、滑鼠／觸控旋轉縮放、點選、視角按鈕
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const BODY_CENTER = new THREE.Vector3(0, 86, 0); // 全身視角對準的點（公分）
const FULL_DISTANCE = 300; // 全身入鏡的距離
const FOCUS_DISTANCE = 95; // 從清單選肌肉時拉近的距離

// 視角方向（從對準點看向相機）；右側在 −x，所以「右側」視角的相機在 −x
const VIEWS = {
  front: [-0.25, 0.05, 1],
  back: [0.25, 0.05, -1],
  right: [-1, 0.05, 0.05],
  left: [1, 0.05, 0.05],
};

export function createViewer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1116);
  const camera = new THREE.PerspectiveCamera(35, 1, 1, 2000);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x2a2f3a, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 1.8);
  key.position.set(-80, 220, 160);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 0.9);
  rim.position.set(90, 160, -160);
  scene.add(rim);

  // 相機放在 target 的 dir 方向、距離 distance 的位置
  function place(target, dir, distance) {
    controls.target.copy(target);
    camera.position.copy(target).add(new THREE.Vector3(...dir).normalize().multiplyScalar(distance));
    controls.update();
  }
  const setView = name => place(BODY_CENTER, VIEWS[name], FULL_DISTANCE);
  setView('front');

  // 對準某個點：相機移到身體中軸往該點的水平方向，讓那一側面向使用者
  function lookAt(point) {
    const p = new THREE.Vector3(...point);
    const dir = new THREE.Vector3(p.x, 0, p.z - BODY_CENTER.z);
    if (dir.length() < 3) dir.copy(camera.position).sub(controls.target).setY(0);
    dir.normalize().setY(0.15);
    place(p, dir.toArray(), FOCUS_DISTANCE);
  }

  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(container);
  resize();

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pick(clientX, clientY, objects) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    return raycaster.intersectObjects(objects, false)[0]?.object ?? null;
  }

  const frameHooks = [];
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = clock.getDelta();
    for (const fn of frameHooks) fn(dt);
    controls.update();
    renderer.render(scene, camera);
  });

  return { scene, camera, controls, renderer, pick, setView, lookAt, onFrame: fn => frameHooks.push(fn) };
}
```

- [ ] **Step 2：面板與進入點**

`src/ui/postureBar.js`：

```js
// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、分組的關節滑桿（肩膀可兩側一起或只調一側）
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
          ${g === 'shoulder' ? `<div class="side-modes">${SIDE_MODES.map(([k, label]) => `<button type="button" data-mode="${k}">${label}</button>`).join('')}</div>` : ''}
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
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節；肩膀可切換「兩側一起」或只調左側、右側。';
  }
  ctrl.onChange(sync);
  sync();
}
```

`src/ui/dissectPanel.js`：

```js
// 左側「拆解」面板：各層顯示開關、痠痛點開關、爆炸圖、復原，以及已隱藏／半透明肌肉的清單（可逐條顯示回來）

const SIDE_TEXT = { l: '左', r: '右', m: '中線' };

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

export function initDissectPanel(el, ctrl, content) {
  el.innerHTML = `
    <h2>拆解</h2>
    ${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}
    <label class="toggle pain-toggle"><input type="checkbox" data-pain>顯示痠痛點</label>
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <div class="hidden-list"></div>
    <p class="hint">關掉淺層就能看到中層；點選肌肉後可單獨隱藏、半透明或拉出。</p>`;
  const list = el.querySelector('.hidden-list');

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
    if ('pain' in e.target.dataset) ctrl.setShowPain(e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
  });
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if ('reset' in btn.dataset) ctrl.reset();
    else if ('restoreAll' in btn.dataset) ctrl.restoreParts();
    else if (btn.dataset.unset) ctrl.toggle(btn.dataset.unset, btn.dataset.key);
  });

  const label = key => {
    const p = ctrl.partByKey(key);
    return `${content.muscles[p.info.id].name}（${SIDE_TEXT[p.info.side]}）`;
  };
  const row = (key, setName, action) =>
    `<li><span>${label(key)}</span><button type="button" data-unset="${setName}" data-key="${key}">${action}</button></li>`;

  const sync = () => {
    for (const [k] of TOGGLES) el.querySelector(`[data-layer="${k}"]`).checked = ctrl.state.layers[k];
    el.querySelector('[data-explode]').value = ctrl.state.explode;
    el.querySelector('[data-pain]').checked = ctrl.state.showPain;
    const { hidden, ghost } = ctrl.state;
    list.innerHTML =
      hidden.size + ghost.size === 0
        ? ''
        : `<h3>已隱藏／半透明</h3>
           <ul>${[...hidden].map(k => row(k, 'hidden', '顯示')).join('')}${[...ghost].map(k => row(k, 'ghost', '取消半透明')).join('')}</ul>
           <button type="button" data-restore-all>全部恢復</button>`;
  };
  ctrl.onChange(sync);
  sync();
}
```

`src/ui/infoCard.js`：

```js
// 右側說明卡：選取肌肉的中文說明、目前長度變化與痠痛點；沒選肌肉時顯示目前列車線的說明
import { deltaText, lengthState, STATE_TEXT } from '../muscles/colors.js';
import { LINES } from '../trains/lines.js';

const SIDE_TEXT = { l: '左側', r: '右側', m: '中線' };

export function initInfoCard(el, ctrl, content) {
  function render() {
    const key = ctrl.state.selectedKey;
    if (!key) {
      const line = LINES.find(l => l.id === ctrl.activeLine);
      el.innerHTML = line
        ? `<h2>${line.name}</h2><p>${content.lines[line.name]}</p><p class="hint">點選線上的肌肉查看說明。</p>`
        : '<p class="hint">點選肌肉、或從左側肌肉清單選取，查看說明。</p>';
      return;
    }
    const part = ctrl.partByKey(key);
    const c = content.muscles[part.info.id];
    const st = ctrl.state;
    const s = lengthState(part.delta);
    let delta = '';
    if (ctrl.poseActive) {
      delta = part.info.measure
        ? `<p class="delta ${s}">目前 ${deltaText(part.delta)}　${STATE_TEXT[s]}</p>`
        : '<p class="delta same">筋膜、肌腱：不計算長度變化</p>';
    }
    // 鎖短、鎖長時，痠痛的意義不同
    const painHint = ctrl.poseActive && part.info.measure && s !== 'same' ? `<p class="pain-hint ${s}">${content.painHints[s]}</p>` : '';
    el.innerHTML = `
      <h2>${c.name}<span class="side">${SIDE_TEXT[part.info.side]}</span></h2>
      <p class="en">${c.en}<br><i>${c.latin}</i></p>
      ${delta}
      <dl>
        <dt>起點</dt><dd>${c.origin}</dd>
        <dt>止點</dt><dd>${c.insertion}</dd>
        <dt>作用</dt><dd>${c.action}</dd>
        <dt>神經</dt><dd>${c.nerve}</dd>
        <dt>列車線</dt><dd>${c.lines.length ? c.lines.join('、') : '—'}</dd>
        <dt>常見鎖短</dt><dd>${c.lockedShort}</dd>
        <dt>常見鎖長</dt><dd>${c.lockedLong}</dd>
        <dt>痠痛點</dt><dd>${c.painPoints}</dd>
        <dt>轉移痛</dt><dd>${c.referredPain}</dd>
      </dl>
      ${painHint}
      ${c.notes ? `<p class="notes">審閱註記：${c.notes}</p>` : ''}
      <div class="actions">
        <button type="button" data-act="hidden">隱藏</button>
        <button type="button" data-act="ghost">${st.ghost.has(key) ? '取消半透明' : '半透明'}</button>
        <button type="button" data-act="pulled">${st.pulled.has(key) ? '放回' : '拉出'}</button>
      </div>`;
  }

  el.addEventListener('click', e => {
    const act = e.target.closest('button')?.dataset.act;
    if (act && ctrl.state.selectedKey) ctrl.toggle(act, ctrl.state.selectedKey);
  });
  ctrl.onChange(render);
  render();
}
```

`src/ui/viewBar.js`：

```js
// 視角按鈕：前、後、右、左（右側在畫面左邊，與面對病人時相同）
const VIEWS = [
  ['front', '前'],
  ['back', '後'],
  ['right', '右側'],
  ['left', '左側'],
];

export function initViewBar(el, viewer) {
  el.innerHTML = `<span class="label">視角</span>${VIEWS.map(([k, label]) => `<button type="button" data-view="${k}">${label}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const view = e.target.closest('button')?.dataset.view;
    if (view) viewer.setView(view);
  });
}
```

`src/main.js`：

```js
// 進入點：建立 3D 視窗、模型與各面板
import { createViewer } from './view/viewer.js';
import { buildModel } from './model/scene.js';
import { createController } from './app/controller.js';
import { initDissectPanel } from './ui/dissectPanel.js';
import { initMuscleList } from './ui/muscleList.js';
import { initInfoCard } from './ui/infoCard.js';
import { initPostureBar } from './ui/postureBar.js';
import { initLineBar } from './ui/lineBar.js';
import { initViewBar } from './ui/viewBar.js';

const viewer = createViewer(document.getElementById('viewport'));
const model = buildModel(window.MODEL_DATA);
viewer.scene.add(model.group);
const ctrl = createController(viewer, model);

initDissectPanel(document.getElementById('dissect'), ctrl, window.CONTENT);
initMuscleList(document.getElementById('muscleList'), ctrl, window.CONTENT);
initInfoCard(document.getElementById('info'), ctrl, window.CONTENT);
initPostureBar(document.getElementById('postureBar'), ctrl, window.CONTENT);
initLineBar(document.getElementById('lineBar'), ctrl);
initViewBar(document.getElementById('viewBar'), viewer);

// 點一下選取肌肉；拖曳旋轉不算點選
const canvas = viewer.renderer.domElement;
let down = null;
canvas.addEventListener('pointerdown', e => (down = [e.clientX, e.clientY]));
canvas.addEventListener('pointerup', e => {
  if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) ctrl.select(ctrl.pickAt(e.clientX, e.clientY));
  down = null;
});

document.getElementById('loading').remove();
window.app = { viewer, model, ctrl }; // 方便在主控台檢查
```

- [ ] **Step 3：頁面、樣式、打包腳本**

`解剖列車網頁/index.html`：

```html
<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>解剖列車 3D</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header id="topbar"><h1>解剖列車 3D</h1><nav id="lineBar"></nav><nav id="viewBar"></nav></header>
<aside id="left" class="panel">
  <section id="dissect"></section>
  <section id="muscleList"></section>
</aside>
<main id="viewport">
  <div id="legend"><span class="short">紅＝鎖短</span><span class="long">藍＝鎖長</span><span class="same">灰＝不變</span><span class="pain">● 痠痛點</span></div>
  <div id="loading">模型載入中…</div>
</main>
<aside id="info" class="panel"></aside>
<footer id="postureBar"></footer>
<p id="credit">3D 模型：Z-Anatomy（CC BY-SA 4.0），衍生自 BodyParts3D（© The Database Center for Life Science）｜教學示意，長度變化以骨骼幾何計算，痠痛點與轉移痛為常見位置，不能取代專業評估</p>
<script src="content.js"></script>
<script src="model.js"></script>
<script src="app.js"></script>
</body>
</html>
```

`解剖列車網頁/style.css`：

```css
:root {
  --bg: #0e1116;
  --panel: #161b22;
  --line: #2a313c;
  --text: #e6e8eb;
  --muted: #9aa4b2;
  --accent: #f2c14e;
  --short: #ff7b72;
  --long: #79a8ff;
  --same: #b3ada8;
  --pain: #ffd23f;
}
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; }
body {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 320px;
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  grid-template-areas: 'top top top' 'left view info' 'posture posture posture' 'credit credit credit';
  background: var(--bg);
  color: var(--text);
  font: 15px/1.6 'Microsoft JhengHei', 'Noto Sans TC', 'PingFang TC', sans-serif;
}
#topbar { grid-area: top; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 8px 16px; border-bottom: 1px solid var(--line); }
#topbar h1 { margin: 0 12px 0 0; font-size: 18px; font-weight: 600; }
#lineBar, #viewBar { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
#viewBar { margin-left: auto; }
#left { grid-area: left; overflow-y: auto; }
#viewport { grid-area: view; position: relative; min-height: 0; overflow: hidden; }
#viewport canvas { display: block; }
#info { grid-area: info; overflow-y: auto; }
#postureBar { grid-area: posture; padding: 8px 16px; border-top: 1px solid var(--line); background: var(--panel); }
#credit { grid-area: credit; margin: 0; padding: 4px 16px; font-size: 12px; color: var(--muted); }

.panel { background: var(--panel); padding: 12px 14px; border-right: 1px solid var(--line); }
#info.panel { border-right: 0; border-left: 1px solid var(--line); }
.panel h2 { margin: 0 0 8px; font-size: 16px; }
button { padding: 4px 10px; border: 1px solid var(--line); border-radius: 6px; background: transparent; color: var(--text); font: inherit; cursor: pointer; }
button:hover { border-color: var(--muted); }
button.active { background: var(--accent); border-color: var(--accent); color: #1b1600; }
.label, .hint, .posture-note { color: var(--muted); }
.hint, .posture-note { font-size: 13px; }

.toggle { display: flex; align-items: center; gap: 8px; padding: 2px 0; }
.pain-toggle { margin-top: 6px; color: var(--pain); }
.slider { display: block; margin: 10px 0; color: var(--muted); }
.slider input { width: 100%; }
.hidden-list h3 { margin: 14px 0 6px; font-size: 14px; font-weight: 600; }
.hidden-list ul { margin: 0 0 8px; padding: 0; list-style: none; }
.hidden-list li { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 3px 0; font-size: 13px; }
.hidden-list li button { flex: none; padding: 1px 8px; font-size: 12px; white-space: nowrap; }

#muscleList { margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--line); }
#muscleList input[type='search'] { width: 100%; padding: 4px 8px; border: 1px solid var(--line); border-radius: 6px; background: var(--bg); color: var(--text); font: inherit; }
.regions { display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0; }
.regions button { padding: 1px 8px; font-size: 13px; }
.muscle-rows { margin: 0; padding: 0; list-style: none; }
.muscle-rows li { display: flex; align-items: center; gap: 4px; padding: 2px 0; font-size: 13px; }
.muscle-rows li span { flex: 1; }
.muscle-rows li button { flex: none; padding: 0 6px; font-size: 12px; }

#legend { position: absolute; left: 12px; bottom: 12px; display: flex; gap: 6px; font-size: 13px; pointer-events: none; }
#legend span { padding: 2px 8px; border-radius: 6px; background: rgba(0, 0, 0, 0.45); }
#legend .short { color: var(--short); }
#legend .long { color: var(--long); }
#legend .same { color: var(--same); }
#legend .pain { color: var(--pain); }
#loading { position: absolute; inset: 0; display: grid; place-items: center; color: var(--muted); }

.side { margin-left: 8px; font-size: 13px; font-weight: 400; color: var(--muted); }
.en { margin: 0 0 8px; color: var(--muted); }
.delta { display: inline-block; margin: 0 0 8px; padding: 2px 10px; border-radius: 6px; }
.delta.short { background: rgba(220, 42, 31, 0.2); color: var(--short); }
.delta.long { background: rgba(36, 102, 224, 0.22); color: var(--long); }
.delta.same { background: rgba(179, 173, 168, 0.15); color: var(--same); }
dl { display: grid; grid-template-columns: 4.5em 1fr; gap: 4px 8px; margin: 0; }
dt { color: var(--muted); }
dd { margin: 0; }
.pain-hint { margin-top: 10px; padding: 6px 10px; border-radius: 6px; font-size: 13px; }
.pain-hint.short { background: rgba(220, 42, 31, 0.15); }
.pain-hint.long { background: rgba(36, 102, 224, 0.15); }
.notes { margin-top: 10px; font-size: 13px; color: var(--accent); }
.actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }

.presets { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
.slider-groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4px 16px; }
.slider-group { margin: 0; padding: 2px 10px 6px; border: 1px solid var(--line); border-radius: 8px; }
.slider-group legend { padding: 0 4px; font-size: 13px; color: var(--muted); }
.slider-group label { display: grid; grid-template-columns: 8.5em auto 1fr auto; align-items: center; gap: 6px; }
.slider-group small { color: var(--muted); font-size: 12px; }
.side-modes { display: flex; gap: 4px; margin: 2px 0 4px; }
.side-modes button { padding: 0 8px; font-size: 13px; }
.posture-note { margin: 6px 0 0; }

@media (max-width: 900px) {
  body {
    height: auto;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 60vh auto auto auto auto;
    grid-template-areas: 'top' 'view' 'posture' 'info' 'left' 'credit';
  }
  .panel, #info.panel { border: 0; border-top: 1px solid var(--line); }
  #viewBar { margin-left: 0; }
}
```

`build.mjs`：

```js
// 把 src/ 打包成 解剖列車網頁/app.js，並把 data/processed 內嵌成 model.js，讓 index.html 用 file:// 雙擊也能執行
import * as esbuild from 'esbuild';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const OUT_DIR = '解剖列車網頁';
const serve = process.argv.includes('--serve');
const PORT = Number(process.argv.find(a => a.startsWith('--port='))?.slice(7) ?? 8124); // 預覽用的埠，可用 npm run serve -- --port=8125 改
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !serve,
  write: !serve, // 預覽時只在記憶體裡打包，不覆寫要提交的 app.js
  outfile: `${OUT_DIR}/app.js`,
  logLevel: 'info',
};

writeModelJs();
if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: PORT, host: '127.0.0.1' });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
  stampVersion();
}

// 模型資料用 <script> 載入（file:// 不能 fetch）：meta 直接寫成物件，網格二進位轉 base64
function writeModelJs() {
  const meta = readFileSync('data/processed/meta.json', 'utf8');
  const bin = readFileSync('data/processed/meshes.bin').toString('base64');
  const text = `window.MODEL_DATA={meta:${meta},bin:"${bin}"};\n`;
  const path = `${OUT_DIR}/model.js`;
  if (!existsSync(path) || readFileSync(path, 'utf8') !== text) writeFileSync(path, text); // 內容沒變就不動檔案
}

// 在 index.html 引用的檔案後面加上內容雜湊（?v=xxxx）：更新後瀏覽器不會繼續用快取的舊檔案
function stampVersion() {
  const files = ['app.js', 'style.css', 'content.js', 'model.js'];
  const hash = createHash('sha1');
  for (const f of files) hash.update(readFileSync(`${OUT_DIR}/${f}`));
  const v = hash.digest('hex').slice(0, 8);
  const indexPath = `${OUT_DIR}/index.html`;
  const html = readFileSync(indexPath, 'utf8');
  const stamped = files.reduce(
    (out, f) => out.replace(new RegExp(`(["'])${f.replace('.', '\\.')}(\\?v=[0-9a-f]+)?\\1`, 'g'), `$1${f}?v=${v}$1`),
    html,
  );
  if (stamped !== html) writeFileSync(indexPath, stamped);
}
```

- [ ] **Step 4：測試與打包**

執行：

```bash
npm test && npm run build
```

預期：測試全部 PASS；打包成功，`解剖列車網頁/model.js` 約 9.4 MB。

- [ ] **Step 5：瀏覽器驗證**

預覽伺服器（`npm run serve`，port 8124；若被占用可用 `npm run serve -- --port=8125`）開啟後，用 javascript_tool 逐項確認：

| 檢查 | 指令 | 預期 |
|---|---|---|
| 載入 | `({ parts: app.model.parts.length, bones: app.model.bones.length, rows: document.querySelectorAll('.muscle-rows li').length })` | `{ parts: 294, bones: 233, rows: 148 }`，主控台沒有錯誤 |
| 效能 | 連續 10 次 `app.ctrl.setParams({ pelvicTilt: i / 10 })` 量時間 | 每次 < 40 毫秒；0.3 秒後 `app.model.parts.filter(p => p.stale).length === 0` |
| 骨盆前傾 | 按「骨盆前傾」等 2 秒，`app.ctrl.partByKey('gluteusMaximus.r').delta` | 約 +0.08；側面看臀大肌、膕旁肌藍色，髖前紅色 |
| 痠痛點 | 勾選「顯示痠痛點」後數 `marker.visible` | 骨盆前傾下 > 30 個；選取肌肉時黃點 |
| 清單 | 搜尋「腰方」、按「右」 | 說明卡標題「腰方肌右側」，相機轉到右後方對準 |
| 列車線 | 點「淺背線」、按「後」 | 從足底到頭頂一條軌道；鎖短段紅、鎖長段藍 |
| 長短腳 | 按「長短腳」、按「前」 | 右側腹斜肌紅、左側藍 |
| 隱藏清單 | 點一條肌肉按「隱藏」 | 左側出現「已隱藏／半透明」清單，可「顯示」回來 |

最後截圖（骨盆前傾側面、淺背線背面），再用 resize_window 的 mobile 預設確認版面沒有水平捲軸後還原。

- [ ] **Step 6：提交**

```bash
git add src 解剖列車網頁/index.html 解剖列車網頁/style.css 解剖列車網頁/app.js 解剖列車網頁/model.js build.mjs
git commit -m "feat: full-body 2A viewer with pain markers, muscle list, view buttons and grouped posture sliders" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9：文件與收尾

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
- **連動**：改變姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾／後傾、高低肩、長短腳，或用滑桿自訂、肩膀可分左右）時，肌肉跟著骨頭變形，並用顏色標出《解剖列車》概念中的「鎖短」（紅）與「鎖長」（藍）。
- **痠痛點**：打開開關後，姿勢改變時會在鎖短、鎖長的肌肉上標出常見的痠痛點；說明卡寫出痠痛位置與轉移痛範圍。
- **中文說明**：點選肌肉或從肌肉清單搜尋，顯示起止點、作用、神經、所屬列車線、常見鎖短／鎖長情況與痠痛點。

目前完成第一階段（肩帶）與 2A（軀幹、頸、頭皮、下肢）：每側約 150 個部件、12 條列車線。前臂與手、足部內在肌、咀嚼肌留到 2B。

## 使用

雙擊 `解剖列車網頁/index.html`，用 Chrome 或 Edge 開啟，不需要網路。操作方式見 `解剖列車網頁/使用說明.txt`。

## 修改說明文字

所有中文說明都在 `解剖列車網頁/content.js`，用記事本修改引號內的文字，存檔時選 UTF-8。

## 開發

```bash
npm install
npm run fetch-data   # 下載 Z-Anatomy 原始 FBX 到 data/raw/（約 78 MB，不進 git）
npm run model        # 轉檔 → data/processed/（meta.json、meshes.bin）
npm test             # 單元測試（含 8 個姿勢的鎖短／鎖長檢查清單）
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

教學示意用。長度變化以骨骼幾何（起止點距離）計算，不代表肌肉的活化程度或張力；預設姿勢的幅度刻意比一般人大，讓顏色看得出來。痠痛點與轉移痛為常見位置，不能取代專業評估。
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
- 姿勢：下方按預設姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾、骨盆後傾、高低肩、長短腳）會播放動畫，也可以拖動滑桿自由調整；肩膀可選「兩側一起」或只調左側、右側
- 顏色：中立姿勢時是肌肉色；改變姿勢後，紅色＝鎖短、藍色＝鎖長、灰色＝長度不變
- 痠痛點：勾選左側「顯示痠痛點」後，姿勢改變時會在鎖短（橘紅點）、鎖長（藍點）的肌肉上標出常見痠痛點；選取的肌肉以黃點標示
- 列車線：上方選一條線，線上的肌肉會加亮並用軌道串起來

【修改說明文字】
用記事本開啟 content.js，修改引號內的文字，存檔時選 UTF-8。

【注意】
教學示意用。長度變化以骨骼幾何計算，不代表肌肉用力的程度；預設姿勢的幅度刻意放大。痠痛點與轉移痛為常見位置，不能取代專業評估。
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
git commit -m "docs: README and user guide for 2A" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 4：收尾**：用 superpowers:finishing-a-development-branch，請使用者決定是否合併回 main。
