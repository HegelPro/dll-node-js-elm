var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader',
      }
    ]
  },

  devServer: {
    inline: true,
    stats: 'errors-only'
  }
};
