const Task = require('../models/taskModel');

// Business logic for handling task operations
const getAllTasks = async () => {
  // Use the model function to read all tasks from the JSON file
  return await Task.getAllTasks();
};

const addNewTask = async (text) => {
  // Use the model function to add a new task to the JSON file
  return await Task.addNewTask(text);
};

const removeTask = async (id) => {
  // Use the model function to remove a task from the JSON file by ID
  return await Task.removeTask(id);
};

module.exports = { getAllTasks, addNewTask, removeTask };
