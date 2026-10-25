// 把 Z-Anatomy FBX 轉成網頁用的資料：data/processed/meta.json ＋ meshes.bin
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { loadFbx, indexMeshes, indexGroups, meshesUnder } from './lib/fbx.mjs';
import { isAnnotation, sideOf, withSide } from './lib/names.mjs';
import { worldGeometry, simplify } from './lib/geometry.mjs';
import { PointGrid, attachmentRegion, refineEnds, midBellyCentroid, meanPoint } from './lib/attach.mjs';
import { samplePoints, skinWeights, nearestSegment, chainVias, superficialVertex } from './lib/skin.mjs';
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
const concat = arrays => {
  const out = new Float32Array(arrays.reduce((n, a) => n + a.length, 0));
  let o = 0;
  for (const a of arrays) {
    out.set(a, o);
    o += a.length;
  }
  return out;
};

console.log('讀取 FBX …');
const muscleMeshes = indexMeshes(loadFbx(`${RAW}/${FILES[0]}`));
const skeleton = loadFbx(`${RAW}/${FILES[1]}`);
const boneMeshes = indexMeshes(skeleton);
const boneGroups = indexGroups(skeleton);

console.log('處理骨頭 …');
const bones = new Map(); // 名稱 → { segment, positions, indices }
for (const def of BONE_SEGMENTS) {
  const found = [];
  for (const pattern of def.names ?? []) {
    for (const side of pattern.includes('{s}') ? ['l', 'r'] : [null]) {
      const name = side ? withSide(pattern, side) : pattern;
      const mesh = boneMeshes.get(name);
      if (!mesh) throw new Error(`找不到骨頭 ${name}`);
      found.push(mesh);
    }
  }
  for (const g of def.groups ?? []) {
    const group = boneGroups.get(g);
    if (!group) throw new Error(`找不到骨頭群組 ${g}`);
    found.push(...meshesUnder(group, isAnnotation));
  }
  for (const mesh of found) {
    const name = mesh.userData.originalName;
    if (bones.has(name)) continue; // 先出現的規則優先（例如股骨先歸大腿，其餘才歸足部）
    const side = sideOf(name);
    if (def.sided && !side) throw new Error(`${name} 應該分左右，但名稱沒有 .l/.r`);
    const geo = await simplify(worldGeometry(mesh), BONE_RATIO);
    bones.set(name, { segment: def.sided ? segKey(def.segment, side) : def.segment, ...geo });
  }
}
const bone = name => {
  const b = bones.get(name);
  if (!b) throw new Error(`附著骨頭 ${name} 不在骨頭清單內`);
  return b;
};
const sampled = new Map(); // 骨頭名稱 → 取樣點（算權重、痠痛點用）
const samplesOf = name => {
  if (!sampled.has(name)) sampled.set(name, samplePoints(bone(name).positions, 300));
  return sampled.get(name);
};

const joints = estimateJoints(new Map([...bones].map(([name, b]) => [name, b.positions])));

console.log('處理肌肉 …');
const parts = [];
for (const p of PARTS) {
  for (const side of p.unsided ? ['m'] : ['l', 'r']) {
    const meshName = p.zNames?.[side] ?? (p.unsided ? p.zName : `${p.zName}.${side}`);
    const mesh = muscleMeshes.get(meshName);
    if (!mesh) throw new Error(`找不到肌肉 ${meshName}`);
    const geo = await simplify(worldGeometry(mesh), PART_RATIO);
    const groups = p.attach.map(at => at.bones.map(b => (p.unsided ? b : withSide(b, side))));
    const regions = groups.map(names => attachmentRegion(geo.positions, new PointGrid(concat(names.map(n => bone(n).positions)), 1), 0.5, Math.ceil(p.maxGap) + 1));
    const ends = refineEnds(geo.positions, regions[0], regions[regions.length - 1]);

    // 這個部件跨過的骨段（依附著骨頭）；端點跟著離它最近的骨頭所屬骨段
    const allNames = [...new Set(groups.flat())];
    const segs = [...new Set(allNames.map(n => bone(n).segment))];
    const segPoints = segs.map(s => concat(allNames.filter(n => bone(n).segment === s).map(samplesOf)));
    const endSeg = (names, point) => {
      const own = [...new Set(names.map(n => bone(n).segment))];
      return own[nearestSegment(point, own.map(s => segPoints[segs.indexOf(s)]))];
    };
    const segA = endSeg(groups[0], ends.a);
    const segB = endSeg(groups[groups.length - 1], ends.b);

    let skin = null, skinSegs = null;
    let vias = p.via ? [{ seg: segB, p: round(midBellyCentroid(geo.positions, ends.a, ends.b)) }] : [];
    if (segs.length > 2) {
      // 跨三個以上骨段：每個頂點跟著最近的兩個骨段；端點群組以外的骨段各加一個轉折點
      skin = skinWeights(geo.positions, segPoints);
      skinSegs = segs;
      const endSegs = new Set([...groups[0], ...groups[groups.length - 1]].map(n => bone(n).segment));
      const middle = segs.map((s, i) => i).filter(i => !endSegs.has(segs[i]));
      vias = chainVias(geo.positions, skin, middle, ends.a, ends.b).map(v => ({ seg: segs[v.s], p: round(v.p) }));
    }

    const allBonePoints = concat(segPoints);
    parts.push({
      key: `${p.id}.${side}`,
      id: p.id,
      side,
      layer: p.layer,
      region: p.region,
      measure: p.measure,
      maxGap: p.maxGap,
      segA,
      segB,
      skinSegs,
      a: round(ends.a),
      b: round(ends.b),
      vias,
      tps: p.tp.map(t => superficialVertex(geo.positions, ends.a, ends.b, t, allBonePoints)),
      centroid: round(meanPoint(geo.positions)),
      dmin: regions.map(r => round(r.dmin)),
      ...geo,
      skin,
    });
  }
}

const boneList = [...bones].map(([name, b]) => ({ name, ...b }));
const { quant, entries, bin } = packMeshes([...boneList, ...parts]);
const strip = ({ positions, indices, skin, ...rest }) => rest;
const meta = {
  version: 2,
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
