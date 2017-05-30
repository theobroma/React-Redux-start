import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const schema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  excerption: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', schema);
