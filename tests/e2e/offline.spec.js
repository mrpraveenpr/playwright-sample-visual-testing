const { test, expect } = require("@playwright/test");

test("App handles offline mode", async ({ page }) => {
  await page.goto("/");

  // go offline
  await page.context().setOffline(true);

  // reload offline (ignore error)
  await page.reload({ waitUntil: "domcontentloaded" }).catch(() => null);

  // expect offline UI (replace selector with real one)
  const offlineBanner = page.locator("#offline-message, .offline-banner, text=Offline");

  // make this flexible for any real UI
  await expect(offlineBanner).toBeVisible();

  // back online
  await page.context().setOffline(false);
});
