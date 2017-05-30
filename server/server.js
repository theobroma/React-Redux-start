import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import mongoose from 'mongoose';
import morgan from 'morgan';
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../etc/config.json');
const webpackConfig = require('../webpack.config');
// server routes
import medium from './routes/medium';

const app = express();
app.set('port', (process.env.PORT || 8080));
//MongoDB
const mongoUri = process.env.MONGOLAB_URI || `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});
//HMR
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler, { noInfo: true }));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(path.join(__dirname, 'public','build','favicon.png')));
app.use(express.static(path.join(__dirname, 'public', 'build')));

// All routes in the end
app.use('/api/medium', medium);

// Redirect all non api requests to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'build','index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
