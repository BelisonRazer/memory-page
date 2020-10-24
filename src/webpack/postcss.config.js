module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true,
            }
          }
        ]
      }),
      require('postcss-for'),
      require('postcss-nested'),
      require('postcss-console')
    ],
  ],
};
