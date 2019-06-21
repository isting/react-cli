'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DiyPlugin = require('./plugins')

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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [ "env", "react" ],
            plugins: ['transform-runtime']
          }
        },
        { 
          loader: path.resolve('./config/loaders/index.js'),
          options: {
            params: '我是一个参数',
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/, // ts转es6才可以优化 
        use: {
          loader: "ts-loader"
        },
        exclude: /node_modules/
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
    new webpack.DefinePlugin({ // 配置全局常量
      __isDevelopment__: JSON.stringify(process.env.NODE_DNV === "development"),
      "process.env.NODE_DNV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      template: resolve("../index.html"),
      filename: 'index.html',
      title: 'title webpack',
      favicon: resolve("../src/assets/favicon.ico")
    }),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new CopyWebpackPlugin([{
      from: resolve('../src/assets'),
      to: resolve('../dist/assets'),
    }]),
    new DiyPlugin({params: '我是参数'})
  ],
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx", ".css", "less", ".json"],
    alias: {
      "@": resolve("src"),
      utils: resolve("src/utils")
    },
    modules: ['node_modules']
  }
}