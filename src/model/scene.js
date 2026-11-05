// 把 model.js 的資料建成 three.js 網格（骨頭、肌肉部件、痠痛點標記）
import * as THREE from 'three';
import { base64ToBytes, decodeMesh } from './decode.js';
import { prepareDeform } from '../muscles/deform.js';
import { PALETTE } from '../muscles/colors.js';
import { PAINT_STRENGTH, PAINT_GLOW } from '../pain/paint.js';

function makeGeometry(positions, indices) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  return geo;
}

// 痠痛點畫成八面體（菱形），和經脈穴位的小球一眼分得出來
const MARKER_GEOMETRY = new THREE.OctahedronGeometry(0.8);

// 讓材質可以被「轉移痛」染色：每個頂點多一個 0–1 的權重 aReferred，權重愈大顏色愈往 uReferredColor 混。
// 沒有設定這個屬性的網格，WebGL 會給 0，等於不染色，所以只有真的染到的部件才需要加屬性。
function paintable(material) {
  material.userData.referredColor = { value: new THREE.Color(1, 1, 1) };
  material.onBeforeCompile = shader => {
    shader.uniforms.uReferredColor = material.userData.referredColor;
    shader.vertexShader = `attribute float aReferred;
varying float vReferred;
${shader.vertexShader}`.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
  vReferred = aReferred;`,
    );
    shader.fragmentShader = `uniform vec3 uReferredColor;
varying float vReferred;
${shader.fragmentShader}`.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
  float referred = clamp(vReferred, 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, uReferredColor, referred * ${PAINT_STRENGTH.toFixed(2)});`,
    ).replace(
      // 再加一點自發光，染色才不會被打光壓暗、背光處也看得到
      'vec3 totalEmissiveRadiance = emissive;',
      `vec3 totalEmissiveRadiance = emissive + uReferredColor * clamp(vReferred, 0.0, 1.0) * ${PAINT_GLOW.toFixed(2)};`,
    );
  };
  material.customProgramCacheKey = () => 'referred'; // 所有部件共用同一支著色器
  return material;
}

// data：window.MODEL_DATA = { meta, bin（base64） }
export function buildModel(data) {
  const { meta } = data;
  const bytes = base64ToBytes(data.bin);
  const group = new THREE.Group();

  const boneMaterial = paintable(new THREE.MeshStandardMaterial({ color: 0xe9e0cc, roughness: 0.75 }));
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
    const material = paintable(new THREE.MeshStandardMaterial({ roughness: 0.55 }));
    material.color.setRGB(...PALETTE.natural, THREE.SRGBColorSpace);
    const mesh = new THREE.Mesh(geo, material);
    mesh.userData.partKey = info.key;
    mesh.frustumCulled = false; // 外接球在姿勢動畫中延後更新，用舊的外接球剔除會讓肌肉暫時消失
    group.add(mesh);
    // 痠痛點：記住對應的頂點，姿勢改變後跟著頂點移動；肌肉本身拆解位移時一起移
    const tps = info.tps.map((vertex, index) => {
      const marker = new THREE.Mesh(MARKER_GEOMETRY, new THREE.MeshBasicMaterial());
      marker.visible = false;
      marker.renderOrder = 5;
      marker.userData.pain = { key: info.key, index }; // 點選痠痛點用
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

  return { group, bones, parts, boneMaterial, joints: meta.joints };
}
