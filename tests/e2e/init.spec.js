const { test, expect } = require("@playwright/test");

test("App initializes correctly", async ({ page }) => {
  await page.goto("https://example.com");

  // if page fails to load → CI will fail
  await expect(page).toHaveTitle(/Example/);

  // check if main element is rendered
  await expect(page.locator("h1")).toBeVisible();
});
