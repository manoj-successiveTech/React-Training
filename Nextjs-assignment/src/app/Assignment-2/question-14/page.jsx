// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

'use client'
import React, { useState, useCallback } from 'react';
import '@/app/styles/welcome2.css';

const Page = () => {
  const initialTasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
     { id:4, text: 'Task 4', completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const completeTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  const resetTasks = useCallback(() => {
    setTasks(initialTasks);
  }, []);

  const allTasksCompleted = tasks.every(task => task.completed);

  return (
    <>
    <div>Question-14</div>
    <div>create a component that displays a list of tasks.Each task has a "Complete" button.
            Implement a feature where clicking the "Complete" button marks the task as completed.
            Use the useCallback hook to create dynamic callback functions for each task.
            Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.</div>

    <div className="container">
      <h1>Task List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <button onClick={() => completeTask(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
      {allTasksCompleted && (
        <button className="reset-button" onClick={resetTasks}>Reset</button>
      )}
    </div>
    </>
  );
};

export default Page;