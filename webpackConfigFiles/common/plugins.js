const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  new ProgressBarPlugin({
    format: `  build [:bar] ${':percent'.bold.green} (:elapsed seconds)`,
    clear: true
  }),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new HtmlWebpackPlugin({
    template: './static/index.html',
    inject: 'body'
  }),
  new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
  new webpack.LoaderOptionsPlugin({
    test: /\.css/,
    options: {
      postcss: [
        autoprefixer({
          browsers: ['last 3 version', 'ie >= 10']
        })
      ]
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];
