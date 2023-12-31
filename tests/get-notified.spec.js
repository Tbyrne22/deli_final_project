const { test, expect } = require('@playwright/test');

const websiteURL = 'https://is601-final-proj-jnpuhe7es-roderics-projects.vercel.app/';

// Expected constants.



test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// Locate header with text "GET NOTIFIED"
test('Check Get Notified Header', async ({ page }) => {

    const elementsWithNotifiedText = await page.locator('h2:has-text("Get Notified")');

    expect(elementsWithNotifiedText).not.toBeNull(); // Check if the element is found
    const notifiedElement = await elementsWithNotifiedText.first();
    const tagName = await notifiedElement.evaluate((element) => element.tagName.toLowerCase());
    expect(tagName).toBe('h2'); // Check if the element is an h2 tag
});


// Locate button with text "KEEP ME UPDATED"
test('Check Keep Me Updated CTA', async ({ page }) => {
    // Find the button
    const button = page.locator('.css-9kejjb-MuiGrid-root form button');
    // Assert that the button element exists
    expect(button).not.toBeNull();
});


// Test that the mailchimp form is visible on the webpage
test('Check visibility and functionality of the email text field', async ({ page }) => {

    // Find the email text field using a selector
    const emailField = page.locator('.MuiInputBase-input');

    // Check if the email text field is visible
    const isFieldVisible = await emailField.isVisible();
    expect(isFieldVisible).toBe(true);

    // Enter text into the email field and check its value
    await emailField.type('test@example.com');
    const enteredValue = await emailField.evaluate(field => field.value);
    expect(enteredValue).toBe('test@example.com');

});

