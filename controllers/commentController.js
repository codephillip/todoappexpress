var Comment = require('../models/comment');

exports.create_comment = (req, res, next) => {
    var comment = new Comment({
        'username': req.body.username,
        'text': req.body.text,
        'task': req.body.task,
    });

    comment.save((err) => {
        if (err)
            next(err);
        res.json({'comment': comment});
    });
}

exports.get_comments = (req, res, next) => {
    Comment.find().exec((err, comments) => {
        if (err)
            next(err);
        res.json({'comments': comments});
    });
}