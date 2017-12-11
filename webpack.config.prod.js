const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const production = {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};

module.exports = [
  merge(common, production, {
    entry: path.resolve(__dirname, './src/plugin.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      libraryTarget: 'window',
      library: 'VueFormJsonSchema',
    },
  }),
  merge(common, production, {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].min.js',
      libraryTarget: 'umd',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
];
