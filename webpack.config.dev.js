const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.common');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
});
