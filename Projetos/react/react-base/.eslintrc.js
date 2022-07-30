module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    "react",
    "import",
    "jsx-a11y"
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off"
  },
};
