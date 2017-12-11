const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, './src')],
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      paths: true,
    }),
  ],
};
