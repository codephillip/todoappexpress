var Task = require('../models/task');
var Comment = require('../models/comment');
var async = require('async');
var utils = require('../utils');

exports.get_all_tasks = (req, res) => {
    Task.find()
        .exec((err, tasks) => {
            if (err) {
                next(err);
            }
            res.json({'tasks': tasks});
        });
}

exports.get_task = (req, res, next) => {
    // async.parallel returns the results inorder of who finished first
    async.parallel({
        task: (callback) => {
            Task.findById(req.params.id).exec(callback);
        },
        comments: (callback) => {
            Comment.find({'task': req.params.id}).exec(callback);
        }
    }, (err, result) => {
        if (err)
            next(err)
        res.json({
            'task': result.task,
            'comments': result.comments
        })
    });
}

exports.create_task = (req, res, next) => {
    var task = new Task({
        'title': req.body.title,
        'message': req.body.message,
        'status': req.body.status != null ? req.body.status : utils.status.TODO,
        'due_date': req.body.due_date
    });

    task.save((err) => {
        if (err)
            next(err);
        res.json({'task:': task});
    });
}