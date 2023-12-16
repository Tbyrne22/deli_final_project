const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants.
const expectedSpecialsCards = 3;

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

// // Locate header with text "SPECIALS"
// test('Check Speacials header', async ({ page }) => {

//     const elementsWithSpecialsText = await page.locator('h2:has-text("Specials")');

//     expect(elementsWithSpecialsText).not.toBeNull(); // Check if the element is found
//     const specialsElement = await elementsWithSpecialsText.first();
//     const tagName = await specialsElement.evaluate((element) => element.tagName.toLowerCase());
//     expect(tagName).toBe('h2'); // Check if the element is an h2 tag

// });

// // Locate subheader with text "Order soon to not miss out!"
// test('Check speecials text', async ({ page }) => {

//     const elementsWithSpecialsText = await page.locator('p:has-text("Order soon to not miss out!")');

//     expect(elementsWithSpecialsText).not.toBeNull(); // Check if the element is found
//     const specialsElement = await elementsWithSpecialsText.first();
//     const tagName = await specialsElement.evaluate((element) => element.tagName.toLowerCase());
//     expect(tagName).toBe('p'); // Check if the element is a p tag
// });

// // Locate three cards
// test('Check specials cards', async ({ page }) => {
//     const mediaCardContainers = await page.locator('.MuiGrid-item > .MuiPaper-root');
//     const mediaCardCount = await mediaCardContainers.count();
  
//     expect(mediaCardCount).toBe(3); // Check if there are exactly three MediaCard containers

// });

// // Locate "Ends" within one of the cards
// test('Check if "Ends" text exists in any MediaCard', async ({ page }) => {
//   // Wait for the MuiPaper-root elements to be present
//   await page.waitForSelector('.MuiPaper-root');

//   // Find all elements with class MuiPaper-root
//   const paperElements = await page.$$('.MuiPaper-root');

//   // Function to check if "Ends" text exists in any MuiPaper-root element
//   async function checkForEndsText() {
//     let endsTextFound = false;

//     for (const paper of paperElements) {
//       const paperContent = await paper.textContent();
//       if (paperContent.includes('Ends')) {
//         endsTextFound = true;
//         break;
//       }
//     }

//     return endsTextFound;
//     }

//   // Check if "Ends" text exists in any MuiPaper-root element
//   const endsTextExists = await checkForEndsText();
//   expect(endsTextExists).toBe(true);
// });


// // Locate "OFF" within two cards
// test('Check if "OFF" text exists in at least two MediaCards', async ({ page }) => {
//     // Wait for the MuiPaper-root elements to be present
//     await page.waitForSelector('.MuiPaper-root');
  
//     // Find all elements with class MuiPaper-root
//     const paperElements = await page.$$('.MuiPaper-root');
  
//   // Function to check if "OFF" text exists in at least two MuiPaper-root elements
//   async function checkForOFFText() {
//     let offCount = 0;

//     for (const paper of paperElements) {
//       const paperContent = await paper.textContent();
//       if (paperContent.includes('OFF')) {
//         offCount++;
//         if (offCount >= 2) {
//           // We found "OFF" in at least two MediaCards
//           return true;
//         }
//       }
//     }

//     return false;
//   }

//   // Check if "OFF" text exists in at least two MuiPaper-root elements
//   const offTextExists = await checkForOFFText();
//   expect(offTextExists).toBe(true);
//   });
