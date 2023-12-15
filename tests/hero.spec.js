const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// // Locate header with text "Explore Your Flavor Profile"
test('Check hero header', async ({ page }) => {
    const exploreTextElement = await page.locator('text="Explore Your Flavor Profile"');
  
    expect(await exploreTextElement.count()).toBeGreaterThan(0);
});

// // Locate subheader that contains "With Rotating Dishes From Around The Globe"

// // Locate CTA button

// // Click button and verify that it goes to Specials section
