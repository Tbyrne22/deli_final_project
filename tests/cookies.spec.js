const { test, expect } = require('@playwright/test');

const websiteURL = 'https://is601-final-proj-jnpuhe7es-roderics-projects.vercel.app';

// Expected constants.
const expectedCookiesText = "We use cookies on our website to enhance your browsing experience."

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// Check if cookies banner is visible on the initial load of the webpage
test('Check cookies banner', async ({ page }) => {

    // Check if the banner text is present on the page
    const bannerText = page.locator({ text: expectedCookiesText });

    // Assert that the banner text is found, confirming the presence of the banner
    expect(bannerText).toBeTruthy();

});

// Check if privacy policy link is visible and links to privacy policy page
test('Check privacy policy', async ({ page }) => {

    // Find the link element using the href attribute
    const policyLink = await page.$('a[href="/policy"]');
  
    // Check if the link is found
    if (policyLink) {
      // Click on the link
      await policyLink.click();
  
      // Wait for navigation to complete (assuming navigation triggers a new page load)
      await page.waitForNavigation();
  
      // Get the URL after clicking the link
      const currentUrl = page.url();
  
      // Assert that the current URL matches the expected policy URL
      expect(currentUrl).toBe(`${websiteURL}/policy`);
    } else {
      // If the link is not found, fail the test
      throw new Error('Policy link not found.');
    }
});
