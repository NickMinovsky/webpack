const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 1234
  },
  // parse JS for chrome dev tools on dev build only
  devtool: 'source-map'
});
