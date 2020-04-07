const path = require('path');

module.exports = {
  root: true,
  extends: ['plugin:xxx-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      ...require('eslint-plugin-xxx-eslint').configs.typescript,
    },
  ],
  settings: {
    polyfills: [
      // 解决Object is not iterable的error
      // 'Promise',
    ],
    'import/resolver': {
      typescript: {
        directory: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
  },
};
