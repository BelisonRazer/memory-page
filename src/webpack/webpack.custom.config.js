const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const dev = require('./webpack-development.config.js');
const prod = require('./webpack-production.config.js');

const babelLoader = require('./babelLoader');
const htmlLoader = require('./htmlLoader');
const cssLoader = require('./cssLoader');
const imageLoader = require('./imageLoader');
// const devServer = require('./devServer');
// const resolve = require('./resolveModule');

const common = merge([
  {
    entry: {
      app: './react/index.js'
    },
  },
  
  // resolve(),
  babelLoader(),
  htmlLoader(),
  cssLoader(),
  imageLoader()
])

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      prod(),
    ])
  }

  if (env === 'development') {
    return merge([
      common,
      // devServer(),
      dev(),
    ])
  }
}
