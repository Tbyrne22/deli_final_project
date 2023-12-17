const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants.



test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// // Locate header with text "CATERING"
test('Check Catering header', async ({ page }) => {
    const elementsWithCateringText = await page.locator('h2:has-text("Catering")');

    expect(elementsWithCateringText).not.toBeNull(); // Check if the element is found
    const cateringElement = await elementsWithCateringText.first();
    const tagName = await cateringElement.evaluate((element) => element.tagName.toLowerCase());
    expect(tagName).toBe('h2'); // Check if the element is an h2 tag
});

// // Locate text "Sub Bag" and "Sub Box"
test('Check bundles text', async ({ page }) => {
    const elementsWithSubBagText = await page.locator('h3:has-text("Sub Bag")');
    const elementsWithSubBoxText = await page.locator('h3:has-text("Sub Box")');

    expect(elementsWithSubBagText).not.toBeNull(); // Check if the element is found
    expect(elementsWithSubBoxText).not.toBeNull(); // Check if the element is found
    const subBagElement = await elementsWithSubBagText.first();
    const subBoxElement = await elementsWithSubBoxText.first();
    const tagName1 = await subBagElement.evaluate((element) => element.tagName.toLowerCase());
    const tagName2 = await subBoxElement.evaluate((element) => element.tagName.toLowerCase());
    expect(tagName1).toBe('h3'); // Check if the element is an h3 tag
    expect(tagName2).toBe('h3'); // Check if the element is an h3 tag
});

