const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fse = require('fs-extra');
const moment = require('moment');
const webpack = require('webpack');

const entry = {
  'js/mo-shop-deps': './vendor.js',
  'js/mo-shop': './app.js',
};
const appManifest = JSON.parse(fse.readFileSync('./src/app.manifest'));

module.exports = {

  cache: true,

  context: path.resolve(__dirname, 'src/app'),

  entry,

  resolve: {
    alias: {
      //Use the ~ for access to aliases. Example: <img src="~images/logo.png" class="logo">
      'images': path.resolve(__dirname, "src/assets/images")
    },
    symlinks: false,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true, //stored in node_modules/.cache so delete that if any problems
          plugins: [
            ['angularjs-annotate', { 'explicitOnly' : true}]
          ]
        },
      }, {
        loader: 'eslint-loader',
        options: {
          cache: true, //stored in node_modules/.cache so delete that if any problems
          failOnWarning: false,
          failOnError: false
        }
      }]
    }, {
      test: /\.tpl\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.(scss|css)$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
      options: {
        publicPath: './fonts/',
        outputPath: './fonts/',
        name: '[name].[ext]?[hash]',
      }
    }, {
      test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
      loader: 'imports-loader?jQuery=jquery'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file-loader',
      options: {
        publicPath: './images/',
        outputPath: './images/',
        name: '[name].[ext]?[hash]',
      }
    },
    ]
  },

  // stats: 'normal', //Enable for more verbose output (useful for debugging)
  stats: {
    assets: false,
    children: false,
    chunkModules: false,
    chunks: false,
    maxModules: 0,
    modules: false,
    timings: true,
    reasons: true,
    colors: true,
    errorDetails: true
  },

  performance: { hints: false },

  plugins: [

    {
      apply: (compiler) => {
        //https://webpack.js.org/api/compiler-hooks/
        compiler.hooks.done.tap('MOAfterEmitPlugin', () => {
          if (!fse.existsSync(`${__dirname}/dist`)) {
            console.error('\n\nUnable to copy dist files, build failed? dist folder does not exist.\n');
            return;
          }

          //Add our app manifest to dist
          fse.writeFileSync(`${__dirname}/dist/app.manifest`, JSON.stringify(appManifest, null, 2));
        });
      }
    },

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlWebpackPlugin({
      template: './../index.html',
      inject: false, //Disable injection - our bootloader.js handles this work for us
    }),

    new CopyWebpackPlugin([{
      from: '../manifest.json'
    }, {
      from: './../assets'
    }, {
      from: '../bootloader.js',
      transform: function(content) {
        //Add the version from package.json into our appManifest
        const [major, minor, build] = process.env.npm_package_version.split('.');
        appManifest.version = {
          major: parseInt(major, 10),
          minor: parseInt(minor, 10),
          build: parseInt(build, 10),
          date: moment().format('YYYY-MM-DD'),
        };

        //Add our appManifest global
        const manifestGlobal = `var appManifest = ${JSON.stringify(appManifest, null, 2)};`;
        return manifestGlobal + content;
      }
    }])
  ]
};
