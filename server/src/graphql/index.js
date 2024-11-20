const taskSchema = require('./schema/taskSchema');  // Import the task schema
const taskResolvers = require('./resolvers/taskResolvers');  // Import the task resolvers

// Export the schema and resolvers together
module.exports = {
  schema: taskSchema,
  root: taskResolvers,
};
