var express = require('express');
var router = express.Router();
var taskController = require('../controllers/taskController')

router.get('/tasks', taskController.get_all_tasks);
router.post('/tasks', taskController.create_task);

module.exports = router;
