const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [
  {
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
  }
];
