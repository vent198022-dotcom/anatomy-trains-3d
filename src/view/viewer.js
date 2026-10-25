// 3D 視窗：渲染器、相機、滑鼠／觸控旋轉縮放、點選、視角按鈕
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
  const setView = name => place(BODY_CENTER, VIEWS[name], FULL_DISTANCE);
  setView('front');

  // 對準某個點：相機移到身體中軸往該點的水平方向，讓那一側面向使用者
  function lookAt(point) {
    const p = new THREE.Vector3(...point);
    const dir = new THREE.Vector3(p.x, 0, p.z - BODY_CENTER.z);
    if (dir.length() < 3) dir.copy(camera.position).sub(controls.target).setY(0);
    dir.normalize().setY(0.15);
    place(p, dir.toArray(), FOCUS_DISTANCE);
  }

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

  return { scene, camera, controls, renderer, pick, setView, lookAt, onFrame: fn => frameHooks.push(fn) };
}
