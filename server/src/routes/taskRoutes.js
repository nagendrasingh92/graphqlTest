const express = require('express');
const { getTasks, addTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

// Define REST endpoints if needed
router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
