module.exports = {
  // ONLY look inside tests/unit (not Playwright tests)
  roots: ["<rootDir>/tests/unit"],

  // Only match files ending with .test.js
  testMatch: ["**/*.test.js"],

  // Node test environment (not browser)
  testEnvironment: "node",

  // Only collect coverage from unit test files
  collectCoverageFrom: ["tests/unit/**/*.js"],

  coverageDirectory: "coverage",

  // IMPORTANT: Prevent Jest from reading Playwright tests
  testPathIgnorePatterns: [
    "/node_modules/",
    "/tests/e2e/",
    "/tests/visual/",
    "/tests/accessibility/",
  ],
};
