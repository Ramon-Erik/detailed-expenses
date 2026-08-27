import vuetify from 'eslint-config-vuetify'

export default vuetify({
  ts: true,
  rules: {
    '@stylistic/space-before-function-paren': 'off',
    '@unused-imports/no-unused-imports': 'error',

    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',

    '@unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
})
