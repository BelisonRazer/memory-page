module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            { loader: 'style-loader', options: { base: 1000 } },
            { loader: 'css-loader', options: { import: true } },
          ]
        },
        {
          test: /\.pcss$/i,
          use: [
            { loader: 'style-loader', options: { base: 1000 } },
            { loader: 'css-loader', options: { import: true } },
            { loader: 'postcss-loader', 
              options: {
                config: {
                  path: './webpack'
                },
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader?name=fonts/[name].[ext]',
          ],
        },
      ]
    },
  }
}
