var express = require('express');
var router = express.Router();
var taskController = require('../controllers/taskController')

router.get('/tasks', taskController.get_all_tasks);

module.exports = router;
