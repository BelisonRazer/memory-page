module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: { loader: 'html-loader' }
        }
      ]
    }
  }
}
