module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      env: {
        'jest/globals': true,
      },
      files: ['specs/**'],
      settings: {
        jest: {
          version: require('jest/package.json').version,
        },
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {},
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@lib', './lib']],
        extensions: ['.ts', '.d.ts', '.js', '.json'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
