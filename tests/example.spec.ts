import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    // Use the locator to get the element's innerText
    const textContent = await page.locator('your-locator-selector').innerText();
    console.log('Text content:', textContent);

    await browser.close();
})();

});
