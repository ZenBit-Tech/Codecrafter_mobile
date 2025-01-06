module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
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
  plugins: ['react-refresh', 'prettier', 'typesafe', 'import'],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
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
    camelcase: ['warn', { properties: 'never' }],
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
    'import/no-cycle': 0,
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
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/require-default-props': 'warn',
    'typesafe/no-throw-sync-func': 'off',
    'typesafe/no-await-without-trycatch': 'warn',
    'typesafe/promise-catch': 'error',
    'react/require-default-props': 'off',
  },
  overrides: [
    {
      files: ['*.slice.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['src/constants/**/*.{js,ts,tsx}'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
            types: ['boolean', 'string', 'number'],
            modifiers: ['const'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE', 'PascalCase'],
          },
        ],
      },
    },
  ],
};
