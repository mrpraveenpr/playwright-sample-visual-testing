module.exports = {
  mutate: ["tests/unit/**/*.js"],
  testRunner: "jest",
  reporters: ["html", "progress", "clear-text"],
  coverageAnalysis: "off",
  jest: {
    projectType: "custom",
    config: require("./jest.config.js"),
    enableFindRelatedTests: false
  }
};
