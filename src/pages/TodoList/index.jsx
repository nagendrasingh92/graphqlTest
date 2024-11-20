import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS } from '../../graphql/queries';
import { ADD_TASK, DELETE_TASK } from '../../graphql/mutations';
import TaskItem from '../../components/TaskItem';

const TodoList = () => {
  const { data, refetch } = useQuery(GET_TASKS);
  const [addTask] = useMutation(ADD_TASK, { onCompleted: () => refetch() });
  const [deleteTask] = useMutation(DELETE_TASK, { onCompleted: () => refetch() });
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    console.log('test', newTask)
    addTask({ variables: { text: newTask } });
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    deleteTask({ variables: { id } });
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {data?.getTasks?.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
