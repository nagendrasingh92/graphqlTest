const { buildSchema } = require('graphql');

const taskSchema = buildSchema(`
  type Task {
    id: ID!
    text: String!
  }

  type Query {
    getTasks: [Task!]!
  }

  type Mutation {
    addTask(text: String!): Task
    deleteTask(id: ID!): Task
  }
`);

module.exports = taskSchema;
