const { test, expect } = require('@playwright/test');

test('Dummy test', async ({ page }) => {
    expect('dummy').toBe('dummy');
});