import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text());
  });
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
    if (err.stack) console.error('PAGE STACK:', err.stack);
  });
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(4000);
  await browser.close();
})().catch(err => {
  console.error("Runner error:", err);
});
