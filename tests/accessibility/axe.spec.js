import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Audit", () => {
  test("should have no WCAG contrast or accessibility violations", async ({ page }) => {
    await page.goto("https://example.com");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
