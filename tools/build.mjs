// Předgenerování stránek: src/app.html se vykreslí v prohlížeči pro každou stránku a jazyk
// a uloží jako hotové HTML do site/ (aby je Google četl bez JavaScriptu).
// Spuštění: node tools/build.mjs   (potřebuje Playwright)
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const PW = process.env.PW || '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const { chromium } = await import(PW);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_DIR = path.join(ROOT, 'site'); const APP = path.join(ROOT, 'src', 'app.html');
const app = fs.readFileSync(APP, 'utf8');
const DOMAIN = 'https://vandrnactyrech.cz';
const BASE = { cs: '/', en: '/en/', sk: '/sk/', de: '/de/' };
const PRIV = JSON.parse(app.match(/const PRIV_SLUG = (\{[^}]+\})/)[1].replace(/(\w+):/g, '"$1":'));
const SLUGS = [...app.matchAll(/^\s*slug: "([^"]+)"/gm)].map(m => m[1]);
const LANGS = Object.keys(BASE);
const pages = [{ key: 'home', path: l => BASE[l] }, ...SLUGS.map(s => ({ key: 'v:' + s, path: l => BASE[l] + s + '/' })), { key: 'privacy', path: l => BASE[l] + PRIV[l] + '/' }];
const routes = new Set(); pages.forEach(p => LANGS.forEach(l => routes.add(p.path(l))));
const types = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((q, s) => {
  const u = decodeURIComponent(q.url.split('?')[0]);
  if (routes.has(u)) { s.writeHead(200, { 'content-type': types['.html'] }); s.end(app); return; }
  fs.readFile(path.join(SITE_DIR, u), (e, d) => { if (e) { s.writeHead(404); s.end(); return; } s.writeHead(200, { 'content-type': types[path.extname(u)] || 'application/octet-stream' }); s.end(d); });
}).listen(0);
const port = srv.address().port;
const browser = await chromium.launch(); const errors = [];
for (const r of routes) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  page.on('pageerror', e => errors.push(r + ': ' + e.message));
  await page.goto(`http://localhost:${port}${r}`, { waitUntil: 'networkidle' }); await page.waitForTimeout(300);
  const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
  const out = path.join(SITE_DIR, r, 'index.html'); fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(out, html);
  console.log('✓', r); await page.close();
}
await browser.close(); srv.close();
// sitemap with language alternates
const today = new Date().toISOString().slice(0, 10);
const urls = pages.flatMap(p => LANGS.map(l => `  <url>\n    <loc>${DOMAIN}${p.path(l)}</loc>\n    <lastmod>${today}</lastmod>\n` +
  LANGS.map(x => `    <xhtml:link rel="alternate" hreflang="${x}" href="${DOMAIN}${p.path(x)}"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${p.path('cs')}"/>\n  </url>`));
fs.writeFileSync(path.join(SITE_DIR, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
console.log('✓ sitemap.xml (' + urls.length + ' adres)');
if (errors.length) { console.error('CHYBY:\n' + errors.join('\n')); process.exit(1); }
