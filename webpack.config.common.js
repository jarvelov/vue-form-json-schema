const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.resolve(__dirname, './src'),
  externals: [nodeExternals()],
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
