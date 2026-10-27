// 把 model.js 的資料建成 three.js 網格（骨頭、肌肉部件、痠痛點標記）
import * as THREE from 'three';
import { base64ToBytes, decodeMesh } from './decode.js';
import { prepareDeform } from '../muscles/deform.js';
import { PALETTE } from '../muscles/colors.js';

function makeGeometry(positions, indices) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  return geo;
}

const MARKER_GEOMETRY = new THREE.SphereGeometry(0.7, 14, 10);

// 肌肉表面沿法向量往外推再顯示（公分）：簡化後很薄的肌肉（頭皮的帽狀腱膜等）會被底下的骨頭穿出白點，外推後蓋住
// 只影響畫面，不改資料、長度計算與點選；列車線的網、痠痛點標記也跟著浮高（見 net.js、controller.js）
export const MUSCLE_INFLATE = 0.4;

function inflate(material) {
  material.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
transformed += normalize(objectNormal) * ${MUSCLE_INFLATE.toFixed(2)};`);
  };
  material.customProgramCacheKey = () => 'muscle-inflate'; // 所有肌肉共用同一個著色器
}

// data：window.MODEL_DATA = { meta, bin（base64） }
export function buildModel(data) {
  const { meta } = data;
  const bytes = base64ToBytes(data.bin);
  const group = new THREE.Group();

  const boneMaterial = new THREE.MeshStandardMaterial({ color: 0xe9e0cc, roughness: 0.75 });
  const bones = meta.bones.map(b => {
    const { positions, indices } = decodeMesh(bytes, meta.quant, b);
    const mesh = new THREE.Mesh(makeGeometry(positions, indices), boneMaterial);
    mesh.matrixAutoUpdate = false; // 骨頭直接套骨段矩陣
    group.add(mesh);
    return { mesh, segment: b.segment };
  });

  const markers = new THREE.Group();
  const parts = meta.parts.map(info => {
    const { positions, indices, skin } = decodeMesh(bytes, meta.quant, info);
    const geo = makeGeometry(positions.slice(), indices);
    geo.getAttribute('position').setUsage(THREE.DynamicDrawUsage);
    const material = new THREE.MeshStandardMaterial({ roughness: 0.55 });
    material.color.setRGB(...PALETTE.natural, THREE.SRGBColorSpace);
    inflate(material);
    const mesh = new THREE.Mesh(geo, material);
    mesh.userData.partKey = info.key;
    mesh.frustumCulled = false; // 外接球在姿勢動畫中延後更新，用舊的外接球剔除會讓肌肉暫時消失
    group.add(mesh);
    // 痠痛點：記住對應的頂點，姿勢改變後跟著頂點移動；肌肉本身拆解位移時一起移
    const tps = info.tps.map(vertex => {
      const marker = new THREE.Mesh(MARKER_GEOMETRY, new THREE.MeshBasicMaterial());
      marker.visible = false;
      marker.renderOrder = 5;
      markers.add(marker);
      return { marker, vertex };
    });
    return {
      info,
      mesh,
      rest: positions,
      skin, // 跨三個以上骨段時才有
      prep: skin ? null : prepareDeform(positions, info.a, info.b),
      segments: info.skinSegs ?? [info.segA, info.segB, ...info.vias.map(v => v.seg)], // 只要這些骨段沒動，就不必重算
      tps,
      delta: 0, // 目前長度變化率
      target: [0, 0, 0], // 拆解時要移到的位移（每一幀平滑靠近）
    };
  });
  group.add(markers);

  return { group, bones, parts, joints: meta.joints };
}
