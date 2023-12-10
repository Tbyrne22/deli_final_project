// const { test, expect } = require('@playwright/test');

// const websiteURL = 'http://localhost:3000';

// // Expected constants.
// const expectedLogoText = 'Expeditions Deli';
// const expectedMenuItemCount = 3;    // @TODO update count to 4 when the menu page is added


// test.beforeEach(async ({ page }) => {
//     await page.goto(websiteURL);
// });

// test('Check logo', async ({ page }) => {
//     const logoText = await page.locator('.MuiToolbar-root a[data-tag="logo"]').textContent();
//     expect(logoText).toBe(expectedLogoText);
// });

// test('Check nav links', async ({ page }) => {
//     const menuLinks = await page.locator('.MuiToolbar-root div[role="menu"] a[role="menuitem"]');
//     const count = await menuLinks.count();
//     expect(count).toBe(expectedMenuItemCount);
  
//     for (let i = 0; i < count; i++) {
//       const link = menuLinks.nth(i);
//       expect(await link.isVisible()).toBe(true);
//       await link.click();
//     }
// });
