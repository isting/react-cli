const path = require('path')
const merge = require('webpack-merge')
const common = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './build'),
    port: '6060',
    inline: true,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})