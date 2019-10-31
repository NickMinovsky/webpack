const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // main entry file
  output: {
    path: path.join(__dirname, "dist"), // the path, with require('path') we can target __dirname + our folder [this can't be a local path; "./dist/"]
    filename: "app.bundle.js" // what will the build file be called
  },
  module: {
    // using babel to cofingure the new js code to recompile to an old js code so we can run on any browser/envieroment
    rules: [
      // configure the loader - babel
      {
        test: /\.js$/, // all fiels ending with .js
        loader: "babel-loader", // our loader
        exclude: /node_modules/, // don't compile node_modules
        options: {
          // passing options to the loader
          presets: ["@babel/preset-env", "@babel/preset-react"] // babel/preset-env transforms new to old js syntax and makes bundles smaller + react preset to parse JSX to JS
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
