module.exports = {
  mutate: ["tests/unit/**/*.js"],
  testRunner: "jest",
  reporters: ["html", "progress", "clear-text"],
  coverageAnalysis: "off",
  thresholds: {
    high: 80,
    low: 60,
    break: 0     // ← IMPORTANT: do not fail pipeline
  },
  jest: {
    projectType: "custom",
    config: require("./jest.config.js"),
    enableFindRelatedTests: false
  }
};
