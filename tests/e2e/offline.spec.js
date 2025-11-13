const { test, expect } = require("@playwright/test");

test("App shows offline message", async ({ page }) => {
  await page.goto("/");

  // go offline
  await page.context().setOffline(true);

  // reload offline
  const response = await page.reload({ waitUntil: "domcontentloaded" }).catch(() => null);

  // verify offline UI
  const offlineEl = page.locator("#offline-message, .offline-banner, text=Offline");
  await expect(offlineEl).toBeVisible();

  // back online
  await page.context().setOffline(false);
});
