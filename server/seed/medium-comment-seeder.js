/* eslint no-loop-func:0 */
const mongoose = require('mongoose');
const Comment = require('../models/comment');
const config = require('../../etc/config.json');

const mongoUri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
  if (error) console.error(error);
  else console.log('mongo connected');
});

const comments = [
  new Comment({
      username: 'John Doe',
      content: 'Icing gingerbread apple pie tiramisu tootsie roll icing tootsie roll halvah halvah',
      excerption: 'Donut icing marzipan marzipan chocolate cake jelly beans danish. Gummi bears powder sugar plum gummi bears macaroon liquorice chocolate cake marzipan tootsie roll.'
  }),
  new Comment({
      username: 'John Doe',
      content: 'Gummi bears dessert pie bonbon tootsie roll',
      excerption: 'This is the second selectable paragraph. Looking pretty good.'
  })
];

function exit() {
  mongoose.disconnect();
}

let done = 0;
for (let i = 0; i < comments.length; i++) {
  comments[i].save((err, result) => {
    done++;
    if (done === comments.length) {
      exit();
    }
  });
}
