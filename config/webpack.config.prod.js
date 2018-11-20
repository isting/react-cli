'use strict'

const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.config.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const glob = require('glob')
const PurifyCss = require('purifycss-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 图形显示打包体积大小


module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  optimization: { // 提取公共代码 （优化）
    splitChunks: { // （代码块）
        cacheGroups: { // (缓存组)
            commons: { // （公共块）
              chunks: "initial",
              minChunks: 2,//最小重复的次数
              minSize: 0//最小提取字节数
            },
            vendor: { // （将第三方模块提取出来）
              test: /node_modules/,
              chunks: "initial",
              name: "vendor",
            },
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
        }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
        // publicPath: '' // img public path  解决背景图片问题
      },
      {
        test: /\.less$/,
        use: [
           MiniCssExtractPlugin.loader, // js : css
          //  "style-loader",
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', { // {文件名即可 root 路径}
      root: path.join(__dirname, "../"),
      verbose: true,
      dry: false
    }),
    new PurifyCss({
      paths: glob.sync(path.join(__dirname, '../*.html')) // 对应模板html
    }),
    new UglifyJsPlugin({ // 摇树优化
      test: /.(js|ts)&/
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "server"
    // })
  ]
})



// webpack-parallel-uglify-plugin 优化项目  多线程压缩
// 'circular-dependency-plugin  查找循环依赖