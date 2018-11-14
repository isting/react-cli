const merge = require('webpack-merge')
const common = require("./webpack.base.js");

module.exports = merge(common, {
  // mode: 'development',
  devServer: {
    contentBase: './build',
    port: '6060',
    inline: true,
    historyApiFallback: true,
    hot: true,
    open: true
  }
})