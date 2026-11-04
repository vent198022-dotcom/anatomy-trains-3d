// 把姿勢、拆解狀態、列車線、經脈、痠痛點套到 3D 模型上；面板只透過這裡改狀態
import * as THREE from 'three';
import { computePose } from '../rig/rig.js';
import { NEUTRAL, isNeutral } from '../rig/presets.js';
import { deformInto, deformChain } from '../muscles/deform.js';
import { lengthDelta } from '../muscles/length.js';
import { partColor } from '../muscles/colors.js';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts, painMarkerState } from './display.js';
import { linesPartIds } from '../trains/lines.js';
import { createNet } from '../trains/net.js';
import { createMeridians } from '../meridians/render.js';
import { densify, distanceToPath } from '../meridians/path.js';

const MARKER_COLORS = { focus: [1, 0.85, 0.2], short: [1, 0.4, 0.2], long: [0.4, 0.65, 1], spot: [1, 0.62, 0.3] };
const MARKER_LIFT = 0.5; // 標記沿法向量浮出肌肉表面的距離（公分）
const SELECTED_EMISSIVE = [0.12, 0.05, 0.2]; // 選取的肌肉稍微自發光，在暗處也看得到紫色
const NEARBY_MERIDIAN = 7; // 痠痛點與經脈相距幾公分以內算「鄰近」（深層肌肉離體表的經脈比較遠，所以放寬一些）

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

  const meridians = createMeridians();
  viewer.scene.add(meridians.group);
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
    clearTimeout(finishTimer);
    finishTimer = setTimeout(finishPose, 120);
    applyColors();
    applyMarkers();
    updateNet();
    meridians.update(mats);
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
        marker.scale.setScalar(chosen ? 1.6 : 1);
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
    partByKey: key => byKey.get(key),
    nearbyMeridians,
    painPosition,
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
    // mode：'off'、'posture'（只標鎖短／鎖長）或 'all'（全身）
    setPainMode(mode) {
      state.painMode = mode;
      if (mode === 'off') state.selectedPain = null;
      applyMarkers();
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
      emit();
    },
    select(key) {
      state.selectedKey = key;
      if (key) state.selectedPain = null;
      applyDisplay();
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
      emit();
    },
    // 把隱藏、半透明的部件全部顯示回來
    restoreParts() {
      restoreParts(state);
      applyDisplay();
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
