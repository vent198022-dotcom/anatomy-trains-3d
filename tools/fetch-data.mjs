// 下載 Z-Anatomy 的肌肉與骨骼 FBX（約 78 MB）到 data/raw/；這個資料夾不進 git
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const BASE = 'https://raw.githubusercontent.com/LluisV/Z-Anatomy/PC-Version/Resources/Models/';
const FILES = ['FBX/MuscularSystem100.fbx', 'FBX/SkeletalSystem100.fbx', 'License.txt'];

mkdirSync('data/raw', { recursive: true });
for (const f of FILES) {
  const out = `data/raw/${f.split('/').pop()}`;
  if (existsSync(out)) {
    console.log(`已存在：${out}`);
    continue;
  }
  console.log(`下載 ${f} …`);
  const res = await fetch(BASE + f);
  if (!res.ok) throw new Error(`${f} 下載失敗：HTTP ${res.status}`);
  writeFileSync(out, Buffer.from(await res.arrayBuffer()));
}
console.log('完成');
