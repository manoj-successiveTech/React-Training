// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.



'use client';

import React from "react";
import TodoListCreater from "@/components/TodoListCreater ";
import "@/app/styles/welcome4.css";

const Page = () => {
  return (
    <div className="form-wrapper">
      <div className="content-container">
        <p className="instruction">
          6. Build a simple todo list component with a text input for adding new
          tasks and a list to display them. Use controlled components to handle
          the input and update the list of tasks.
        </p>
        <TodoListCreater />
      </div>
    </div>
  );
};

export default Page;
