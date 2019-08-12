// jest.lib.config.js
const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/auto-unsubscribe'],
};
