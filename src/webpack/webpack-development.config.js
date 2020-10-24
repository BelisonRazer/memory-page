const path = require('path');
const output = path.join(__dirname, "/dist");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Development',
    filename: './index.html'
  }),
];
plugins.push(new CleanWebpackPlugin());

module.exports = function () {
  return {
    mode: 'development',
    watch: true,
    output: {
      path: output,
      filename: 'index-bundle.js',
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    plugins: [
      ...plugins,
      new webpack.DefinePlugin({
        isProd: false
      })
    ],
    optimization: {},
  }
}

    // "start": "webpack-dev-server --mode development --open --hot",
    // "build": "webpack --mode production"