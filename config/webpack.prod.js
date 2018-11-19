'use strict'

const merge = require('webpack-merge');
const common = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin('../dist')
  ]
})



// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const es3ifyPlugin = require('es3ify-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');