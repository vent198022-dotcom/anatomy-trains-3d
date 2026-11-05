// 3D 視窗：渲染器、相機、滑鼠／觸控旋轉縮放平移、點選、視角按鈕
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { panStep, panned, turned, recentered, centered, wholeBody } from './cameraMath.js';

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
  controls.zoomToCursor = true; // 滾輪往游標指的地方放大，旋轉中心跟著移過去
  controls.keyPanSpeed = 25;
  renderer.domElement.tabIndex = 0; // 點一下 3D 視窗後可用方向鍵平移
  controls.listenToKeyEvents(renderer.domElement);

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
  place(BODY_CENTER, VIEWS.front, FULL_DISTANCE);

  // 平滑移動到另一個 { target, position }（平移、設旋轉中心用）；使用者開始拖曳就停止
  let tween = null;
  const current = () => tween?.to ?? { target: controls.target.toArray(), position: camera.position.toArray() };
  function moveTo(to, duration = 0.3) {
    tween = { from: { target: controls.target.toArray(), position: camera.position.toArray() }, to, t: 0, duration };
  }
  controls.addEventListener('start', () => (tween = null));
  function stepTween(dt) {
    if (!tween) return;
    tween.t = Math.min(1, tween.t + dt / tween.duration);
    const k = tween.t * tween.t * (3 - 2 * tween.t);
    const mix = (p, q) => p.map((v, i) => v + (q[i] - v) * k);
    controls.target.fromArray(mix(tween.from.target, tween.to.target));
    camera.position.fromArray(mix(tween.from.position, tween.to.position));
    if (tween.t === 1) tween = null;
  }
  const apply = v => {
    tween = null;
    controls.target.fromArray(v.target);
    camera.position.fromArray(v.position);
    controls.update();
  };

  // 視角按鈕只換方向，保留目前的對準點與遠近
  const setView = name => apply(turned(current(), VIEWS[name]));
  const showWholeBody = () => apply(wholeBody(current(), BODY_CENTER.toArray(), FULL_DISTANCE, VIEWS.front));
  // 平移一步（dx、dy 為 −1、0、+1）：畫面往右、往上看
  function pan(dx, dy) {
    const v = current();
    const distance = Math.hypot(...v.position.map((x, i) => x - v.target[i]));
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion).toArray();
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion).toArray();
    moveTo(panned(v, right, up, panStep(distance, camera.fov), dx, dy), 0.2);
  }
  const recenter = point => moveTo(recentered(current(), point), 0.35);
  const center = () => moveTo(centered(current(), BODY_CENTER.toArray()), 0.35);

  // 對準某個點：相機移到身體中軸往該點的水平方向，讓那一側面向使用者
  function lookAt(point) {
    const p = new THREE.Vector3(...point);
    const dir = new THREE.Vector3(p.x, 0, p.z - BODY_CENTER.z);
    if (dir.length() < 3) dir.copy(camera.position).sub(controls.target).setY(0);
    dir.normalize().setY(0.15);
    tween = null;
    place(p, dir.toArray(), FOCUS_DISTANCE);
  }

  const resizeHooks = [];
  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    for (const fn of resizeHooks) fn(w, h);
  };
  new ResizeObserver(resize).observe(container);
  resize();

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function hit(clientX, clientY, objects) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    return raycaster.intersectObjects(objects, false)[0] ?? null;
  }
  const pick = (clientX, clientY, objects) => hit(clientX, clientY, objects)?.object ?? null;
  // 完整的交點（需要 InstancedMesh 的 instanceId 時用）
  const pickHit = (clientX, clientY, objects) => hit(clientX, clientY, objects);
  // 點到的位置（設旋轉中心用）
  const pickPoint = (clientX, clientY, objects) => hit(clientX, clientY, objects)?.point.toArray() ?? null;

  const frameHooks = [];
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = clock.getDelta();
    for (const fn of frameHooks) fn(dt);
    stepTween(dt);
    controls.update();
    renderer.render(scene, camera);
  });

  return {
    scene, camera, controls, renderer, pick, pickHit, pickPoint, setView, showWholeBody, pan, recenter, center, lookAt,
    resize, // 收合側欄之後直接叫一次（ResizeObserver 在分頁隱藏時不保證會跑）
    onFrame: fn => frameHooks.push(fn),
    onResize(fn) {
      resizeHooks.push(fn);
      fn(container.clientWidth, container.clientHeight);
    },
  };
}
