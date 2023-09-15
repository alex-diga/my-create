module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
