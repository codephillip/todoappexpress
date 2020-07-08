var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = Schema({
    'title': {type: String, required: true, maxlength: 100},
    'message':{type: String, required: true, maxlength: 300},
    'due_date' :{type: Date, required: true}
});

module.exports = mongoose.model('Task', taskSchema);