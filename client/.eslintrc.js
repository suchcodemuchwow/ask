module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external']],
        'newlines-between': 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to ESLint
    }
  },
  /* for lint-staged */
  globals: {
    __dirname: true
  }
}
