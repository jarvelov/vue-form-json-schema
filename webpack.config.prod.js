const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

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
      filename: 'vue-form-json-schema.browser.bundle.js',
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
    },
  }),
  merge(common, production, {
    entry: path.resolve(__dirname, './src/index.js'),
    externals: {
      ajv: 'ajv',
      lodash: 'lodash',
      vue: 'vue',
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
          ],
          plugins: [
            babelPluginTransformObjectRestSpread,
          ],
        },
      }],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vue-form-json-schema.esm.js',
      libraryTarget: 'commonjs2',
      library: 'VueFormJsonSchema',
    },
  }),
];
