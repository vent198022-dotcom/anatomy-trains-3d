// 把 Z-Anatomy FBX 轉成網頁用的資料：data/processed/meta.json ＋ meshes.bin
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { loadFbx, indexMeshes, indexGroups, meshesUnder } from './lib/fbx.mjs';
import { isAnnotation, sideOf, withSide } from './lib/names.mjs';
import { worldGeometry, simplify } from './lib/geometry.mjs';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, meanPoint } from './lib/attach.mjs';
import { estimateJoints } from './lib/joints.mjs';
import { packMeshes } from './lib/pack.mjs';
import { PARTS, BONE_SEGMENTS, PART_RATIO, BONE_RATIO } from './parts.js';
import { segKey } from '../src/rig/segments.js';

const RAW = 'data/raw';
const OUT = 'data/processed';
const FILES = ['MuscularSystem100.fbx', 'SkeletalSystem100.fbx'];
for (const f of FILES) {
  if (!existsSync(`${RAW}/${f}`)) throw new Error(`找不到 ${RAW}/${f}，請先執行 npm run fetch-data`);
}

// JSON 裡的座標取到小數 3 位（0.01 mm）
const round = v => (Array.isArray(v) ? v.map(round) : typeof v === 'number' ? Math.round(v * 1000) / 1000 : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, round(x)])) : v);

console.log('讀取 FBX …');
const muscleMeshes = indexMeshes(loadFbx(`${RAW}/${FILES[0]}`));
const skeleton = loadFbx(`${RAW}/${FILES[1]}`);
const boneMeshes = indexMeshes(skeleton);
const boneGroups = indexGroups(skeleton);

console.log('處理骨頭 …');
const bones = new Map(); // 名稱 → { segment, positions, indices }
for (const def of BONE_SEGMENTS) {
  const found = [];
  for (const g of def.groups ?? []) {
    const group = boneGroups.get(g);
    if (!group) throw new Error(`找不到骨頭群組 ${g}`);
    found.push(...meshesUnder(group, isAnnotation));
  }
  for (const pattern of def.names ?? []) {
    for (const side of pattern.includes('{s}') ? ['l', 'r'] : [null]) {
      const name = side ? withSide(pattern, side) : pattern;
      const mesh = boneMeshes.get(name);
      if (!mesh) throw new Error(`找不到骨頭 ${name}`);
      found.push(mesh);
    }
  }
  for (const mesh of found) {
    const name = mesh.userData.originalName;
    if (bones.has(name)) continue;
    const side = sideOf(name);
    if (def.sided && !side) throw new Error(`${name} 應該分左右，但名稱沒有 .l/.r`);
    const geo = await simplify(worldGeometry(mesh), BONE_RATIO);
    bones.set(name, { segment: def.sided ? segKey(def.segment, side) : def.segment, ...geo });
  }
}
const bonePositions = name => {
  const b = bones.get(name);
  if (!b) throw new Error(`附著骨頭 ${name} 不在骨頭清單內`);
  return b.positions;
};

const joints = estimateJoints(new Map([...bones].map(([name, b]) => [name, b.positions])));

console.log('處理肌肉 …');
const parts = [];
for (const side of ['l', 'r']) {
  for (const p of PARTS) {
    const mesh = muscleMeshes.get(`${p.zName}.${side}`);
    if (!mesh) throw new Error(`找不到肌肉 ${p.zName}.${side}`);
    const geo = await simplify(worldGeometry(mesh), PART_RATIO);
    const regions = p.attach.map(at => {
      const pts = at.bones.map(b => bonePositions(withSide(b, side)));
      const all = new Float32Array(pts.reduce((n, a) => n + a.length, 0));
      let o = 0;
      for (const a of pts) {
        all.set(a, o);
        o += a.length;
      }
      return attachmentRegion(geo.positions, new PointGrid(all, 1));
    });
    const ends = refineEnds(geo.positions, regions[0], regions[1]);
    const segA = segKey(p.attach[0].segment, side);
    const segB = segKey(p.attach[1].segment, side);
    parts.push({
      key: `${p.id}.${side}`,
      id: p.id,
      side,
      layer: p.layer,
      measure: p.measure,
      maxGap: p.maxGap,
      segA,
      segB,
      a: round(ends.a),
      b: round(ends.b),
      via: p.via ? { seg: segB, p: round(midBellyCentroid(geo.positions, ends.a, ends.b)) } : null,
      centroid: round(meanPoint(geo.positions)),
      dmin: regions.map(r => round(r.dmin)),
      ...geo,
    });
  }
}

const boneList = [...bones].map(([name, b]) => ({ name, ...b }));
const { quant, entries, bin } = packMeshes([...boneList, ...parts]);
const strip = ({ positions, indices, ...rest }) => rest;
const meta = {
  version: 1,
  units: 'cm',
  source: 'Z-Anatomy (CC BY-SA 4.0), derived from BodyParts3D (c) The Database Center for Life Science',
  quant,
  joints: round(joints),
  bones: boneList.map((b, i) => ({ ...strip(b), ...entries[i] })),
  parts: parts.map((p, i) => ({ ...strip(p), ...entries[boneList.length + i] })),
};
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/meta.json`, JSON.stringify(meta));
writeFileSync(`${OUT}/meshes.bin`, bin);

const tris = [...boneList, ...parts].reduce((n, m) => n + m.indices.length / 3, 0);
console.log(`完成：骨頭 ${boneList.length} 個、肌肉部件 ${parts.length} 個、三角面 ${tris}、meshes.bin ${(bin.length / 1048576).toFixed(1)} MB`);
const far = parts.filter(p => p.dmin.some(d => d > p.maxGap));
if (far.length) console.log('附著區離骨頭太遠（請檢查 parts.js）：' + far.map(p => `${p.key} ${p.dmin.join('/')}`).join('、'));
