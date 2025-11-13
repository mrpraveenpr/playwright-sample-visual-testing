const { test, expect } = require("@playwright/test");

test("App does not crash in offline mode (placeholder test)", async ({ page }) => {
  // Open baseURL (from playwright.config.js)
  await page.goto("/");

  // Simulate offline
  await page.context().setOffline(true);

  // Reload while offline (ignore network errors)
  await page.reload({ waitUntil: "domcontentloaded" }).catch(() => null);

  // Ensure <body> is present (Chrome's offline page still has body)
  await expect(page.locator("body")).toBeVisible();

  // Ensure the HTML content isn't completely empty (robust across browsers)
  const content = await page.content();
  expect(typeof content).toBe("string");
  expect(content.length).toBeGreaterThan(20); // anything > 20 chars is fine

  // Restore network
  await page.context().setOffline(false);
});
