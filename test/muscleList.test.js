import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listRows } from '../src/ui/muscleList.js';

const parts = [
  { info: { id: 'pecMinor', side: 'l', region: 'trunk' } },
  { info: { id: 'pecMinor', side: 'r', region: 'trunk' } },
  { info: { id: 'diaphragm', side: 'm', region: 'trunk' } },
  { info: { id: 'soleus', side: 'r', region: 'lowerLimb' } },
];
const content = {
  muscles: {
    pecMinor: { name: '胸小肌', en: 'Pectoralis minor' },
    diaphragm: { name: '橫膈', en: 'Diaphragm' },
    soleus: { name: '比目魚肌', en: 'Soleus' },
  },
};

test('左右合併成一列，中線肌肉只有一個', () => {
  const rows = listRows(parts, content, '', 'all');
  assert.deepEqual(rows.map(r => [r.id, r.sides.join('')]), [['pecMinor', 'lr'], ['diaphragm', 'm'], ['soleus', 'r']]);
});

test('中文、英文搜尋（不分大小寫）', () => {
  assert.deepEqual(listRows(parts, content, '胸小', 'all').map(r => r.id), ['pecMinor']);
  assert.deepEqual(listRows(parts, content, 'DIAPH', 'all').map(r => r.id), ['diaphragm']);
});

test('依分區篩選', () => {
  assert.deepEqual(listRows(parts, content, '', 'lowerLimb').map(r => r.id), ['soleus']);
});
