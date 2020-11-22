module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ["packages/*/tests/**/*.test.js"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
