const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      // node_modules下的js代码不可以用babel编译，所以我们js和jsx分开写
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')],
      },
      {
        test: /\.styl(us)?$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
}
