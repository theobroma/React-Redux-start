'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  _comment2.default.find().then(function (data) {
    res.send(data);
  });
});

router.post('/', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      selection = _req$body.selection,
      response = _req$body.response;

  var newComment = new _comment2.default({
    username: username,
    content: response,
    excerption: selection
  });
  newComment.save().then(function (data) {
    return res.json({ success: true, data: data });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

router.delete('/', function (req, res) {
  _comment2.default.remove().then(function () {
    return res.json({ success: true });
  }).catch(function (err) {
    return res.status(500).json({ error: err });
  });
});

exports.default = router;
//# sourceMappingURL=medium.js.map