const path = require('path');
const output = path.join(__dirname, "/dist");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Development',
    filename: './index.html'
  }),
];

module.exports = function () {
  return {
    mode: 'production',
    watch: false,
    output: {
      path: output,
      filename: 'index-bundle.min.js',
      publicPath: '/',
    },
    devtool: false,
    plugins: [
      ...plugins,
      new webpack.DefinePlugin({
        isProd: true
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })]
    }
  }
};
