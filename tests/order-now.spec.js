const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedDeliveryLinks = 3;
const expectedURLs = ['https://www.grubhub.com', 'https://www.ubereats.com/', 'https://www.doordash.com'];
const expectedRatingsCount = 3;


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// Locate header with text "ORDER NOW"
test('Check Order Now header', async ({ page }) => {

    const elementsWithOrderNowText = await page.locator('h2:has-text("Order Now")');

    expect(elementsWithOrderNowText).not.toBeNull(); // Check if the element is found
    const orderNowElement = await elementsWithOrderNowText.first();
    const tagName = await orderNowElement.evaluate((element) => element.tagName.toLowerCase());
    expect(tagName).toBe('h2'); // Check if the element is an h2 tag
});

// Locate subheader with text "Order from your favorite delivery service"
test('Check Order Now text', async ({ page }) => {

    const elementsWithOrderNowText = await page.locator('p:has-text("Order from your favorite delivery service")');

    expect(elementsWithOrderNowText).not.toBeNull(); // Check if the element is found
    const orderNowElement = await elementsWithOrderNowText.first();
    const tagName = await orderNowElement.evaluate((element) => element.tagName.toLowerCase());
    expect(tagName).toBe('p'); // Check if the element is a p tag
})

// Locate three links for delivery services and check that they work
test('Check delivery links', async ({ page }) => {
    // Finding the container section that holds the delivery links
    const deliverySection = await page.$('.MuiContainer-root.MuiContainer-maxWidthLg.css-j101yz-MuiContainer-root');
    
    // Extracting all the href links within the container
    const links = await deliverySection.evaluate(() => {
        // Selecting all anchor tags within the container
        const anchors = document.querySelectorAll('.MuiBox-root.css-xi606m a');
        // Extracting and filtering href attributes, excluding empty ones
        return Array.from(anchors, link => link.getAttribute('href')).filter(href => href);
    });

    // Looping through each extracted link
    for (const href of links) {
        // Navigating to the extracted link
        await page.goto(href, { waitUntil: 'domcontentloaded' });

        // Checking if the page title indicates a broken link
        const pageTitle = await page.title();
        if (pageTitle !== '404 Page Not Found' && pageTitle !== 'Error') {
            console.log(`Link ${href} works!`); // Log successful link
        } else {
            console.log(`Link ${href} is broken.`); // Log broken link
        }

        // Expecting that the page title does not match '404 Page Not Found' or 'Error'
        expect(pageTitle).not.toMatch(/404 Page Not Found|Error/);
        expect(expectedURLs).toContain(href); // Ensuring the link is within expected URLs

        await page.goBack(); // Navigate back to the previous page
    }
});

// Locate three MUI rating components
test('Locate ratings components', async ({ page }) => {

    // Count the number of rating components within the section
    const ratingComponents = await page.$$eval('.MuiRating-root', elements => elements.length);

    // Assert that the count of rating components is equal to 3
    expect(ratingComponents).toBe(expectedRatingsCount);
});

