# 解剖列車 3D 膝、踝、手指關節實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal：** 讓膝、踝（背屈／蹠屈、內翻／外翻）、四指、拇指都能動，可分左右；新增膝過伸、穿高跟鞋、扁平足三個姿勢、「滑手機」加上握持，並讓跨過這些關節的肌肉正確計算鎖短／鎖長。

**Architecture：** 新增距骨與 15 節手指骨段，骨架依「大腿 → 小腿（膝）→ 距骨（踝）→ 足（距下）」與「手 → 各指三節」串接；轉軸在轉檔時由骨頭幾何估算，正方向對應解剖動作。長度沿用「鎖住關節的折線長＋力臂 × 轉角」，手肘、手腕寫死的力臂改成一張關節表（每側 20 個關節），鎖住關節改成沿骨段上下關係一般化。肌腱轉折算不準的鵝足肌用文獻力臂。

**Tech Stack：** 同前幾階段：three 0.170.0、esbuild 0.24.0、meshoptimizer 1.3.0、`node --test`。

設計文件：`docs/superpowers/specs/2026-10-26-anatomy-trains-3d-knee-ankle-fingers-design.md`

## Global Constraints

- 所有指令都在專案根目錄 `C:\Users\user\Desktop\AI用\claue 工作\解剖列車3D` 執行（Git Bash）；在分支 `feat/knee-ankle-fingers` 上做，不直接改 main。
- 前幾階段的限制全部沿用：
  - 可用 `file://` 雙擊開啟（不可 fetch、不可 ES module）；
  - 座標單位公分、+y 上、+z 前、右側在 −x；
  - 使用者看到的文字用繁體中文，程式註解也用繁體中文。
- 關節方向用解剖意義定義：
  - 膝彎曲：小腿往後；
  - 踝背屈：前足往上；
  - 足內翻：足底轉向內側；
  - 手指屈曲：往掌側；
  - 拇指屈曲：往小指側。
- 膝、踝、手指跟手肘一樣自由轉，不做雙腳著地的閉鎖鏈。
- 長度配色：四捨五入到整數 % 後，|Δ| < 3% 灰色、≥ 20% 最飽和；紅＝鎖短、藍＝鎖長；中立姿勢顯示自然肌肉色；筋膜、肌腱不計算長度。
- 預算：三角面 ≤ 80 萬、`meshes.bin` ≤ 7.5 MB；每次更新姿勢 < 40 毫秒。
- Git 只在本機；每個 commit 訊息結尾加上 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`。
- `解剖列車網頁/app.js`、`model.js` 是產生的檔案：提交前 `npm run build`；`npm run serve` 只在記憶體打包，不會改到它們。
- 暫時失敗的測試：
  - Task 1 起：`parts.test` 的「骨段名稱」，Task 4 恢復；
  - Task 2 起：`postures.test`，Task 4 恢復；
  - Task 2 起：`content.test` 的「每個預設姿勢都有說明」，Task 6 恢復。
  - 每個任務只要求它自己的測試通過；Task 6 起全部測試要通過。

## 檔案結構（新增或改動）

| 路徑 | 責任 |
|---|---|
| `src/rig/segments.js` | 62 個骨段、肢體骨段的上下關係（`LIMB_PARENT`、`subtree`、`splitKey`） |
| `tools/lib/joints.mjs` | 膝、踝、距下、手指關節的轉動中心與轉軸 |
| `src/rig/rig.js`、`presets.js` | 下肢與手指的骨架、5 個新滑桿、12 個預設姿勢 |
| `src/ui/postureBar.js`、`解剖列車網頁/style.css` | 下肢滑桿組、左右切換、精簡的姿勢列 |
| `src/muscles/length.js`、`tools/lib/skin.mjs` | 一般化的鎖住關節；力臂的取樣範圍 |
| `tools/lib/limbJoints.mjs`（新） | 關節表：每側 20 個關節，判斷跨過哪些關節、產生力臂 |
| `tools/parts.js`、`tools/convert.mjs` | 新骨段的骨頭、中間群組、文獻力臂；用關節表產生力臂 |
| `解剖列車網頁/content.js` | 改寫 30 則固定關節的備註、三個新姿勢 |

---

### Task 1：開分支；骨段與關節估算（距骨、手指 15 節；膝、踝、距下、手指關節）

**Files:**
- Modify: `src/rig/segments.js`、`tools/lib/joints.mjs`、`test/joints.test.js`

**Interfaces:**
- Produces（segments.js）：`FINGERS = [index, middle, ring, little]`、`FINGER_SEGMENTS`（15 個）、`SEGMENT_KEYS`（62 個）、`LIMB_PARENT`（肢體骨段的上一節）、`subtree(seg): Set`、`splitKey(key): [seg, side|null]`
- Produces（joints.mjs）：`orient(axis, lever, toward)`、`boneHead(points, base)`、`FINGER_NAMES`；`estimateJoints` 多回傳 `knee`、`ankle`、`subtalar`（各 `{ l, r }` = `{ pivot, axis }`）與 `fingers`（`{ l, r }` = `{ thumb, index, middle, ring, little }`，各為三個 `{ pivot, axis, dir }`）；轉軸正方向＝膝屈曲、踝背屈、足內翻、手指屈曲
- 注意：這個任務之後 `test/parts.test.js` 的「骨段名稱」會暫時失敗（骨頭還沒分到新骨段），Task 4 恢復。

- [ ] **Step 0：從 main 開分支**

執行：

```bash
git checkout -b feat/knee-ankle-fingers && git status --short
```

預期：切到新分支、工作區乾淨。

- [ ] **Step 1：寫（或更新）測試**

`test/joints.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitSphere, extremeCentroid, topSlab, bottomSlab, meanOf, vertebraPivot, boxEllipsoid, orient, boneHead } from '../tools/lib/joints.mjs';

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

test('轉軸正方向：lever 繞軸正向轉時要往 toward 移動，否則把軸反過來', () => {
  // 繞 +x 轉時，往下的 lever 會往 −z 移動
  assert.deepEqual(orient([1, 0, 0], [0, -1, 0], [0, 0, -1]), [1, 0, 0]);
  assert.deepEqual(orient([1, 0, 0], [0, -1, 0], [0, 0, 1]), [-1, -0, -0]);
});

test('骨頭遠端：沿「base → 骨頭中心」方向最遠的一批頂點', () => {
  const bone = new Float32Array(Array.from({ length: 20 }, (_, i) => [0, -i, 0]).flat());
  assert.deepEqual(boneHead(bone, [0, 1, 0]), [0, -18, 0]); // 最遠的 3 個頂點（15%）：y = −17、−18、−19
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/joints.test.js
```

預期：FAIL，`orient`、`boneHead` 不存在（SyntaxError: does not provide an export named …）

- [ ] **Step 3：實作**

`src/rig/segments.js`：

```js
// 骨段名稱：軀幹與頭頸（中線）只有一個；肩帶、上肢（上臂、尺骨、橈骨、手、手指）、下肢（大腿、小腿、距骨、足）分左右（例如 'scapula.r'）
export const AXIAL = ['pelvis', 'L5', 'L4', 'L3', 'L2', 'L1', 'thoraxLow', 'thoraxMid', 'thoraxUp', 'neckLow', 'neckUp', 'head'];

// 手指骨段：拇指為第一掌骨、近節、遠節；四指為近節、中節、遠節（其餘掌骨與腕骨屬於 hand）
export const FINGERS = ['index', 'middle', 'ring', 'little'];
export const FINGER_SEGMENTS = ['thumbMeta', 'thumbProx', 'thumbDist', ...FINGERS.flatMap(f => [`${f}Prox`, `${f}Mid`, `${f}Dist`])];

const LIMB = ['clavicle', 'scapula', 'arm', 'ulna', 'radius', 'hand', ...FINGER_SEGMENTS, 'femur', 'shank', 'talus', 'foot'];
export const SIDED = new Set(LIMB);

export const SEGMENT_KEYS = [...AXIAL, ...LIMB.flatMap(s => [`${s}.l`, `${s}.r`])];

// 肢體骨段的上一節（兩者之間是一個關節）：判斷部件跨過哪些關節、量長度時鎖住關節用
export const LIMB_PARENT = {
  ulna: 'arm',
  radius: 'ulna',
  hand: 'radius',
  thumbMeta: 'hand',
  thumbProx: 'thumbMeta',
  thumbDist: 'thumbProx',
  ...Object.fromEntries(FINGERS.flatMap(f => [[`${f}Prox`, 'hand'], [`${f}Mid`, `${f}Prox`], [`${f}Dist`, `${f}Mid`]])),
  shank: 'femur',
  talus: 'shank',
  foot: 'talus',
};

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}

// 骨段名稱拆成 [骨段, 側別]（中線骨段側別為 null）
export function splitKey(key) {
  const i = key.lastIndexOf('.');
  return i < 0 ? [key, null] : [key.slice(0, i), key.slice(i + 1)];
}

// 這個骨段（含）以下的所有骨段，例如 'shank' → shank、talus、foot
export function subtree(segment) {
  const out = new Set([segment]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const [child, parent] of Object.entries(LIMB_PARENT)) {
      if (out.has(parent) && !out.has(child)) {
        out.add(child);
        grew = true;
      }
    }
  }
  return out;
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

const sub = (p, q) => p.map((v, i) => v - q[i]);
const dot = (p, q) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];
const cross = (p, q) => [p[1] * q[2] - p[2] * q[1], p[2] * q[0] - p[0] * q[2], p[0] * q[1] - p[1] * q[0]];
const unit = p => p.map(v => v / (Math.hypot(...p) || 1));
const mid = (p, q) => p.map((v, i) => (v + q[i]) / 2);

// 讓轉軸的正方向對應解剖上的正向動作：從轉動中心指向遠端的 lever 繞 axis 正向轉時，要往 toward 移動
export function orient(axis, lever, toward) {
  return dot(cross(axis, lever), toward) < 0 ? axis.map(v => -v) : axis;
}

// 骨頭遠端（關節頭）：沿「base → 骨頭中心」方向最遠的 15% 頂點平均
export function boneHead(points, base) {
  return extremeCentroid(points, unit(sub(meanOf(points), base)), 0.15);
}

const RIB_NAMES = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];
const ORDINAL = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
export const FINGER_NAMES = ['index', 'middle', 'ring', 'little']; // 第二到五指

// 手指的關節：{ pivot, axis, dir }；四指依序為掌指、近端指間、遠端指間，拇指為腕掌、掌指、指間
// 轉軸的正方向＝屈曲（四指往掌側、拇指往小指側）；dir 是該關節往遠端的方向
function fingerJoints(need, s, medial, mediolateral) {
  const phalanx = (kind, n) => need(`${kind} phalanx of ${ORDINAL[n - 1].toLowerCase()} finger of hand.${s}`);
  const metacarpal = n => need(`${ORDINAL[n - 1]} metacarpal bone.${s}`);
  // bones：由近到遠的骨頭；第一個關節在 bones[0] 的近端（base）或它的頭
  const chain = (pivots, tip, axisFor, toward) =>
    pivots.map((pivot, i) => {
      const dir = unit(sub(pivots[i + 1] ?? tip, pivot));
      return { pivot, axis: orient(axisFor(dir), dir, toward), dir };
    });
  const out = {};
  FINGER_NAMES.forEach((name, i) => {
    const n = i + 2;
    const mc = metacarpal(n);
    const mcp = boneHead(mc, meanOf(topSlab(mc, 1)));
    const pip = boneHead(phalanx('Proximal', n), mcp);
    const dip = boneHead(phalanx('Middle', n), pip);
    const tip = boneHead(phalanx('Distal', n), dip);
    // 四指：與手腕平行的內外側軸（去掉沿手指的分量）；屈曲時往掌側（前方）
    const axisFor = dir => unit(sub(mediolateral, dir.map(v => v * dot(mediolateral, dir))));
    out[name] = chain([mcp, pip, dip], tip, axisFor, [0, 0, 1]);
  });
  const mc1 = metacarpal(1);
  const cmc = meanOf(topSlab(mc1, 0.8));
  const mcp = boneHead(mc1, cmc);
  const ip = boneHead(phalanx('Proximal', 1), mcp);
  const tip = boneHead(phalanx('Distal', 1), ip);
  // 拇指：屈曲時跨過掌心往小指側，轉軸與拇指、內外側方向都垂直（大致前後方向）
  out.thumb = chain([cmc, mcp, ip], tip, dir => unit(cross(dir, medial)), medial);
  return out;
}

// geo：骨頭名稱 → 世界座標頂點（Float32Array）
export function estimateJoints(geo) {
  const need = name => {
    const p = geo.get(name);
    if (!p) throw new Error(`估算關節需要的骨頭 ${name} 不存在`);
    return p;
  };
  const joints = { sc: {}, ac: {}, gh: {}, elbow: {}, scapAnchor: {}, elbowAxis: {}, forearmAxis: {}, wrist: {}, fingers: {}, knee: {}, ankle: {}, subtalar: {} };
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
    joints.fingers[s] = fingerJoints(need, s, medial, unit(sub(joints.elbowAxis[s][1], joints.elbowAxis[s][0])));

    // 膝屈伸：股骨遠端 6 公分內最內、最外側的頂點（股骨內、外上髁）；正方向＝小腿往後
    const femur = need(`Femur.${s}`), tibia = need(`Tibia.${s}`), fibula = need(`Fibula.${s}`);
    const distalFemur = bottomSlab(femur, 6);
    const [kneeMed, kneeLat] = [extremeCentroid(distalFemur, medial, 0.03), extremeCentroid(distalFemur, lateral, 0.03)];
    joints.knee[s] = { pivot: mid(kneeMed, kneeLat), axis: orient(unit(sub(kneeLat, kneeMed)), [0, -1, 0], [0, 0, -1]) };
    // 踝背屈／蹠屈：通過內、外踝尖（脛骨最下方 2 公分最內側、腓骨最下方 1 公分）；正方向＝背屈（前足往上）
    const medMalleolus = extremeCentroid(bottomSlab(tibia, 2), medial, 0.05);
    const latMalleolus = meanOf(bottomSlab(fibula, 1));
    joints.ankle[s] = { pivot: mid(medMalleolus, latMalleolus), axis: orient(unit(sub(latMalleolus, medMalleolus)), [0, 0, 1], [0, 1, 0]) };
    // 距下關節（內翻／外翻）：通過距骨中心，從足部長軸往上 42°、往內 23°（文獻平均）；正方向＝內翻（足底轉向內側）
    const heel = extremeCentroid(need(`Calcaneus.${s}`), [0, 0, -1], 0.05);
    const forefoot = extremeCentroid(need(`Second metatarsal bone.${s}`), [0, 0, 1], 0.05);
    const footDir = unit([forefoot[0] - heel[0], 0, forefoot[2] - heel[2]]);
    let inward = unit(cross([0, 1, 0], footDir));
    if (dot(inward, medial) < 0) inward = inward.map(v => -v);
    const rad = d => (d * Math.PI) / 180;
    const horizontal = unit(footDir.map((v, i) => v * Math.cos(rad(23)) + inward[i] * Math.sin(rad(23))));
    const subtalarAxis = unit(horizontal.map((v, i) => v * Math.cos(rad(42)) + [0, 1, 0][i] * Math.sin(rad(42))));
    joints.subtalar[s] = { pivot: meanOf(need(`Talus.${s}`)), axis: orient(subtalarAxis, medial, [0, 1, 0]) };
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
node --test test/joints.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/joints.test.js src/rig/segments.js tools/lib/joints.mjs
git commit -m "feat: talus and finger segments; knee, ankle, subtalar and finger joint estimates" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2：骨架（膝、踝、距下、手指）、下肢滑桿與新預設姿勢

**Files:**
- Modify: `src/rig/rig.js`、`src/rig/presets.js`、`src/ui/postureBar.js`、`test/rig.test.js`、`test/presets.test.js`

**Interfaces:**
- Consumes：Task 1 的 `FINGERS` 與 `meta.joints.knee/ankle/subtalar/fingers`（骨架測試用合成資料）
- Produces：`LIMITS` 多 `kneeFlexion 140`、`kneeExtension 15`、`dorsiflexion 20`、`plantarflexion 45`、`inversion 30`、`eversion 25`；`FINGER_LIMITS`；`computePose` 回傳 talus、15 節手指的矩陣
- Produces：`SIDED_PARAMS` 多 `fingerFlexion`、`thumbFlexion`、`kneeFlexion`、`ankleFlexion`、`footInversion`；`PRESETS` 12 個（新增 `kneeHyperextension`、`highHeels`、`flatFoot`，`phone` 加握持）；滑桿組多 `'lowerLimb'`（下肢（可分左右））；postureBar 在每個有分左右滑桿的組都顯示左右切換，滑桿超過 5 個的組加 `wide` class
- 注意：這個任務之後 `test/postures.test.js` 會暫時失敗（舊的轉檔資料沒有新關節），Task 4 轉檔後恢復。

- [ ] **Step 1：寫（或更新）測試**

`test/rig.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computePose, ellipsoidLevel } from '../src/rig/rig.js';
import { bilateral } from '../src/rig/presets.js';

// 左側由右側鏡射：位置與方向的 x 變號；轉軸是旋轉向量，鏡射時 y、z 變號
const mirrorPoint = p => [-p[0], p[1], p[2]];
const mirrorAxis = a => [a[0], -a[1], -a[2]];
const bothSides = r => ({ r, l: { pivot: mirrorPoint(r.pivot), axis: mirrorAxis(r.axis) } });
// 手指：直直往下的三節，轉軸正方向＝屈曲（四指往前、拇指往內側）
const finger = (x, axis) => [80, 76, 72].map(y => ({ pivot: [x, y, 4], axis, dir: [0, -1, 0] }));
const FINGERS_R = { index: finger(-30, [-1, 0, 0]), middle: finger(-27.5, [-1, 0, 0]), ring: finger(-25.5, [-1, 0, 0]), little: finger(-23.5, [-1, 0, 0]), thumb: finger(-31, [0, 0, 1]) };
const mirrorFingers = f => Object.fromEntries(Object.entries(f).map(([k, list]) => [k, list.map(j => ({ pivot: mirrorPoint(j.pivot), axis: mirrorAxis(j.axis), dir: j.dir }))]));
const LEG_AND_FINGERS = {
  knee: bothSides({ pivot: [-7.4, 46, -3.2], axis: [1, 0, 0] }),
  ankle: bothSides({ pivot: [-7.4, 7.4, -4.6], axis: [-0.88, -0.44, -0.17] }),
  subtalar: bothSides({ pivot: [-7.2, 6.7, -3.5], axis: [0.23, 0.67, 0.71] }),
  fingers: { r: FINGERS_R, l: mirrorFingers(FINGERS_R) },
};

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
  ...LEG_AND_FINGERS,
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

test('膝彎曲：小腿往後、往上，大腿不動，左右對稱；距骨與足跟著小腿', () => {
  const mats = computePose(J, bilateral({ kneeFlexion: 0.6 })); // 84°
  const ankle = s => J.ankle[s].pivot;
  const r = at(mats, 'shank.r', ankle('r')), l = at(mats, 'shank.l', ankle('l'));
  assert.ok(r.z < ankle('r')[2] - 20 && r.y > ankle('r')[1] + 20, `右踝 ${r.toArray()}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
  assert.ok(isIdentity(mats.get('femur.r')));
  assert.ok(at(mats, 'foot.r', ankle('r')).distanceTo(r) < 1e-6);
});

test('踝背屈：前足往上，小腿不動；蹠屈相反', () => {
  const forefoot = [-8, 3, 12];
  const up = computePose(J, bilateral({ ankleFlexion: 1 }));
  assert.ok(at(up, 'foot.r', forefoot).y > forefoot[1] + 3);
  assert.ok(isIdentity(up.get('shank.r')));
  assert.ok(at(computePose(J, bilateral({ ankleFlexion: -1 })), 'foot.r', forefoot).y < forefoot[1] - 3);
});

test('足內翻：足底轉向內側（內側緣比外側緣高），外翻相反；左右對稱', () => {
  // 距下關節的轉軸是斜的，內翻同時帶一點內收、蹠屈，所以看足底的傾斜（內側緣減外側緣的高度）
  const edges = s => [[s === 'r' ? -3.5 : 3.5, 1, 6], [s === 'r' ? -12 : 12, 1, 5]];
  const tilt = (mats, s) => {
    const [med, lat] = edges(s).map(p => at(mats, `foot.${s}`, p).y);
    return med - lat;
  };
  const inv = computePose(J, bilateral({ footInversion: 1 }));
  assert.ok(tilt(inv, 'r') > 2, `內翻傾斜 ${tilt(inv, 'r')}`);
  assert.ok(Math.abs(tilt(inv, 'r') - tilt(inv, 'l')) < 1e-6);
  assert.ok(isIdentity(inv.get('talus.r')), '距下關節只轉足部，距骨不動');
  assert.ok(tilt(computePose(J, bilateral({ footInversion: -1 })), 'r') < -2);
});

test('握拳：四指的指尖往掌側（前方）彎，手與拇指不動', () => {
  const mats = computePose(J, bilateral({ fingerFlexion: 0.5 })); // 半握：三個關節合計 130°（握到底時指尖會捲回掌心）
  const tip = [-30, 69, 4];
  assert.ok(at(mats, 'indexDist.r', tip).z > tip[2] + 5);
  assert.ok(at(mats, 'indexDist.l', mirrorPoint(tip)).z > tip[2] + 5);
  assert.ok(isIdentity(mats.get('hand.r')) && isIdentity(mats.get('thumbDist.r')));
});

test('拇指屈曲：拇指尖往小指側（內側）移動，四指不動', () => {
  const mats = computePose(J, bilateral({ thumbFlexion: 1 }));
  const tip = [-31, 69, 4];
  assert.ok(at(mats, 'thumbDist.r', tip).x > tip[0] + 3, '右手的內側在 +x');
  assert.ok(at(mats, 'thumbDist.l', mirrorPoint(tip)).x < -tip[0] - 3, '左手的內側在 −x');
  assert.ok(isIdentity(mats.get('indexProx.r')));
});

test('只彎右膝：左腳不動', () => {
  const mats = computePose(J, { 'kneeFlexion.r': 1 });
  assert.ok(!isIdentity(mats.get('shank.r')));
  for (const k of ['shank.l', 'talus.l', 'foot.l']) assert.ok(isIdentity(mats.get(k)), k);
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

test('12 個預設姿勢', () => {
  assert.deepEqual(Object.keys(PRESETS), ['neutral', 'roundedShoulders', 'forwardHead', 'kyphosis', 'anteriorTilt', 'posteriorTilt', 'unevenShoulders', 'legLength', 'phone', 'kneeHyperextension', 'highHeels', 'flatFoot']);
  assert.equal(PRESETS.phone.params['elbowFlexion.l'], 0.7);
  assert.equal(PRESETS.phone.params['forearmPronation.r'], 0.8);
  assert.equal(PRESETS.phone.params['fingerFlexion.r'], 0.4);
  assert.equal(PRESETS.highHeels.params['ankleFlexion.l'], -0.67);
  assert.equal(PRESETS.flatFoot.params['footInversion.r'], -1);
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

預期：FAIL，12 個預設姿勢的測試失敗；膝、踝、手指的測試讀不到 `talus.r`、`indexDist.r` 等骨段

- [ ] **Step 3：實作**

`src/rig/rig.js`：

```js
// 姿勢參數 → 每個骨段的變換矩陣（相對於中立姿勢，世界座標）
import * as THREE from 'three';
import { SEGMENT_KEYS, FINGERS } from './segments.js';
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
  kneeFlexion: 140, // 膝彎曲
  kneeExtension: 15, // 膝過伸（示範用，比一般的 5–10° 大）
  dorsiflexion: 20, // 踝背屈
  plantarflexion: 45, // 踝蹠屈
  inversion: 30, // 足內翻
  eversion: 25, // 足外翻（示範用，比一般的 15–20° 大）
};

// 手指、拇指的三個關節在參數 ±1 時的角度（度）：四指為掌指、近端指間、遠端指間，拇指為腕掌、掌指、指間
// +1 握拳／拇指屈曲到底；−1 四指的掌指關節過伸、拇指伸展
export const FINGER_LIMITS = {
  fingerFlexion: { flex: [90, 100, 70], extend: [20, 0, 0] },
  thumbFlexion: { flex: [30, 50, 80], extend: [30, 0, 20] },
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
  // 下肢：大腿跟著髖關節平移（長短腳）；小腿繞膝、距骨繞踝（背屈／蹠屈）、足繞距下關節（內翻／外翻）
  // 轉軸的正方向＝膝彎曲、踝背屈、足內翻（見 tools/lib/joints.mjs）
  for (const s of ['l', 'r']) {
    const shift = vec(joints.hip[s]).applyMatrix4(pelvis).sub(vec(joints.hip[s]));
    const leg = new THREE.Matrix4().makeTranslation(shift.x, shift.y, shift.z);
    const { knee, ankle, subtalar } = joints;
    const shank = leg.clone().multiply(rotateAbout(knee[s].pivot, vec(knee[s].axis), jointAngle(p[`kneeFlexion.${s}`], LIMITS.kneeFlexion, LIMITS.kneeExtension)));
    const talus = shank.clone().multiply(rotateAbout(ankle[s].pivot, vec(ankle[s].axis), jointAngle(p[`ankleFlexion.${s}`], LIMITS.dorsiflexion, LIMITS.plantarflexion)));
    const foot = talus.clone().multiply(rotateAbout(subtalar[s].pivot, vec(subtalar[s].axis), jointAngle(p[`footInversion.${s}`], LIMITS.inversion, LIMITS.eversion)));
    mats.set(`femur.${s}`, leg);
    mats.set(`shank.${s}`, shank);
    mats.set(`talus.${s}`, talus);
    mats.set(`foot.${s}`, foot);
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
    // 手指：每節繞自己的關節轉（轉軸正方向＝屈曲），一個滑桿依比例帶動三個關節
    const fingers = joints.fingers[s];
    const bend = (parent, list, segs, param, limits) => {
      let m = parent;
      list.forEach((j, i) => {
        m = m.clone().multiply(rotateAbout(j.pivot, vec(j.axis), jointAngle(p[`${param}.${s}`], limits.flex[i], limits.extend[i])));
        mats.set(`${segs[i]}.${s}`, thoraxUp.clone().multiply(m));
      });
    };
    for (const f of FINGERS) bend(hand, fingers[f], [`${f}Prox`, `${f}Mid`, `${f}Dist`], 'fingerFlexion', FINGER_LIMITS.fingerFlexion);
    bend(hand, fingers.thumb, ['thumbMeta', 'thumbProx', 'thumbDist'], 'thumbFlexion', FINGER_LIMITS.thumbFlexion);
  }
  return mats;
}
```

`src/rig/presets.js`：

```js
// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具
//
// 分左右的參數存成 'scapProtraction.l'、'scapProtraction.r'；頭頸、胸椎、骨盆在身體中線，不分左右。

export const SIDED_PARAMS = ['scapProtraction', 'scapElevation', 'shoulderRotation', 'elbowFlexion', 'forearmPronation', 'wristFlexion', 'fingerFlexion', 'thumbFlexion', 'kneeFlexion', 'ankleFlexion', 'footInversion'];
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
  phone: { label: '滑手機', params: bilateral({ headForward: 0.8, scapProtraction: 0.6, shoulderRotation: 0.4, elbowFlexion: 0.7, forearmPronation: 0.8, wristFlexion: 0.3, fingerFlexion: 0.4, thumbFlexion: 0.5 }) },
  kneeHyperextension: { label: '膝過伸', params: bilateral({ kneeFlexion: -1 }) },
  highHeels: { label: '穿高跟鞋', params: bilateral({ ankleFlexion: -0.67 }) },
  flatFoot: { label: '扁平足', params: bilateral({ footInversion: -1 }) },
};

// group：滑桿分組（前後方向／左右方向／上肢／下肢）
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
  { key: 'fingerFlexion', group: 'upperLimb', sided: true, label: '手指伸直／握拳', minLabel: '過伸', maxLabel: '握拳' },
  { key: 'thumbFlexion', group: 'upperLimb', sided: true, label: '拇指伸展／屈曲', minLabel: '伸展', maxLabel: '屈曲' },
  { key: 'kneeFlexion', group: 'lowerLimb', sided: true, label: '膝伸直／彎曲', minLabel: '過伸', maxLabel: '彎曲' },
  { key: 'ankleFlexion', group: 'lowerLimb', sided: true, label: '踝蹠屈／背屈', minLabel: '蹠屈', maxLabel: '背屈' },
  { key: 'footInversion', group: 'lowerLimb', sided: true, label: '足外翻／內翻', minLabel: '外翻', maxLabel: '內翻' },
];

export const SLIDER_GROUPS = [
  ['sagittal', '前後方向'],
  ['frontal', '左右方向'],
  ['upperLimb', '上肢（可分左右）'],
  ['lowerLimb', '下肢（可分左右）'],
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

`src/ui/postureBar.js`：

```js
// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、分組的關節滑桿（上肢、下肢可兩側一起或只調一側，兩組共用同一個設定）
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
        <fieldset class="slider-group${SLIDERS.filter(s => s.group === g).length > 5 ? ' wide' : ''}">
          <legend>${title}</legend>
          ${SLIDERS.some(s => s.group === g && s.sided) ? `<div class="side-modes">${SIDE_MODES.map(([k, label]) => `<button type="button" data-mode="${k}">${label}</button>`).join('')}</div>` : ''}
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
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節；上肢、下肢可切換「兩側一起」或只調左側、右側。';
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
git add test/rig.test.js test/presets.test.js src/rig/rig.js src/rig/presets.js src/ui/postureBar.js
git commit -m "feat: knee, ankle, subtalar and finger joints in the rig; lower-limb sliders and three new presets" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3：長度：一般化的鎖住關節；力臂可只取關節近端、只看手指附近

**Files:**
- Modify: `src/muscles/length.js`、`tools/lib/skin.mjs`、`test/muscles.test.js`、`test/skin.test.js`

**Interfaces:**
- Consumes：Task 1 的 `LIMB_PARENT`、`splitKey`
- Produces：`lengthDelta` 對 `part.wraps` 的每個 `dist` 骨段鎖住關節（沿 `LIMB_PARENT` 由近到遠），其餘關節照常；上肢的結果不變
- Produces：`momentArm(positions, pivot, dir, axis, maxArm, { slab = 2, near = Infinity })`，`slab` 可為 `[下限, 上限]`；`near` 範圍內沒有頂點時回傳 0

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

test('跨膝與踝的肌肉：兩個關節都鎖住，長度變化＝各關節 −力臂 × 轉角 的總和', () => {
  const knee = new THREE.Matrix4().makeRotationX(0.5);
  const ankle = knee.clone().multiply(new THREE.Matrix4().makeRotationX(0.3));
  const m = new Map([['femur.r', I], ['shank.r', knee], ['talus.r', ankle], ['foot.r', ankle]]);
  const p = {
    side: 'r', segA: 'femur.r', segB: 'foot.r', a: [0, 40, 0], b: [0, 0, -5], vias: [],
    wraps: [{ prox: 'femur.r', dist: 'shank.r', axis: [1, 0, 0], m: 2 }, { prox: 'shank.r', dist: 'talus.r', axis: [1, 0, 0], m: 4 }],
  };
  const L0 = Math.hypot(40, 5);
  assert.ok(Math.abs(lengthDelta(p, m) - (L0 - 2 * 0.5 - 4 * 0.3) / L0 + 1) < 1e-9);
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

test('力臂：可只取關節近端；只看某條直線附近的頂點，附近沒有頂點時為 0', () => {
  // 關節近端（−y 為遠端，所以 y > 0 是近端）在前方、遠端在後方的肌腱：只取近端時力臂為負（前方）
  const tendon = new Float32Array([0, 1, 2, 0, -1, -2]);
  assert.ok(Math.abs(momentArm(tendon, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4, { slab: [-2, 0.5] }) + 2) < 1e-9);
  assert.ok(Math.abs(momentArm(tendon, [0, 0, 0], [0, -1, 0], [1, 0, 0], 4)) < 1e-9, '對稱取樣時前後抵消');
  assert.equal(momentArm(new Float32Array([5, 0, 1]), [0, 0, 0], [0, -1, 0], [1, 0, 0], 4, { near: 1.2 }), 0);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/muscles.test.js test/skin.test.js
```

預期：FAIL，膝＋踝鎖住的測試失敗（舊程式只鎖手肘、手腕）；力臂的 `slab`、`near` 測試失敗

- [ ] **Step 3：實作**

`src/muscles/length.js`：

```js
// 肌肉長度：起點 →（轉折點，可多個）→ 止點的折線長，與中立姿勢比較
import * as THREE from 'three';
import { LIMB_PARENT, splitKey } from '../rig/segments.js';

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

// 把有力臂的關節「鎖住」後的骨段變換：鎖住的關節遠端跟著近端走，其餘關節照常轉
// lockedDist：被鎖住的關節（以遠端骨段命名，例如 'shank.r'＝右膝）
function lockedMats(mats, lockedDist) {
  const cache = new Map();
  const get = key => {
    if (cache.has(key)) return cache.get(key);
    const [seg, side] = splitKey(key);
    const parent = LIMB_PARENT[seg] && `${LIMB_PARENT[seg]}.${side}`;
    let m = mats.get(key);
    if (parent) {
      const above = get(parent);
      if (lockedDist.has(key)) m = above;
      else if (above !== mats.get(parent)) m = above.clone().multiply(mats.get(parent).clone().invert()).multiply(m);
    }
    cache.set(key, m);
    return m;
  };
  return { get };
}

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）；兩端幾乎重合（例如兩端都在骨盆內）時視為 0
// 跨肢體關節的肌肉（part.wraps）：折線在這些關節鎖住的姿勢量，再加上各關節的「−力臂 × 轉角」
// （肌腱繞著關節走，轉折點放在關節旁邊的話，彎到 90° 以上連線會穿過骨頭、長度反而變長）
// 沒有力臂的前臂旋轉照直線量；旋後肌群有前臂旋轉的力臂，連前臂旋轉也鎖住
export function lengthDelta(part, mats) {
  const rest = polylineLength(restPath(part));
  if (rest < 0.5) return 0;
  if (!part.wraps) return polylineLength(partPath(part, mats)) / rest - 1;
  let len = polylineLength(partPath(part, lockedMats(mats, new Set(part.wraps.map(w => w.dist)))));
  for (const w of part.wraps) len -= w.m * jointAngleOf(mats.get(w.prox), mats.get(w.dist), w.axis);
  return len / rest - 1;
}
```

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


// 跨肢體關節的力臂（公分，帶正負號）：關節附近（slab）的肌肉頂點平均位置，投影到「遠端骨段正向轉動時移動的方向」
// slab：關節上下各取多少公分，或 [下限, 上限]（沿 dir 量，負值在關節近端；肌腱過了關節就轉向止點時，只取近端那一側）
// 正值＝關節正向轉動（屈曲）時肌肉變短；肌肉沒有經過這一段（例如肌腱沒有建模）時改用最靠近關節面的 5% 頂點
// pivot：轉軸上一點；dir：沿肢體往遠端的單位向量；axis：轉軸（與 rig.js 用的方向相同）
// near：只看離「pivot 沿 dir 的直線」這麼近的頂點（手指用，分開各指的肌腱）；附近完全沒有頂點時力臂為 0
export function momentArm(positions, pivot, dir, axis, maxArm, { slab = 2, near = Infinity } = {}) {
  const n = positions.length / 3;
  const along = v => (positions[v * 3] - pivot[0]) * dir[0] + (positions[v * 3 + 1] - pivot[1]) * dir[1] + (positions[v * 3 + 2] - pivot[2]) * dir[2];
  const off = v => {
    const t = along(v);
    return Math.hypot(positions[v * 3] - pivot[0] - dir[0] * t, positions[v * 3 + 1] - pivot[1] - dir[1] * t, positions[v * 3 + 2] - pivot[2] - dir[2] * t);
  };
  const reach = [];
  for (let v = 0; v < n; v++) if (off(v) <= near) reach.push(v);
  if (!reach.length) return 0;
  const [lo, hi] = Array.isArray(slab) ? slab : [-slab, slab];
  let pick = reach.filter(v => along(v) >= lo && along(v) <= hi);
  if (!pick.length) {
    const order = reach.sort((x, y) => Math.abs(along(x)) - Math.abs(along(y)));
    pick = order.slice(0, Math.max(1, Math.ceil(reach.length * 0.05)));
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

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/muscles.test.js test/skin.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/muscles.test.js test/skin.test.js src/muscles/length.js tools/lib/skin.mjs
git commit -m "feat: generic joint locking for muscle length; proximal-only and per-finger moment-arm sampling" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4：關節表、部件與轉檔

**Files:**
- Create: `tools/lib/limbJoints.mjs`、`test/limbJoints.test.js`
- Modify: `tools/parts.js`（距骨、手指骨段；中間群組；`jointArms`；闊筋膜張肌只到股骨）、`tools/convert.mjs`（用關節表產生力臂）、`test/parts.test.js`、`test/data.test.js`
- 產出（進 git）：`data/processed/meta.json`、`data/processed/meshes.bin`

**Interfaces:**
- Consumes：Task 1 的關節估算與骨段工具、Task 3 的 `momentArm`
- Produces：`limbJoints(joints, side)`（每側 20 個關節）、`crossedJoints(segs, joints, side)`、`limbWraps(positions, segs, joints, side, arms = {})`
- Produces：`PARTS[i].jointArms`（以關節遠端骨段命名的文獻力臂，例如 `{ shank: 1.5 }`）

- [ ] **Step 1：更新測試**

`test/parts.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PARTS, BONE_SEGMENTS } from '../tools/parts.js';
import { segKey, SEGMENT_KEYS, AXIAL, LIMB_PARENT, subtree, splitKey } from '../src/rig/segments.js';

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
  assert.equal(SEGMENT_KEYS.length, AXIAL.length + 50); // 每側 25：肩帶 2、上臂到手 4、手指 15、下肢 4
  const defined = new Set(BONE_SEGMENTS.map(s => (s.sided ? `${s.segment}.r` : s.segment)));
  for (const k of SEGMENT_KEYS.filter(k => !k.endsWith('.l'))) assert.ok(defined.has(k), `骨段 ${k} 沒有骨頭`);
});

test('肢體骨段的上下關係', () => {
  assert.deepEqual([...subtree('shank')].sort(), ['foot', 'shank', 'talus']);
  assert.ok(subtree('hand').has('indexDist') && subtree('hand').has('thumbMeta'));
  assert.equal(LIMB_PARENT.indexProx, 'hand');
  assert.equal(LIMB_PARENT.foot, 'talus');
  assert.deepEqual(splitKey('indexMid.r'), ['indexMid', 'r']);
  assert.deepEqual(splitKey('pelvis'), ['pelvis', null]);
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
  assert.ok(j.knee.r.pivot[1] > 40 && j.knee.r.pivot[1] < 52 && j.knee.r.pivot[0] < 0, `膝 ${j.knee.r.pivot}`);
  assert.ok(j.ankle.r.pivot[1] > 4 && j.ankle.r.pivot[1] < 12, `踝 ${j.ankle.r.pivot}`);
  assert.ok(j.subtalar.r.pivot[1] < j.ankle.r.pivot[1], '距下關節在踝關節下方');
  const tips = ['index', 'middle', 'ring', 'little'].map(f => j.fingers.r[f][0].pivot[1]);
  assert.ok(tips.every(y => y > 70 && y < j.wrist.r[1]), `掌指關節 ${tips}`);
});

test('三角面與檔案大小在預算內', () => {
  const tris = [...meta.bones, ...meta.parts].reduce((n, e) => n + e.iCount / 3, 0);
  assert.ok(tris <= 800000, `三角面 ${tris}`);
  assert.ok(statSync('data/processed/meshes.bin').size <= 7.5 * 1048576); // base64 後約 10 MB
});
```

`test/limbJoints.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { limbJoints, crossedJoints, limbWraps } from '../tools/lib/limbJoints.mjs';

// 用真實的轉檔資料（關節位置與轉軸）
const { joints } = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const names = list => list.map(j => j.dist);

test('每側 20 個關節：手肘、手腕、膝、踝、距下，加上手指 15 個', () => {
  assert.equal(limbJoints(joints, 'r').length, 20);
});

test('部件跨過的關節：骨段一部分在關節遠端、一部分不在', () => {
  assert.deepEqual(names(crossedJoints(['pelvis', 'femur.r', 'shank.r'], joints, 'r')), ['shank']);
  assert.deepEqual(names(crossedJoints(['shank.r', 'foot.r'], joints, 'r')), ['talus', 'foot']);
  assert.deepEqual(names(crossedJoints(['ulna.r', 'radius.r'], joints, 'r')), [], '前臂旋轉不在表內');
  const fds = ['radius.r', 'hand.r', 'indexProx.r', 'middleProx.r', 'ringProx.r', 'littleProx.r', 'indexMid.r', 'middleMid.r', 'ringMid.r', 'littleMid.r'];
  const crossed = names(crossedJoints(fds, joints, 'r'));
  assert.equal(crossed.length, 9, '手腕＋四指的掌指、近端指間');
  assert.ok(crossed.includes('hand') && crossed.includes('littleMid') && !crossed.includes('indexDist'));
});

test('力臂：跨多指的肌肉同一層取平均；文獻力臂取代算出的值', () => {
  // 每指的掌指關節掌側 1 公分各放一個頂點：單指的力臂都是 1，四指平均後每個 0.25
  const mcp = ['index', 'middle', 'ring', 'little'].map(f => joints.fingers.r[f][0]);
  const positions = Float32Array.from(
    mcp.flatMap(j => {
      const move = [j.axis[1] * j.dir[2] - j.axis[2] * j.dir[1], j.axis[2] * j.dir[0] - j.axis[0] * j.dir[2], j.axis[0] * j.dir[1] - j.axis[1] * j.dir[0]];
      const len = Math.hypot(...move);
      return j.pivot.map((v, i) => v + move[i] / len);
    }),
  );
  const wraps = limbWraps(positions, ['hand.r', 'indexProx.r', 'middleProx.r', 'ringProx.r', 'littleProx.r'], joints, 'r');
  assert.equal(wraps.length, 4);
  for (const w of wraps) assert.ok(Math.abs(w.m - 0.25) < 1e-6, `${w.dist} ${w.m}`);
  const [knee] = limbWraps(new Float32Array(3), ['femur.r', 'shank.r'], joints, 'r', { shank: 1.5 });
  assert.deepEqual([knee.prox, knee.dist, knee.m], ['femur.r', 'shank.r', 1.5]);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/parts.test.js test/data.test.js test/limbJoints.test.js
```

預期：FAIL：骨段 `talus.r`、`indexProx.r` 沒有骨頭；`tools/lib/limbJoints.mjs` 不存在；資料沒有 `knee`。

- [ ] **Step 3：寫關節表、部件清單與轉檔程式**

`tools/lib/limbJoints.mjs`：

```js
// 肢體關節表與力臂：手肘、手腕、手指、膝、踝、距下（前臂旋轉另外處理，見 parts.js 的 pronationArm）
// 每個關節以遠端骨段命名（例如膝＝'shank'）；轉軸與 rig.js 用的相同，量長度時由骨段矩陣算出轉角
import { momentArm } from './skin.mjs';
import { FINGERS, LIMB_PARENT, subtree, splitKey } from '../../src/rig/segments.js';

const sub = (p, q) => p.map((v, i) => v - q[i]);
const unit = p => p.map(v => v / (Math.hypot(...p) || 1));
const mid = (p, q) => p.map((v, i) => (v + q[i]) / 2);
const PROXIMAL = [-3, 0.5]; // 關節近端 3 公分到遠端 0.5 公分

// 一側的關節：{ dist, pivot, axis, dir, maxArm, slab, near, group }
// slab：取關節附近多遠的頂點（見 skin.mjs 的 momentArm）；near：只取離「pivot 沿 dir 的直線」多近的頂點（手指要分開各指的肌腱）
// group：同一層的手指關節（例如四指的掌指關節），跨多指的肌肉取平均
export function limbJoints(joints, side) {
  const [medialEpicondyle, lateralEpicondyle] = joints.elbowAxis[side];
  const elbowPivot = mid(medialEpicondyle, lateralEpicondyle);
  const elbowAxis = unit(sub(lateralEpicondyle, medialEpicondyle));
  const forearmDir = unit(sub(joints.wrist[side], elbowPivot));
  const knee = joints.knee[side], ankle = joints.ankle[side], subtalar = joints.subtalar[side];
  const legDir = unit(sub(ankle.pivot, knee.pivot));
  const list = [
    { dist: 'ulna', pivot: elbowPivot, axis: elbowAxis, dir: forearmDir, maxArm: 4 },
    { dist: 'hand', pivot: joints.wrist[side], axis: elbowAxis, dir: forearmDir, maxArm: 2 },
    // 膝、踝的肌腱過了關節就轉向前方的止點（鵝足、脛後肌腱繞過內踝往前），只取關節近端那一側
    { dist: 'shank', pivot: knee.pivot, axis: knee.axis, dir: legDir, maxArm: 5, slab: PROXIMAL },
    { dist: 'talus', pivot: ankle.pivot, axis: ankle.axis, dir: legDir, maxArm: 6, slab: PROXIMAL },
    { dist: 'foot', pivot: subtalar.pivot, axis: subtalar.axis, dir: legDir, maxArm: 3, slab: PROXIMAL },
  ];
  const fingers = joints.fingers[side];
  for (const f of FINGERS) {
    ['Prox', 'Mid', 'Dist'].forEach((k, i) => list.push({ dist: `${f}${k}`, ...fingers[f][i], maxArm: 1.5, slab: 0.6, near: 1.2, group: `finger${i}` }));
  }
  ['thumbMeta', 'thumbProx', 'thumbDist'].forEach((seg, i) => list.push({ dist: seg, ...fingers.thumb[i], maxArm: 1.5, slab: 0.6, near: 1.5, group: `thumb${i}` }));
  return list;
}

// 部件跨過的關節：部件的骨段一部分在關節遠端（含以下）、一部分不在
export function crossedJoints(segs, joints, side) {
  const local = segs.map(s => splitKey(s)[0]);
  return limbJoints(joints, side).filter(j => {
    const below = subtree(j.dist);
    return local.some(s => below.has(s)) && local.some(s => !below.has(s));
  });
}

// 部件的力臂清單 [{ prox, dist, axis, m }]；跨多指的肌肉，同一層手指關節的力臂各除以指數（取平均）
// arms：文獻力臂（公分），以關節的遠端骨段命名，例如 { shank: 1.5 }，取代由頂點算出的值
export function limbWraps(positions, segs, joints, side, arms = {}) {
  const crossed = crossedJoints(segs, joints, side);
  const count = {};
  for (const j of crossed) if (j.group) count[j.group] = (count[j.group] ?? 0) + 1;
  return crossed.map(j => ({
    prox: `${LIMB_PARENT[j.dist]}.${side}`,
    dist: `${j.dist}.${side}`,
    axis: j.axis,
    m: arms[j.dist] ?? momentArm(positions, j.pivot, j.dir, j.axis, j.maxArm, { slab: j.slab, near: j.near }) / (j.group ? count[j.group] : 1),
  }));
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

import { FINGERS } from '../src/rig/segments.js';

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
const PALM = [2, 3, 4, 5].map(metacarpal); // 屈指、伸指肌腱經過的第二到五掌骨
const FOUR = [2, 3, 4, 5];
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
    // 其他關節的文獻力臂（公分，正值＝屈曲時變短），以關節的遠端骨段命名，例如 { shank: 1.5 }＝膝
    jointArms: opts.jointArms ?? {},
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
  part('fdsHumeroUlnar', 'Humero-ulnar head of flexor digitorum superficialis', 'middle', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS, PALM, phalanges(FOUR, ['Proximal']), phalanges(FOUR, ['Middle'])], { tp: [0.3], maxGap: 3 }),
  // 橈側頭的網格只到手腕（肌腱併在肱尺頭裡），遠端以腕骨為準
  part('fdsRadial', 'Radial head of flexor digitorum superficialis', 'middle', 'upperLimb', [RADIUS, CARPALS], { tp: [], maxGap: 4 }),
  part('flexorDigitorumProfundus', 'Flexor digitorum profundus', 'deep', 'upperLimb', [ULNA, PALM, phalanges(FOUR, ['Proximal', 'Middle']), phalanges(FOUR, ['Distal'])], { tp: [0.3], maxGap: 3 }),
  part('flexorPollicisLongus', 'Flexor pollicis longus', 'deep', 'upperLimb', [RADIUS, [metacarpal(1)], phalanges([1], ['Proximal']), phalanges([1], ['Distal'])], { tp: [0.4], maxGap: 4 }),
  part('pronatorQuadratus', 'Pronator quadratus', 'deep', 'upperLimb', [ULNA, RADIUS], { tp: [] }),

  // ── 上肢：前臂後側（伸肌群） ──
  part('anconeus', 'Anconeus muscle', 'middle', 'upperLimb', [HUMERUS, ULNA], { tp: [] }),
  part('brachioradialis', 'Brachioradialis muscle', 'superficial', 'upperLimb', [HUMERUS, RADIUS], { tp: [0.35] }),
  part('extensorCarpiRadialisLongus', 'Extensor carpi radialis longus', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(2)]], { tp: [0.25], maxGap: 3 }),
  part('extensorCarpiRadialisBrevis', 'Extensor carpi radialis brevis', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(3)]], { tp: [0.25], maxGap: 3 }),
  part('extensorDigitorum', 'Extensor digitorum', 'superficial', 'upperLimb', [HUMERUS, FOREARM, PALM, phalanges(FOUR)], { tp: [0.3], maxGap: 3 }),
  part('extensorDigitiMinimi', 'Extensor digiti minimi', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(5)], phalanges([5])], { tp: [0.3], maxGap: 3 }),
  part('ecuHumeral', 'Humeral head of extensor carpi ulnaris', 'superficial', 'upperLimb', [HUMERUS, FOREARM, [metacarpal(5)]], { tp: [0.3], maxGap: 3 }),
  part('ecuUlnar', 'Ulnar head of extensor carpi ulnaris', 'superficial', 'upperLimb', [ULNA, [metacarpal(5)]], { tp: [], maxGap: 3 }),
  part('supinator', 'Supinator', 'deep', 'upperLimb', [[...HUMERUS, ...ULNA], RADIUS], { tp: [0.5], pronationArm: -1 }),
  part('abductorPollicisLongus', 'Abductor pollicis longus', 'deep', 'upperLimb', [[...ULNA, ...RADIUS], [metacarpal(1)]], { tp: [], maxGap: 3 }),
  part('extensorPollicisLongus', 'Extensor pollicis longus', 'deep', 'upperLimb', [ULNA, [metacarpal(1)], phalanges([1], ['Proximal']), phalanges([1], ['Distal'])], { tp: [], maxGap: 4 }),
  part('extensorPollicisBrevis', 'Extensor pollicis brevis', 'deep', 'upperLimb', [RADIUS, [metacarpal(1)], phalanges([1], ['Proximal'])], { tp: [], maxGap: 4 }),
  part('extensorIndicis', 'Extensor indicis', 'deep', 'upperLimb', [ULNA, [metacarpal(2)], phalanges([2])], { tp: [], maxGap: 3 }),

  // ── 上肢：手部（手指關節沒有建模，長度不會改變） ──
  part('abductorPollicisBrevis', 'Abductor pollicis brevis', 'superficial', 'upperLimb', [['Scaphoid bone.{s}', 'Trapezium bone.{s}'], [metacarpal(1)], phalanges([1], ['Proximal'])], { tp: [0.5], maxGap: 3 }),
  part('flexorPollicisBrevisSup', 'Superficial head of flexor pollicis brevis', 'superficial', 'upperLimb', [['Trapezium bone.{s}'], [metacarpal(1)], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
  part('flexorPollicisBrevisDeep', 'Deep head of flexor pollicis brevis', 'deep', 'upperLimb', [['Trapezoid bone.{s}', 'Capitate bone.{s}'], [metacarpal(1)], phalanges([1], ['Proximal'])], { tp: [], maxGap: 3 }),
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
  part('tensorFasciaeLatae', 'Tensor fasciae latae', 'superficial', 'lowerLimb', [HIP, FEMUR], { tp: [0.2], maxGap: 3 }),
  part('iliotibialTract', 'Iliotibial tract', 'superficial', 'lowerLimb', [HIP, FEMUR, TIBIA], { ...fascia, measure: true, tp: [] }),
  part('piriformis', 'Piriformis muscle', 'deep', 'lowerLimb', [['Sacrum'], FEMUR], { tp: [0.4, 0.75] }),
  part('gemellusSup', 'Superior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gemellusInf', 'Inferior gemellus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorInternus', 'Obturator internus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('obturatorExternus', 'Obturator externus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('quadratusFemoris', 'Quadratus femoris muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('psoasMajor', 'Psoas major', 'deep', 'lowerLimb', [[T(12), ...Ls(1, 4)], ['Vertebra L5'], FEMUR], { tp: [0.4, 0.75] }),
  part('iliacus', 'Iliacus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),

  // ── 2A：大腿 ──
  part('sartorius', 'Sartorius muscle', 'superficial', 'lowerLimb', [HIP, FEMUR, TIBIA], { tp: [0.3, 0.7], jointArms: { shank: 1.5 } }), // 鵝足肌腱繞過股骨內髁到脛骨前內側，頂點平均算不出屈膝力臂，用文獻值
  part('rectusFemoris', 'Rectus femoris muscle', 'superficial', 'lowerLimb', [HIP, FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.2, 0.8] }),
  part('vastusLateralis', 'Vastus lateralis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.3, 0.75] }),
  part('vastusMedialis', 'Vastus medialis muscle', 'superficial', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.75] }),
  part('vastusIntermedius', 'Vastus intermedius muscle', 'deep', 'lowerLimb', [FEMUR, ['Patella.{s}', ...TIBIA]], { tp: [0.5] }),
  part('patellarRetinaculumMed', 'Medial patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('patellarRetinaculumLat', 'Lateral patellar retinaculum', 'superficial', 'lowerLimb', [['Patella.{s}'], TIBIA], { ...fascia, tp: [] }),
  part('adductorLongus', 'Adductor longus', 'middle', 'lowerLimb', [HIP, FEMUR], { tp: [0.3] }),
  part('adductorBrevis', 'Adductor brevis', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('adductorMagnus', 'Adductor magnus', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4, 0.75] }),
  part('adductorMinimus', '(Adductor minimus)', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [] }),
  part('gracilis', 'Gracilis muscle', 'middle', 'lowerLimb', [HIP, FEMUR, TIBIA], { tp: [0.4], jointArms: { shank: 2 } }), // 鵝足肌腱繞過股骨內髁到脛骨前內側，頂點平均算不出屈膝力臂，用文獻值
  part('pectineus', 'Pectineus muscle', 'deep', 'lowerLimb', [HIP, FEMUR], { tp: [0.4] }),
  part('bicepsFemorisLong', 'Long head of biceps femoris', 'superficial', 'lowerLimb', [HIP, FEMUR, [...FIBULA, ...TIBIA]], { tp: [0.65] }),
  part('bicepsFemorisShort', 'Short head of biceps femoris', 'deep', 'lowerLimb', [FEMUR, [...FIBULA, ...TIBIA]], { tp: [0.6] }),
  part('semitendinosus', 'Semitendinosus muscle', 'superficial', 'lowerLimb', [HIP, FEMUR, TIBIA], { tp: [0.6] }),
  part('semimembranosus', 'Semimembranosus muscle', 'middle', 'lowerLimb', [HIP, FEMUR, TIBIA], { tp: [0.6] }),

  // ── 2A：小腿 ──
  // 腓腸肌、比目魚肌的網格止於小腿中段（跟腱另外建模），遠端以跟骨為準
  part('gastrocnemiusMed', 'Medial head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, LEG, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('gastrocnemiusLat', 'Lateral head of gastrocnemius', 'superficial', 'lowerLimb', [FEMUR, LEG, CALCANEUS], { tp: [0.3, 0.55], maxGap: 18 }),
  part('calcanealTendon', 'Calcaneal tendon', 'superficial', 'lowerLimb', [LEG, CALCANEUS], { ...fascia, tp: [] }),
  part('soleus', 'Soleus muscle', 'middle', 'lowerLimb', [LEG, CALCANEUS], { tp: [0.55, 0.8], maxGap: 10 }),
  part('plantaris', 'Plantaris muscle', 'middle', 'lowerLimb', [FEMUR, LEG, CALCANEUS], { tp: [] }),
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
// 手指的骨段：拇指（第一掌骨、近節、遠節）、四指（近節、中節、遠節）
const FINGER_BONES = [
  { segment: 'thumbMeta', sided: true, names: [metacarpal(1)] },
  { segment: 'thumbProx', sided: true, names: phalanges([1], ['Proximal']) },
  { segment: 'thumbDist', sided: true, names: phalanges([1], ['Distal']) },
  ...FINGERS.flatMap((f, i) => ['Proximal', 'Middle', 'Distal'].map((kind, k) => ({ segment: f + ['Prox', 'Mid', 'Dist'][k], sided: true, names: phalanges([i + 2], [kind]) }))),
];

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
  ...FINGER_BONES,
  { segment: 'hand', sided: true, groups: ['Bones of free part of upper limb.g'] }, // 上肢自由部其餘的骨頭（腕骨、第二到五掌骨）
  { segment: 'femur', sided: true, names: ['Femur.{s}'] },
  { segment: 'shank', sided: true, names: ['Tibia.{s}', 'Fibula.{s}', 'Patella.{s}'] },
  { segment: 'talus', sided: true, names: ['Talus.{s}'] },
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
import { limbWraps } from './lib/limbJoints.mjs';
import { estimateJoints } from './lib/joints.mjs';
import { packMeshes } from './lib/pack.mjs';
import { PARTS, BONE_SEGMENTS, PART_RATIO, BONE_RATIO } from './parts.js';
import { segKey, splitKey, LIMB_PARENT } from '../src/rig/segments.js';

const RAW = 'data/raw';
// 繞肢體關節大幅轉動的骨段（尺骨、橈骨、手、手指、小腿、距骨、足）
const largeRotation = seg => Boolean(LIMB_PARENT[splitKey(seg)[0]]);
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
    const crossesLimbJoint = segs.length >= 2 && segs.some(largeRotation);
    if (segs.length > 2 || crossesLimbJoint) {
      // 跨三個以上骨段、或跨過肢體關節（轉動角度大，沿連線混合會塌陷）：每個頂點跟著最近的兩個骨段
      skin = skinWeights(geo.positions, segPoints);
      skinSegs = segs;
      // 端點群組以外的骨段各加一個轉折點；前臂骨不加（前臂旋轉時，分別跟著尺骨、橈骨的兩個轉折點會讓連線打折）
      const endSegs = new Set([...groups[0], ...groups[groups.length - 1]].map(n => bone(n).segment));
      const middle = segs.map((s, i) => i).filter(i => !endSegs.has(segs[i]) && !/^(ulna|radius)\./.test(segs[i]));
      vias = chainVias(geo.positions, skin, middle, ends.a, ends.b).map(v => ({ seg: segs[v.s], p: round(v.p) }));
    }
    if (crossesLimbJoint) {
      // 跨肢體關節（手肘、手腕、手指、膝、踝、距下）：長度變化用「力臂 × 轉角」（見 tools/lib/limbJoints.mjs、src/muscles/length.js）
      wraps = limbWraps(geo.positions, segs, joints, side, p.jointArms).map(w => ({ ...w, axis: round(w.axis), m: round(w.m) }));
      const unit = v => v.map(x => x / Math.hypot(...v));
      if (p.pronationArm) {
        // 旋前方向：拇指由外側轉向前方；轉軸取「橈骨頭 → 尺骨頭」並調整正負，讓正向轉動＝旋前
        const [radialHead, ulnarHead] = joints.forearmAxis[side];
        let k = unit(ulnarHead.map((v, i) => v - radialHead[i]));
        const lateral = side === 'r' ? -1 : 1;
        if (-k[1] * lateral < 0) k = k.map(v => -v); // (k × 外側方向)·前方 = −k_y × 外側 x，要大於 0
        wraps.push({ prox: `ulna.${side}`, dist: `radius.${side}`, axis: round(k), m: p.pronationArm });
      }
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

預期：約 50 秒，印出「完成：骨頭 233 個、肌肉部件 378 個、三角面 783415、meshes.bin 7.4 MB」（數字可能略有差異），沒有「附著區離骨頭太遠」。

- [ ] **Step 5：執行測試，確認通過**

執行：

```bash
node --test test/parts.test.js test/data.test.js test/limbJoints.test.js test/postures.test.js
```

預期：全部 PASS（postures 原有的檢查清單也恢復通過）。

- [ ] **Step 6：提交**

```bash
git add tools/lib/limbJoints.mjs test/limbJoints.test.js tools/parts.js tools/convert.mjs test/parts.test.js test/data.test.js data/processed
git commit -m "feat: limb joint table with moment arms for knee, ankle, subtalar and finger joints; 62-segment conversion" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5：檢查清單：膝、踝、距下、手指、拇指與新姿勢

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
    short: ['bicepsShort', 'brachialis', 'brachioradialis', 'pronatorTeresHum', 'pronatorQuadratus', 'flexorCarpiRadialis', 'rectusCapPostMinor', 'adductorPollicisObl', 'flexorPollicisBrevisSup'],
    long: ['tricepsMed', 'anconeus', 'supinator', 'extensorDigitorum', 'ecuHumeral', 'rhomboidMinor', 'extensorPollicisBrevis'],
  },
  kneeHyperextension: { short: ['vastusMedialis'], long: ['popliteus'] },
  highHeels: {
    short: ['gastrocnemiusMed', 'gastrocnemiusLat', 'soleus', 'plantaris'],
    long: ['tibialisAnterior', 'extensorHallucisLongus', 'extensorDigitorumLongus', 'fibularisTertius'],
  },
  flatFoot: { short: ['fibularisTertius'], long: ['flexorDigitorumLongus'] },
};

// 上、下肢單一關節（自訂姿勢的滑桿推到底）
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
  握拳: {
    params: bilateral({ fingerFlexion: 1 }),
    short: ['fdsHumeroUlnar', 'flexorDigitorumProfundus', 'palmarInterossei', 'flexorDigitiMinimi'],
    long: ['extensorDigitorum', 'extensorIndicis'],
  },
  拇指屈曲: {
    params: bilateral({ thumbFlexion: 1 }),
    short: ['flexorPollicisLongus', 'adductorPollicisObl', 'opponensPollicis', 'flexorPollicisBrevisSup'],
    long: ['extensorPollicisBrevis', 'extensorPollicisLongus'],
  },
  膝彎曲: {
    params: bilateral({ kneeFlexion: 1 }),
    short: ['semitendinosus', 'semimembranosus', 'bicepsFemorisLong', 'bicepsFemorisShort', 'gracilis', 'sartorius', 'gastrocnemiusMed', 'gastrocnemiusLat'],
    long: ['rectusFemoris', 'vastusLateralis', 'vastusMedialis', 'vastusIntermedius'],
  },
  踝背屈: {
    params: bilateral({ ankleFlexion: 1 }),
    short: ['tibialisAnterior', 'extensorHallucisLongus', 'fibularisTertius'],
    long: ['gastrocnemiusMed', 'gastrocnemiusLat', 'soleus'],
  },
  足內翻: {
    params: bilateral({ footInversion: 1 }),
    short: ['tibialisPosterior', 'flexorDigitorumLongus'],
    long: ['fibularisBrevis', 'fibularisTertius', 'extensorDigitorumLongus'],
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

預期：全部 PASS；診斷輸出列出各姿勢變化最大的部件。若失敗，只能調整 `LIMITS`、預設姿勢或 `parts.js` 的附著骨頭／`jointArms`（理由寫進設計文件），不可以改測試的期望方向。

- [ ] **Step 3：提交**

```bash
git add test/postures.test.js
git commit -m "test: locked-short/long checklist for knee, ankle, subtalar, fingers, thumb and the new presets" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6：中文說明：改寫固定關節的備註、新增三個姿勢

**Files:**
- Modify: `解剖列車網頁/content.js`（用下面的一次性腳本修改）
- `test/content.test.js` 不用改

**Interfaces:**
- Consumes：`PRESETS`（Task 2 新增的三個姿勢）

- [ ] **Step 1：執行測試，確認失敗**

執行：

```bash
node --test test/content.test.js
```

預期：FAIL：「每個預設姿勢都有說明」缺少 `kneeHyperextension`。

- [ ] **Step 2：用一次性腳本修改 content.js**

把以下內容存成專案根目錄的 `update-notes.mjs`。腳本會刪掉 `KNEE_FIXED`，改寫 18 則膝、踝與 12 則手指的備註，補上縫匠肌、股薄肌、闊筋膜張肌、股直肌的說明，並新增三個姿勢的說明、更新「滑手機」。任何一處找不到原文就會停下來報錯，不會寫出半套。

```js
import { readFileSync, writeFileSync } from 'node:fs';
const file = '解剖列車網頁/content.js';
let s = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const swap = (from, to) => {
  if (!s.includes(from)) throw new Error(`找不到 ${from.slice(0, 60)}`);
  s = s.replace(from, to);
};
// 某個條目（id）裡的 notes 換成新文字
const setNotes = (id, text) => {
  const start = s.indexOf(`\n  ${id}: {\n`);
  if (start < 0) throw new Error(`找不到條目 ${id}`);
  const end = s.indexOf('\n  },', start);
  const block = s.slice(start, end);
  const next = block.replace(/\n    notes: .*,$/m, `\n    notes: '${text}',`);
  if (next === block && !block.includes(`notes: '${text}'`)) throw new Error(`${id} 沒有 notes`);
  s = s.slice(0, start) + next + s.slice(end);
};

swap(`const KNEE_FIXED = '2A 沒有膝、踝關節，只跨過膝或踝的肌肉長度不會隨姿勢改變。';\n`, '');
const KNEE_ANKLE = {
  vastusLateralis: '只跨過膝關節；膝彎曲時被拉長，膝過伸時縮短。',
  vastusMedialis: '只跨過膝關節；膝彎曲時被拉長，膝過伸時縮短。',
  vastusIntermedius: '只跨過膝關節；膝彎曲時被拉長，膝過伸時縮短。',
  bicepsFemorisShort: '只跨過膝關節（短頭不跨髖）。',
  gastrocnemiusMed: '同時跨過膝與踝：膝彎曲時變短、踝背屈時拉長。',
  gastrocnemiusLat: '同時跨過膝與踝：膝彎曲時變短、踝背屈時拉長。',
  soleus: '只跨過踝關節；模型的網格止於跟腱上方，力臂取最靠近踝的那一段。',
  popliteus: '肌肉很短，膝彎曲時百分比變化很大；它主要是在膝伸直時「解鎖」（脛骨內旋），模型沒有膝的旋轉。',
  tibialisPosterior: '肌腱繞過內踝後方往前到足舟骨，力臂只取踝關節近端那一段。',
  flexorDigitorumLongus: '腳趾關節沒有建模，長度只反映踝與距下關節。',
  flexorHallucisLongus: '腳趾關節沒有建模，長度只反映踝與距下關節。',
  tibialisAnterior: '模型算出的距下關節力臂接近 0，內翻、外翻時長度幾乎不變（實際上是弱的內翻肌）。',
  extensorDigitorumLongus: '腳趾關節沒有建模，長度只反映踝與距下關節。',
  extensorHallucisLongus: '腳趾關節沒有建模，長度只反映踝與距下關節。',
  fibularisTertius: '',
  fibularisLongus: '肌腱繞過外踝後方、再經足底到第一蹠骨；模型算出的外翻力臂偏小（外翻 25° 時約 −2%）。',
  fibularisBrevis: '',
};
for (const [id, text] of Object.entries(KNEE_ANKLE)) {
  const start = s.indexOf(`\n  ${id}: {\n`);
  const end = s.indexOf('\n  },', start);
  const block = s.slice(start, end);
  if (!block.includes('notes: KNEE_FIXED,')) throw new Error(`${id} 沒有 KNEE_FIXED`);
  s = s.slice(0, start) + block.replace('notes: KNEE_FIXED,', `notes: '${text}',`) + s.slice(end);
}
swap(`notes: '約一成的人沒有此肌。' + KNEE_FIXED,`, `notes: '約一成的人沒有此肌。',`);
if (s.includes('KNEE_FIXED')) throw new Error('還有 KNEE_FIXED');
setNotes('rectusFemoris', '依幾何計算，膝蓋伸直時骨盆前傾只讓股直肌縮短約 1%；它跨過膝關節，膝彎曲時明顯拉長（彎到底約 +22%）。');
setNotes('sartorius', '鵝足肌腱繞過股骨內髁到脛骨前內側，由頂點位置算不出屈膝的力臂，改用文獻值（約 1.5 公分）。');
setNotes('gracilis', '在列車線中的歸屬請對照書本確認；屈膝的力臂改用文獻值（約 2 公分），理由同縫匠肌。');
setNotes('tensorFasciaeLatae', '模型的網格止於大腿上段（往下由髂脛束接續），長度只反映髖部姿勢。');

const FINGER_NOTES = {
  fdsHumeroUlnar: '四指一起彎曲；跨多指的肌腱，手指關節的效果取各指的平均。',
  flexorDigitorumProfundus: '四指一起彎曲；跨多指的肌腱，手指關節的效果取各指的平均。',
  extensorDigitorum: '四指一起彎曲；跨多指的肌腱，手指關節的效果取各指的平均。',
  abductorPollicisBrevis: '',
  flexorPollicisBrevisSup: '',
  flexorPollicisBrevisDeep: '深頭的網格很小，拇指屈曲時算出的長度變化不準。',
  opponensPollicis: '',
  adductorPollicisObl: '',
  adductorPollicisTrans: '',
  abductorDigitiMinimi: '',
  flexorDigitiMinimi: '',
  opponensDigitiMinimi: '只跨過第五腕掌關節，模型沒有這個關節，長度不會改變。',
  lumbricalsHand: '起點在屈指深肌腱上，模型以掌骨代替，所以握拳時顯示縮短；實際上握拳時屈指深肌腱往近端拉，蚓狀肌反而被拉長。',
  palmarInterossei: '',
  dorsalInterosseiHand: '',
};
for (const [id, text] of Object.entries(FINGER_NOTES)) setNotes(id, text);
if (/手指關節沒有建模|模型沒有手指關節/.test(s)) throw new Error('還有手指關節的舊備註');

swap(`  phone: '滑手機：頭前傾、肩胛前伸、肩關節內旋，手肘彎曲約 100°、前臂旋前約 120°、手腕微屈。`, `  phone: '滑手機：頭前傾、肩胛前伸、肩關節內旋，手肘彎曲約 100°、前臂旋前約 120°、手腕微屈，手指微彎握著手機、拇指屈曲。`);
swap(`淺後臂線在前臂整段被拉長，是網球肘、手腕背側痠痛常見的背景。',`, `握持的拇指讓內收拇肌、屈拇短肌、拇對掌肌鎖短，伸拇短肌鎖長。淺後臂線在前臂整段被拉長，是網球肘、手腕背側痠痛常見的背景。',
  kneeHyperextension: '膝過伸（膝反張）：兩側膝關節過度伸直 15°（示範用，比一般的 5–10° 大）。股四頭肌的股內側、股中間、股外側肌鎖短，膕肌鎖長；膕旁肌、腓腸肌只被拉長約 1–2%（低於 3%，顯示灰色），臨床上常一起提到的是膝後側關節囊與韌帶被拉鬆。Kendall 的前凸型（骨盆前傾）與搖擺背型（骨盆後傾）姿勢都可能合併膝過伸，可以再用滑桿加上骨盆的方向。',
  highHeels: '穿高跟鞋：兩側踝蹠屈約 30°。腓腸肌、比目魚肌、蹠肌鎖短（小腿後側連到跟腱）；脛前肌、伸趾長肌、伸拇長肌、第三腓骨肌鎖長。淺背線的小腿段縮短、淺前線的小腿段拉長。實際穿高跟鞋時常合併骨盆前傾、膝過伸，可以再用滑桿加上。',
  flatFoot: '扁平足（足外翻）：兩側足部繞距下關節外翻 25°（示範用，比一般的 10–15° 大；模型的足部是一整塊，沒有足弓塌陷）。腓骨短肌、第三腓骨肌、伸趾長肌鎖短（腓骨長肌只縮短約 2%）；脛後肌、屈趾長肌鎖長——脛後肌長期被拉長、無力，是成人後天性扁平足常見的原因。螺旋線、深前線的足部段落受影響。',`);
writeFileSync(file, s);
console.log('ok');
```

執行：

```bash
node update-notes.mjs && rm update-notes.mjs && git diff --stat
```

預期：印出 `ok`；只有 `解剖列車網頁/content.js` 有變動（約 80 行）。

- [ ] **Step 3：執行全部測試**

執行：

```bash
npm test
```

預期：全部 PASS（約 358 個）。

- [ ] **Step 4：提交**

```bash
git add 解剖列車網頁/content.js
git commit -m "feat: notes for the new knee, ankle and finger behaviour; knee hyperextension, high heels and flat foot postures" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7：版面、打包與瀏覽器驗證

**Files:**
- Modify: `解剖列車網頁/style.css`
- 產生：`解剖列車網頁/app.js`、`model.js`、`index.html`（版本參數）

**Interfaces:**
- Consumes：Task 1–6 的全部內容

- [ ] **Step 1：姿勢列的版面**

滑桿變多後，姿勢列限制高度、上肢組排成兩欄、兩端小字不換行：

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
#viewport canvas { display: block; outline: none; }
#panPad { position: absolute; right: 12px; bottom: 12px; display: grid; grid-template-columns: repeat(3, 30px); grid-template-rows: repeat(3, 30px) auto; gap: 2px; }
#panPad button { width: 30px; height: 30px; padding: 0; font-size: 12px; opacity: 0.85; }
#panPad .pan-up { grid-area: 1 / 2; }
#panPad .pan-left { grid-area: 2 / 1; }
#panPad .pan-center { grid-area: 2 / 2; }
#panPad .pan-right { grid-area: 2 / 3; }
#panPad .pan-down { grid-area: 3 / 2; }
#panPad small { grid-area: 4 / 1 / 5 / 4; justify-self: end; margin-top: 4px; white-space: nowrap; font-size: 12px; color: var(--muted); }
#info { grid-area: info; overflow-y: auto; }
#postureBar { grid-area: posture; max-height: 38vh; overflow-y: auto; padding: 8px 16px; border-top: 1px solid var(--line); background: var(--panel); } /* 滑桿多，限制高度讓 3D 視窗保有空間 */
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
.slider-groups { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 4px 16px; }
.slider-group { margin: 0; padding: 2px 10px 6px; border: 1px solid var(--line); border-radius: 8px; }
.slider-group legend { padding: 0 4px; font-size: 13px; color: var(--muted); }
.slider-group label { display: grid; grid-template-columns: 8.5em auto 1fr auto; align-items: center; gap: 6px; }
.slider-group small { color: var(--muted); font-size: 12px; white-space: nowrap; }
/* 滑桿多的組（上肢）佔兩欄，裡面也排成兩欄 */
.slider-group.wide { grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; align-content: start; }
.slider-group.wide .side-modes { grid-column: 1 / -1; }
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
  #postureBar { max-height: none; }
  .slider-group.wide { grid-column: auto; grid-template-columns: minmax(0, 1fr); }
  #panPad { bottom: 48px; } /* 窄畫面的圖例佔滿下緣，平移鍵移到它上面 */
  #panPad small { display: none; }
}
```

- [ ] **Step 2：測試與打包**

執行：

```bash
npm test && npm run build
```

預期：測試全部 PASS；打包成功，`解剖列車網頁/model.js` 約 10.6 MB。

- [ ] **Step 3：瀏覽器驗證**

預覽伺服器（`npm run serve`，port 8124；若被占用可用 `npm run serve -- --port=8125`）開啟後，用 javascript_tool 逐項確認（預覽窗格被隱藏時動畫會暫停，先截一張圖讓它回到前景）：

| 檢查 | 指令或操作 | 預期 |
|---|---|---|
| 載入 | `({ parts: app.model.parts.length, presets: document.querySelectorAll('[data-preset]').length, groups: [...document.querySelectorAll('.slider-group legend')].map(l => l.textContent) })` | `parts: 378`、`presets: 12`、四組（含「下肢（可分左右）」），主控台沒有錯誤 |
| 效能 | 連續 10 次 `app.ctrl.setParams({ 'kneeFlexion.r': i / 10, 'fingerFlexion.r': i / 10 })` 量時間 | 每次 < 40 毫秒；把實測數字寫進設計文件第 10 節 |
| 膝 | 「只調右側」把「膝伸直／彎曲」拖到底 | `partByKey('semitendinosus.r').delta` 約 −0.19、`partByKey('vastusMedialis.r').delta` 約 +0.42，左側為 0；側面看小腿往後彎、大腿後側紅、前側藍 |
| 穿高跟鞋 | 按「穿高跟鞋」等 2 秒 | `partByKey('soleus.r').delta` 約 −0.06、`partByKey('tibialisAnterior.r').delta` 約 +0.07；腳尖朝下 |
| 扁平足 | 按「扁平足」 | 第三腓骨肌紅、屈趾長肌藍 |
| 握拳 | 「手指伸直／握拳」拖到 0.6 | 手指往掌側彎、伸指肌腱藍；手、拇指不動 |
| 版面 | 1280 × 800 下看 3D 視窗高度 | 約 370 px；姿勢列可捲動，上肢組排成兩欄，滑桿兩端的小字不換行 |

最後截圖（右膝彎＋踝蹠屈內翻＋半握拳的側面），再用 resize_window 的 mobile 預設確認版面沒有水平捲軸後還原。

- [ ] **Step 4：提交**

```bash
git add 解剖列車網頁/style.css 解剖列車網頁/index.html 解剖列車網頁/app.js 解剖列車網頁/model.js docs/superpowers/specs/2026-10-26-anatomy-trains-3d-knee-ankle-fingers-design.md
git commit -m "feat: knee, ankle and finger viewer build with a compact posture bar" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
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
- **連動**：改變姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾／後傾、高低肩、長短腳、滑手機、膝過伸、穿高跟鞋、扁平足，或用滑桿自訂；肩胛、肩關節、手肘、前臂旋轉、手腕、手指、拇指、膝、踝、足內外翻可分左右）時，肌肉跟著骨頭變形，並用顏色標出《解剖列車》概念中的「鎖短」（紅）與「鎖長」（藍）。
- **痠痛點**：打開開關後，姿勢改變時會在鎖短、鎖長的肌肉上標出常見的痠痛點；說明卡寫出痠痛位置與轉移痛範圍。
- **列車線**：選一條《解剖列車》筋膜線，線上的肌肉套上藍色網狀筋膜；改變姿勢時網格跟著拉開或變密，顏色換成鎖短紅、鎖長藍。
- **中文說明**：點選肌肉或從肌肉清單搜尋，顯示起止點、作用、神經、所屬列車線、常見鎖短／鎖長情況與痠痛點。

目前完成第一階段（肩帶）、2A（軀幹、頸、頭皮、下肢）、上肢（前臂、手），以及膝、踝、手指關節：每側約 190 個部件、12 條列車線。足部內在肌、咀嚼肌、腳趾關節留到之後。

## 使用

雙擊 `解剖列車網頁/index.html`，用 Chrome 或 Edge 開啟，不需要網路。操作方式見 `解剖列車網頁/使用說明.txt`。

## 修改說明文字

所有中文說明都在 `解剖列車網頁/content.js`，用記事本修改引號內的文字，存檔時選 UTF-8。

## 開發

```bash
npm install
npm run fetch-data   # 下載 Z-Anatomy 原始 FBX 到 data/raw/（約 78 MB，不進 git）
npm run model        # 轉檔 → data/processed/（meta.json、meshes.bin）
npm test             # 單元測試（含 12 個姿勢與上、下肢各關節的鎖短／鎖長檢查清單）
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

教學示意用。長度變化以骨骼幾何計算（起止點距離；跨手肘、手腕、手指、膝、踝的肌肉用力臂乘以轉角），不代表肌肉的活化程度或張力；預設姿勢的幅度刻意比一般人大，讓顏色看得出來。痠痛點與轉移痛為常見位置，不能取代專業評估。
````

`解剖列車網頁/使用說明.txt`：

```text
解剖列車 3D 使用說明

【開啟】
雙擊 index.html，用 Chrome 或 Edge 開啟（不需要網路）。第一次載入需要幾秒鐘。

【操作】
- 旋轉：滑鼠左鍵拖曳（平板：單指拖曳）
- 平移：滑鼠右鍵拖曳（平板：雙指拖曳）、方向鍵（先點一下 3D 視窗），或右下角 ▲▼◀▶；● 回到身體中線
- 縮放：滾輪，會往滑鼠指的地方放大（平板：雙指開合）
- 旋轉中心：雙擊肌肉或骨頭，之後的旋轉都繞著那一點；放大頭部或手之後，先雙擊再旋轉就不會變成斜的視角
- 視角：上方「前、後、右側、左側」只轉方向，保留目前的位置與遠近；「全身」回到全身視角
- 點選肌肉：右側出現中文說明，可「隱藏」「半透明」「拉出」
- 肌肉清單：左側可用中文或英文搜尋，也可只看頭頸、軀幹、上肢或下肢；按「左」「右」會轉到看得到的方向並選取
- 拆解：左側關掉「淺層」就能看到中層；「爆炸圖」讓肌肉往外散開；隱藏或半透明的肌肉會列在下方，可逐條「顯示」或「全部恢復」；「復原」回到原狀
- 姿勢：下方按預設姿勢（圓肩、頭前傾、胸椎駝背、骨盆前傾、骨盆後傾、高低肩、長短腳、滑手機、膝過伸、穿高跟鞋、扁平足）會播放動畫，也可以拖動滑桿自由調整；上肢（肩胛、肩關節、手肘、前臂旋轉、手腕、手指、拇指）與下肢（膝、踝、足內外翻）可選「兩側一起」或只調左側、右側
- 顏色：中立姿勢時是肌肉色；改變姿勢後，紅色＝鎖短、藍色＝鎖長、灰色＝長度不變
- 痠痛點：勾選左側「顯示痠痛點」後，姿勢改變時會在鎖短（橘紅點）、鎖長（藍點）的肌肉上標出常見痠痛點；選取的肌肉以黃點標示
- 列車線：上方選一條線，線上的肌肉會套上藍色網狀筋膜，站與站之間用網紋細帶相連；改變姿勢時網格跟著拉開（拉長）或變密（縮短），顏色換成鎖短紅、鎖長藍

【修改說明文字】
用記事本開啟 content.js，修改引號內的文字，存檔時選 UTF-8。

【注意】
教學示意用。長度變化以骨骼幾何計算，不代表肌肉用力的程度；預設姿勢的幅度刻意放大；腳趾關節沒有建模，腳趾不會彎；足部是一整塊，扁平足只以足外翻表示，沒有足弓塌陷。痠痛點與轉移痛為常見位置，不能取代專業評估。
```

- [ ] **Step 2：最後檢查**

執行：

```bash
npm test && npm run build && git status --short
```

預期：測試全部 PASS；打包成功；`git status` 只列出 README.md、使用說明.txt（以及打包產物若有變）。

提醒使用者：雙擊 `解剖列車網頁/index.html`（file://）確認離線可用。

- [ ] **Step 3：提交**

```bash
git add README.md 解剖列車網頁/使用說明.txt 解剖列車網頁/app.js 解剖列車網頁/index.html
git commit -m "docs: README and user guide for knee, ankle and finger joints" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 4：收尾**：用 superpowers:finishing-a-development-branch，請使用者決定是否合併回 main。
