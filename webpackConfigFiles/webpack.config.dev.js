const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPlugins = require('./common/plugins');
const commonRules = require('./common/rules');

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

//different output path for production and development
const outputPath = path.resolve(__dirname, 'server/public/build');

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
  watch: true,
  module: {
    rules: [...commonRules]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  devtool: 'cheap-module-source-map',
  plugins: [...commonPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new CopyWebpackPlugin([
      { from: 'static/assets', to: outputPath  }
    ]),
    new webpack.DefinePlugin({
      __DEVTOOLS__: true,
      DEVELOPMENT: true,
      PRODUCTION: false
    })
  ]
};

module.exports = configs;
