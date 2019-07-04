const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ['./src/index.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ('dist/'),
    libraryTarget: 'umd',
    library: 'myLib'
  },
  devServer: {
    overlay: true
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