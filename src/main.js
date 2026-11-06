// 進入點：建立 3D 視窗、模型與各面板
import { createViewer } from './view/viewer.js';
import { buildModel } from './model/scene.js';
import { createController } from './app/controller.js';
import { initDissectPanel } from './ui/dissectPanel.js';
import { initMuscleList } from './ui/muscleList.js';
import { initInfoCard } from './ui/infoCard.js';
import { initPostureBar } from './ui/postureBar.js';
import { initLineBar } from './ui/lineBar.js';
import { initMeridianBar } from './ui/meridianBar.js';
import { initPanPad } from './ui/panPad.js';
import { initPanelToggle } from './ui/panelToggle.js';
import { initCollapsible, isNarrow } from './ui/collapsible.js';

const viewer = createViewer(document.getElementById('viewport'));
const model = buildModel(window.MODEL_DATA);
viewer.scene.add(model.group);
const ctrl = createController(viewer, model);

initDissectPanel(document.getElementById('dissect'), ctrl, window.CONTENT);
initMuscleList(document.getElementById('muscleList'), ctrl, window.CONTENT);
initInfoCard(document.getElementById('info'), ctrl, window.CONTENT);
const refit = () => viewer.resize(); // 收合任何一列之後，3D 視窗的高度或寬度會變
initPostureBar(document.getElementById('postureBar'), ctrl, window.CONTENT, refit);
initLineBar(document.getElementById('lineBar'), ctrl, refit);
initMeridianBar(document.getElementById('meridianBar'), ctrl, refit);
initPanPad(document.getElementById('panPad'), viewer);
initPanelToggle(document.getElementById('viewport'), viewer);
initCollapsible(document.getElementById('legend'), 'anatomyTrains3d.legendOpen', { collapsedByDefault: isNarrow() });

// 點一下選取肌肉（變紫色）、穴位或痠痛點，再點同一個取消；拖曳旋轉不算點選
// 按下時讓 3D 視窗取得焦點，方向鍵才能平移
const canvas = viewer.renderer.domElement;
let down = null;
canvas.addEventListener('pointerdown', e => {
  down = [e.clientX, e.clientY];
  canvas.focus({ preventScroll: true });
});
canvas.addEventListener('pointerup', e => {
  if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 5) {
    if (ctrl.state.lookupMode) {
      ctrl.lookupAt(ctrl.pointAt(e.clientX, e.clientY)); // 找痛源：點到哪就查哪
      down = null;
      return;
    }
    const got = ctrl.pickAt(e.clientX, e.clientY);
    if (got.kind === 'acupoint') ctrl.selectAcupoint(got.hit);
    else if (got.kind === 'pain') ctrl.selectPain(got.pain);
    else ctrl.select(got.key && got.key === ctrl.state.selectedKey ? null : (got.key ?? null));
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
