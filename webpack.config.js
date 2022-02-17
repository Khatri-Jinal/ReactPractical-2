const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// eslint-disable-next-line no-undef
module.exports = {
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist')
  },
  // eslint-disable-next-line no-undef
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    // inline: true,
    //port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
