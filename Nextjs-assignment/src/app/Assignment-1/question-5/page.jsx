// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.


'use client'
import React from 'react';
import styles from '@/app/styles/welcome.css' // Adjust the path if necessary

const TaskList = ({ tasks }) => {
  return (
    <div className="taskListContainer">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="taskItem">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const tasks = [
    { title: 'Task 1', description: 'This is the Task 1' },
    { title: 'Task 2', description: 'This is the Task 2' },
    { title: 'Task 3', description: 'This is the Task 3' },
    { title: 'Task 4', description: 'This is the Task 4' },
  ];


  return (
    <>
    <div>Question-5</div>
    <div>Create a functional component named TaskList that accepts an array of task names as a prop.
          Use the map function to render each task name as a list item.
          Import and render the TaskList component in the App component with an array of tasks.</div>

    <div className="appContainer">
      <h1>Welcome to the Task List</h1>
      <TaskList tasks={tasks} />
    </div>

    </>
  );
};

export default App;