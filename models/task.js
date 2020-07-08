var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utils = require('../utils');

var taskSchema = Schema({
    'title': {type: String, required: true, maxlength: 100},
    'message': {type: String, required: true, maxlength: 300},
    'status': {
        type: String, required: true, enum: [
            utils.status.TODO,
            utils.status.DOING,
            utils.status.DONE,
            utils.status.OVERDUE]
    },
    'due_date': {type: Date, required: true}
});

module.exports = mongoose.model('Task', taskSchema);