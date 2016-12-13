'use strict'

const webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: { main: ["whatwg-fetch", "webpack-hot-middleware/client", "./main.js"] },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: [["env", {
            "useBuiltIns": true,
            "modules": false,
          }]],
        },
      },
    ]}, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }, {
      test: /\.pug$/,
      use: ["pug-loader"],
    },]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  node: { fs: "empty" },
};
