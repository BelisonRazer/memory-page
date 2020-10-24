const path = require('path');

module.exports = function (env) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, '../components')
          ],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
}
