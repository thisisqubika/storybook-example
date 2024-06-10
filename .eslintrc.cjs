// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:eslint-plugin-react/recommended', 'plugin:storybook/recommended'],
  ignorePatters: [
    'dist/',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  root: true,
  rules: {
    semi: 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
}; // module.exports
