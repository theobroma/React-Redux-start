var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || 'development';
var isDevelopment = NODE_ENV === 'development';
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

//different output path for production and development
var outputPath = path.resolve(__dirname, 'server/public/build');
if (!isDevelopment) {
  outputPath = path.resolve(__dirname, 'dist/public/build');
}

var configs = {
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
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      exclude: [/node_modules/, /public/]
    },{
      test: /\.(scss|sass)$/, // files ending with .scss or .sass
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      })),
    },{
      test: [/\.jsx?$/, /\.es6$/],
      include: path.resolve('./../'),
      exclude: [/node_modules/, /bower_components/],
      /*loaders: ['react-hot', 'babel']*/
      /* loaders: ["babel-loader", "eslint-loader"]*/
      loader: 'babel-loader'
    },{
      test: /\.svg/,
      loader: 'url-loader',
      options: {
        limit: 26000,
        mimetype: 'image/svg+xml'
      }
    },{
      test: /.*\.(gif|png|jpe?g)$/i,
      loader: 'url-loader?limit=10000&name=images/[name]-[hash:base64:10].[ext]'
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name]-[hash:base64:10].[ext]'
    },{
      test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=icons/[name]-[hash:base64:10].[ext]'
    },{
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : null,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([
      { from: 'static/assets', to: outputPath  }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEVTOOLS__: true,
      DEVELOPMENT: true,
      PRODUCTION: false
    }),
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
  ]
};

if (!isDevelopment) {
  configs.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: { warnings: false },
      sourceMap: false
    })
  )
}

module.exports = configs;
