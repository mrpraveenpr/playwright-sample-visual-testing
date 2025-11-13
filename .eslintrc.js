module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true   // ✅ This enables globals: test, expect, describe
  },
  extends: [
    "eslint:recommended",
    "plugin:tailwindcss/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "off" // Jest defines its own globals
  }
};
