const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build",
  },
  module:{
    rules:[
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
           test: /\.(png|svg|jpg|gif)$/,
           use: [
                       'url-loader'
                     ]
       }
]},
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.resolve('./public/index.html'),
    }),
  ]
};


    