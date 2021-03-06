module.exports = {
      moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
      ],
      transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
        '($ol).+\\.js$': 'babel-jest',
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
          '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/$1',
          '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
      snapshotSerializers: [
        'jest-serializer-vue',
      ],
      testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
      ],
      testURL: 'http://localhost/',
      collectCoverage: true,
      coverageReporters: [
          'json',
          'html',
      ],
      collectCoverageFrom: [
          '**/*.{js,vue}',
          '!**/node_modules/**',
      ],
      coverageDirectory: '<rootDir>/tests/unit/coverage',
      coveragePathIgnorePatterns: [
          '<rootDir>/node_modules',
      ],
      transformIgnorePatterns: ['node_modules/(?!(ol)/)'],
      moduleDirectories: ['node_modules', 'src'],
}
