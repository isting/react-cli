const path = require('path')

function resolve(src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  entry: {
    main: resolve('./src/index.js')
  },
  output: {
    filename: '[hash:6].main.js',
    publicPath: '/',
    path: resolve('build'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: []
          }
        }
      }
    ]
  },
  // plugins: [],
  // resolve: {},
  // server: {}
}