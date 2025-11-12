import { test, expect } from "@playwright/test";

test.describe("Visual regression example", () => {
  test("Visual snapshot of example.com homepage", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveScreenshot("homepage.png", { fullPage: true });
  });

  test("Example title check", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example Domain/);
  });
});
