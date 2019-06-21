'use strict'

const path = require('path')
const merge = require('webpack-merge')
const common = require("./webpack.config.base.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              localIdentName: '[path][hash:base64:5]',
              module: true
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              importLoaders: 1,
              localIdentName: '[path][hash:base64:5]',
              module: true
            }
          },
          {
            loader: 'less-loader',
          }],
          exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: '8082',
    inline: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    compress: true,
    proxy: {
      // 'https://sixting.com/login'
      // '/': 'https://sixting.com/'  //  请求/login即可
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(), // cli 遇到错误代码将不会退出 不输出错误日志 
    // new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join("index.html"),
      filename: 'index.html',
      title: 'webpack',
    })
  ],
})

// optimize-css-assets-webpack-plugin