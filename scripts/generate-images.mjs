// Regenerates public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180).
// Requires Playwright with Chromium: npm i -D playwright && npx playwright install chromium
// Run: node scripts/generate-images.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));
const font = "system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const og = `<!doctype html><html><body style="margin:0">
<div style="width:1200px;height:630px;box-sizing:border-box;padding:80px 88px;background:#0f1417;color:#e8eef0;font-family:${font};display:flex;flex-direction:column;justify-content:space-between">
  <div style="display:flex;align-items:center;gap:20px">
    <div style="width:72px;height:72px;border-radius:16px;background:#5ec8d3;color:#08262a;display:grid;place-items:center;font-weight:800;font-size:32px;letter-spacing:-1px">PV</div>
    <div style="font-size:26px;color:#a6b3b9">pvajra.github.io</div>
  </div>
  <div>
    <div style="font-size:76px;font-weight:800;letter-spacing:-2px;line-height:1.05">Pandurang Vajramatti</div>
    <div style="margin-top:22px;font-size:36px;font-weight:600;color:#5ec8d3">Android Software Engineer</div>
    <div style="margin-top:10px;font-size:30px;color:#a6b3b9">Kotlin · Java · On-Device AI</div>
  </div>
  <div style="height:8px;width:160px;border-radius:4px;background:#5ec8d3"></div>
</div></body></html>`;

const icon = `<!doctype html><html><body style="margin:0">
<div style="width:180px;height:180px;background:#0b6e79;color:#fff;font-family:${font};display:grid;place-items:center;font-weight:700;font-size:80px;letter-spacing:-3px">PV</div>
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
