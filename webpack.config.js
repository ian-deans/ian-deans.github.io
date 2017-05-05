const path = require('path')

module.exports= {
  entry: "./browser/index.js",
  output: {
    path: path.join(__dirname, "/public/javascript"),
    filename: "app.bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: [ "env", "react" ]
        },
        exclude: /node_modues/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: [ "env", "react" ],
          plugins: [
            ["transform-class-properties", { "spec": true }]
          ]
        },
        exclude: /node_modules/
      }
    ]
  }
}




/*
 
 module.exports = {
 entry: "./app/src/app.js",
 output: {
 path: "./webserver/public",
 filename: "app.bundle.js"
 },
 watch: true,
 module: {
 loaders: [
 {
 test: /.js$/,
 exclude: /node_modules/,
 loader: 'babel-loader',
 query: {
 presets: [ 'env', 'react' ]
 }
 },
 {
 test: /\.css$/,
 loader: "style-loader!css-loader"
 }
 ]
 }
 }


 */