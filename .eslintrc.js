module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'sort-imports-es6-autofix', 'eslint-plugin-import'],
  parser: '@typescript-eslint/parser',
  rules: {
    eqeqeq: 2,
    'no-console': 2,
    'prefer-const': 2,
    'import/newline-after-import': 2,
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
      },
    ],
    'react/jsx-uses-vars': 2,
    'react/no-unused-prop-types': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
