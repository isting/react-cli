'use strict'

const path = require('path')
const merge = require('webpack-merge')
const common = require("./webpack.config.base.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
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
    new webpack.HotModuleReplacementPlugin()
  ]
})