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