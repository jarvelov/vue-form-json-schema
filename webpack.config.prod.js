const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const babelPluginLodash = require('babel-plugin-lodash');

const production = {
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: 'source-map',
  externals: {
    ajv: 'ajv',
    lodash: 'lodash',
    vue: 'vue',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
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
            babelPluginLodash,
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
