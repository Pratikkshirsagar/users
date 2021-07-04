const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  user: { type: Schema.Type.ObjectId, ref: 'user' },
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;
