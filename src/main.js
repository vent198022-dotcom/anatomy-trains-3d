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
import { initPanPad } from './ui/panPad.js';

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
initPanPad(document.getElementById('panPad'), viewer);

// 點一下選取肌肉（變紫色），再點同一條取消選取、恢復原本的顏色；拖曳旋轉不算點選；按下時讓 3D 視窗取得焦點，方向鍵才能平移
const canvas = viewer.renderer.domElement;
let down = null;
canvas.addEventListener('pointerdown', e => {
  down = [e.clientX, e.clientY];
  canvas.focus({ preventScroll: true });
});
canvas.addEventListener('pointerup', e => {
  if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) {
    const key = ctrl.pickAt(e.clientX, e.clientY);
    ctrl.select(key && key === ctrl.state.selectedKey ? null : key);
  }
  down = null;
});

// 雙擊模型：把那一點設為旋轉中心（之後的旋轉、縮放都繞著它）
canvas.addEventListener('dblclick', e => {
  const point = ctrl.pointAt(e.clientX, e.clientY);
  if (point) viewer.recenter(point);
});

document.getElementById('loading').remove();
window.app = { viewer, model, ctrl }; // 方便在主控台檢查
