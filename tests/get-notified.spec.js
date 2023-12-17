const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants.



test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// // Locate header with text "GET NOTIFIED"
// test('Check Get Notified Header', async ({ page }) => {

//     const elementsWithNotifiedText = await page.locator('h2:has-text("Get Notified")');

//     expect(elementsWithNotifiedText).not.toBeNull(); // Check if the element is found
//     const notifiedElement = await elementsWithNotifiedText.first();
//     const tagName = await notifiedElement.evaluate((element) => element.tagName.toLowerCase());
//     expect(tagName).toBe('h2'); // Check if the element is an h2 tag
// });


// // Locate button with text "KEEP ME UPDATED"
// test('Check Keep Me Updated CTA', async ({ page }) => {
//     // Find the button
//     const button = page.locator('.css-9kejjb-MuiGrid-root form button');
//     // Assert that the button element exists
//     expect(button).not.toBeNull();
// });


// // Test that the mailchimp form is visible on the webpage
// test('Check visibility and functionality of the email text field', async ({ page }) => {

//     // Find the email text field using a selector
//     const emailField = page.locator('.MuiInputBase-input');

//     // Check if the email text field is visible
//     const isFieldVisible = await emailField.isVisible();
//     expect(isFieldVisible).toBe(true);

//     // Enter text into the email field and check its value
//     await emailField.type('test@example.com');
//     const enteredValue = await emailField.evaluate(field => field.value);
//     expect(enteredValue).toBe('test@example.com');

// });


// // NEED UPDATED CODE: Verify that the form performs input validation before submission **
// // enter invalid data into the form field and assert that validation message is displayed or that the form prevents submission
// // test('Check input validation', async ({ page }) => {
// //     const emailField = page.locator('.MuiInputBase-input');
// //     await emailField.type('test@example.com');

// //     const submitButton = page.locator('.MuiButton-root[type="submit"]');
// //     await submitButton.click();
// // });


// // Confirm that the submits properly with valid data
// //  enter valid data and simulate form submission
// // check for any success messages or indicators


