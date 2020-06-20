module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'react/jsx-filename-extension': [2, {
      'extensions': ['.jsx', '.tsx']
    }],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        custom: 'ignore',
        exceptions: [''],
      },
    ],
    'react/prop-types': [2, { ignore: ['children'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'never',
        groups: [
          '/^react/',
          'module',
          '/^(models|routes|store)/',
          '/^types/',
          '/^(assets|components|view)/',
          '/^(shared|styles)/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc', ignoreCase: true
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': ['error'],
    semi: 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  }
};
