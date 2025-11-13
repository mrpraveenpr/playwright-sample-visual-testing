const { test, expect } = require("@playwright/test");

test("App handles offline mode", async ({ page }) => {
  await page.goto("/");

  // go offline
  await page.context().setOffline(true);

  // reload offline (ignore error)
  await page.reload({ waitUntil: "domcontentloaded" }).catch(() => null);

  // robust offline selector
  const offlineBanner = page
    .locator("#offline-message")
    .or(page.locator(".offline-banner"))
    .or(page.getByText(/offline/i));

  await expect(offlineBanner).toBeVisible({ timeout: 5000 });

  // back online
  await page.context().setOffline(false);
});
