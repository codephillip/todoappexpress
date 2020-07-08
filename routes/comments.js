var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');


router.post('/comments', commentController.create_comment);
router.get('/comments', commentController.get_comments);

module.exports = router;