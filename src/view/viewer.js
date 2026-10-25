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
