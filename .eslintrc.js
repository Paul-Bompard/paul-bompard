module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    curly: ['error', 'all'],
    eqeqeq: ['error', 'smart'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'prefer-const': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Import [module] from lodash/[module] instead',
          },
          {
            name: '@emotion/styled',
            message: 'Please use @/utils/styled instead.',
          },
          {
            // react-env has been wrapped in a utils function because their types are wrong
            name: '@beam-australia/react-env',
            message: 'Please use @/utils/wrapped-env instead.',
          },
        ],
      },
    ],
    'react/no-string-refs': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jest-formatting/padding-around-describe-blocks': 2,
    'jest-formatting/padding-around-test-blocks': 2,
    'no-return-await': 'error',
  },
  root: true,
  plugins: ['jsx-a11y', 'jest-formatting', 'unused-imports'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/prefer-optional-chain': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};
