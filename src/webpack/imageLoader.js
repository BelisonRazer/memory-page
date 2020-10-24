const path = require('path');

module.exports = function (env) {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, '../components/icon'),
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: path.resolve(__dirname, '../components/icon'),
          loader: "url-loader",
          options: {
            esModule: false
          }
        }
      ]
    }
  }
}
