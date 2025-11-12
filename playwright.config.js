const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 60000,
  expect: {
    timeout: 30000,
    toHaveScreenshot: { maxDiffPixels: 0 },
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,

  use: {
    baseURL: "https://example.com",
    trace: "retain-on-failure",
    screenshot: "on",
    video: "off",
  },

  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  // ✅ Test across multiple devices for responsiveness
  projects: [
    { name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
    { name: "Pixel 5", use: { ...devices["Pixel 5"] } },
    { name: "iPad Mini Landscape", use: { ...devices["iPad Mini"], viewport: { width: 1024, height: 768 } } },
  ],

  outputDir: "test-results/",
};

module.exports = config;
