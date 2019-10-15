module.exports = {
  extends: [
    "@sharegate/eslint-config-recommended",
    "@sharegate/eslint-config-sort-imports",
    "@sharegate/eslint-config-react",
    "plugin:jsx-control-statements/recommended"
  ],
  plugins: ["jsx-control-statements"],
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    "no-debugger": "warn",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off"
  }
};
