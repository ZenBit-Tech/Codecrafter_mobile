module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules/**',
    'vite-env.d.ts',
    'vite.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier', 'typesafe'],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase'],
      },
    ],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-constant-condition': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'none' },
    ],
    camelcase: ['error', { properties: 'never' }],
    'spaced-comment': ['warn', 'always'],

    'react/forbid-component-props': ['error', { forbid: ['style'] }],
    'react/function-component-definition': 0,
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-relative-parent-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@nestjs/**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/require-default-props': 'warn',
    'typesafe/no-throw-sync-func': 'warn',
    'typesafe/no-await-without-trycatch': 'warn',
    'typesafe/promise-catch': 'error',
  },
  overrides: [
    {
      files: ['*.slice.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
};