var Task = require('../models/task')


exports.get_all_tasks = (req, res) => {
    Task.find()
        .exec((err, tasks) => {
            if (err) {
                return next(err);
            }
            res.json({'tasks': tasks});
        });
}

exports.create_task = (req, res, next) => {
    var task = new Task({
        'title': req.body.title,
        'message': req.body.message,
        'due_date': req.body.due_date
    });

    task.save((err) => {
        if (err)
            next(err);
        res.json({'task:': task});
    });
}