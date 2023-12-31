const { test, expect } = require('@playwright/test');

const websiteURL = 'https://is601-final-proj-jnpuhe7es-roderics-projects.vercel.app/';

// Expected constants.
const expectedFooterURLs = ['https://facebook.com', 'https://twitter.com'];


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// Locate email
test('Check for email', async ({ page }) => {
    const footerTextElement = page.locator('text="expeditionsdeli@gmail.com"');
  
    expect(await footerTextElement.count()).toBeGreaterThan(0);
});


// Check that facebook and twitter links work
test('Check socials links', async ({ page }) => {
    // Finding the container section that holds the socials links
    const footerSection = await page.$('.MuiContainer-root.MuiContainer-maxWidthLg.css-1f554vw');
    let count= 0;

    // Extracting all the href links within the container
    const links = await footerSection.evaluate(() => {
        // Selecting all anchor tags within the container
        const anchors = document.querySelectorAll('.MuiContainer-root.MuiContainer-maxWidthLg.css-1f554vw a');
        // Extracting and filtering href attributes, excluding empty ones
        return Array.from(anchors, link => link.getAttribute('href')).filter(href => href);
    });

    // Looping through each extracted link
    for (const href of links) {
        if (expectedFooterURLs.includes(href)) {
            count++;
        }
    }

    expect(count).toBe(expectedFooterURLs.length);
});

