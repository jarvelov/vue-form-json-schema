const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

const production = {
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
};

module.exports = [
  merge(common, production, {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.umd.js',
      libraryTarget: 'umd',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
  merge(common, production, {
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.esm.js',
      libraryTarget: 'commonjs2',
      library: 'VueFormJsonSchema',
    },
  }),
];
