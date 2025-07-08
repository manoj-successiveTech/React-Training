/* TodoListCreater of assignment-4 question 6 */

'use client';

import React, { useState } from "react";

const TodoListCreater = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  return (
    <div className="todo-box">
      <input
        className="input"
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="submit-btn" onClick={handleAddTask}>
        Add Task
      </button>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className="todo-item">
            ✅ {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListCreater;
