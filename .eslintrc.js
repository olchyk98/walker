module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins:[
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    } ],
    'func-names': 0,
    'function-paren-newline': 'off',
    'no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 0 } ],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': [ 'error', {
      vars: 'all',
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
    } ],
    semi: [ 'error', 'never' ],
    'sort-imports': [ 'warn', { ignoreDeclarationSort: true } ],
    'space-before-function-paren': [ 'error', 'always' ],
  },
  root: true,
}
