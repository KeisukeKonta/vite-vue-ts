module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-prettier-scss'
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-recommended-scss']
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue']
    }
  ]
}
