const { test, expect } = require("@playwright/test");

test("App handles offline mode", async ({ page, context }) => {
  await page.goto("https://example.com");

  // go offline
  await context.setOffline(true);

  // reload offline to test offline UX
  await page.reload();

  // expected to show some offline UI element
  // Adapt this if your app shows a custom message
  await expect(page).toHaveTitle(""); // offline blank title is expected
});
