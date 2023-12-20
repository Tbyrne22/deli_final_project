const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// Locate header with text "Explore Your Flavor Profile"
test('Check hero header', async ({ page }) => {
    const exploreTextElement = await page.locator('text="Explore Your Flavor Profile"');
  
    expect(await exploreTextElement.count()).toBeGreaterThan(0);
});


// Locate subheader that contains "With Rotating Dishes From Around The Globe"
test('Check hero subheader', async ({ page }) => {
    // Find the element containing the text
    const textElement = await page.locator('h5.MuiTypography-root');

    // Check if the element is present
        expect(textElement).not.toBeNull();

    if (textElement) {
        // Check if the element contains the specific text
        const textContent = await textElement.innerText();
        expect(textContent).toContain('With Rotating Regional Dishes From Around The Globe');

        // Check if the element is styled as an h5
        const tagName = await textElement.evaluate((element) => element.tagName);
        expect(tagName.toLowerCase()).toBe('h5');
    }
});


// Locate CTA button
test('Check View Specials CTA', async ({ page }) => {
    // Find the button
    const buttonLocator = page.locator('a.MuiButton-containedSecondary[href="/#specials"]');
    const buttonExists = await buttonLocator.count() > 0;
    expect(buttonExists).toBe(true);
});

// Click button and verify that it goes to Specials section
test('Check that the CTA goes to Specials section', async ({ page }) => {
    // Find the link
  const linkSelector = 'a.MuiButton-containedSecondary[href="/#specials"]';
  const link = await page.$(linkSelector);
  expect(link).not.toBeNull();

  // Get the current scroll position
  const initialScrollY = await page.evaluate(() => window.scrollY);

  // Click the link
  await link.click();

  // Wait for the scroll to settle
  await page.waitForFunction(
    (initialScrollY) => window.scrollY !== initialScrollY,
    {},
    initialScrollY
  );

  // Get the current URL after navigation
  const currentURL = page.url();
  expect(currentURL).toContain('#specials');

});