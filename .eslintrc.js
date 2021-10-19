module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 0,
  },
};
