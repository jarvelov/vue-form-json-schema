const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
