module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.scss$': 'jest-scss-transform'
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  // jest 27 changes the default environment to node instead of jsdom
  // https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
