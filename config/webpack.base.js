const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve(strPath) {
  return path.join(__dirname, strPath)
}

module.exports = {
  entry: resolve("/src/index.js"),
  output: {
    publicPath: './',
    filename: '[hash:8].main.js',
    path: resolve('./build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "env", "react" ],
            plugins: ['transform-runtime']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "postcss-loader"]
          // use: ["css-loader", {
          //   loader: 'postcss-loader',
          //   options: {
          //     pligins: [require('autoprefixer')]
          //   }
          // }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "postcss-loader", "less-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("./index.html"),
      filename: 'index.html'
    }),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new ExtractTextPlugin('css/css.css')
  ],
  resolve: {
    alias: {
      "@": "src"
    }
  }
}