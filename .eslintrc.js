module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  extends: 'semistandard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],  // enforce semicolons
    quotes: ['error', 'single'],  // enforce single quotes
  }
}
