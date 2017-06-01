const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

//different output path for production and development
var outputPath = path.resolve(__dirname, 'server/public/build');
if (!isDevelopment) {
  outputPath = path.resolve(__dirname, 'dist/public/build');
}

const commonPlugins = require('./common/plugins');
const commonRules = require('./common/rules');

const configs = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  watch: isDevelopment,
  module: {
    rules: [...commonRules]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : null,
  plugins: [...commonPlugins,
    new CopyWebpackPlugin([
      { from: 'static/assets', to: outputPath  }
    ])
  ]
};

module.exports = configs;
