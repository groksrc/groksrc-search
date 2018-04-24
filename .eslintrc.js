// We're extending the recommended ruleset by default.
// Add tweaks to 'rules': http://eslint.org/docs/rules/

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env:{
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    require: true,
    module: true,
    CONFIG: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'eol-last': 'error',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'comma-dangle': ['error', 'only-multiline'],
    indent: ['error', 2, { "MemberExpression": 0 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['warn'],
    'no-console': ['error'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  // required to lint *.vue files
  plugins: [
    'html',
    'chai-friendly'
  ]
}