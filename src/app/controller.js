// 把姿勢、拆解狀態、列車線套到 3D 模型上；面板只透過這裡改狀態
import * as THREE from 'three';
import { computePose } from '../rig/rig.js';
import { NEUTRAL, isNeutral } from '../rig/presets.js';
import { deformInto } from '../muscles/deform.js';
import { lengthDelta } from '../muscles/length.js';
import { lengthColor, PALETTE } from '../muscles/colors.js';
import { createDisplayState, partDisplay, partOffset, resetDisplay, restoreParts } from './display.js';
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
    // 把隱藏、半透明的部件全部顯示回來
    restoreParts() {
      restoreParts(state);
      applyDisplay();
      emit();
    },
    // 只有看得清楚的部件能點（半透明、列車線淡化的部件點不到，點選會穿過去選到後面的肌肉）
    pickAt(x, y) {
      const candidates = model.parts.filter(p => p.pickable).map(p => p.mesh);
      return viewer.pick(x, y, candidates)?.userData.partKey ?? null;
    },
    onChange(fn) {
      listeners.push(fn);
    },
  };
}
