const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// // Expected constants.
const expectedLogoText = 'Expeditions Deli';
const expectedMenuItemCount = 3;    // @TODO update count to 4 when the menu page is added


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

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


// Test that the MenuIcon appears at mobile viewport width (400px), also that menu links disappears

// test('check MenuIcon for mobile view', async ({ page }) => {
//     await page.setViewportSize({ width: 400, height: 800 });

//     // Get the actual viewport size after setting it
//     const actualViewportSize = page.viewportSize();
//     console.log('Viewport size:', actualViewportSize.width);

//     const menuIcon = await page.locator('[data-testid="MenuIcon"]');

//     // Check if the MenuIcon element is present in the DOM 
//      if (menuIcon) {
//           console.log('Found MenuIcon element in the DOM.');
//      } else {
//          console.log('MenuIcon element not found in the DOM.');
//      }

//     // Retry mechanism to check visibility
//      const maxRetries = 5;
//      let retryCount = 0;
//      let isMenuIconVisible = false;

//     while (!isMenuIconVisible && retryCount < maxRetries) {
//         const menuIcon = await page.$('[data-testid="MenuIcon"]');
//         isMenuIconVisible = await menuIcon.isVisible();
//         retryCount++;

//         if (!isMenuIconVisible) {
//         console.log(`MenuIcon not visible, retrying (${retryCount}/${maxRetries})...`);
//         await page.waitForTimeout(1000); // Adjust as needed
//         }
//     }

//      expect(await menuIcon.isVisible()).toBe(true);
// });

// // Test that menu items exist at desktop viewport ()

// test('check MenuIcon is hidden in desktop view', async ({ page }) => {
//     await page.setViewportSize({ width: 1200, height: 800 });

//     // Get the actual viewport size after setting it
//     const actualViewportSize = page.viewportSize();
//     console.log('Viewport size:', actualViewportSize.width);

//     const menuIcon = await page.locator('[data-testid="MenuIcon"]');
//     expect(await menuIcon.isVisible()).toBe(false);

// });