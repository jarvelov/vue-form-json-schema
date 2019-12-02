const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = [
  merge(common, {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.umd.js',
      libraryTarget: 'umd',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
  merge(common, {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'inline-source-map',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.esm.js',
      libraryTarget: 'commonjs2',
    },
  }),
];
