const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./src/graphql/index');
const cors = require('cors');
const taskRoutes = require('./src/routes/taskRoutes'); // If you use REST alongside GraphQL
//const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Adjust the origin if needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Optional: Use authentication middleware on specific routes
// app.use('/tasks', authMiddleware);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Optional: Use REST API routes
app.use('/api', taskRoutes);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
