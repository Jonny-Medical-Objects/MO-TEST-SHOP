const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require("path");

module.exports = webpackMerge(commonConfig, {
  mode: 'development',

  output: {
    path: __dirname + './dist',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 5000,
    hot: true,
    open: true,
    liveReload: true,
  }

});
