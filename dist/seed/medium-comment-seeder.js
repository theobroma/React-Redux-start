'use strict';

/* eslint no-loop-func:0 */
var mongoose = require('mongoose');
var Comment = require('../models/comment');
var config = require('../../etc/config.json');

var mongoUri = 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name;

mongoose.connect(mongoUri, function (error) {
  if (error) console.error(error);else console.log('mongo connected');
});

var comments = [new Comment({
  username: 'John Doe',
  content: 'Icing gingerbread apple pie tiramisu tootsie roll icing tootsie roll halvah halvah',
  excerption: 'Donut icing marzipan marzipan chocolate cake jelly beans danish. Gummi bears powder sugar plum gummi bears macaroon liquorice chocolate cake marzipan tootsie roll.'
}), new Comment({
  username: 'John Doe',
  content: 'Gummi bears dessert pie bonbon tootsie roll',
  excerption: 'This is the second selectable paragraph. Looking pretty good.'
})];

function exit() {
  mongoose.disconnect();
}

var done = 0;
for (var i = 0; i < comments.length; i++) {
  comments[i].save(function (err, result) {
    done++;
    if (done === comments.length) {
      exit();
    }
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mongoUri, 'mongoUri', 'server/seed/medium-comment-seeder.js');

  __REACT_HOT_LOADER__.register(comments, 'comments', 'server/seed/medium-comment-seeder.js');

  __REACT_HOT_LOADER__.register(exit, 'exit', 'server/seed/medium-comment-seeder.js');

  __REACT_HOT_LOADER__.register(done, 'done', 'server/seed/medium-comment-seeder.js');
})();

;
//# sourceMappingURL=medium-comment-seeder.js.map