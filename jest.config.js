module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-splash-screen|react-native-config))',
  ],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/scripts/**',
    '!**/coverage/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/styles/**',
    '!**/types/**',
    '!**/*.styles.ts',
    '!App.tsx',
  ],
  rootDir: './',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
