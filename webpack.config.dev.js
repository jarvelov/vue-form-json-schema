const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBase = require('./webpack.config.common');

module.exports = merge(webpackBase, {
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
  devtool: 'sourcemap',
});
