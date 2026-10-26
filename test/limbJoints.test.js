import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { limbJoints, crossedJoints, limbWraps } from '../tools/lib/limbJoints.mjs';

// 用真實的轉檔資料（關節位置與轉軸）
const { joints } = JSON.parse(readFileSync('data/processed/meta.json', 'utf8'));
const names = list => list.map(j => j.dist);

test('每側 20 個關節：手肘、手腕、膝、踝、距下，加上手指 15 個', () => {
  assert.equal(limbJoints(joints, 'r').length, 20);
});

test('部件跨過的關節：骨段一部分在關節遠端、一部分不在', () => {
  assert.deepEqual(names(crossedJoints(['pelvis', 'femur.r', 'shank.r'], joints, 'r')), ['shank']);
  assert.deepEqual(names(crossedJoints(['shank.r', 'foot.r'], joints, 'r')), ['talus', 'foot']);
  assert.deepEqual(names(crossedJoints(['ulna.r', 'radius.r'], joints, 'r')), [], '前臂旋轉不在表內');
  const fds = ['radius.r', 'hand.r', 'indexProx.r', 'middleProx.r', 'ringProx.r', 'littleProx.r', 'indexMid.r', 'middleMid.r', 'ringMid.r', 'littleMid.r'];
  const crossed = names(crossedJoints(fds, joints, 'r'));
  assert.equal(crossed.length, 9, '手腕＋四指的掌指、近端指間');
  assert.ok(crossed.includes('hand') && crossed.includes('littleMid') && !crossed.includes('indexDist'));
});

test('力臂：跨多指的肌肉同一層取平均；文獻力臂取代算出的值', () => {
  // 每指的掌指關節掌側 1 公分各放一個頂點：單指的力臂都是 1，四指平均後每個 0.25
  const mcp = ['index', 'middle', 'ring', 'little'].map(f => joints.fingers.r[f][0]);
  const positions = Float32Array.from(
    mcp.flatMap(j => {
      const move = [j.axis[1] * j.dir[2] - j.axis[2] * j.dir[1], j.axis[2] * j.dir[0] - j.axis[0] * j.dir[2], j.axis[0] * j.dir[1] - j.axis[1] * j.dir[0]];
      const len = Math.hypot(...move);
      return j.pivot.map((v, i) => v + move[i] / len);
    }),
  );
  const wraps = limbWraps(positions, ['hand.r', 'indexProx.r', 'middleProx.r', 'ringProx.r', 'littleProx.r'], joints, 'r');
  assert.equal(wraps.length, 4);
  for (const w of wraps) assert.ok(Math.abs(w.m - 0.25) < 1e-6, `${w.dist} ${w.m}`);
  const [knee] = limbWraps(new Float32Array(3), ['femur.r', 'shank.r'], joints, 'r', { shank: 1.5 });
  assert.deepEqual([knee.prox, knee.dist, knee.m], ['femur.r', 'shank.r', 1.5]);
});
