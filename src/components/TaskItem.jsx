import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <span style={{ flexGrow: 1 }}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
