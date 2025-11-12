// @ts-check
const { devices } = require("@playwright/test");

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests", // ✅ or "./test" if you don’t rename the folder
  timeout: 60000,
  expect: {
    timeout: 30000,
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 }, // ✅ tolerance
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  use: {
    baseURL: "https://example.com",
    trace: "retain-on-failure",
    screenshot: "on",
    video: "off",
    viewport: { width: 1366, height: 768 },
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  outputDir: "test-results/",
};

module.exports = config;
