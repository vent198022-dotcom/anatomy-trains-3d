// 進入點（暫時版）：只顯示模型；Task 14 換成完整版
import { createViewer } from './view/viewer.js';
import { buildModel } from './model/scene.js';

const viewer = createViewer(document.getElementById('viewport'));
const model = buildModel(window.MODEL_DATA);
viewer.scene.add(model.group);
document.getElementById('loading').remove();
window.app = { viewer, model }; // 方便在主控台檢查
