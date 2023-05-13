import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
