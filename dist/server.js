'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('../etc/config.json');

var _config2 = _interopRequireDefault(_config);

var _medium = require('./routes/medium');

var _medium2 = _interopRequireDefault(_medium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server routes
var app = (0, _express2.default)();

app.set('port', process.env.PORT || 8080);
_mongoose2.default.Promise = global.Promise;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name;

/* mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);*/

_mongoose2.default.connect(mongoUri, function (error) {
  if (error) console.error(error);else console.log('mongo connected');
});

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, 'public', 'build', 'favicon.png')));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public', 'build')));

// All routes in the end
app.use('/api/medium', _medium2.default);

// Redirect all non api requests to the index
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'public', 'build', 'index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
//# sourceMappingURL=server.js.map