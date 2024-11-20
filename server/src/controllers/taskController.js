const { getAllTasks, addNewTask, removeTask } = require('../services/taskService');

// Controller to get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks); // Sending the tasks as a JSON response with status code 200
  } catch (error) {
    res.status(500).send({ error: error.message }); // Send the error message in a structured response
  }
};

// Controller to add a new task
const addTask = async (req, res) => {
  try {
    const { text } = req.body; // Destructure the text from the request body
    if (!text) {
      return res.status(400).send({ error: 'Task text is required' }); // Validation for missing text
    }
    const newTask = await addNewTask(text);
    res.status(201).json(newTask); // Return the newly added task with status code 201 (Created)
  } catch (error) {
    res.status(500).send({ error: error.message }); // Send the error message in a structured response
  }
};

// Controller to delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from route parameters
    const deletedTask = await removeTask(id);
    if (!deletedTask) {
      return res.status(404).send({ error: 'Task not found' }); // If task not found, return 404
    }
    res.status(200).json({ message: 'Task deleted successfully', deletedTask }); // Return a success message and the deleted task
  } catch (error) {
    res.status(500).send({ error: error.message }); // Send the error message in a structured response
  }
};

module.exports = { getTasks, addTask, deleteTask };
