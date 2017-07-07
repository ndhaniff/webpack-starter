//requiring path
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {

  // define entry point
  entry: './src/script-1.js',

  // define output point
  output: {
    path: path.resolve("./dist"),
    filename: 'bundle.js'
  },

//define module to use
  module:{
    rules: [
    // babel loader to translate es2015 code
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        }
    },
    // css,sass loader
    {
      test: /\.scss$/,
     use: ExtractTextPlugin.extract({
       fallback: "style-loader",
       use: [
            "css-loader",
            'sass-loader'
            ],
       publicPath: "/dist"
      })
    },
    // file loader
    {
      test: /\.(png|gif|svg|jpg|jpeg)$/,
      use: 'file-loader?name=[name].[ext]&outputPath=images/'
    }
  ]

  }, //end module

//plugins
// html template
plugins: [new htmlWebpackPlugin({
  title: "nd project",
  template: './src/index.html'
}),
//extract css
new ExtractTextPlugin({
  filename: 'style.css',
  disable: false,
  allChunks: true
})] //end plugin
 }
// end export
