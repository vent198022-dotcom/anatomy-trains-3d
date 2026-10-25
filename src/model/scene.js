// 把 model.js 的資料建成 three.js 網格
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

  const parts = meta.parts.map(info => {
    const { positions, indices } = decodeMesh(bytes, meta.quant, info);
    const geo = makeGeometry(positions.slice(), indices);
    geo.getAttribute('position').setUsage(THREE.DynamicDrawUsage);
    const material = new THREE.MeshStandardMaterial({ roughness: 0.55 });
    material.color.setRGB(...PALETTE.natural, THREE.SRGBColorSpace);
    const mesh = new THREE.Mesh(geo, material);
    mesh.userData.partKey = info.key;
    group.add(mesh);
    // delta：目前長度變化率；target：拆解時要移到的位移（每一幀平滑靠近）
    return { info, mesh, prep: prepareDeform(positions, info.a, info.b), delta: 0, target: [0, 0, 0] };
  });

  return { group, bones, parts, joints: meta.joints };
}
