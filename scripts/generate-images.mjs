// Regenerates public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180).
// Requires Playwright with Chromium: npm i -D playwright && npx playwright install chromium
// Run: node scripts/generate-images.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));
const font = "system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const og = `<!doctype html><html><body style="margin:0">
<div style="width:1200px;height:630px;box-sizing:border-box;padding:96px 104px;background:#fdfdfc;color:#1b1d1c;font-family:${font};display:flex;flex-direction:column;justify-content:center;border-left:16px solid #1a6b45">
  <div style="font-size:80px;font-weight:700;letter-spacing:-2px;line-height:1.05">Pandurang Vajramatti</div>
  <div style="margin-top:28px;font-size:38px;color:#5a605d">Android Software Engineer</div>
  <div style="margin-top:8px;font-size:38px;color:#5a605d">Kotlin · Java · On-Device AI</div>
  <div style="margin-top:56px;font-size:28px;color:#1a6b45">pvajra.github.io</div>
</div></body></html>`;

const icon = `<!doctype html><html><body style="margin:0">
<div style="width:180px;height:180px;background:#1a6b45;color:#fff;font-family:${font};display:grid;place-items:center;font-weight:700;font-size:80px;letter-spacing:-3px">PV</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og);
await page.screenshot({ path: out('og-image.png') });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(icon);
await page.screenshot({ path: out('apple-touch-icon.png') });
await browser.close();
console.log('Wrote public/og-image.png and public/apple-touch-icon.png');
