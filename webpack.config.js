const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: './eth-controller.ts',
  output: {
    filename: 'bundle.js',
    library: 'myLib',
    libraryTarget: 'umd'
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
