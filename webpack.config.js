const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ['./eth-controller.ts', './btc-controller.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'webpackNumbers'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: /node_module/,
        loader: 'ts-loader' 
      }
    ]
  }
};