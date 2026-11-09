// 把姿勢、拆解狀態、列車線、經脈、痠痛點套到 3D 模型上；面板只透過這裡改狀態
import * as THREE from 'three';
import { computePose } from '../rig/rig.js';
import { NEUTRAL, isNeutral } from '../rig/presets.js';
import { deformInto, deformChain } from '../muscles/deform.js';
import { lengthDelta } from '../muscles/length.js';
import { partColor, lengthState } from '../muscles/colors.js';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts, painMarkerState } from './display.js';
import { linesPartIds } from '../trains/lines.js';
import { createNet } from '../trains/net.js';
import { createMeridians } from '../meridians/render.js';
import { densify, distanceToPath } from '../meridians/path.js';
import { referredZones } from '../pain/zones.js';
import { createReferredZones, ZONE_COLORS } from '../pain/referredRender.js';
import { restBounds, zoneWeights, dominantZone } from '../pain/paint.js';
import { allZones, sourcesAt, MUSCLES_BY_ZONE } from '../pain/lookup.js';
import { REFERRED } from '../pain/zones.js';
import { PRESETS } from '../rig/presets.js';
import { LINES } from '../trains/lines.js';

// 痠痛點的顏色：刻意和經脈穴位（各自的經脈色，見 meridians.js）分開——痠痛點用洋紅、純紅、純藍、亮黃，
// 而且是比較大的八面體；穴位是比較小的球，色系偏柔和，兩者一起顯示時不會混淆
export const MARKER_COLORS = { focus: [1, 0.55, 0.78], short: [1, 0.23, 0.13], long: [0.12, 0.42, 1], spot: [1, 0.12, 0.48] };
// 痠痛點的大小看它長在哪一層肌肉上：淺層最大、深層最小，一眼就分得出深淺
export const LAYER_SCALE = { superficial: 1, middle: 0.74, deep: 0.54 };
const MARKER_LIFT = 0.5; // 標記沿法向量浮出肌肉表面的距離（公分）
const SELECTED_EMISSIVE = [0.12, 0.05, 0.2]; // 選取的肌肉稍微自發光，在暗處也看得到紫色
const NEARBY_MERIDIAN = 7; // 痠痛點與經脈相距幾公分以內算「鄰近」（深層肌肉離體表的經脈比較遠，所以放寬一些）
const NEARBY_ACUPOINT = 6; // 痠痛點與穴位相距幾公分以內算「附近的穴位」
const POSTURE_LIMIT = 10; // 姿勢總結列出幾條肌肉
const deltaPct = d => `${d > 0 ? '+' : '−'}${Math.round(Math.abs(d) * 100)}%`;

export function createController(viewer, model) {
  const state = createDisplayState();
  const axis = [model.joints.thorax.center[0], model.joints.thorax.center[2]]; // 身體中軸（x, z）
  const byKey = new Map(model.parts.map(p => [p.info.key, p]));
  const listeners = [];
  let params = { ...NEUTRAL };
  let mats = null;
  let activeLines = []; // 目前顯示的列車線（可複選，依點選順序）
  let net = null; // 目前列車線的筋膜網
  let activeMeridians = []; // 目前顯示的經脈（可複選）
  let postureLabel = null; // 目前的預設姿勢名稱（自訂姿勢時為 null）

  const meridians = createMeridians();
  viewer.scene.add(meridians.group);
  const referred = createReferredZones();
  viewer.scene.add(referred.group);
  viewer.onResize((w, h) => meridians.setResolution(w, h));

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
    pathCache = null;
    acupointCache = null;
    zoneCache = null;
    clearTimeout(finishTimer);
    finishTimer = setTimeout(finishPose, 120);
    applyColors();
    applyMarkers();
    updateNet();
    meridians.update(mats);
    referred.update(mats);
  }

  function applyColors() {
    for (const p of model.parts) {
      const rgb = partColor({ selected: state.selectedKey === p.info.key, poseActive: poseActive(), measure: p.info.measure, delta: p.delta });
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
      if (d.selected) m.emissive.setRGB(...SELECTED_EMISSIVE);
      else m.emissive.setRGB(d.glow, d.glow * 0.85, d.glow * 0.5);
      p.pickable = d.pickable;
      p.target = partOffset(p.info, state, axis);
    }
    applyColors(); // 選取改變時顏色也要換
    applyMarkers();
    updateNet();
  }

  // 痠痛點的顯示與顏色；位置在每一幀更新（跟著肌肉的拆解位移）
  function applyMarkers() {
    for (const p of model.parts) {
      const kind = painMarkerState(p.info, state, poseActive(), p.delta);
      for (let i = 0; i < p.tps.length; i++) {
        const { marker } = p.tps[i];
        marker.visible = Boolean(kind);
        marker.material.depthTest = !state.overlay;
        const chosen = state.selectedPain && state.selectedPain.key === p.info.key && state.selectedPain.index === i;
        if (kind) marker.material.color.setRGB(...(chosen ? MARKER_COLORS.focus : MARKER_COLORS[kind]), THREE.SRGBColorSpace);
        marker.scale.setScalar(LAYER_SCALE[p.info.layer] * (chosen ? 1.8 : 1));
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

  // 筋膜網的顏色與站間細帶跟著姿勢、拆解位移更新（外殼本身掛在肌肉底下，自動跟著變形）
  function updateNet() {
    net?.update(mats, p => p.target, poseActive());
  }

  function showNet(lineIds) {
    if (net) {
      viewer.scene.remove(net.group);
      net.dispose();
      net = null;
    }
    if (!lineIds.length) return;
    net = createNet(lineIds, model.parts);
    viewer.scene.add(net.group);
  }

  function setLines(lineIds) {
    activeLines = lineIds;
    state.lineParts = linesPartIds(lineIds);
    showNet(lineIds);
    applyDisplay();
    emit();
  }

  // 每條肌肉在各個預設姿勢下的長度變化；用來回答「這條肌肉在哪些姿勢最吃虧」
  let postureTable = null;
  function crossPostures() {
    if (postureTable) return postureTable;
    postureTable = new Map(); // 部件 key → [{ label, delta, state }]
    for (const [name, preset] of Object.entries(PRESETS)) {
      if (name === 'neutral') continue;
      const m = computePose(model.joints, preset.params);
      for (const p of model.parts) {
        if (!p.info.measure) continue;
        const delta = lengthDelta(p.info, m);
        const lock = lengthState(delta);
        if (lock === 'same') continue;
        if (!postureTable.has(p.info.key)) postureTable.set(p.info.key, []);
        postureTable.get(p.info.key).push({ label: preset.label, delta, state: lock, deltaText: deltaPct(delta) });
      }
    }
    for (const rows of postureTable.values()) rows.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
    return postureTable;
  }

  // 所有轉移痛區域換算到目前姿勢；反查痛源用，姿勢改變才重算
  const restZones = allZones();
  let zoneCache = null;
  function posedZones() {
    if (zoneCache) return zoneCache;
    const v = new THREE.Vector3();
    const identity = new THREE.Matrix4();
    zoneCache = restZones.map(z => {
      v.fromArray(z.pos);
      if (mats) v.applyMatrix4(mats.get(z.seg) ?? identity);
      return { ...z, pos: v.toArray() };
    });
    return zoneCache;
  }

  // 某個位置附近有哪些穴位（距離近的排前面）：中醫的「近取」就從這些穴位找起
  let acupointCache = null;
  function nearbyAcupoints(position, limit = 4) {
    acupointCache ??= meridians.allAcupoints(mats);
    return acupointCache
      .map(a => ({ ...a, distance: Math.hypot(position[0] - a.pos[0], position[1] - a.pos[1], position[2] - a.pos[2]) }))
      .filter(a => a.distance <= NEARBY_ACUPOINT)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  }

  // 某個位置附近經過哪些經脈（距離近的排前面）；折線算一次就好，姿勢改變時才重算
  let pathCache = null;
  function nearbyMeridians(position, limit = 3) {
    pathCache ??= meridians.allPaths(mats).map(x => ({ ...x, path: densify(x.path) }));
    const out = [];
    for (const { meridian, side, path } of pathCache) {
      const d = distanceToPath(position, path);
      if (d <= NEARBY_MERIDIAN) out.push({ meridian, side, distance: d });
    }
    out.sort((a, b) => a.distance - b.distance);
    // 同一條經脈左右兩側只留比較近的那一側
    const seen = new Set();
    return out.filter(x => !seen.has(x.meridian.id) && seen.add(x.meridian.id)).slice(0, limit);
  }

  // 把目前選到的痠痛點的轉移痛範圍染在肌肉（與骨頭）表面；染不到的地方才退回用球標示。
  // 權重在中立姿勢的頂點上算，所以只有選取、分層、隱藏改變時才要重算，姿勢動的時候不必。
  const paintedGeometries = [];
  const paintedMaterials = [];

  function clearPaint() {
    for (const g of paintedGeometries) g.deleteAttribute('aReferred');
    paintedGeometries.length = 0;
    for (const m of paintedMaterials) m.userData.referredColor.value.setRGB(1, 1, 1);
    paintedMaterials.length = 0;
  }

  function applyReferred() {
    clearPaint();
    const zones = referredTargets();
    if (!zones.length) {
      referred.show([], mats);
      return;
    }

    const painted = new Set(); // 真的染到色的區域
    const paint = (geometry, rest, bounds, material) => {
      const got = zoneWeights(rest, bounds, zones);
      if (!got) return;
      geometry.setAttribute('aReferred', new THREE.BufferAttribute(got.weights, 1));
      paintedGeometries.push(geometry);
      const zone = dominantZone(bounds, zones, got.hit);
      material.userData.referredColor.value.setRGB(...(ZONE_COLORS[zone.depth] ?? ZONE_COLORS.mid), THREE.SRGBColorSpace);
      if (!paintedMaterials.includes(material)) paintedMaterials.push(material);
      for (const i of got.hit) painted.add(i);
    };

    for (const p of model.parts) {
      if (!p.mesh.visible) continue; // 關掉的那一層不染，免得看不到卻以為染了
      p.restBounds ??= restBounds(p.rest);
      paint(p.mesh.geometry, p.rest, p.restBounds, p.mesh.material);
    }
    if (state.layers.bones) {
      for (const b of model.bones) {
        const rest = b.mesh.geometry.getAttribute('position').array;
        b.restBounds ??= restBounds(rest);
        paint(b.mesh.geometry, rest, b.restBounds, model.boneMaterial);
      }
    }
    // 關節內、體腔內，或那一層被關掉而染不到的區域，仍然用半透明的球標出來，資訊才不會不見
    referred.show(zones.filter((_, i) => !painted.has(i)), mats);
  }

  // 現在要把哪些區域染出來：選到的痠痛點優先，其次是「這個姿勢的痛區」
  function referredTargets() {
    const sel = state.selectedPain;
    const part = sel && byKey.get(sel.key);
    if (part) return referredZones(part.info.id, part.info.side);
    // 找痛源：把點到的那幾塊區域染出來，確認查的是哪裡
    if (state.lookup) {
      const seen = new Set();
      return state.lookup.sources.map(x => x.zone).filter(z => !seen.has(z.id + z.side) && seen.add(z.id + z.side));
    }
    if (state.postureZones && poseActive()) return posturePainZones();
    return [];
  }

  // 這個姿勢最吃虧的肌肉：只看算長度的部件，依 |Δ| 排序，左右合併成一列
  function postureMuscles(limit = POSTURE_LIMIT) {
    if (!poseActive()) return [];
    const rows = new Map();
    for (const p of model.parts) {
      if (!p.info.measure) continue;
      const lock = lengthState(p.delta);
      if (lock === 'same') continue;
      const row = rows.get(p.info.id);
      if (!row || Math.abs(row.delta) < Math.abs(p.delta)) rows.set(p.info.id, { id: p.info.id, key: p.info.key, side: p.info.side, delta: p.delta, state: lock });
    }
    return [...rows.values()].sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)).slice(0, limit);
  }

  // 把上面那些肌肉的轉移痛區域疊起來（同一塊只留一份）
  function posturePainZones() {
    const seen = new Set();
    const out = [];
    for (const row of postureMuscles()) {
      const part = byKey.get(row.key);
      if (!part) continue;
      for (const z of referredZones(part.info.id, part.info.side)) {
        const key = `${z.id}.${z.seg}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(z);
      }
    }
    return out;
  }

  // 痠痛點目前的世界座標；直接從肌肉網格算，不必等標記在下一幀才就位
  function painPosition(key, index) {
    const p = byKey.get(key);
    const tp = p?.tps[index];
    if (!tp) return null;
    const pos = p.mesh.geometry.getAttribute('position').array;
    const o = p.mesh.position;
    return [pos[tp.vertex * 3] + o.x, pos[tp.vertex * 3 + 1] + o.y, pos[tp.vertex * 3 + 2] + o.z];
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
    meridians,
    get params() {
      return { ...params };
    },
    get poseActive() {
      return poseActive();
    },
    get activeLines() {
      return [...activeLines];
    },
    get activeMeridians() {
      return [...activeMeridians];
    },
    parts: model.parts,
    referred,
    partByKey: key => byKey.get(key),
    // 目前選到的痠痛點，痛可能會轉移到哪些區域
    referredZonesOfSelection() {
      const sel = state.selectedPain;
      const part = sel && byKey.get(sel.key);
      return part ? referredZones(part.info.id, part.info.side) : [];
    },
    nearbyMeridians,
    nearbyAcupoints,
    postureMuscles,
    // 這條肌肉在哪些預設姿勢下最吃虧
    posturesFor(key, limit = 3) {
      return (crossPostures().get(key) ?? []).slice(0, limit);
    },
    // 目前姿勢下方向相反的肌肉（鎖短對鎖長），用來講「先鬆哪邊再練哪邊」
    antagonistsOf(key, limit = 2) {
      const self = byKey.get(key);
      if (!self || !poseActive()) return [];
      const want = lengthState(self.delta) === 'short' ? 'long' : 'short';
      return postureMuscles(POSTURE_LIMIT)
        .filter(r => r.state === want && r.key !== key)
        .slice(0, limit)
        .map(r => ({ id: r.id, key: r.key, delta: r.delta, deltaText: deltaPct(r.delta) }));
    },
    // 轉移痛區域和這條肌肉重疊的其他肌肉（鑑別用）：共用的區域愈多排愈前面
    alsoHere(muscleId, limit = 5) {
      const mine = REFERRED[muscleId] ?? [];
      const score = new Map();
      for (const z of mine) for (const other of MUSCLES_BY_ZONE[z] ?? []) {
        if (other !== muscleId) score.set(other, (score.get(other) ?? 0) + 1);
      }
      return [...score.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([id, shared]) => ({ id, shared }));
    },
    // 同一條列車線上的其他肌肉
    lineMatesOf(muscleId, limit = 6) {
      const out = new Set();
      for (const line of LINES) {
        const ids = line.stations.flatMap(s => s.ids);
        if (!ids.includes(muscleId)) continue;
        for (const id of ids) if (id !== muscleId) out.add(id);
      }
      return [...out].slice(0, limit);
    },
    // 目前選的預設姿勢名稱（由下方姿勢列告訴它，說明卡才能說「在『圓肩』這個姿勢下」）
    get postureLabel() {
      return postureLabel;
    },
    setPostureLabel(label) {
      postureLabel = label;
      emit();
    },
    // 在模型上點一個會痛的位置，反查轉移痛會到那裡的肌肉
    lookupAt(position) {
      const sources = position ? sourcesAt(position, posedZones()) : [];
      state.lookup = position ? { position, sources } : null;
      state.selectedKey = null;
      state.selectedPain = null;
      meridians.select(null);
      applyDisplay();
      applyReferred();
      emit();
    },
    setLookupMode(on) {
      state.lookupMode = on;
      if (!on) state.lookup = null;
      emit();
    },
    setPostureZones(on) {
      state.postureZones = on;
      applyReferred();
      emit();
    },
    // 目前標出來的痠痛點個數（面板用來回報「標了幾個」）
    visiblePainCount() {
      return model.parts.reduce((n, p) => n + p.tps.filter(t => t.marker.visible).length, 0);
    },
    painPosition,
    setParams(next) {
      params = { ...params, ...next };
      applyPose();
      emit();
    },
    setLayer(layer, on) {
      state.layers[layer] = on;
      applyDisplay();
      applyReferred(); // 換一層之後能染到的部件不一樣
      emit();
    },
    setExplode(value) {
      state.explode = value;
      applyDisplay();
      emit();
    },
    // mode：'off'、'posture'（只標鎖短／鎖長）或 'all'（全身）
    setPainMode(mode) {
      state.painMode = mode;
      if (mode === 'off') state.selectedPain = null;
      applyMarkers();
      applyReferred();
      emit();
    },
    setOverlay(on) {
      state.overlay = on;
      meridians.setOverlay(on);
      applyMarkers();
      emit();
    },
    // setName：'hidden'、'ghost' 或 'pulled'
    toggle(setName, key) {
      const set = state[setName];
      if (set.has(key)) set.delete(key);
      else set.add(key);
      if (setName === 'hidden' && state.selectedKey === key) state.selectedKey = null;
      if (setName === 'hidden' && state.selectedPain?.key === key) state.selectedPain = null;
      applyDisplay();
      applyReferred();
      emit();
    },
    select(key) {
      state.selectedKey = key;
      if (key) state.selectedPain = null;
      applyDisplay();
      applyReferred();
      emit();
    },
    // 點選痠痛點：說明卡換成那個痠痛點的內容；再點一次取消
    selectPain(pain) {
      const same = pain && state.selectedPain?.key === pain.key && state.selectedPain?.index === pain.index;
      state.selectedPain = same ? null : pain;
      if (state.selectedPain) {
        state.selectedKey = null;
        meridians.select(null);
      }
      applyDisplay();
      applyReferred();
      emit();
    },
    // 點選穴位：說明卡換成那個穴位的內容；再點一次取消
    selectAcupoint(hit) {
      const current = meridians.selected;
      const same = hit && current && current.track === hit.track && current.acuIndex === hit.acuIndex;
      meridians.select(same ? null : hit);
      if (!same && hit) {
        state.selectedKey = null;
        state.selectedPain = null;
      }
      applyDisplay();
      applyReferred();
      emit();
    },
    get selectedAcupoint() {
      return meridians.selected;
    },
    // 從肌肉清單選取：轉到看得到的方向並對準那條肌肉
    focus(key) {
      const p = byKey.get(key);
      if (!p) return;
      state.selectedKey = key;
      state.selectedPain = null;
      viewer.lookAt(p.info.centroid);
      applyDisplay();
      applyReferred();
      emit();
    },
    // 點一條列車線：沒選就加入、已選就移除（可複選）
    toggleLine(lineId) {
      setLines(activeLines.includes(lineId) ? activeLines.filter(id => id !== lineId) : [...activeLines, lineId]);
    },
    clearLines() {
      setLines([]);
    },
    // 點一條經脈：沒選就加入、已選就移除（可複選）
    toggleMeridian(id) {
      activeMeridians = activeMeridians.includes(id) ? activeMeridians.filter(x => x !== id) : [...activeMeridians, id];
      meridians.setActive(activeMeridians);
      meridians.update(mats);
      if (!activeMeridians.length) meridians.select(null);
      emit();
    },
    setMeridians(ids) {
      activeMeridians = [...new Set(ids)];
      meridians.setActive(activeMeridians);
      meridians.update(mats);
      if (!activeMeridians.length) meridians.select(null);
      emit();
    },
    clearMeridians() {
      this.setMeridians([]);
    },
    reset() {
      resetDisplay(state);
      meridians.select(null);
      applyDisplay();
      applyReferred();
      emit();
    },
    // 把隱藏、半透明的部件全部顯示回來
    restoreParts() {
      restoreParts(state);
      applyDisplay();
      applyReferred();
      emit();
    },
    // 點一下 3D 視窗：先看有沒有點到穴位或痠痛點（畫在肌肉外面），沒有才算點到肌肉
    // 回傳 { kind: 'acupoint' | 'pain' | 'muscle' | null, ... }
    pickAt(x, y) {
      finishPose(); // 確保外接球是最新的
      const dots = meridians.pickTargets();
      const markers = state.painMode === 'off' ? [] : model.parts.flatMap(p => p.tps.filter(t => t.marker.visible).map(t => t.marker));
      const muscles = model.parts.filter(p => p.pickable).map(p => p.mesh);
      const hit = viewer.pickHit(x, y, [...dots, ...markers, ...muscles]);
      if (!hit) return { kind: null };
      if (hit.object.isInstancedMesh) {
        const acu = meridians.resolve(hit.object, hit.instanceId);
        return acu ? { kind: 'acupoint', hit: acu } : { kind: null };
      }
      if (hit.object.userData.pain) return { kind: 'pain', pain: hit.object.userData.pain };
      if (hit.object.userData.partKey) return { kind: 'muscle', key: hit.object.userData.partKey };
      return { kind: null };
    },
    // 點到的肌肉或骨頭表面位置（雙擊設旋轉中心用）
    pointAt(x, y) {
      finishPose();
      const muscles = model.parts.filter(p => p.pickable).map(p => p.mesh);
      const bones = state.layers.bones ? model.bones.map(b => b.mesh) : [];
      return viewer.pickPoint(x, y, [...muscles, ...bones]);
    },
    onChange(fn) {
      listeners.push(fn);
    },
  };
}
