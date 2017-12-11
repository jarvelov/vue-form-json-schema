const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, './src')],
      loader: 'babel-loader',
    }],
  },
  externals: {
    ajv: 'ajv',
    // lodash: 'lodash',
    vue: 'vue',
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      paths: true,
    }),
  ],
};
