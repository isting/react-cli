/* const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(path) {
  return path.join(__dirname, path);
}
module.exports = {
  entry: {
    main: "../src/index.js"
  },
  output: {
    filename: '[hash:8].[name].js',
    publicPath: '/',
    path: resolve('../build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$}/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "env", "react" ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究')
  ]
  // resolve: {},
  // devServer: {}
} */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(strPath) {
  return path.join(__dirname, strPath)
}

module.exports = {
  entry: resolve("../src/index.js"),
  output: {
    publicPath: '/',
    filename: '[hash:8].main.js',
    path: '../build'
  },
  module: {
    relus: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "env", "react" ]
          }
        },
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {}
      //   }
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../index"),
      filename: 'index.html'
    }),
    new webpack.BannerPlugin("")
  ]
}