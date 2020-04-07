module.exports = {
  plugins: ['react-hooks', 'html'],
  extends: [
    // eslint
    'eslint:recommended',
    // node
    'plugin:node/recommended',
    // import
    'plugin:import/recommended',
    // promise
    'plugin:promise/recommended',
    // comments
    // 'plugin:eslint-comments/recommended',
    // unicorn
    // 'plugin:unicorn/recommended',
    // react
    'plugin:react/recommended',
    // jest
    'plugin:jest/recommended',
    // compat
    'plugin:compat/recommended',
    // prettier
    // eslint-plugin-prettier的缩写
    'plugin:prettier/recommended',
    // eslint-config-prettier的缩写
    'prettier/react',
    'prettier/standard',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    commonjs: true,
    es6: true,
    mongo: true,
    shelljs: true,
  },
  rules: {
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'],
      },
    ],
    // 与import功能重复
    'node/no-missing-import': 'off',
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'valid-jsdoc': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      ...require('eslint-plugin-xxx-eslint').configs.typescript,
    },
  ],
  settings: {
    'import/extensions': ['.ts', 'tsx', '.js', '.jsx', '.json'],
    react: {
      version: 'detect',
    },
    polyfills: [
      // 解决Object is not iterable的error
      // 'Promise',
    ],
  },
};
