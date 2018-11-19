'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const glob = require('glob')
const PurifyCss = require('purifycss-webpack')

function resolve(strPath) {
  return path.join(__dirname, strPath)
}

module.exports = {
  entry: resolve("../src/index.js"),
  output: {
    publicPath: '',
    filename: '[hash:8].main.js',
    path: resolve('../dist')
  },
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
          use: ["css-loader", "postcss-loader"],
          // use: ["css-loader", {
          //   loader: 'postcss-loader',
          //   options: {
          //     pligins: [require('autoprefixer')]
          //   }
          // }]
          publicPath: '' // img public path  解决背景图片问题
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "postcss-loader", "less-loader"]
        })
      },
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 8196,
              outputPath: 'images',
              name: `img/[name].[hash:7].[ext]`
          }
      },
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 8196,
              outputPath: "images",
              name: `img/[name].[hash:7].[ext]`
          }
      }
    ],
    noParse(content) { // 不解析文件
      return /jquery|lodash/.test(content)
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../index.html"),
      filename: 'index.html',
      title: 'title webpack'
    }),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new ExtractTextPlugin('css/css.css'),
    new PurifyCss({
      paths: glob.sync(path.join(__dirname, '../*.html')) // 对应模板html
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".json"],
    alias: {
      "@": "src"
    }
  }
}