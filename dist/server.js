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

var _medium = require('./routes/medium');

var _medium2 = _interopRequireDefault(_medium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../etc/config.json');
// server routes


var app = (0, _express2.default)();
app.set('port', process.env.PORT || 8080);
//MongoDB
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name;
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(mongoUri, function (error) {
    if (error) console.error(error);else console.log('mongo connected');
});
//HMR
// we only want hot reloading in development
if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpackConfig = require('../webpack.config');

    var compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler, { noInfo: true }));
} else {
    console.log('PRODUCTION ENVIRONMENT');
    //Production needs physical files! (built via separate process)
}

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
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', 'server/server.js');

    __REACT_HOT_LOADER__.register(mongoUri, 'mongoUri', 'server/server.js');
})();

;
//# sourceMappingURL=server.js.map