const path = require('path');
const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      }
    ]
  }
}