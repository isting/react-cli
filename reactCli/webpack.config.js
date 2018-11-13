const webpack = require('webpack');
const path = require('path');

module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: '8088',
    inline: true,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin('版权所有，翻版必究')
  ]
    
  // performance: {
  //   hints: dev ? false : 'warning'
  // }
}



// 一个数据字符串  两个以及以上数组  需要配置 对象
// module: {
//   rules: [
//     {
//       test: '',
//       loader: '',
//       use: [],
//       include/exclude: [], // 只解析/不解析
//       options: {},
//       noParse: /jquery|chartjs/
//       noParse: (content) => {
//         return /jquery|chartjs/.test(content); // 忽略解析jquery chartjs
//       }
//     }
//   ]
// }

// {
//   test: /\.(js|jsx)$/,
//   use: {
//     loader: 'babel-loader',
//     options: [
//       'env', 'react'
//     ]
//   },
//   exclude: /node_modules/
// }