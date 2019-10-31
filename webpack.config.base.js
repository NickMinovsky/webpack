const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // the path, with require('path') we can target __dirname + our folder [this can't be a local path; "./dist/"]
    filename: 'app.bundle.js' // what will the build file be called
  },
  module: {
    // using babel to cofingure the new js code to recompile to an old js code so we can run on any browser/envieroment
    rules: [
      // configure the loader - babel
      {
        test: /\.js$/,
        loader: 'babel-loader', // our loader
        exclude: /node_modules/, // don't compile node_modules
        options: {
          // passing options to the loader
          presets: [
            [
              '@babel/preset-env',
              {
                // polyfills for targeted browsers
                targets: [
                  'last 2 versions',
                  'not dead',
                  'not < 2%',
                  'not ie 11'
                ],
                useBuiltIns: 'entry'
              }
            ],
            '@babel/preset-react'
          ], // babel/preset-env transforms new to old js syntax and makes bundles smaller + react preset to parse JSX to JS
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import'
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // use = multiple loaders
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
