'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var schema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  excerption: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = _mongoose2.default.model('Comment', schema);
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Schema, 'Schema', 'server/models/comment.js');

  __REACT_HOT_LOADER__.register(schema, 'schema', 'server/models/comment.js');
})();

;
//# sourceMappingURL=comment.js.map