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
      filename: 'vue-form-json-schema.umd.bundle.js',
      libraryTarget: 'window',
      library: 'VueFormJsonSchema',
    },
  }),
  merge(common, production, {
    entry: path.resolve(__dirname, './src/index.js'),
    externals: {
      ajv: 'ajv',
      lodash: 'lodash',
      vue: 'vue',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.umd.js',
      libraryTarget: 'umd',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
  merge(common, production, {
    entry: path.resolve(__dirname, './src/index.js'),
    externals: {
      ajv: 'ajv',
      lodash: 'lodash',
      vue: 'vue',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.common.js',
      libraryTarget: 'commonjs2',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
  merge(common, production, {
    entry: path.resolve(__dirname, './src/index.js'),
    externals: {
      ajv: 'ajv',
      lodash: 'lodash',
      vue: 'vue',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.esm.js',
      libraryTarget: 'commonjs2',
      library: 'VueFormJsonSchema',
      umdNamedDefine: true,
    },
  }),
];
