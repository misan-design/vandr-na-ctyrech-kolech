import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import path from 'path';
const b=await chromium.launch(); const p=await b.newPage();
for (const f of process.argv.slice(2)) {
  await p.goto('file://'+path.resolve(f)); await p.waitForTimeout(400);
  await p.pdf({path:f.replace('.html','.pdf'),preferCSSPageSize:true,printBackground:true});
}
await b.close();
