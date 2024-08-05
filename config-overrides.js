const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      "fs": false, // fs is typically not needed in browser environments
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
    };
    return config;
  }
);
