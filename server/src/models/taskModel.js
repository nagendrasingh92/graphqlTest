const fs = require('fs/promises');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, '../data/tasks.json');

// Helper function to read the JSON file
const readTasksFromFile = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

// Helper function to write to the JSON file
const writeTasksToFile = async (tasks) => {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
};

// Get all tasks
const getAllTasks = async () => {
  return await readTasksFromFile();
};

// Add a new task
const addNewTask = async (text) => {
  const tasks = await readTasksFromFile();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    text,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  await writeTasksToFile(tasks);
  return newTask;
};

// Remove a task by ID
const removeTask = async (id) => {
  const tasks = await readTasksFromFile();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  await writeTasksToFile(updatedTasks);
  return updatedTasks;
};

module.exports = { getAllTasks, addNewTask, removeTask };
