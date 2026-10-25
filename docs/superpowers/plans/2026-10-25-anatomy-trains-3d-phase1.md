# 解剖列車 3D 第一階段（肩帶原型）實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal：** 做出可離線開啟的 3D 肩帶肌肉網頁：能分層拆解、套用「圓肩」等姿勢時肌肉跟著骨頭變形並以紅（鎖短）／藍（鎖長）標示、點選肌肉看繁體中文說明、顯示 4 條手臂線軌道。

**Architecture：** `tools/` 在 Node 把 Z-Anatomy 的 FBX 轉成量化的網格資料與附著點、關節中心（`data/processed/`）；`src/` 是瀏覽器端：骨架（rig）把姿勢參數變成各骨段矩陣，肌肉依兩端骨段混合變形並計算長度變化，控制器把狀態套到 three.js 場景，面板只透過控制器改狀態。esbuild 打包成單一 IIFE，模型資料內嵌成 `model.js`，雙擊 `index.html` 即可離線使用。

**Tech Stack：** three 0.170.0、esbuild 0.24.0、meshoptimizer 1.3.0（只用於轉檔）、Node 內建測試（`node --test`）。

設計文件：`docs/superpowers/specs/2026-10-25-anatomy-trains-3d-design.md`

## Global Constraints

- 所有指令都在專案根目錄 `C:\Users\user\Desktop\AI用\claue 工作\解剖列車3D` 執行（Git Bash）。
- 套件版本固定：`three@0.170.0`、`esbuild@0.24.0`、`meshoptimizer@1.3.0`；Node 22 以上（本機 v24）。
- 必須能以 `file://` 雙擊開啟：瀏覽器端不可用 `fetch` 或 ES module，資料一律經 `<script>` 設定的全域變數（`window.CONTENT`、`window.MODEL_DATA`）。
- 座標：單位公分，+y 向上、+z 向前、**右側在 −x**。
- 所有使用者看到的文字用繁體中文，名詞依國家教育研究院「解剖學名詞」；程式註解用繁體中文，風格與白內障模擬專案一致。
- 長度配色：|Δ| < 3% 灰色、≥ 20% 最飽和；紅＝鎖短、藍＝鎖長；中立姿勢顯示自然肌肉色。
- 預算：三角面 ≤ 40 萬、`meshes.bin` ≤ 7 MB（`model.js` ≤ 10 MB）。
- 頁面底部與 README 必須標示模型出處（Z-Anatomy CC BY-SA 4.0、BodyParts3D）。
- Git 只在本機，不 push；repo 已設定 commit email 為 GitHub noreply 位址，不要改。每個 commit 訊息結尾加上 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`。
- `解剖列車網頁/app.js`、`model.js` 是產生的檔案：改了 `src/` 或 `data/processed/` 之後、提交之前都要 `npm run build`。

## 檔案結構

| 路徑 | 責任 |
|---|---|
| `tools/lib/names.mjs` | 辨識 Z-Anatomy 標註網格名稱、側別 |
| `tools/parts.js` | 第一階段部件清單（附著骨頭、骨段、層）、骨頭來源群組 |
| `tools/lib/geometry.mjs` | 世界座標、合併頂點、簡化 |
| `tools/lib/attach.mjs` | 附著區偵測（最近骨頭）、端點修整、轉折點 |
| `tools/lib/joints.mjs` | 關節中心、胸廓橢球 |
| `tools/lib/pack.mjs` / `src/model/decode.js` | 16 位元量化打包／解碼 |
| `tools/lib/fbx.mjs`、`tools/fetch-data.mjs`、`tools/convert.mjs` | 讀 FBX、下載、轉檔流程 |
| `src/rig/segments.js`、`presets.js`、`rig.js` | 骨段名稱、姿勢參數與預設、骨架計算 |
| `src/muscles/length.js`、`deform.js`、`colors.js` | 長度、變形、配色 |
| `src/trains/lines.js`、`track.js` | 列車線定義、軌道 |
| `src/app/display.js`、`controller.js` | 顯示規則（純函式）、把狀態套到場景 |
| `src/view/viewer.js`、`src/model/scene.js` | three.js 視窗、建立網格 |
| `src/ui/*.js`、`src/main.js` | 面板與進入點 |
| `解剖列車網頁/` | 使用者雙擊開啟的資料夾（index.html、style.css、content.js、產生的 app.js／model.js、使用說明.txt） |

---

### Task 1：專案設定與名稱工具

**Files:**
- Create: `package.json`
- Create: `tools/lib/names.mjs`
- Test: `test/names.test.js`
- 已存在（一併提交）：`.gitignore`、`.claude/launch.json`

**Interfaces:**
- Produces：`isAnnotation(name: string): boolean`、`sideOf(name: string): 'l'|'r'|null`、`withSide(pattern: string, side: 'l'|'r'): string`（`{s}` 換成側別）

- [ ] **Step 1：建立 package.json 並安裝套件**

`package.json`：

```json
{
  "name": "anatomy-trains-3d",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "fetch-data": "node tools/fetch-data.mjs",
    "model": "node tools/convert.mjs",
    "build": "node build.mjs",
    "serve": "node build.mjs --serve",
    "test": "node --test"
  },
  "devDependencies": {
    "esbuild": "0.24.0",
    "meshoptimizer": "1.3.0",
    "three": "0.170.0"
  }
}
```

執行：

```bash
npm install
```

預期：安裝 three、esbuild、meshoptimizer。npm 11 可能顯示 `allow-scripts` 警告，可忽略（esbuild 的執行檔來自 optional dependency，`npx esbuild --version` 會印出 `0.24.0`）。

- [ ] **Step 2：寫失敗的測試**

`test/names.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnnotation, sideOf, withSide } from '../tools/lib/names.mjs';

test('辨識標註用的網格名稱', () => {
  for (const n of ['Pectoralis minor muscle.e1r', 'Scapula.or', 'Atlas.j', 'Sternum.g', 'Humerus.t', 'Femur.i', 'Femur.s']) {
    assert.equal(isAnnotation(n), true, n);
  }
  for (const n of ['Scapula.r', 'Clavicle.l', 'Vertebra T1', 'Atlas (C1)', 'Hip bone.r', '(Abdominal part of pectoralis major muscle).r', 'Levator scapulae.l']) {
    assert.equal(isAnnotation(n), false, n);
  }
});

test('取出側別', () => {
  assert.equal(sideOf('Scapula.r'), 'r');
  assert.equal(sideOf('Clavicle.l'), 'l');
  assert.equal(sideOf('Vertebra T1'), null);
});

test('套用側別', () => {
  assert.equal(withSide('Third rib.{s}', 'l'), 'Third rib.l');
  assert.equal(withSide('Vertebra T1', 'r'), 'Vertebra T1');
});
```

- [ ] **Step 3：執行測試，確認失敗**

執行：

```bash
node --test test/names.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/names.mjs`

- [ ] **Step 4：實作**

`tools/lib/names.mjs`：

```js
// Z-Anatomy 網格名稱的小工具

// 標註用的網格：關節 .j、文字 .t、附著面 .o/.e…、群組 .g 等（後面可能再接側別 l/r）
const ANNOTATION = /\.(j|t|i|s|g|o\d*|e\d*)[lr]?$/;

export function isAnnotation(name) {
  return ANNOTATION.test(name);
}

// 'Scapula.r' → 'r'；沒有側別（例如 'Vertebra T1'）→ null
export function sideOf(name) {
  const m = /\.([lr])$/.exec(name);
  return m ? m[1] : null;
}

// 'Clavicle.{s}' + 'r' → 'Clavicle.r'
export function withSide(pattern, side) {
  return pattern.replaceAll('{s}', side);
}
```

- [ ] **Step 5：執行測試，確認通過**

執行：

```bash
node --test test/names.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 6：提交**

```bash
git add test/names.test.js tools/lib/names.mjs package.json package-lock.json .gitignore .claude/launch.json
git commit -m "chore: project setup and Z-Anatomy name helpers" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2：部件清單與骨段名稱

**Files:**
- Create: `tools/parts.js`
- Create: `src/rig/segments.js`
- Test: `test/parts.test.js`

**Interfaces:**
- Produces：`PARTS: Array<{ id, zName, layer: 'superficial'|'middle'|'deep', attach: [{ segment, bones: string[] }, { segment, bones }], via: boolean, measure: boolean, maxGap: number }>`（attach[0] 為近端）
- Produces：`BONE_SEGMENTS: Array<{ segment, sided?: boolean, groups?: string[], names?: string[] }>`、`PART_RATIO = 0.5`、`BONE_RATIO = 0.3`
- Produces：`SIDED: Set`、`SEGMENT_KEYS: string[]`（9 個）、`segKey(segment, side): string`（例如 `segKey('scapula','r') === 'scapula.r'`）

- [ ] **Step 1：寫失敗的測試**

`test/parts.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PARTS, BONE_SEGMENTS } from '../tools/parts.js';
import { segKey, SEGMENT_KEYS } from '../src/rig/segments.js';

test('28 個部件，id 不重複，層與骨段都合法', () => {
  const ids = PARTS.map(p => p.id);
  assert.equal(PARTS.length, 28);
  assert.equal(new Set(ids).size, ids.length);
  const segments = new Set(BONE_SEGMENTS.map(s => s.segment));
  for (const p of PARTS) {
    assert.ok(['superficial', 'middle', 'deep'].includes(p.layer), p.id);
    assert.equal(p.attach.length, 2, p.id);
    for (const a of p.attach) {
      assert.ok(segments.has(a.segment), `${p.id}：${a.segment}`);
      assert.ok(a.bones.length > 0, p.id);
    }
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
  assert.equal(segKey('torso', 'r'), 'torso');
  assert.equal(SEGMENT_KEYS.length, 9);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/parts.test.js
```

預期：FAIL，`Cannot find module` …`tools/parts.js`

- [ ] **Step 3：實作**

`src/rig/segments.js`：

```js
// 骨段名稱：torso、neck、head 只有一個；clavicle、scapula、arm 分左右（例如 'scapula.r'）
export const SIDED = new Set(['clavicle', 'scapula', 'arm']);

export const SEGMENT_KEYS = ['torso', 'neck', 'head', 'clavicle.l', 'clavicle.r', 'scapula.l', 'scapula.r', 'arm.l', 'arm.r'];

export function segKey(segment, side) {
  return SIDED.has(segment) ? `${segment}.${side}` : segment;
}
```

`tools/parts.js`：

```js
// 第一階段（肩帶原型）的部件與骨頭清單
//
// zName：Z-Anatomy 的網格名稱（不含 .l/.r）。
// attach：兩組附著，近端在前；bones 是教科書上的附著骨頭（{s} 代表側別 l/r），segment 是這組附著跟著動的骨段。
// 注意：Z-Anatomy 把斜方肌上部、下部的名稱標反了（Ascending part 網格其實在上方），這裡依幾何位置對應。

const ORD = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
const rib = n => `${ORD[n - 1][0].toUpperCase()}${ORD[n - 1].slice(1)} rib.{s}`;
const cartilage = n => `Costal cartilage of ${ORD[n - 1]} rib.{s}`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const C = n => (n === 1 ? 'Atlas (C1)' : n === 2 ? 'Axis (C2)' : `Vertebra C${n}`);
const T = n => `Vertebra T${n}`;
const L = n => `Vertebra L${n}`;
const CLAVICLE = ['Clavicle.{s}'];
const SCAPULA = ['Scapula.{s}'];
const HUMERUS = ['Humerus.{s}'];

function part(id, zName, layer, [segA, bonesA], [segB, bonesB], opts = {}) {
  return {
    id,
    zName,
    layer,
    attach: [{ segment: segA, bones: bonesA }, { segment: segB, bones: bonesB }],
    via: Boolean(opts.via), // 繞過肱骨頭：加一個肌腹中段的轉折點
    measure: opts.measure ?? true, // 筋膜不計算長度
    maxGap: opts.maxGap ?? 2, // 附著區與骨頭的最大容許距離（公分）
  };
}

export const PARTS = [
  part('pecMajorClav', 'Clavicular head of pectoralis major muscle', 'superficial', ['clavicle', CLAVICLE], ['arm', HUMERUS]),
  part('pecMajorStern', 'Sternocostal head of pectoralis major muscle', 'superficial', ['torso', ['Manubrium of sternum', 'Body of sternum', ...range(2, 6).map(cartilage)]], ['arm', HUMERUS]),
  part('pecMajorAbd', '(Abdominal part of pectoralis major muscle)', 'superficial', ['torso', [cartilage(6), cartilage(7), rib(6), rib(7)]], ['arm', HUMERUS]),
  part('pecMinor', 'Pectoralis minor muscle', 'middle', ['torso', [rib(3), rib(4), rib(5)]], ['scapula', SCAPULA]),
  part('subclavius', 'Subclavius muscle', 'deep', ['torso', [rib(1), cartilage(1)]], ['clavicle', CLAVICLE]),
  part('clavipectoralFascia', 'Clavipectoral fascia', 'middle', ['clavicle', CLAVICLE], ['scapula', SCAPULA], { measure: false }),
  part('serratusAnterior', 'Serratus anterior muscle', 'middle', ['torso', range(1, 9).map(rib)], ['scapula', SCAPULA]),
  part('trapUpper', 'Ascending part of trapezius muscle', 'superficial', ['neck', ['Occipital bone', C(7)]], ['clavicle', CLAVICLE]),
  part('trapMiddle', 'Transverse part of trapezius muscle', 'superficial', ['torso', range(1, 3).map(T)], ['scapula', SCAPULA]),
  part('trapLower', 'Descending part of trapezius muscle', 'superficial', ['torso', range(4, 12).map(T)], ['scapula', SCAPULA]),
  part('rhomboidMajor', 'Rhomboid major muscle', 'middle', ['torso', range(2, 5).map(T)], ['scapula', SCAPULA]),
  part('rhomboidMinor', 'Rhomboid minor muscle', 'middle', ['torso', [C(7), T(1)]], ['scapula', SCAPULA]),
  part('levatorScapulae', 'Levator scapulae', 'middle', ['neck', range(1, 4).map(C)], ['scapula', SCAPULA]),
  part('deltoidAnt', 'Clavicular part of deltoid muscle', 'superficial', ['clavicle', CLAVICLE], ['arm', HUMERUS], { via: true }),
  part('deltoidMid', 'Acromial part of deltoid muscle', 'superficial', ['scapula', SCAPULA], ['arm', HUMERUS], { via: true }),
  part('deltoidPost', 'Scapular spinal part of deltoid muscle', 'superficial', ['scapula', SCAPULA], ['arm', HUMERUS], { via: true }),
  part('bicepsLong', 'Long head of biceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Radius.{s}']]),
  // Z-Anatomy 的短頭網格止於肘上方（共同肌腱沒有建模），離橈骨約 4 公分
  part('bicepsShort', 'Short head of biceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Radius.{s}']], { maxGap: 5 }),
  part('coracobrachialis', 'Coracobrachialis muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('tricepsLong', 'Long head of triceps brachii', 'superficial', ['scapula', SCAPULA], ['arm', ['Ulna.{s}']]),
  part('tricepsLat', 'Lateral head of triceps brachii', 'superficial', ['arm', HUMERUS], ['arm', ['Ulna.{s}']]),
  part('tricepsMed', 'Medial head of triceps brachii', 'deep', ['arm', HUMERUS], ['arm', ['Ulna.{s}']]),
  part('latissimus', 'Latissimus dorsi muscle', 'superficial', ['torso', [...range(7, 12).map(T), ...range(1, 5).map(L), 'Hip bone.{s}', ...range(9, 12).map(rib)]], ['arm', HUMERUS]),
  part('teresMajor', 'Teres major muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('supraspinatus', 'Supraspinatus muscle', 'deep', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('infraspinatus', 'Infraspinatus muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('teresMinor', 'Teres minor muscle', 'middle', ['scapula', SCAPULA], ['arm', HUMERUS]),
  part('subscapularis', 'Subscapularis muscle', 'deep', ['scapula', SCAPULA], ['arm', HUMERUS]),
];

// 骨頭來源：groups 為 FBX 群組（含所有子孫網格），names 為個別網格；sided 的骨段依名稱的 .l/.r 分左右
export const BONE_SEGMENTS = [
  {
    segment: 'torso',
    groups: ['Thoracic vertebrae.g', 'Lumbar vertebrae.g', 'Costal cartilages.g', 'True ribs.g', 'False ribs.g', 'Sternum.g', 'Bones of pelvic girdle.g'],
    names: ['Sacrum', 'Coccyx'],
  },
  { segment: 'neck', groups: ['Cervical vertebrae.g'] },
  { segment: 'head', groups: ['Bones of cranium.g', 'Extracranial bones of head.g'] },
  { segment: 'clavicle', sided: true, names: ['Clavicle.{s}'] },
  { segment: 'scapula', sided: true, names: ['Scapula.{s}'] },
  { segment: 'arm', sided: true, groups: ['Bones of free part of upper limb.g'] },
];

// 簡化後保留的三角面比例
export const PART_RATIO = 0.5;
export const BONE_RATIO = 0.3;
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/parts.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/parts.test.js src/rig/segments.js tools/parts.js
git commit -m "feat: phase-1 part list (shoulder girdle) and segment names" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3：網格前處理（世界座標、合併頂點、簡化）

**Files:**
- Create: `tools/lib/geometry.mjs`
- Test: `test/geometry.test.js`

**Interfaces:**
- Produces：`worldGeometry(mesh: THREE.Mesh): { positions: Float32Array, indices: Uint32Array }`
- Produces：`simplify(geo, ratio: number): Promise<{ positions, indices }>`、`compact(positions, indices)`

- [ ] **Step 1：寫失敗的測試**

`test/geometry.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { worldGeometry, simplify, compact } from '../tools/lib/geometry.mjs';

test('compact 只保留用到的頂點並重新編號', () => {
  const positions = new Float32Array([0, 0, 0, 1, 0, 0, 9, 9, 9, 0, 1, 0]);
  const out = compact(positions, new Uint32Array([0, 1, 3]));
  assert.deepEqual(Array.from(out.indices), [0, 1, 2]);
  assert.deepEqual(Array.from(out.positions), [0, 0, 0, 1, 0, 0, 0, 1, 0]);
});

test('worldGeometry 套用世界矩陣並合併重複頂點', () => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
  mesh.position.set(10, 0, 0);
  mesh.updateMatrixWorld(true);
  const { positions, indices } = worldGeometry(mesh);
  assert.equal(positions.length / 3, 8);
  assert.equal(indices.length / 3, 12);
  const xs = Array.from({ length: 8 }, (_, v) => positions[v * 3]);
  assert.equal(Math.min(...xs), 9.5);
  assert.equal(Math.max(...xs), 10.5);
});

test('simplify 讓三角面數降到比例附近，索引都有效', async () => {
  const g = new THREE.SphereGeometry(10, 64, 32);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  const m = mergeVertices(g);
  const src = { positions: Float32Array.from(m.attributes.position.array), indices: Uint32Array.from(m.index.array) };
  const out = await simplify(src, 0.25);
  const before = src.indices.length / 3, after = out.indices.length / 3;
  assert.ok(after <= before * 0.3, `${after} / ${before}`);
  assert.ok(after >= before * 0.1, `${after} / ${before}`);
  assert.ok(Math.max(...out.indices) < out.positions.length / 3);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/geometry.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/geometry.mjs`

- [ ] **Step 3：實作**

`tools/lib/geometry.mjs`：

```js
// 網格前處理：取世界座標、合併重複頂點、簡化
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshoptSimplifier } from 'meshoptimizer';

// 只取 position，套用網格的世界矩陣，合併重複頂點
export function worldGeometry(mesh) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', mesh.geometry.getAttribute('position').clone());
  if (mesh.geometry.index) g.setIndex(mesh.geometry.index.clone());
  g.applyMatrix4(mesh.matrixWorld);
  const merged = mergeVertices(g, 1e-4);
  return {
    positions: Float32Array.from(merged.getAttribute('position').array),
    indices: Uint32Array.from(merged.index.array),
  };
}

// 簡化到原本三角面數的 ratio 左右（誤差上限 1%），再移除沒用到的頂點
export async function simplify({ positions, indices }, ratio) {
  await MeshoptSimplifier.ready;
  const target = Math.max(3, Math.floor((indices.length * ratio) / 3) * 3);
  const [out] = MeshoptSimplifier.simplify(indices, positions, 3, target, 0.01, ['LockBorder']);
  return compact(positions, out);
}

// 只保留索引用到的頂點，並依出現順序重新編號
export function compact(positions, indices) {
  const remap = new Map();
  const kept = [];
  const out = new Uint32Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    const v = indices[i];
    let n = remap.get(v);
    if (n === undefined) {
      n = remap.size;
      remap.set(v, n);
      kept.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    }
    out[i] = n;
  }
  return { positions: new Float32Array(kept), indices: out };
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/geometry.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/geometry.test.js tools/lib/geometry.mjs
git commit -m "feat: mesh preprocessing (world space, weld, simplify)" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4：附著區偵測

**Files:**
- Create: `tools/lib/attach.mjs`
- Test: `test/attach.test.js`

**Interfaces:**
- Produces：`class PointGrid(positions: Float32Array, cell = 1)`，`nearest(x, y, z, maxRadius = 6): number`（找不到回傳 Infinity）
- Produces：`attachmentRegion(positions, grid, band = 0.5): { indices: number[], dmin: number, centroid: [x,y,z] }`（骨頭超過 6 公分會丟出錯誤）
- Produces：`refineEnds(positions, regionA, regionB, endFrac = 0.3): { a: [x,y,z], b: [x,y,z] }`、`midBellyCentroid(positions, a, b, lo = 0.4, hi = 0.6)`、`centroidOf(positions, indices)`、`meanPoint(positions)`

- [ ] **Step 1：寫失敗的測試**

`test/attach.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, centroidOf } from '../tools/lib/attach.mjs';

// 固定種子的亂數，讓測試可重現
function random(seed) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

test('PointGrid.nearest 與暴力搜尋結果一致', () => {
  const r = random(7);
  const pts = Float32Array.from({ length: 300 }, () => r() * 10);
  const grid = new PointGrid(pts, 1);
  for (let k = 0; k < 50; k++) {
    const q = [r() * 10, r() * 10, r() * 10];
    let best = Infinity;
    for (let i = 0; i < pts.length; i += 3) best = Math.min(best, Math.hypot(pts[i] - q[0], pts[i + 1] - q[1], pts[i + 2] - q[2]));
    assert.ok(Math.abs(grid.nearest(...q) - best) < 1e-6);
  }
});

test('超出搜尋範圍回傳 Infinity', () => {
  assert.equal(new PointGrid(new Float32Array([0, 0, 0]), 1).nearest(50, 0, 0), Infinity);
});

// 「肌肉」：沿 x 軸 0–10 的 11 個點（y = 1）
const muscle = Float32Array.from(Array.from({ length: 11 }, (_, i) => [i, 1, 0]).flat());

test('附著區取最靠近骨頭的頂點', () => {
  const region = attachmentRegion(muscle, new PointGrid(new Float32Array([-0.5, 0, 0]), 1), 0.5);
  assert.deepEqual(region.indices, [0]);
  assert.deepEqual(region.centroid, [0, 1, 0]);
  assert.ok(Math.abs(region.dmin - Math.hypot(0.5, 1)) < 1e-6);
});

test('骨頭太遠時報錯', () => {
  assert.throws(() => attachmentRegion(muscle, new PointGrid(new Float32Array([100, 0, 0]), 1)), /6 公分/);
});

test('refineEnds 只留靠近端點的附著頂點', () => {
  const regionA = { indices: [0, 1, 2, 3, 4, 5, 6], centroid: centroidOf(muscle, [0, 1, 2, 3, 4, 5, 6]) }; // 平均 x = 3
  const regionB = { indices: [10], centroid: [10, 1, 0] };
  const { a, b } = refineEnds(muscle, regionA, regionB, 0.3); // A 只留 x ≤ 3 + 0.3 × 7 = 5.1
  assert.deepEqual(a, [2.5, 1, 0]);
  assert.deepEqual(b, [10, 1, 0]);
});

test('肌腹中段的平均位置', () => {
  assert.deepEqual(midBellyCentroid(muscle, [0, 1, 0], [10, 1, 0]), [5, 1, 0]);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/attach.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/attach.mjs`

- [ ] **Step 3：實作**

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
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/attach.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/attach.test.js tools/lib/attach.mjs
git commit -m "feat: attachment-region detection from nearest bone surface" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5：關節中心與胸廓估算

**Files:**
- Create: `tools/lib/joints.mjs`
- Test: `test/joints.test.js`

**Interfaces:**
- Produces：`fitSphere(points): { center, radius }`、`extremeCentroid(points, dir, frac)`、`topSlab(points, depth)`、`vertebraPivot(points, 'top'|'bottom')`、`boxEllipsoid(points): { center, radii }`
- Produces：`estimateJoints(geo: Map<骨頭名稱, Float32Array>)` → `{ sc: {l,r}, ac: {l,r}, gh: {l,r}, elbow: {l,r}, scapAnchor: {l,r}, neck: [x,y,z], head: [x,y,z], thorax: { center, radii } }`

- [ ] **Step 1：寫失敗的測試**

`test/joints.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitSphere, extremeCentroid, topSlab, vertebraPivot, boxEllipsoid } from '../tools/lib/joints.mjs';

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
node --test test/joints.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/joints.mjs`

- [ ] **Step 3：實作**

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
  joints.neck = vertebraPivot(need('Vertebra C7'), 'bottom');
  joints.head = vertebraPivot(need('Atlas (C1)'), 'top');
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
git add test/joints.test.js tools/lib/joints.mjs
git commit -m "feat: joint-centre and thorax estimation from bone geometry" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6：網格打包與解碼

**Files:**
- Create: `tools/lib/pack.mjs`
- Create: `src/model/decode.js`
- Test: `test/pack.test.js`

**Interfaces:**
- Produces：`packMeshes(meshes: Array<{ positions, indices }>): { quant: { min, max }, entries: Array<{ vOffset, vCount, iOffset, iCount, wide }>, bin: Uint8Array }`
- Produces（瀏覽器與 Node 共用）：`decodeMesh(bytes: Uint8Array, quant, entry): { positions: Float32Array, indices: Uint16Array|Uint32Array }`、`base64ToBytes(text): Uint8Array`

- [ ] **Step 1：寫失敗的測試**

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
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/pack.test.js
```

預期：FAIL，`Cannot find module` …`tools/lib/pack.mjs`

- [ ] **Step 3：實作**

`tools/lib/pack.mjs`：

```js
// 把多個網格量化（16 位元座標）並串成一個二進位檔

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
    entries.push({ vOffset, vCount, iOffset, iCount: idx.length, wide });
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

// entry：{ vOffset, vCount, iOffset, iCount, wide }
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
  return { positions, indices };
}
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/pack.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/pack.test.js tools/lib/pack.mjs src/model/decode.js
git commit -m "feat: 16-bit quantised mesh packing and decoder" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7：下載原始資料與轉檔

**Files:**
- Create: `tools/lib/fbx.mjs`、`tools/fetch-data.mjs`、`tools/convert.mjs`
- Test: `test/data.test.js`（驗證轉檔結果）
- 產出（進 git）：`data/processed/meta.json`、`data/processed/meshes.bin`；`data/raw/` 不進 git

**Interfaces:**
- Consumes：Task 1–6 的所有函式、`PARTS`、`BONE_SEGMENTS`、`segKey`
- Produces：`meta.json` = `{ version: 1, units: 'cm', source, quant, joints, bones: [{ name, segment, vOffset, vCount, iOffset, iCount, wide }], parts: [{ key: 'pecMinor.r', id, side, layer, measure, maxGap, segA, segB, a, b, via: null | { seg, p }, centroid, dmin: [number, number], vOffset, vCount, iOffset, iCount, wide }] }`

- [ ] **Step 1：寫 FBX 讀取工具與下載腳本**

`tools/lib/fbx.mjs`：

```js
// 讀 Z-Anatomy 的 FBX（只用幾何）
import { readFileSync } from 'node:fs';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export function loadFbx(path) {
  const buf = readFileSync(path);
  const warn = console.warn;
  console.warn = () => {}; // FBXLoader 會對材質、貼圖大量警告，與幾何無關
  try {
    const root = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '');
    root.updateMatrixWorld(true);
    return root;
  } finally {
    console.warn = warn;
  }
}

// 以原始名稱（three.js 改寫前，例如 'Scapula.r'）建立索引；同名只取第一個
function indexBy(root, keep) {
  const map = new Map();
  root.traverse(o => {
    const n = o.userData.originalName;
    if (n && keep(o) && !map.has(n)) map.set(n, o);
  });
  return map;
}

export const indexMeshes = root => indexBy(root, o => o.isMesh);
export const indexGroups = root => indexBy(root, o => !o.isMesh);

// 群組底下所有不是標註的網格
export function meshesUnder(group, isAnnotation) {
  const out = [];
  group.traverse(o => {
    if (o.isMesh && !isAnnotation(o.userData.originalName ?? '')) out.push(o);
  });
  return out;
}
```

`tools/fetch-data.mjs`：

```js
// 下載 Z-Anatomy 的肌肉與骨骼 FBX（約 78 MB）到 data/raw/；這個資料夾不進 git
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const BASE = 'https://raw.githubusercontent.com/LluisV/Z-Anatomy/PC-Version/Resources/Models/';
const FILES = ['FBX/MuscularSystem100.fbx', 'FBX/SkeletalSystem100.fbx', 'License.txt'];

mkdirSync('data/raw', { recursive: true });
for (const f of FILES) {
  const out = `data/raw/${f.split('/').pop()}`;
  if (existsSync(out)) {
    console.log(`已存在：${out}`);
    continue;
  }
  console.log(`下載 ${f} …`);
  const res = await fetch(BASE + f);
  if (!res.ok) throw new Error(`${f} 下載失敗：HTTP ${res.status}`);
  writeFileSync(out, Buffer.from(await res.arrayBuffer()));
}
console.log('完成');
```

- [ ] **Step 2：下載原始資料**

執行：

```bash
npm run fetch-data
```

預期：`data/raw/` 出現 `MuscularSystem100.fbx`（37 MB）、`SkeletalSystem100.fbx`（41 MB）、`License.txt`，最後印出「完成」。

- [ ] **Step 3：寫驗證轉檔結果的測試**

`test/data.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { PARTS } from '../tools/parts.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const find = key => meta.parts.find(p => p.key === key);

test('兩側部件齊全', () => {
  assert.equal(meta.parts.length, PARTS.length * 2);
  for (const p of PARTS) for (const s of ['l', 'r']) assert.ok(find(`${p.id}.${s}`), `${p.id}.${s}`);
});

test('附著區都貼近指定的骨頭', () => {
  for (const p of meta.parts) for (const d of p.dmin) assert.ok(d < p.maxGap, `${p.key} 附著區離骨頭 ${d} 公分`);
});

test('斜方肌上、中、下部的高度順序正確', () => {
  for (const s of ['l', 'r']) {
    const y = id => find(`${id}.${s}`).centroid[1];
    assert.ok(y('trapUpper') > y('trapMiddle') && y('trapMiddle') > y('trapLower'));
  }
});

test('右側在 −x、左側在 +x', () => {
  for (const p of meta.parts) assert.ok(p.side === 'r' ? p.centroid[0] < 0 : p.centroid[0] > 0, p.key);
});

test('關節位置合理', () => {
  const j = meta.joints;
  assert.ok(j.gh.r[0] > -22 && j.gh.r[0] < -12 && j.gh.r[1] > 132 && j.gh.r[1] < 144, `肱骨頭 ${j.gh.r}`);
  assert.ok(j.sc.r[0] > -4 && j.ac.r[0] < -12, '胸鎖在內、肩鎖在外');
  assert.ok(j.neck[1] < j.head[1]);
});

test('三角面與檔案大小在預算內', () => {
  const tris = [...meta.bones, ...meta.parts].reduce((n, e) => n + e.iCount / 3, 0);
  assert.ok(tris <= 400000, `三角面 ${tris}`);
  assert.ok(statSync('data/processed/meshes.bin').size <= 7 * 1048576);
});
```

- [ ] **Step 4：執行測試，確認失敗**

執行：

```bash
node --test test/data.test.js
```

預期：FAIL，`ENOENT` …`data/processed/meta.json`

- [ ] **Step 5：寫轉檔程式**

`tools/convert.mjs`：

```js
// 把 Z-Anatomy FBX 轉成網頁用的資料：data/processed/meta.json ＋ meshes.bin
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { loadFbx, indexMeshes, indexGroups, meshesUnder } from './lib/fbx.mjs';
import { isAnnotation, sideOf, withSide } from './lib/names.mjs';
import { worldGeometry, simplify } from './lib/geometry.mjs';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, meanPoint } from './lib/attach.mjs';
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

console.log('讀取 FBX …');
const muscleMeshes = indexMeshes(loadFbx(`${RAW}/${FILES[0]}`));
const skeleton = loadFbx(`${RAW}/${FILES[1]}`);
const boneMeshes = indexMeshes(skeleton);
const boneGroups = indexGroups(skeleton);

console.log('處理骨頭 …');
const bones = new Map(); // 名稱 → { segment, positions, indices }
for (const def of BONE_SEGMENTS) {
  const found = [];
  for (const g of def.groups ?? []) {
    const group = boneGroups.get(g);
    if (!group) throw new Error(`找不到骨頭群組 ${g}`);
    found.push(...meshesUnder(group, isAnnotation));
  }
  for (const pattern of def.names ?? []) {
    for (const side of pattern.includes('{s}') ? ['l', 'r'] : [null]) {
      const name = side ? withSide(pattern, side) : pattern;
      const mesh = boneMeshes.get(name);
      if (!mesh) throw new Error(`找不到骨頭 ${name}`);
      found.push(mesh);
    }
  }
  for (const mesh of found) {
    const name = mesh.userData.originalName;
    if (bones.has(name)) continue;
    const side = sideOf(name);
    if (def.sided && !side) throw new Error(`${name} 應該分左右，但名稱沒有 .l/.r`);
    const geo = await simplify(worldGeometry(mesh), BONE_RATIO);
    bones.set(name, { segment: def.sided ? segKey(def.segment, side) : def.segment, ...geo });
  }
}
const bonePositions = name => {
  const b = bones.get(name);
  if (!b) throw new Error(`附著骨頭 ${name} 不在骨頭清單內`);
  return b.positions;
};

const joints = estimateJoints(new Map([...bones].map(([name, b]) => [name, b.positions])));

console.log('處理肌肉 …');
const parts = [];
for (const side of ['l', 'r']) {
  for (const p of PARTS) {
    const mesh = muscleMeshes.get(`${p.zName}.${side}`);
    if (!mesh) throw new Error(`找不到肌肉 ${p.zName}.${side}`);
    const geo = await simplify(worldGeometry(mesh), PART_RATIO);
    const regions = p.attach.map(at => {
      const pts = at.bones.map(b => bonePositions(withSide(b, side)));
      const all = new Float32Array(pts.reduce((n, a) => n + a.length, 0));
      let o = 0;
      for (const a of pts) {
        all.set(a, o);
        o += a.length;
      }
      return attachmentRegion(geo.positions, new PointGrid(all, 1));
    });
    const ends = refineEnds(geo.positions, regions[0], regions[1]);
    const segA = segKey(p.attach[0].segment, side);
    const segB = segKey(p.attach[1].segment, side);
    parts.push({
      key: `${p.id}.${side}`,
      id: p.id,
      side,
      layer: p.layer,
      measure: p.measure,
      maxGap: p.maxGap,
      segA,
      segB,
      a: round(ends.a),
      b: round(ends.b),
      via: p.via ? { seg: segB, p: round(midBellyCentroid(geo.positions, ends.a, ends.b)) } : null,
      centroid: round(meanPoint(geo.positions)),
      dmin: regions.map(r => round(r.dmin)),
      ...geo,
    });
  }
}

const boneList = [...bones].map(([name, b]) => ({ name, ...b }));
const { quant, entries, bin } = packMeshes([...boneList, ...parts]);
const strip = ({ positions, indices, ...rest }) => rest;
const meta = {
  version: 1,
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

- [ ] **Step 6：轉檔**

執行：

```bash
npm run model
```

預期：約 30 秒，最後印出「完成：骨頭 170 個、肌肉部件 56 個、三角面 294829、meshes.bin 2.5 MB」（數字可能略有差異），且**沒有**「附著區離骨頭太遠」那一行。

- [ ] **Step 7：執行測試，確認通過**

執行：

```bash
node --test test/data.test.js
```

預期：全部 PASS。若「附著區都貼近指定的骨頭」失敗，訊息會指出部件 key：檢查 `tools/parts.js` 該部件的骨頭清單是否符合教科書，改完重跑 Step 6。

- [ ] **Step 8：提交**

```bash
git add tools/lib/fbx.mjs tools/fetch-data.mjs tools/convert.mjs test/data.test.js data/processed
git commit -m "feat: convert Z-Anatomy FBX into quantised web model data" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8：姿勢參數與骨架

**Files:**
- Create: `src/rig/presets.js`、`src/rig/rig.js`
- Test: `test/presets.test.js`、`test/rig.test.js`

**Interfaces:**
- Consumes：`SEGMENT_KEYS`（Task 2）；`meta.joints` 的格式（Task 5）
- Produces：`NEUTRAL`、`PRESETS = { neutral: { label, params }, roundedShoulders: { label, params } }`、`SLIDERS: Array<{ key, label, minLabel, maxLabel }>`、`lerpParams(a, b, t)`、`easeInOut(t)`、`isNeutral(params)`
- Produces：`computePose(joints, params): Map<segmentKey, THREE.Matrix4>`（相對中立姿勢的世界變換）、`ellipsoidLevel(p, thorax): number`、`LIMITS`（各關節角度上限）

- [ ] **Step 1：寫失敗的測試**

`test/presets.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NEUTRAL, PRESETS, SLIDERS, lerpParams, easeInOut, isNeutral } from '../src/rig/presets.js';

test('預設姿勢與滑桿都用同一組參數名稱', () => {
  const keys = Object.keys(NEUTRAL).sort();
  for (const p of Object.values(PRESETS)) assert.deepEqual(Object.keys(p.params).sort(), keys);
  assert.deepEqual(SLIDERS.map(s => s.key).sort(), keys);
});

test('參數內插', () => {
  const mid = lerpParams(NEUTRAL, PRESETS.roundedShoulders.params, 0.5);
  assert.equal(mid.scapProtraction, 0.4);
  assert.equal(mid.shoulderRotation, 0.3);
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
```

`test/rig.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { computePose, ellipsoidLevel } from '../src/rig/rig.js';

// 合成的關節資料（數值接近真實模型；右側在 −x）
const J = {
  sc: { r: [-2, 140, 3], l: [2, 140, 3] },
  ac: { r: [-15, 142, -3], l: [15, 142, -3] },
  gh: { r: [-17, 138, -3], l: [17, 138, -3] },
  elbow: { r: [-21, 109, -3], l: [21, 109, -3] },
  scapAnchor: { r: [-6.5, 135, -10], l: [6.5, 135, -10] },
  neck: [0, 144, -2],
  head: [0, 155, -1],
  thorax: { center: [0, 129, 0], radii: [14, 15.5, 10] },
};
const at = (mats, seg, p) => new THREE.Vector3(...p).applyMatrix4(mats.get(seg));
const isIdentity = m => m.elements.every((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) < 1e-6);

test('中立姿勢每個骨段都不動', () => {
  for (const [k, m] of computePose(J, {})) assert.ok(isIdentity(m), k);
});

test('肩胛前伸：肩鎖關節往前、左右對稱', () => {
  const mats = computePose(J, { scapProtraction: 1 });
  const r = at(mats, 'clavicle.r', J.ac.r), l = at(mats, 'clavicle.l', J.ac.l);
  assert.ok(r.z > J.ac.r[2] + 3, `右 z=${r.z}`);
  assert.ok(Math.abs(r.z - l.z) < 1e-6 && Math.abs(r.x + l.x) < 1e-6);
});

test('肩胛內緣錨點維持貼著胸廓', () => {
  const mats = computePose(J, { scapProtraction: 1, scapElevation: 0.5 });
  for (const s of ['l', 'r']) {
    const level0 = ellipsoidLevel(J.scapAnchor[s], J.thorax);
    assert.ok(Math.abs(ellipsoidLevel(at(mats, `scapula.${s}`, J.scapAnchor[s]), J.thorax) - level0) < 0.01, s);
  }
});

test('肩胛上提：肩鎖關節往上', () => {
  const mats = computePose(J, { scapElevation: 1 });
  assert.ok(at(mats, 'clavicle.r', J.ac.r).y > J.ac.r[1] + 2);
  assert.ok(at(mats, 'clavicle.l', J.ac.l).y > J.ac.l[1] + 2);
});

test('肩關節內旋：上臂前面轉向內側', () => {
  const mats = computePose(J, { shoulderRotation: 1 });
  const front = s => [J.gh[s][0], J.gh[s][1] - 10, J.gh[s][2] + 3];
  assert.ok(at(mats, 'arm.r', front('r')).x > front('r')[0] + 1);
  assert.ok(at(mats, 'arm.l', front('l')).x < front('l')[0] - 1);
});

test('頭頸前移：頭往前，軀幹不動', () => {
  const mats = computePose(J, { headForward: 1 });
  assert.ok(at(mats, 'head', [0, 165, 0]).z > 3);
  assert.ok(isIdentity(mats.get('torso')));
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/presets.test.js test/rig.test.js
```

預期：FAIL，`Cannot find module` …`src/rig/presets.js`

- [ ] **Step 3：實作**

`src/rig/presets.js`：

```js
// 姿勢參數、預設姿勢、滑桿設定與動畫用的小工具

export const NEUTRAL = { scapProtraction: 0, scapElevation: 0, shoulderRotation: 0, headForward: 0 };

export const PRESETS = {
  neutral: { label: '中立', params: NEUTRAL },
  roundedShoulders: { label: '圓肩', params: { scapProtraction: 0.8, scapElevation: 0, shoulderRotation: 0.6, headForward: 0 } },
};

export const SLIDERS = [
  { key: 'scapProtraction', label: '肩胛前伸／後縮', minLabel: '後縮', maxLabel: '前伸' },
  { key: 'scapElevation', label: '肩胛上提／下壓', minLabel: '下壓', maxLabel: '上提' },
  { key: 'shoulderRotation', label: '肩關節內旋／外旋', minLabel: '外旋', maxLabel: '內旋' },
  { key: 'headForward', label: '頭頸前移', minLabel: '後收', maxLabel: '前移' },
];

export function lerpParams(a, b, t) {
  return Object.fromEntries(Object.keys(NEUTRAL).map(k => [k, a[k] + (b[k] - a[k]) * t]));
}

export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
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
};

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

// params：{ scapProtraction, scapElevation, shoulderRotation, headForward }，各為 −1…+1
export function computePose(joints, params = {}) {
  const p = { ...NEUTRAL, ...params };
  const mats = new Map(SEGMENT_KEYS.map(k => [k, new THREE.Matrix4()]));

  const neck = rotateAbout(joints.neck, X, LIMITS.neckFlexion * DEG * p.headForward);
  const headPivot = vec(joints.head).applyMatrix4(neck);
  mats.set('neck', neck);
  mats.set('head', rotateAbout(headPivot, X, -LIMITS.headExtension * DEG * p.headForward).multiply(neck));

  for (const s of ['l', 'r']) {
    const sgn = s === 'r' ? 1 : -1; // 右側在 −x，左右的轉向相反
    const clavicle = rotateAbout(joints.sc[s], Y, sgn * LIMITS.clavProtraction * DEG * p.scapProtraction)
      .multiply(rotateAbout(joints.sc[s], Z, -sgn * LIMITS.clavElevation * DEG * p.scapElevation));
    const { glide, ac, anchor } = glideScapula(joints, s, clavicle);
    const tilt = rotateAbout(ac, anchor.clone().sub(ac), sgn * LIMITS.scapTilt * DEG * p.scapProtraction);
    const scapula = tilt.multiply(glide).multiply(clavicle);
    const axis = vec(joints.gh[s]).sub(vec(joints.elbow[s]));
    const arm = scapula.clone().multiply(rotateAbout(joints.gh[s], axis, sgn * LIMITS.humeralRotation * DEG * p.shoulderRotation));
    mats.set(`clavicle.${s}`, clavicle);
    mats.set(`scapula.${s}`, scapula);
    mats.set(`arm.${s}`, arm);
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
git commit -m "feat: posture parameters and skeletal rig with scapular glide" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9：肌肉長度、變形與配色

**Files:**
- Create: `src/muscles/length.js`、`src/muscles/deform.js`、`src/muscles/colors.js`
- Test: `test/muscles.test.js`

**Interfaces:**
- Consumes：`computePose` 回傳的 `Map<segmentKey, THREE.Matrix4>`；`meta.parts` 的 `segA/segB/a/b/via`
- Produces：`transformPoint(elements, p)`、`partPath(part, mats)`、`restPath(part)`、`polylineLength(pts)`、`lengthDelta(part, mats): number`（Δ = L/L₀ − 1）
- Produces：`prepareDeform(rest, a, b)` → `{ rest, a, b, restLength, weight, belly }`；`deformInto(prep, Ma, Mb, out: Float32Array)`
- Produces：`THRESHOLD = 0.03`、`FULL = 0.2`、`PALETTE = { natural, same, short, long }`（sRGB 0–1）、`STATE_TEXT`、`lengthState(delta)`、`lengthColor(delta)`、`deltaText(delta)`

- [ ] **Step 1：寫失敗的測試**

`test/muscles.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { polylineLength, lengthDelta } from '../src/muscles/length.js';
import { prepareDeform, deformInto } from '../src/muscles/deform.js';
import { lengthState, lengthColor, deltaText, PALETTE } from '../src/muscles/colors.js';

const I = new THREE.Matrix4();
const move = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
const mats = Mb => new Map([['torso', I], ['arm.r', Mb]]);
const part = { segA: 'torso', segB: 'arm.r', a: [0, 0, 0], b: [10, 0, 0], via: null };

test('折線長度', () => {
  assert.equal(polylineLength([[0, 0, 0], [3, 4, 0], [3, 4, 12]]), 17);
});

test('長度變化率', () => {
  assert.equal(lengthDelta(part, mats(I)), 0);
  assert.ok(Math.abs(lengthDelta(part, mats(move(2, 0, 0))) - 0.2) < 1e-9);
});

test('轉折點跟著它的骨段移動', () => {
  const p = { ...part, via: { seg: 'arm.r', p: [5, 5, 0] } };
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

test('長度狀態門檻', () => {
  assert.equal(lengthState(0.029), 'same');
  assert.equal(lengthState(-0.03), 'short');
  assert.equal(lengthState(0.03), 'long');
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

預期：FAIL，`Cannot find module` …`src/muscles/length.js`

- [ ] **Step 3：實作**

`src/muscles/length.js`：

```js
// 肌肉長度：起點 →（轉折點）→ 止點的折線長，與中立姿勢比較

// 用 THREE.Matrix4 的 elements（行優先存成列優先陣列）變換一個點
export function transformPoint(e, p) {
  return [
    e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12],
    e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13],
    e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14],
  ];
}

export function restPath(part) {
  return part.via ? [part.a, part.via.p, part.b] : [part.a, part.b];
}

// mats：骨段名稱 → THREE.Matrix4
export function partPath(part, mats) {
  const pts = [transformPoint(mats.get(part.segA).elements, part.a)];
  if (part.via) pts.push(transformPoint(mats.get(part.via.seg).elements, part.via.p));
  pts.push(transformPoint(mats.get(part.segB).elements, part.b));
  return pts;
}

export function polylineLength(pts) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1], pts[i][2] - pts[i - 1][2]);
  return len;
}

// 長度變化率 Δ = L / L₀ − 1（負值＝縮短）
export function lengthDelta(part, mats) {
  return polylineLength(partPath(part, mats)) / polylineLength(restPath(part)) - 1;
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
```

`src/muscles/colors.js`：

```js
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
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/muscles.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/muscles.test.js src/muscles/length.js src/muscles/deform.js src/muscles/colors.js
git commit -m "feat: muscle length, volume-preserving deformation and length colours" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 10：「圓肩」對照書本的檢查清單

**Files:**
- Test: `test/roundedShoulders.test.js`（用真實模型資料）

**Interfaces:**
- Consumes：`data/processed/meta.json`、`computePose`、`PRESETS.roundedShoulders`、`lengthDelta`

- [ ] **Step 1：寫檢查清單測試**

`test/roundedShoulders.test.js`：

```js
// 對照書本的檢查清單：「圓肩」預設下，這些肌肉的鎖短／鎖長方向必須成立（用真實模型資料）
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { computePose } from '../src/rig/rig.js';
import { PRESETS } from '../src/rig/presets.js';
import { lengthDelta } from '../src/muscles/length.js';
import { THRESHOLD, deltaText } from '../src/muscles/colors.js';

const meta = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const mats = computePose(meta.joints, PRESETS.roundedShoulders.params);
const SHORT = ['pecMinor', 'pecMajorStern', 'serratusAnterior', 'subscapularis'];
const LONG = ['rhomboidMajor', 'rhomboidMinor', 'trapMiddle', 'trapLower', 'infraspinatus', 'teresMinor'];

for (const side of ['l', 'r']) {
  const delta = id => lengthDelta(meta.parts.find(p => p.key === `${id}.${side}`), mats);
  for (const id of SHORT) {
    test(`圓肩：${id}.${side} 鎖短`, () => assert.ok(delta(id) <= -THRESHOLD, deltaText(delta(id))));
  }
  for (const id of LONG) {
    test(`圓肩：${id}.${side} 鎖長`, () => assert.ok(delta(id) >= THRESHOLD, deltaText(delta(id))));
  }
}

test('列出所有部件的長度變化（供人工審閱）', t => {
  for (const p of meta.parts.filter(q => q.side === 'r')) t.diagnostic(`${p.id}: ${deltaText(lengthDelta(p, mats))}`);
});
```

- [ ] **Step 2：執行**

執行：

```bash
node --test test/roundedShoulders.test.js
```

預期：全部 PASS，診斷輸出（右側）大致為：胸小肌 −14%、胸大肌胸肋部 −6%、前鋸肌 −17%、肩胛下肌 −7%；大菱形肌 +27%、小菱形肌 +23%、中斜方肌 +19%、下斜方肌 +9%、棘下肌 +6%、小圓肌 +5%。

這個任務的實作已在 Task 8–9 完成，測試應直接通過；它是之後修改骨架參數時的守門員。若失敗：只能在生理範圍內調整 `src/rig/rig.js` 的 `LIMITS`（鎖骨前轉 ≤ 25°、肩胛前傾 ≤ 15°、肱骨內旋 ≤ 45°）或 `PRESETS.roundedShoulders`，**不可以改測試的期望方向**。

- [ ] **Step 3：提交**

```bash
git add test/roundedShoulders.test.js
git commit -m "test: rounded-shoulder locked-short/long checklist against real model data" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 11：中文說明與列車線定義

**Files:**
- Create: `解剖列車網頁/content.js`（一般 script，設定 `window.CONTENT`）
- Create: `src/trains/lines.js`
- Test: `test/content.test.js`

**Interfaces:**
- Produces：`window.CONTENT = { muscles: { [id]: { name, en, latin, origin, insertion, action, nerve, lines: string[], lockedShort, lockedLong, notes } }, lines: { [線名]: 說明 }, postures: { neutral, roundedShoulders } }`
- Produces：`LINES: Array<{ id: 'sfal'|'dfal'|'sbal'|'dbal', name, stations: string[][] }>`、`linePartIds(lineId): Set<string>|null`

- [ ] **Step 1：寫失敗的測試**

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
const FIELDS = ['name', 'en', 'latin', 'origin', 'insertion', 'action', 'nerve', 'lockedShort', 'lockedLong'];

test('每個部件都有完整的中文說明', () => {
  for (const p of PARTS) {
    const m = C.muscles[p.id];
    assert.ok(m, `缺少 ${p.id}`);
    for (const f of FIELDS) assert.ok(typeof m[f] === 'string' && m[f].trim(), `${p.id}.${f} 是空的`);
    assert.ok(Array.isArray(m.lines), `${p.id}.lines`);
    for (const l of m.lines) assert.ok(C.lines[l], `${p.id} 的列車線「${l}」沒有說明`);
  }
});

test('列車線軌道上的部件，說明裡也寫了這條線', () => {
  for (const line of LINES) {
    assert.ok(C.lines[line.name], line.name);
    for (const id of line.stations.flat()) {
      assert.ok(PARTS.find(p => p.id === id), `${line.name}：${id} 不是部件`);
      assert.ok(C.muscles[id].lines.includes(line.name), `${id} 的說明少了 ${line.name}`);
    }
  }
});

test('linePartIds', () => {
  assert.ok(linePartIds('dfal').has('pecMinor'));
  assert.equal(linePartIds('nope'), null);
});

test('每個預設姿勢都有說明', () => {
  for (const k of Object.keys(PRESETS)) assert.ok(C.postures[k], k);
});
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/content.test.js
```

預期：FAIL，`Cannot find module` …`src/trains/lines.js`

- [ ] **Step 3：實作**

`src/trains/lines.js`：

```js
// 解剖列車線（第一階段：4 條手臂線的肩與上臂段）
// stations 由近到遠；同一站內的部件是並行的軌道

export const LINES = [
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
];

export function linePartIds(lineId) {
  const line = LINES.find(l => l.id === lineId);
  return line ? new Set(line.stations.flat()) : null;
}
```

`解剖列車網頁/content.js`：

```js
// 解剖列車 3D 的中文說明
// 用記事本修改引號內的文字即可；存檔時請選 UTF-8。
// 名詞依國家教育研究院「解剖學名詞」；列車線概念依 Thomas Myers《解剖列車》自行整理，非原文。
window.CONTENT = {
  muscles: {
    pecMajorClav: {
      name: '胸大肌鎖骨部',
      en: 'Pectoralis major, clavicular head',
      latin: 'Pars clavicularis musculi pectoralis majoris',
      origin: '鎖骨內側半的前面',
      insertion: '肱骨大結節嵴（結節間溝外側唇）',
      action: '肩關節屈曲、水平內收、內旋',
      nerve: '胸外側神經（C5–C7）',
      lines: ['淺前臂線'],
      lockedShort: '肩關節長期內旋、手臂長時間在身體前方工作（打字、開車）',
      lockedLong: '肩胛長期過度後縮、手臂長時間外展外旋',
      notes: '幾何計算顯示圓肩時此部略為拉長：起點（鎖骨）會隨肩胛一起前移。這與「胸大肌緊繃」的常見說法不同，請審閱。',
    },
    pecMajorStern: {
      name: '胸大肌胸肋部',
      en: 'Pectoralis major, sternocostal head',
      latin: 'Pars sternocostalis musculi pectoralis majoris',
      origin: '胸骨前面、第 1–6 肋軟骨',
      insertion: '肱骨大結節嵴（結節間溝外側唇）',
      action: '肩關節內收、內旋；由屈曲位置伸展肩關節',
      nerve: '胸外側神經與胸內側神經（C5–T1）',
      lines: ['淺前臂線'],
      lockedShort: '圓肩、駝背、長期縮胸或抱胸姿勢',
      lockedLong: '少見；肩胛長期過度後縮、挺胸時',
      notes: '',
    },
    pecMajorAbd: {
      name: '胸大肌腹部',
      en: 'Pectoralis major, abdominal part',
      latin: 'Pars abdominalis musculi pectoralis majoris',
      origin: '腹外斜肌腱膜（腹直肌鞘前層）',
      insertion: '肱骨大結節嵴的最上方',
      action: '肩關節內收、內旋；手臂固定時把軀幹往上拉',
      nerve: '胸內側神經（C8–T1）',
      lines: ['淺前臂線', '前功能線'],
      lockedShort: '圓肩合併胸廓下沉、駝背',
      lockedLong: '手臂長時間高舉過頭',
      notes: '',
    },
    pecMinor: {
      name: '胸小肌',
      en: 'Pectoralis minor',
      latin: 'Musculus pectoralis minor',
      origin: '第 3–5 肋骨前面，近肋軟骨處',
      insertion: '肩胛骨喙突',
      action: '使肩胛骨前傾、下壓、前伸；肩胛骨固定時協助提肋（輔助吸氣）',
      nerve: '胸內側神經（C8–T1）',
      lines: ['深前臂線'],
      lockedShort: '圓肩、駝背、長時間低頭使用手機或電腦',
      lockedLong: '少見；肩胛骨長期過度後縮、後傾時',
      notes: '',
    },
    subclavius: {
      name: '鎖骨下肌',
      en: 'Subclavius',
      latin: 'Musculus subclavius',
      origin: '第 1 肋骨與第 1 肋軟骨交界處',
      insertion: '鎖骨中段下面（鎖骨下肌溝）',
      action: '把鎖骨往內下拉，穩定胸鎖關節',
      nerve: '鎖骨下肌神經（C5–C6）',
      lines: [],
      lockedShort: '肩帶長期下壓、前伸',
      lockedLong: '長期聳肩',
      notes: '包覆在鎖胸筋膜內，與深前臂線關係密切。',
    },
    clavipectoralFascia: {
      name: '鎖胸筋膜',
      en: 'Clavipectoral fascia',
      latin: 'Fascia clavipectoralis',
      origin: '鎖骨（包覆鎖骨下肌）',
      insertion: '向下包覆胸小肌，延續到腋筋膜；外側附著於喙突',
      action: '連結鎖骨、胸小肌與腋窩，是深前臂線在胸前的筋膜連續',
      nerve: '無（筋膜組織）',
      lines: ['深前臂線'],
      lockedShort: '圓肩時隨胸小肌一起處於縮短位置',
      lockedLong: '肩胛長期後縮時',
      notes: '筋膜不計算長度變化，姿勢改變時以灰色顯示。',
    },
    serratusAnterior: {
      name: '前鋸肌',
      en: 'Serratus anterior',
      latin: 'Musculus serratus anterior',
      origin: '第 1–8（或 9）肋骨外側面',
      insertion: '肩胛骨內側緣的前面（肋面）',
      action: '肩胛骨前伸、上迴旋，使肩胛骨貼緊胸廓',
      nerve: '胸長神經（C5–C7）',
      lines: ['螺旋線'],
      lockedShort: '圓肩（肩胛長期前伸）',
      lockedLong: '肩胛長期後縮',
      notes: '',
    },
    trapUpper: {
      name: '上斜方肌',
      en: 'Trapezius, upper (descending) part',
      latin: 'Pars descendens musculi trapezii',
      origin: '枕外隆凸、上項線內側 1/3、項韌帶',
      insertion: '鎖骨外側 1/3 後緣',
      action: '肩胛骨上提、上迴旋；頭頸側屈並轉向對側；兩側同時收縮時伸展頭頸',
      nerve: '副神經（第十一對腦神經）；本體感覺經 C3–C4',
      lines: ['淺後臂線'],
      lockedShort: '長期聳肩、壓力性肩頸緊繃',
      lockedLong: '肩帶長期下壓、垂肩；圓肩時鎖骨前移也會拉長',
      notes: '',
    },
    trapMiddle: {
      name: '中斜方肌',
      en: 'Trapezius, middle (transverse) part',
      latin: 'Pars transversa musculi trapezii',
      origin: 'C7–T3 棘突',
      insertion: '肩峰內側緣、肩胛棘上緣',
      action: '肩胛骨後縮',
      nerve: '副神經（第十一對腦神經）',
      lines: ['淺後臂線'],
      lockedShort: '肩胛長期後縮（過度挺胸、軍人姿勢）',
      lockedLong: '圓肩、駝背',
      notes: '',
    },
    trapLower: {
      name: '下斜方肌',
      en: 'Trapezius, lower (ascending) part',
      latin: 'Pars ascendens musculi trapezii',
      origin: 'T4–T12 棘突',
      insertion: '肩胛棘內側端（棘根）',
      action: '肩胛骨下壓、後縮、上迴旋',
      nerve: '副神經（第十一對腦神經）',
      lines: ['淺後臂線'],
      lockedShort: '少見；肩胛長期下壓、後縮',
      lockedLong: '圓肩、肩胛前傾與上提',
      notes: '',
    },
    rhomboidMajor: {
      name: '大菱形肌',
      en: 'Rhomboid major',
      latin: 'Musculus rhomboideus major',
      origin: 'T2–T5 棘突',
      insertion: '肩胛骨內側緣（肩胛棘根到下角）',
      action: '肩胛骨後縮、上提、下迴旋',
      nerve: '肩胛背神經（C4–C5）',
      lines: ['深後臂線', '螺旋線'],
      lockedShort: '肩胛長期後縮、下迴旋',
      lockedLong: '圓肩、肩胛長期前伸',
      notes: '',
    },
    rhomboidMinor: {
      name: '小菱形肌',
      en: 'Rhomboid minor',
      latin: 'Musculus rhomboideus minor',
      origin: 'C7–T1 棘突、項韌帶下部',
      insertion: '肩胛骨內側緣（肩胛棘根處）',
      action: '肩胛骨後縮、上提、下迴旋',
      nerve: '肩胛背神經（C4–C5）',
      lines: ['深後臂線', '螺旋線'],
      lockedShort: '肩胛長期後縮、下迴旋',
      lockedLong: '圓肩、肩胛長期前伸',
      notes: '',
    },
    levatorScapulae: {
      name: '提肩胛肌',
      en: 'Levator scapulae',
      latin: 'Musculus levator scapulae',
      origin: 'C1–C4 橫突後結節',
      insertion: '肩胛骨上角到肩胛棘根之間的內側緣',
      action: '肩胛骨上提、下迴旋；頸部側屈並轉向同側',
      nerve: '肩胛背神經（C5）與 C3–C4 頸神經',
      lines: ['深後臂線'],
      lockedShort: '長期聳肩、肩胛下迴旋、頭頸長期側傾',
      lockedLong: '頭前傾時頸段被拉長（常見於肩頸僵硬）',
      notes: '',
    },
    deltoidAnt: {
      name: '三角肌前部',
      en: 'Deltoid, anterior (clavicular) part',
      latin: 'Pars clavicularis musculi deltoidei',
      origin: '鎖骨外側 1/3 前緣',
      insertion: '肱骨三角肌粗隆',
      action: '肩關節屈曲、內旋、水平內收',
      nerve: '腋神經（C5–C6）',
      lines: ['淺後臂線'],
      lockedShort: '圓肩合併肩關節內旋',
      lockedLong: '肩關節長期伸展、外旋',
      notes: '',
    },
    deltoidMid: {
      name: '三角肌中部',
      en: 'Deltoid, middle (acromial) part',
      latin: 'Pars acromialis musculi deltoidei',
      origin: '肩峰外側緣',
      insertion: '肱骨三角肌粗隆',
      action: '肩關節外展',
      nerve: '腋神經（C5–C6）',
      lines: ['淺後臂線'],
      lockedShort: '手臂長時間外展（例如持續撐肘工作）',
      lockedLong: '手臂長期貼身下垂、肩胛下迴旋',
      notes: '',
    },
    deltoidPost: {
      name: '三角肌後部',
      en: 'Deltoid, posterior (spinal) part',
      latin: 'Pars spinalis musculi deltoidei',
      origin: '肩胛棘下緣',
      insertion: '肱骨三角肌粗隆',
      action: '肩關節伸展、外旋、水平外展',
      nerve: '腋神經（C5–C6）',
      lines: ['淺後臂線'],
      lockedShort: '肩關節長期外旋、後伸',
      lockedLong: '圓肩合併肩關節內旋',
      notes: '',
    },
    bicepsLong: {
      name: '肱二頭肌長頭',
      en: 'Biceps brachii, long head',
      latin: 'Caput longum musculi bicipitis brachii',
      origin: '肩胛骨盂上結節',
      insertion: '橈骨粗隆、肱二頭肌腱膜',
      action: '肘關節屈曲、前臂旋後；輔助肩關節屈曲，穩定肱骨頭',
      nerve: '肌皮神經（C5–C6）',
      lines: ['深前臂線'],
      lockedShort: '長期屈肘（例如滑手機、抱小孩）',
      lockedLong: '肩關節伸展合併肘關節伸直',
      notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
    },
    bicepsShort: {
      name: '肱二頭肌短頭',
      en: 'Biceps brachii, short head',
      latin: 'Caput breve musculi bicipitis brachii',
      origin: '肩胛骨喙突',
      insertion: '橈骨粗隆、肱二頭肌腱膜',
      action: '肘關節屈曲、前臂旋後；輔助肩關節屈曲、內收',
      nerve: '肌皮神經（C5–C6）',
      lines: ['深前臂線'],
      lockedShort: '圓肩合併肩胛前傾、長期屈肘',
      lockedLong: '肩關節伸展、外展合併肘關節伸直',
      notes: '模型的短頭網格止於手肘上方（共同肌腱未建模）；第一階段沒有手肘關節。',
    },
    coracobrachialis: {
      name: '喙肱肌',
      en: 'Coracobrachialis',
      latin: 'Musculus coracobrachialis',
      origin: '肩胛骨喙突',
      insertion: '肱骨中段內側面',
      action: '肩關節屈曲、內收',
      nerve: '肌皮神經（C5–C7）',
      lines: ['深前臂線'],
      lockedShort: '圓肩合併手臂內收',
      lockedLong: '肩關節外展、伸展',
      notes: '',
    },
    tricepsLong: {
      name: '肱三頭肌長頭',
      en: 'Triceps brachii, long head',
      latin: 'Caput longum musculi tricipitis brachii',
      origin: '肩胛骨盂下結節',
      insertion: '尺骨鷹嘴',
      action: '肘關節伸直；肩關節伸展、內收',
      nerve: '橈神經（C6–C8）',
      lines: ['深後臂線'],
      lockedShort: '肩關節長期伸展（手臂往後）',
      lockedLong: '手臂長時間高舉並屈肘',
      notes: '第一階段沒有手肘關節，長度只反映肩部姿勢。',
    },
    tricepsLat: {
      name: '肱三頭肌外側頭',
      en: 'Triceps brachii, lateral head',
      latin: 'Caput laterale musculi tricipitis brachii',
      origin: '肱骨後面，橈神經溝上外側',
      insertion: '尺骨鷹嘴',
      action: '肘關節伸直',
      nerve: '橈神經（C6–C8）',
      lines: ['深後臂線'],
      lockedShort: '長期伸肘撐體',
      lockedLong: '長期屈肘',
      notes: '只跨過手肘；第一階段沒有手肘關節，長度不會改變。',
    },
    tricepsMed: {
      name: '肱三頭肌內側頭',
      en: 'Triceps brachii, medial head',
      latin: 'Caput mediale musculi tricipitis brachii',
      origin: '肱骨後面，橈神經溝下內側',
      insertion: '尺骨鷹嘴',
      action: '肘關節伸直',
      nerve: '橈神經（C6–C8）',
      lines: ['深後臂線'],
      lockedShort: '長期伸肘撐體',
      lockedLong: '長期屈肘',
      notes: '只跨過手肘；第一階段沒有手肘關節，長度不會改變。',
    },
    latissimus: {
      name: '闊背肌',
      en: 'Latissimus dorsi',
      latin: 'Musculus latissimus dorsi',
      origin: 'T7–L5 棘突、胸腰筋膜、髂嵴後部、第 9–12 肋骨',
      insertion: '肱骨結節間溝底',
      action: '肩關節伸展、內收、內旋；手臂固定時上提骨盆',
      nerve: '胸背神經（C6–C8）',
      lines: ['淺前臂線', '後功能線', '同側功能線'],
      lockedShort: '肩關節長期內收內旋、手臂難以完全上舉',
      lockedLong: '手臂長時間高舉過頭；圓肩時肱骨前移也會拉長',
      notes: '',
    },
    teresMajor: {
      name: '大圓肌',
      en: 'Teres major',
      latin: 'Musculus teres major',
      origin: '肩胛骨下角背面',
      insertion: '肱骨小結節嵴',
      action: '肩關節內旋、內收、伸展',
      nerve: '肩胛下神經下支（C5–C7）',
      lines: [],
      lockedShort: '圓肩合併肩關節內旋',
      lockedLong: '手臂上舉合併外旋',
      notes: '與闊背肌一起止於肱骨前內側；在列車線中的歸屬請對照書本確認。',
    },
    supraspinatus: {
      name: '棘上肌',
      en: 'Supraspinatus',
      latin: 'Musculus supraspinatus',
      origin: '肩胛骨棘上窩',
      insertion: '肱骨大結節上面',
      action: '肩關節外展（起始階段）；把肱骨頭穩定在關節盂',
      nerve: '肩胛上神經（C5–C6）',
      lines: ['深後臂線'],
      lockedShort: '手臂長時間外展',
      lockedLong: '垂肩、肩胛下迴旋',
      notes: '',
    },
    infraspinatus: {
      name: '棘下肌',
      en: 'Infraspinatus',
      latin: 'Musculus infraspinatus',
      origin: '肩胛骨棘下窩',
      insertion: '肱骨大結節中面',
      action: '肩關節外旋；穩定肱骨頭',
      nerve: '肩胛上神經（C5–C6）',
      lines: ['深後臂線'],
      lockedShort: '肩關節長期外旋',
      lockedLong: '圓肩合併肩關節內旋',
      notes: '',
    },
    teresMinor: {
      name: '小圓肌',
      en: 'Teres minor',
      latin: 'Musculus teres minor',
      origin: '肩胛骨外側緣上 2/3 背面',
      insertion: '肱骨大結節下面',
      action: '肩關節外旋、內收；穩定肱骨頭',
      nerve: '腋神經（C5–C6）',
      lines: ['深後臂線'],
      lockedShort: '肩關節長期外旋',
      lockedLong: '圓肩合併肩關節內旋',
      notes: '',
    },
    subscapularis: {
      name: '肩胛下肌',
      en: 'Subscapularis',
      latin: 'Musculus subscapularis',
      origin: '肩胛骨肩胛下窩',
      insertion: '肱骨小結節',
      action: '肩關節內旋；穩定肱骨頭',
      nerve: '肩胛下神經上、下支（C5–C7）',
      lines: ['深後臂線'],
      lockedShort: '圓肩合併肩關節內旋',
      lockedLong: '肩關節長期外旋',
      notes: '',
    },
  },

  lines: {
    淺前臂線: '從胸骨、肋軟骨與下背出發，經胸大肌、闊背肌到肱骨內側，再沿內側肌間隔、前臂屈肌群到手掌與手指掌面。與手臂在身體前方的推、拉、抓握有關。第一階段只畫到肱骨。',
    深前臂線: '從第 3–5 肋骨出發，經胸小肌、鎖胸筋膜到喙突，再沿肱二頭肌（並行的喙肱肌）、橈骨到拇指。與肩胛前傾、拇指側的穩定有關。第一階段只畫到上臂。',
    淺後臂線: '從枕骨與頸胸椎棘突出發，經斜方肌到肩胛棘與鎖骨，接三角肌、外側肌間隔、前臂伸肌群到手背。與手臂外展、舉高有關。第一階段只畫到三角肌。',
    深後臂線: '從頸胸椎棘突出發，經菱形肌、提肩胛肌到肩胛骨內側緣，接旋轉肌袖、肱三頭肌、尺骨到小指側。負責穩定肩胛骨與肱骨頭。第一階段只畫到上臂。',
    螺旋線: '以雙螺旋繞身體：一側頭夾肌跨到對側菱形肌，經前鋸肌、腹外斜肌，再跨到對側腹內斜肌，往下經闊筋膜張肌、脛前肌繞過足弓，再沿後側回到頭部。第一階段不畫軌道。',
    前功能線: '從胸大肌下緣經腹直肌鞘、恥骨交叉到對側內收長肌。第一階段不畫軌道。',
    後功能線: '從闊背肌經胸腰筋膜、薦骨交叉到對側臀大肌，再到股外側肌。第一階段不畫軌道。',
    同側功能線: '從闊背肌外緣經腹外斜肌到同側縫匠肌。第一階段不畫軌道。',
  },

  postures: {
    neutral: '中立：標準解剖姿勢，是比較長度的基準。肌肉以自然的肌肉色顯示。',
    roundedShoulders: '圓肩：肩胛骨前伸並前傾、肩關節內旋。依幾何計算，胸小肌、胸大肌胸肋部、前鋸肌、肩胛下肌處於縮短位置（鎖短）；菱形肌、中下斜方肌、棘下肌、小圓肌被拉長（鎖長）。從解剖列車的角度看，深前臂線的胸前段縮短，深後臂線的肩胛段被拉長。',
  },
};
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
git commit -m "feat: Traditional Chinese muscle notes and arm-line definitions" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 12：拆解與列車線的顯示規則

**Files:**
- Create: `src/app/display.js`
- Test: `test/display.test.js`

**Interfaces:**
- Produces：`createDisplayState()` → `{ layers: { superficial, middle, deep, bones }, hidden: Set, ghost: Set, pulled: Set, explode: 0–1, selectedKey, lineParts: Set|null }`
- Produces：`partDisplay(part, st): { visible, opacity, glow }`、`partOffset(part, st, axis: [x, z]): [x, y, z]`、`resetDisplay(st)`、`LAYER_PUSH`、`EXPLODE_MAX = 15`、`PULL_DISTANCE = 8`

- [ ] **Step 1：寫失敗的測試**

`test/display.test.js`：

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDisplayState, partDisplay, partOffset, resetDisplay, EXPLODE_MAX, PULL_DISTANCE, LAYER_PUSH } from '../src/app/display.js';

const part = { key: 'pecMinor.r', id: 'pecMinor', layer: 'middle', centroid: [-6, 130, 8] };

test('預設全部顯示', () => {
  assert.deepEqual(partDisplay(part, createDisplayState()), { visible: true, opacity: 1, glow: 0 });
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

test('半透明', () => {
  const st = createDisplayState();
  st.ghost.add('pecMinor.r');
  assert.equal(partDisplay(part, st).opacity, 0.3);
});

test('選了列車線：線上部件發亮，其他變淡', () => {
  const st = createDisplayState();
  st.lineParts = new Set(['pecMinor']);
  assert.deepEqual(partDisplay(part, st), { visible: true, opacity: 1, glow: 0.25 });
  assert.equal(partDisplay({ ...part, id: 'trapUpper', key: 'trapUpper.r' }, st).opacity, 0.15);
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
```

- [ ] **Step 2：執行測試，確認失敗**

執行：

```bash
node --test test/display.test.js
```

預期：FAIL，`Cannot find module` …`src/app/display.js`

- [ ] **Step 3：實作**

`src/app/display.js`：

```js
// 拆解與列車線的顯示規則（純函式，不碰 three.js）

export const LAYER_PUSH = { superficial: 1, middle: 0.6, deep: 0.3 }; // 爆炸圖時外層先離開
export const EXPLODE_MAX = 15; // 爆炸圖滑桿拉滿時，淺層移出的距離（公分）
export const PULL_DISTANCE = 8; // 「拉出」的距離（公分）

export function createDisplayState() {
  return {
    layers: { superficial: true, middle: true, deep: true, bones: true },
    hidden: new Set(), // 部件 key，例如 'pecMinor.r'
    ghost: new Set(),
    pulled: new Set(),
    explode: 0, // 0–1
    selectedKey: null,
    lineParts: null, // 目前列車線的部件 id 集合；null 表示沒選線
  };
}

// part：{ key, id, layer }；回傳 { visible, opacity, glow }
export function partDisplay(part, st) {
  if (!st.layers[part.layer] || st.hidden.has(part.key)) return { visible: false, opacity: 0, glow: 0 };
  let opacity = st.ghost.has(part.key) ? 0.3 : 1;
  let glow = 0;
  if (st.lineParts) {
    if (st.lineParts.has(part.id)) glow = 0.25;
    else opacity = Math.min(opacity, 0.15);
  }
  if (st.selectedKey === part.key) glow = 0.45;
  return { visible: true, opacity, glow };
}

// 爆炸圖與拉出的位移：從身體中軸（axis = [x, z]）沿水平方向往外
export function partOffset(part, st, axis) {
  const dx = part.centroid[0] - axis[0];
  const dz = part.centroid[2] - axis[1];
  const len = Math.hypot(dx, dz) || 1;
  const dist = st.explode * EXPLODE_MAX * LAYER_PUSH[part.layer] + (st.pulled.has(part.key) ? PULL_DISTANCE : 0);
  return [(dx / len) * dist, 0, (dz / len) * dist];
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
```

- [ ] **Step 4：執行測試，確認通過**

執行：

```bash
node --test test/display.test.js
```

預期：全部 PASS（`ℹ fail 0`）

- [ ] **Step 5：提交**

```bash
git add test/display.test.js src/app/display.js
git commit -m "feat: dissection and line-highlight display rules" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 13：網頁外殼與模型顯示

**Files:**
- Create: `build.mjs`、`解剖列車網頁/index.html`、`解剖列車網頁/style.css`
- Create: `src/view/viewer.js`、`src/model/scene.js`、`src/main.js`（暫時版）
- 產出（進 git）：`解剖列車網頁/app.js`、`解剖列車網頁/model.js`

**Interfaces:**
- Consumes：`decodeMesh`、`base64ToBytes`（Task 6）、`prepareDeform`、`PALETTE`（Task 9）、`window.MODEL_DATA`
- Produces：`createViewer(container)` → `{ scene, camera, controls, renderer, pick(clientX, clientY, objects): THREE.Object3D|null, onFrame(fn(dt)) }`
- Produces：`buildModel(data)` → `{ group, joints, bones: [{ mesh, segment }], parts: [{ info（meta 的部件）, mesh, prep, delta, target: [x,y,z] }] }`；部件網格的 `userData.partKey` 為部件 key

- [ ] **Step 1：寫打包腳本、頁面與樣式**

`build.mjs`：

```js
// 把 src/ 打包成 解剖列車網頁/app.js，並把 data/processed 內嵌成 model.js，讓 index.html 用 file:// 雙擊也能執行
import * as esbuild from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const OUT_DIR = '解剖列車網頁';
const serve = process.argv.includes('--serve');
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !serve,
  outfile: `${OUT_DIR}/app.js`,
  logLevel: 'info',
};

writeModelJs();
if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: 8124, host: '127.0.0.1' });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
  stampVersion();
}

// 模型資料用 <script> 載入（file:// 不能 fetch）：meta 直接寫成物件，網格二進位轉 base64
function writeModelJs() {
  const meta = readFileSync('data/processed/meta.json', 'utf8');
  const bin = readFileSync('data/processed/meshes.bin').toString('base64');
  writeFileSync(`${OUT_DIR}/model.js`, `window.MODEL_DATA={meta:${meta},bin:"${bin}"};\n`);
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
<header id="topbar"><h1>解剖列車 3D</h1><nav id="lineBar"></nav></header>
<aside id="dissect" class="panel"></aside>
<main id="viewport">
  <div id="legend"><span class="short">紅＝鎖短</span><span class="long">藍＝鎖長</span><span class="same">灰＝不變</span></div>
  <div id="loading">模型載入中…</div>
</main>
<aside id="info" class="panel"></aside>
<footer id="postureBar"></footer>
<p id="credit">3D 模型：Z-Anatomy（CC BY-SA 4.0），衍生自 BodyParts3D（© The Database Center for Life Science）｜教學示意，長度變化以骨骼幾何計算</p>
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
}
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; }
body {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr) 320px;
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  grid-template-areas: 'top top top' 'dissect view info' 'posture posture posture' 'credit credit credit';
  background: var(--bg);
  color: var(--text);
  font: 15px/1.6 'Microsoft JhengHei', 'Noto Sans TC', 'PingFang TC', sans-serif;
}
#topbar { grid-area: top; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 8px 16px; border-bottom: 1px solid var(--line); }
#topbar h1 { margin: 0 12px 0 0; font-size: 18px; font-weight: 600; }
#lineBar { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
#dissect { grid-area: dissect; }
#viewport { grid-area: view; position: relative; min-height: 0; overflow: hidden; }
#viewport canvas { display: block; }
#info { grid-area: info; overflow-y: auto; }
#postureBar { grid-area: posture; padding: 10px 16px; border-top: 1px solid var(--line); background: var(--panel); }
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
.slider { display: block; margin: 10px 0; color: var(--muted); }
.slider input { width: 100%; }

#legend { position: absolute; left: 12px; bottom: 12px; display: flex; gap: 6px; font-size: 13px; pointer-events: none; }
#legend span { padding: 2px 8px; border-radius: 6px; background: rgba(0, 0, 0, 0.45); }
#legend .short { color: var(--short); }
#legend .long { color: var(--long); }
#legend .same { color: var(--same); }
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
.notes { margin-top: 10px; font-size: 13px; color: var(--accent); }
.actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }

.presets { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
.sliders { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 4px 16px; }
.sliders label { display: grid; grid-template-columns: 8.5em auto 1fr auto; align-items: center; gap: 6px; }
.sliders small { color: var(--muted); }
.posture-note { margin: 6px 0 0; }

@media (max-width: 900px) {
  body {
    height: auto;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 60vh auto auto auto auto;
    grid-template-areas: 'top' 'view' 'posture' 'info' 'dissect' 'credit';
  }
  .panel, #info.panel { border: 0; border-top: 1px solid var(--line); }
}
```

- [ ] **Step 2：寫 3D 視窗與模型建立**

`src/view/viewer.js`：

```js
// 3D 視窗：渲染器、相機、滑鼠／觸控旋轉縮放、點選
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createViewer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1116);
  const camera = new THREE.PerspectiveCamera(35, 1, 1, 1000);
  camera.position.set(-40, 138, 115);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 128, -2);
  controls.enableDamping = true;
  controls.update();

  scene.add(new THREE.HemisphereLight(0xffffff, 0x2a2f3a, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 1.8);
  key.position.set(-60, 200, 120);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffffff, 0.8);
  rim.position.set(80, 150, -120);
  scene.add(rim);

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

  return { scene, camera, controls, renderer, pick, onFrame: fn => frameHooks.push(fn) };
}
```

`src/model/scene.js`：

```js
// 把 model.js 的資料建成 three.js 網格
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

  const parts = meta.parts.map(info => {
    const { positions, indices } = decodeMesh(bytes, meta.quant, info);
    const geo = makeGeometry(positions.slice(), indices);
    geo.getAttribute('position').setUsage(THREE.DynamicDrawUsage);
    const material = new THREE.MeshStandardMaterial({ roughness: 0.55 });
    material.color.setRGB(...PALETTE.natural, THREE.SRGBColorSpace);
    const mesh = new THREE.Mesh(geo, material);
    mesh.userData.partKey = info.key;
    group.add(mesh);
    // delta：目前長度變化率；target：拆解時要移到的位移（每一幀平滑靠近）
    return { info, mesh, prep: prepareDeform(positions, info.a, info.b), delta: 0, target: [0, 0, 0] };
  });

  return { group, bones, parts, joints: meta.joints };
}
```

`src/main.js`：

```js
// 進入點（暫時版）：只顯示模型；Task 14 換成完整版
import { createViewer } from './view/viewer.js';
import { buildModel } from './model/scene.js';

const viewer = createViewer(document.getElementById('viewport'));
const model = buildModel(window.MODEL_DATA);
viewer.scene.add(model.group);
document.getElementById('loading').remove();
window.app = { viewer, model }; // 方便在主控台檢查
```

- [ ] **Step 3：打包**

執行：

```bash
npm run build
```

預期：印出 `解剖列車網頁\app.js  …kb`，並產生約 3.6 MB 的 `解剖列車網頁/model.js`；`index.html` 的 4 個引用後面都加上 `?v=xxxxxxxx`。

- [ ] **Step 4：瀏覽器驗證**

1. 用 preview_start 啟動 `anatomy`（`.claude/launch.json`，`npm run serve`，port 8124）。
2. 用 javascript_tool 執行：

```js
({ parts: app.model.parts.length, bones: app.model.bones.length, canvas: !!document.querySelector('#viewport canvas'), loading: !!document.getElementById('loading') })
```

   預期：`{ parts: 56, bones: 170, canvas: true, loading: false }`。
3. read_console_messages（onlyErrors）沒有錯誤。
4. 截圖：深色背景上看得到骨骼（米白）與肌肉（紅褐），左右對稱、比例正常、沒有破面或飛出的頂點；拖曳可旋轉、滾輪可縮放。

- [ ] **Step 5：提交**

```bash
git add build.mjs 解剖列車網頁/index.html 解剖列車網頁/style.css 解剖列車網頁/app.js 解剖列車網頁/model.js src/view/viewer.js src/model/scene.js src/main.js
git commit -m "feat: offline web shell that renders the shoulder-girdle model" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 14：互動：控制器、面板與列車線軌道

**Files:**
- Create: `src/trains/track.js`、`src/app/controller.js`
- Create: `src/ui/dissectPanel.js`、`src/ui/infoCard.js`、`src/ui/postureBar.js`、`src/ui/lineBar.js`
- Modify: `src/main.js`（換成完整版）

**Interfaces:**
- Consumes：Task 8–13 的全部函式
- Produces：`createController(viewer, model)` → `{ state, params（唯讀副本）, poseActive, activeLine, partByKey(key), setParams(partial), setLayer(layer, on), setExplode(v), toggle('hidden'|'ghost'|'pulled', key), select(key|null), setLine(lineId|null), reset(), pickAt(clientX, clientY): key|null, onChange(fn) }`
- Produces：`buildTrack(lineId, parts, mats, offsetOf, colorMode): THREE.Group`；`initDissectPanel(el, ctrl)`、`initInfoCard(el, ctrl, content)`、`initPostureBar(el, ctrl, content)`、`initLineBar(el, ctrl)`

- [ ] **Step 1：列車線軌道與控制器**

`src/trains/track.js`：

```js
// 列車線軌道：每個部件一段管子（顏色＝長度狀態），站與站之間用細管連接
import * as THREE from 'three';
import { partPath } from '../muscles/length.js';
import { lengthColor } from '../muscles/colors.js';
import { LINES } from './lines.js';

const GOLD = [0.98, 0.78, 0.3]; // 中立姿勢時的軌道色
const LINK = [0.85, 0.85, 0.85];

const mean = pts => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length, s[2] + p[2] / pts.length], [0, 0, 0]);

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
    let prevEnd = null;
    for (const station of line.stations) {
      const starts = [], ends = [];
      for (const id of station) {
        const p = parts.find(q => q.info.id === id && q.info.side === side);
        const o = offsetOf(p);
        const pts = partPath(p.info, mats).map(q => [q[0] + o[0], q[1] + o[1], q[2] + o[2]]);
        group.add(tube(pts, colorMode && p.info.measure ? lengthColor(p.delta) : GOLD, 0.35));
        starts.push(pts[0]);
        ends.push(pts[pts.length - 1]);
      }
      if (prevEnd) group.add(tube([prevEnd, mean(starts)], LINK, 0.15));
      prevEnd = mean(ends);
    }
  }
  return group;
}
```

`src/app/controller.js`：

```js
// 把姿勢、拆解狀態、列車線套到 3D 模型上；面板只透過這裡改狀態
import * as THREE from 'three';
import { computePose } from '../rig/rig.js';
import { NEUTRAL, isNeutral } from '../rig/presets.js';
import { deformInto } from '../muscles/deform.js';
import { lengthDelta } from '../muscles/length.js';
import { lengthColor, PALETTE } from '../muscles/colors.js';
import { createDisplayState, partDisplay, partOffset, resetDisplay } from './display.js';
import { linePartIds } from '../trains/lines.js';
import { buildTrack } from '../trains/track.js';

export function createController(viewer, model) {
  const state = createDisplayState();
  const axis = [model.joints.thorax.center[0], model.joints.thorax.center[2]]; // 身體中軸（x, z）
  const byKey = new Map(model.parts.map(p => [p.info.key, p]));
  const listeners = [];
  let params = { ...NEUTRAL };
  let mats = computePose(model.joints, params);
  let activeLine = null;
  let track = null;

  const poseActive = () => !isNeutral(params);
  const emit = () => listeners.forEach(fn => fn());

  function applyPose() {
    mats = computePose(model.joints, params);
    for (const b of model.bones) b.mesh.matrix.copy(mats.get(b.segment));
    for (const p of model.parts) {
      const geo = p.mesh.geometry;
      const pos = geo.getAttribute('position');
      deformInto(p.prep, mats.get(p.info.segA), mats.get(p.info.segB), pos.array);
      pos.needsUpdate = true;
      geo.computeVertexNormals();
      geo.computeBoundingSphere(); // 點選（raycast）要用
      p.delta = lengthDelta(p.info, mats);
    }
    applyColors();
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
      m.transparent = d.opacity < 1;
      m.depthWrite = d.opacity === 1;
      m.emissive.setRGB(d.glow, d.glow * 0.85, d.glow * 0.5);
      p.target = partOffset(p.info, state, axis);
    }
    rebuildTrack();
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

  // 拆解位移每一幀平滑靠近目標（約 0.4 秒到位）
  viewer.onFrame(dt => {
    const k = 1 - Math.exp(-dt * 10);
    for (const p of model.parts) {
      const pos = p.mesh.position;
      pos.set(pos.x + (p.target[0] - pos.x) * k, pos.y + (p.target[1] - pos.y) * k, pos.z + (p.target[2] - pos.z) * k);
    }
  });

  applyPose();
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
    // 只有看得清楚的部件能點（列車線淡化的部件點不到，方便點線上的肌肉）
    pickAt(x, y) {
      const candidates = model.parts.filter(p => p.mesh.visible && p.mesh.material.opacity >= 0.3).map(p => p.mesh);
      return viewer.pick(x, y, candidates)?.userData.partKey ?? null;
    },
    onChange(fn) {
      listeners.push(fn);
    },
  };
}
```

- [ ] **Step 2：四個面板**

`src/ui/dissectPanel.js`：

```js
// 左側「拆解」面板：各層顯示開關、爆炸圖、復原

const TOGGLES = [
  ['superficial', '淺層'],
  ['middle', '中層'],
  ['deep', '深層'],
  ['bones', '骨骼'],
];

export function initDissectPanel(el, ctrl) {
  el.innerHTML = `
    <h2>拆解</h2>
    ${TOGGLES.map(([k, label]) => `<label class="toggle"><input type="checkbox" data-layer="${k}" checked>${label}</label>`).join('')}
    <label class="slider">爆炸圖<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>復原</button>
    <p class="hint">關掉淺層就能看到中層；點選肌肉後可單獨隱藏或拉出。</p>`;

  el.addEventListener('change', e => {
    const layer = e.target.dataset.layer;
    if (layer) ctrl.setLayer(layer, e.target.checked);
  });
  el.addEventListener('input', e => {
    if ('explode' in e.target.dataset) ctrl.setExplode(Number(e.target.value));
  });
  el.querySelector('[data-reset]').addEventListener('click', () => ctrl.reset());

  const sync = () => {
    for (const [k] of TOGGLES) el.querySelector(`[data-layer="${k}"]`).checked = ctrl.state.layers[k];
    el.querySelector('[data-explode]').value = ctrl.state.explode;
  };
  ctrl.onChange(sync);
}
```

`src/ui/infoCard.js`：

```js
// 右側說明卡：選取肌肉的中文說明與目前長度變化；沒選肌肉時顯示目前列車線的說明
import { deltaText, lengthState, STATE_TEXT } from '../muscles/colors.js';
import { LINES } from '../trains/lines.js';

export function initInfoCard(el, ctrl, content) {
  function render() {
    const key = ctrl.state.selectedKey;
    if (!key) {
      const line = LINES.find(l => l.id === ctrl.activeLine);
      el.innerHTML = line
        ? `<h2>${line.name}</h2><p>${content.lines[line.name]}</p><p class="hint">點選線上的肌肉查看說明。</p>`
        : '<p class="hint">點選肌肉查看說明。</p>';
      return;
    }
    const part = ctrl.partByKey(key);
    const c = content.muscles[part.info.id];
    const st = ctrl.state;
    let delta = '';
    if (ctrl.poseActive) {
      const s = lengthState(part.delta);
      delta = part.info.measure
        ? `<p class="delta ${s}">目前 ${deltaText(part.delta)}　${STATE_TEXT[s]}</p>`
        : '<p class="delta same">筋膜：不計算長度變化</p>';
    }
    el.innerHTML = `
      <h2>${c.name}<span class="side">${part.info.side === 'r' ? '右側' : '左側'}</span></h2>
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
      </dl>
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

`src/ui/postureBar.js`：

```js
// 下方姿勢列：預設姿勢（切換時播放動畫）、播放鍵、關節滑桿
import { PRESETS, SLIDERS, NEUTRAL, lerpParams, easeInOut } from '../rig/presets.js';

const DURATION = 1500; // 毫秒

export function initPostureBar(el, ctrl, content) {
  let active = 'neutral'; // 目前的預設姿勢；拖過滑桿後為 null（自訂）
  let frame = 0;

  el.innerHTML = `
    <div class="presets">
      <span class="label">姿勢</span>
      ${Object.entries(PRESETS).map(([k, p]) => `<button type="button" data-preset="${k}">${p.label}</button>`).join('')}
      <button type="button" data-play>▶ 播放</button>
    </div>
    <div class="sliders">
      ${SLIDERS.map(s => `<label><span>${s.label}</span><small>${s.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${s.key}"><small>${s.maxLabel}</small></label>`).join('')}
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
      // 從中立重播到目前的預設姿勢（目前是中立時改播圓肩）
      if (!active || active === 'neutral') active = 'roundedShoulders';
      animate(NEUTRAL, PRESETS[active].params);
    }
    sync();
  });

  el.addEventListener('input', e => {
    const key = e.target.dataset.param;
    if (!key) return;
    cancelAnimationFrame(frame);
    active = null;
    ctrl.setParams({ [key]: Number(e.target.value) });
  });

  function sync() {
    const params = ctrl.params;
    for (const s of SLIDERS) el.querySelector(`[data-param="${s.key}"]`).value = params[s.key];
    for (const b of el.querySelectorAll('[data-preset]')) b.classList.toggle('active', b.dataset.preset === active);
    el.querySelector('.posture-note').textContent = active ? content.postures[active] : '自訂姿勢：拖動滑桿調整各關節。';
  }
  ctrl.onChange(sync);
  sync();
}
```

`src/ui/lineBar.js`：

```js
// 上方列車線切換
import { LINES } from '../trains/lines.js';

export function initLineBar(el, ctrl) {
  el.innerHTML = `<span class="label">列車線</span><button type="button" data-line="">全部</button>${LINES.map(l => `<button type="button" data-line="${l.id}">${l.name}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (btn) ctrl.setLine(btn.dataset.line || null);
  });
  const sync = () => {
    for (const b of el.querySelectorAll('button')) b.classList.toggle('active', (b.dataset.line || null) === ctrl.activeLine);
  };
  ctrl.onChange(sync);
  sync();
}
```

- [ ] **Step 3：完整版進入點**

`src/main.js`：

```js
// 進入點：建立 3D 視窗、模型與各面板
import { createViewer } from './view/viewer.js';
import { buildModel } from './model/scene.js';
import { createController } from './app/controller.js';
import { initDissectPanel } from './ui/dissectPanel.js';
import { initInfoCard } from './ui/infoCard.js';
import { initPostureBar } from './ui/postureBar.js';
import { initLineBar } from './ui/lineBar.js';

const viewer = createViewer(document.getElementById('viewport'));
const model = buildModel(window.MODEL_DATA);
viewer.scene.add(model.group);
const ctrl = createController(viewer, model);

initDissectPanel(document.getElementById('dissect'), ctrl);
initInfoCard(document.getElementById('info'), ctrl, window.CONTENT);
initPostureBar(document.getElementById('postureBar'), ctrl, window.CONTENT);
initLineBar(document.getElementById('lineBar'), ctrl);

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

- [ ] **Step 4：打包並跑全部測試**

執行：

```bash
npm test && npm run build
```

預期：測試全部 PASS（約 81 個），打包成功。

- [ ] **Step 5：瀏覽器驗證**（預覽 `anatomy` 已在執行時重新整理頁面即可）

用 javascript_tool 逐項執行，每項都要符合預期：

| 檢查 | 指令 | 預期 |
|---|---|---|
| 選取 | `app.ctrl.select('pecMinor.r'); document.querySelector('#info h2').textContent` | `'胸小肌右側'` |
| 姿勢與長度 | `app.ctrl.setParams({ scapProtraction: 0.8, shoulderRotation: 0.6 }); document.querySelector('#info .delta').textContent` | `'目前 −14%　鎖短'`（±1%） |
| 長度配色 | `app.ctrl.partByKey('rhomboidMajor.r').mesh.material.color.getHexString()` | 偏藍（b 分量最大） |
| 分層 | `app.ctrl.setLayer('superficial', false); app.ctrl.partByKey('pecMajorStern.r').mesh.visible` | `false`；之後 `app.ctrl.setLayer('superficial', true)` |
| 拉出 | `app.ctrl.toggle('pulled', 'pecMinor.r'); app.ctrl.partByKey('pecMinor.r').target` | 水平長度約 8 的向量 |
| 列車線 | `app.ctrl.select(null); app.ctrl.setLine('dfal'); document.querySelector('#info h2').textContent` | `'深前臂線'`，畫面上出現軌道 |
| 復原 | `app.ctrl.reset(); app.ctrl.partByKey('pecMinor.r').target` | `[0, 0, 0]` |

接著用滑鼠操作：

1. 點「中立」，再點「圓肩」：約 1.5 秒動畫後，「肩胛前伸／後縮」滑桿停在 0.8，下方出現圓肩說明；胸前肌肉變紅、背後菱形肌與中斜方肌變藍。
2. 拖「肩關節內旋／外旋」滑桿：姿勢按鈕都不再反白，說明變成「自訂姿勢…」。
3. 在胸前肌肉上點一下：右側出現該肌肉的中文說明；拖曳旋轉後放開不會誤選。
4. 按「拉出」：肌肉約 0.4 秒內滑出 8 公分；再按「放回」回到原位。
5. 上方點「深後臂線」：線上肌肉加亮、其他變淡、軌道由菱形肌經旋轉肌袖串到肱三頭肌。
6. read_console_messages（onlyErrors）沒有錯誤。
7. 截圖（圓肩＋深前臂線）留作證明。
8. resize_window 用 mobile 預設：面板移到 3D 視窗下方、沒有水平捲軸；截圖後用 desktop 預設還原。

- [ ] **Step 6：提交**

```bash
git add src/trains/track.js src/app/controller.js src/ui src/main.js 解剖列車網頁/app.js 解剖列車網頁/index.html
git commit -m "feat: dissection, posture linkage, info card and arm-line tracks" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 15：文件與收尾

**Files:**
- Create: `README.md`、`解剖列車網頁/使用說明.txt`

**Interfaces:**
- 無新介面

- [ ] **Step 1：寫說明文件**

`README.md`：

````markdown
# 解剖列車 3D（第一階段：肩帶原型）

3D 人體肌肉互動網頁：

- **拆解**：一層層關掉淺層、中層肌肉，或單獨隱藏、半透明、拉出某條肌肉，看到深層構造。
- **連動**：改變姿勢（例如圓肩）時，肌肉跟著骨頭變形，並用顏色標出《解剖列車》概念中的「鎖短」（紅）與「鎖長」（藍）。
- **中文說明**：點選任何肌肉，顯示起止點、作用、神經、所屬列車線與常見鎖短／鎖長情況。

第一階段只做肩帶：27 個肌肉部件加鎖胸筋膜（左右兩側），以及 4 條手臂線的肩與上臂段。

## 使用

雙擊 `解剖列車網頁/index.html`，用 Chrome 或 Edge 開啟，不需要網路。操作方式見 `解剖列車網頁/使用說明.txt`。

## 修改說明文字

所有中文說明都在 `解剖列車網頁/content.js`，用記事本修改引號內的文字，存檔時選 UTF-8。

## 開發

```bash
npm install
npm run fetch-data   # 下載 Z-Anatomy 原始 FBX 到 data/raw/（約 78 MB，不進 git）
npm run model        # 轉檔 → data/processed/（meta.json、meshes.bin）
npm test             # 單元測試（含「圓肩」鎖短／鎖長檢查清單）
npm run serve        # 本機預覽 http://localhost:8124（修改 src/ 會自動重建）
npm run build        # 產生 解剖列車網頁/app.js 與 model.js（提交前請執行）
```

程式碼在 `src/`（瀏覽器端）與 `tools/`（轉檔），設計見 `docs/superpowers/specs/`。

## 出處與授權

3D 模型資料來自：

- Z-Anatomy - The open source atlas of anatomy - CC-BY-SA 4.0（https://github.com/LluisV/Z-Anatomy）
- BodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan（現行授權為 CC BY 4.0）

本專案轉檔後的模型資料（`data/processed/`、`解剖列車網頁/model.js`）同樣以 CC BY-SA 4.0 釋出。

肌肉說明是依解剖學教科書與 Thomas Myers《解剖列車》的概念自行撰寫的摘要，**尚待物理治療師或醫師審閱**。

## 注意

教學示意用。長度變化以骨骼幾何（起止點距離）計算，不代表肌肉的活化程度或張力。
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
- 點選肌肉：右側出現中文說明，可「隱藏」「半透明」「拉出」
- 拆解：左側關掉「淺層」就能看到中層；「爆炸圖」讓肌肉往外散開；「復原」回到原狀
- 姿勢：下方按「圓肩」會播放動畫，也可以拖動滑桿自由調整
- 顏色：中立姿勢時是肌肉色；改變姿勢後，紅色＝鎖短、藍色＝鎖長、灰色＝長度不變
- 列車線：上方選一條線，線上的肌肉會加亮並用軌道串起來

【修改說明文字】
用記事本開啟 content.js，修改引號內的文字，存檔時選 UTF-8。

【注意】
教學示意用。長度變化以骨骼幾何計算，不代表肌肉用力的程度。
```

- [ ] **Step 2：最後檢查**

執行：

```bash
npm test && npm run build && git status --short
```

預期：測試全部 PASS；打包成功；`git status` 只列出 README.md、使用說明.txt 與重新打包的檔案。

另外提醒使用者：雙擊 `解剖列車網頁/index.html`（file://）開一次，確認離線可用。

- [ ] **Step 3：提交**

```bash
git add README.md 解剖列車網頁/使用說明.txt 解剖列車網頁/app.js 解剖列車網頁/index.html
git commit -m "docs: README with attribution and user guide" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```
