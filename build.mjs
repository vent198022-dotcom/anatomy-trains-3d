// 把 src/ 打包成 解剖列車網頁/app.js，並把 data/processed 內嵌成 model.js，讓 index.html 用 file:// 雙擊也能執行
import * as esbuild from 'esbuild';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const OUT_DIR = '解剖列車網頁';
const serve = process.argv.includes('--serve');
const PORT = Number(process.argv.find(a => a.startsWith('--port='))?.slice(7) ?? 8124); // 預覽用的埠，可用 npm run serve -- --port=8125 改
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !serve,
  write: !serve, // 預覽時只在記憶體裡打包，不覆寫要提交的 app.js
  outfile: `${OUT_DIR}/app.js`,
  logLevel: 'info',
};

writeModelJs();
if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: OUT_DIR, port: PORT, host: '127.0.0.1' });
  console.log(`預覽：http://localhost:${port}/`);
} else {
  await esbuild.build(options);
  stampVersion();
}

// 模型資料用 <script> 載入（file:// 不能 fetch）：meta 直接寫成物件，網格二進位轉 base64
function writeModelJs() {
  const meta = readFileSync('data/processed/meta.json', 'utf8');
  const bin = readFileSync('data/processed/meshes.bin').toString('base64');
  const text = `window.MODEL_DATA={meta:${meta},bin:"${bin}"};\n`;
  const path = `${OUT_DIR}/model.js`;
  if (!existsSync(path) || readFileSync(path, 'utf8') !== text) writeFileSync(path, text); // 內容沒變就不動檔案
}

// 在 index.html 引用的檔案後面加上內容雜湊（?v=xxxx）：更新後瀏覽器不會繼續用快取的舊檔案
function stampVersion() {
  const files = ['app.js', 'style.css', 'content.js', 'model.js'];
  const hash = createHash('sha1');
  for (const f of files) hash.update(readFileSync(`${OUT_DIR}/${f}`));
  const v = hash.digest('hex').slice(0, 8);
  const indexPath = `${OUT_DIR}/index.html`;
  const html = readFileSync(indexPath, 'utf8');
  const stamped = files.reduce(
    (out, f) => out.replace(new RegExp(`(["'])${f.replace('.', '\\.')}(\\?v=[0-9a-f]+)?\\1`, 'g'), `$1${f}?v=${v}$1`),
    html,
  );
  if (stamped !== html) writeFileSync(indexPath, stamped);
}
