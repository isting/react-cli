'use strict'

const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const glob = require('glob')
// const PurifyCss = require('purifycss-webpack')

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  plugins: [
    // new PurifyCss({ // 那所有css都清空了
    //   paths: glob.sync(path.join(__dirname, '../src/*.html'))
    // }),
    new CleanWebpackPlugin('../dist', {
      // root: __dirname,
      // verbose: true,
      // dry: false
    }),
  ]
})



// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const es3ifyPlugin = require('es3ify-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');