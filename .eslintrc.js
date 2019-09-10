module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"]
  }
};
