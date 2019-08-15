const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx', // weback will use this by default
  output: {
    path: path.join(__dirname, 'dist'), // __dirname will give us the root of our project
    filename: 'app.bundle.js' // name for output file
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // file extensions that webpack can use
  },
  module: {
    rules: [
      {
        test: /(\.ts$|\.tsx?$)/,
        loader: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Public/index.html'
    })
  ]
}
