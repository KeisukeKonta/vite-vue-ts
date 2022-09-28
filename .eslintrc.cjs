module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: [
      '.vue'
    ]
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
