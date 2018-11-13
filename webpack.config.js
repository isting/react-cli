const path = require('path')

function resolve(src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: resolve('./src/index.js')
  },
  output: {
    filename: '[hash:6].main.js',
    publicPath: '/',
    path: resolve('build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: resolve('node_modules'),
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