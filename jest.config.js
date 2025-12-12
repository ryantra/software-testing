export default {
  testEnvironment: 'node',
  transform: {},
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/.internal/**',
    '!src/**/*.test.js',
    '!src/__tests__/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  testMatch: ['**/__tests__/**/*.test.js', 
              '**/?(*.)+(spec|test).js'
  ],
  moduleFileExtensions: ['js', 'json'],
  setupFilesAfterEnv: ['jest-extended/all']
};