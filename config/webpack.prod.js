'use strict'

const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  optimization: { // 提取公共代码
    splitChunks: {
        cacheGroups: {
            commons: {
              chunks: "initial",
              minChunks: 2,//最小重复的次数
              minSize: 0//最小提取字节数
            },
            vendor: {
              test: /node_modules/,
              chunks: "initial",
              name: "vendor",
            }
        }
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist', { // {文件名即可 root 路径}
      root: path.join(__dirname, "../"),
      verbose: true,
      dry: false
    }),
  ]
})



// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const es3ifyPlugin = require('es3ify-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');