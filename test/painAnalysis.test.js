import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { severity, hasNerveFlag, patientBlocks, clinicBlocks } from '../src/pain/analysis.js';

const sandbox = { window: {} };
vm.runInNewContext(readFileSync('解剖列車網頁/content.js', 'utf8'), sandbox);
const C = sandbox.window.CONTENT;

const facts = (over = {}) => ({
  name: '胸小肌',
  layer: 'middle',
  layerText: '中層',
  delta: -0.14,
  deltaText: '−14%',
  lock: 'short',
  postureLabel: '圓肩',
  worstPostures: [{ label: '圓肩', deltaText: '−14%' }, { label: '滑手機', deltaText: '−11%' }],
  antagonists: [{ name: '大菱形肌', deltaText: '+27%' }],
  zones: [{ label: '肩膀前側', depth: 'mid' }, { label: '手臂內側', depth: 'deep' }],
  alsoHere: [{ name: '胸大肌鎖骨部' }],
  lineMates: ['鎖骨下肌'],
  lines: '深前臂線',
  meridians: [{ short: '肺經', id: 'lu' }],
  acupoints: [{ name: '中府', code: 'LU1' }],
  distal: '列缺、太淵',
  painPoints: '喙突下方',
  referredPain: '肩膀前側，沿手臂內側到小指；鎖短時可能壓迫臂神經叢，造成手麻',
  problems: '肩前深層痛',
  lockedShort: '圓肩、駝背',
  lockedLong: '少見',
  care: { release: [{ name: '門框伸展', how: '撐住門框…' }], strengthen: [{ name: '肩胛後縮', how: '往中間收…' }] },
  ...over,
});

test('severity：3% 以下不算，再分成稍微／明顯／相當明顯', () => {
  assert.equal(severity(0.02), null);
  assert.equal(severity(-0.02), null);
  assert.equal(severity(0.05), 'mild');
  assert.equal(severity(-0.14), 'clear');
  assert.equal(severity(0.27), 'strong');
});

test('hasNerveFlag：說明裡提到麻、神經、無力就要特別提醒', () => {
  assert.ok(hasNerveFlag('造成手麻'));
  assert.ok(hasNerveFlag('壓迫神經'));
  assert.ok(hasNerveFlag('手指無力'));
  assert.ok(!hasNerveFlag('肩膀前側悶痛'));
  assert.ok(!hasNerveFlag(undefined));
});

test('病人版：四段俱全，講姿勢名稱、不出現百分比與解剖術語', () => {
  const b = patientBlocks(facts());
  assert.deepEqual(b.map(x => x.title), ['為什麼會痛', '什麼時候最容易發生', '現在可以做的', '這些情況要看醫生']);
  const all = b.map(x => x.body).join('');
  assert.match(all, /「圓肩」這個姿勢/);
  assert.match(all, /縮短/);
  assert.ok(!all.includes('−14%'), '病人版不該出現百分比');
  assert.ok(!all.includes('深前臂線'), '病人版不該出現列車線');
  assert.ok(!all.includes('鑑別'), '病人版不該列鑑別清單');
  // 說明提到手麻，就要把神經症狀放進就醫條件的第一條
  assert.match(b[3].body, /^手腳發麻/);
});

test('病人版：鎖短先給放鬆、鎖長先給強化', () => {
  const shortFirst = patientBlocks(facts({ lock: 'short' }))[2].body;
  assert.ok(shortFirst.indexOf('門框伸展') < shortFirst.indexOf('肩胛後縮'));
  const longFirst = patientBlocks(facts({ lock: 'long', delta: 0.2 }))[2].body;
  assert.ok(longFirst.indexOf('肩胛後縮') < longFirst.indexOf('門框伸展'));
  assert.match(patientBlocks(facts({ lock: 'long', delta: 0.2 }))[0].body, /一直按它不會好/);
});

test('病人版：沒有對應動作時改給通則，不會空白', () => {
  const b = patientBlocks(facts({ care: { release: [], strengthen: [] } }));
  assert.match(b[2].body, /每 30 分鐘/);
  assert.match(b[2].body, /治療師或醫師/);
});

test('病人版：中立姿勢時改講痠痛位置，不硬掰姿勢原因', () => {
  const b = patientBlocks(facts({ lock: null, delta: 0, postureLabel: null }));
  assert.match(b[0].body, /喙突下方/);
  assert.ok(!b[0].body.includes('這個姿勢下'));
});

test('臨床版：帶出 %、拮抗肌、跨姿勢、鑑別、連鎖與證型', () => {
  const b = clinicBlocks(facts());
  const byTitle = Object.fromEntries(b.map(x => [x.title, x.body]));
  assert.match(byTitle['目前狀態與處置方向'], /−14%/);
  assert.match(byTitle['目前狀態與處置方向'], /鎖短/);
  assert.match(byTitle['目前狀態與處置方向'], /大菱形肌 \+27%/);
  assert.match(byTitle['哪些姿勢最吃虧'], /圓肩 −14%｜滑手機 −11%/);
  assert.match(byTitle['鑑別（同樣會痛在這裡的）'], /胸大肌鎖骨部/);
  assert.match(byTitle['容易被誤認'], /手臂內側/); // 只列 deep 的區域
  assert.match(byTitle['筋膜連鎖'], /深前臂線/);
  assert.match(byTitle['中醫'], /氣滯血瘀/);
  assert.match(byTitle['中醫'], /中府（LU1）/);
});

test('臨床版：鎖長要講「先鬆對側再強化」，中立要講找動作而不是姿勢', () => {
  const long = clinicBlocks(facts({ lock: 'long', delta: 0.2, deltaText: '+20%' }));
  assert.match(long[0].body, /先放鬆對側鎖短的肌肉/);
  assert.match(long.find(x => x.title === '中醫').body, /氣血不足/);
  const none = clinicBlocks(facts({ lock: null, delta: 0, antagonists: [] }));
  assert.match(none[0].body, /重複性動作或負荷/);
});

test('自我照顧：每條肌肉都有對應，而且只用到定義過的動作', () => {
  const ids = Object.keys(C.muscles);
  for (const id of ids) {
    const care = C.careFor[id];
    assert.ok(care, `${id} 沒有對應的自我照顧動作`);
    for (const a of [...care.release, ...care.strengthen]) assert.ok(C.selfCare[a], `${id} 用到不存在的動作 ${a}`);
  }
  for (const [id, a] of Object.entries(C.selfCare)) {
    assert.ok(a.name?.trim() && a.how?.trim(), `${id} 的動作沒寫完`);
    assert.ok(/\d/.test(a.how), `${id} 的做法要寫出次數或時間`);
  }
  assert.equal(Object.keys(C.careFor).length, ids.length);
});
