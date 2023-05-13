import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(task.id)} />
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
