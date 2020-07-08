var mongoose = require('mongoose');
var Schema = mongoose.Schema

// timestamps adds createdAt, updatedAt
var CommentSchema = Schema({
    'username': {type: String, required: true},
    'text': {type: String, required: true},
    'task': {type: Schema.ObjectId, ref: 'Task'}
}, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);