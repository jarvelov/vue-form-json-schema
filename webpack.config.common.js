const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      cloning: true,
      caching: true,
      paths: true,
    }),
  ],
};
