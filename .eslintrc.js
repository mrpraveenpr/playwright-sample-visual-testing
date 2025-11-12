module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // ✅ enables 'import' and 'export'
  },
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
};
