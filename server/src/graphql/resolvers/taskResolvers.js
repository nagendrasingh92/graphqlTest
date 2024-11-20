const { getAllTasks, addNewTask, removeTask } = require('../../services/taskService');

const taskResolvers = {
  getTasks: () => getAllTasks(),
  addTask: ({ text }) => addNewTask(text),
  deleteTask: ({ id }) => removeTask(id),
};

module.exports = taskResolvers;
