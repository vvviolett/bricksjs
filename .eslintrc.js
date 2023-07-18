module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': ['warn', { target: 'single' }],
    'import/no-extraneous-dependencies': [
      'error',
      { bundledDependencies: false },
    ],
  },
  ignorePatterns: ['node_modules', 'dist', 'docs', 'types', '.dumi'],
};
