const path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.common');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
});
