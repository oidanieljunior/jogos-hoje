const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './javascript/src/js/script.js'],
  output: {
    path: path.resolve(__dirname, './javascript/'),
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }],
  },
};
