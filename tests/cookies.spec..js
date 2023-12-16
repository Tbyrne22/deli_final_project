const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants.


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// // Check if cookies banner is visible on the initial load of the webpage

// // Check if privacy policy link is visible and links to privacy policy page

