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
