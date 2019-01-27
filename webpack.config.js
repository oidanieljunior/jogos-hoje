const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './javascript/src/js/script.js'],
  output: {
    path: path.resolve(__dirname, './javascript/'),
    filename: 'main.js',
  },
};
