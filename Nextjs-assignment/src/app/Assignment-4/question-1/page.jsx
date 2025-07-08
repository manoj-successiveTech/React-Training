// 1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

"use client";

import React, { useState } from "react";
import "@/app/styles/welcome4.css";

const Page = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleInput = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div className="controlled">
      <p>
        1. Create a React component with an input field. Implement it as a
        controlled component where the input value is controlled by the
        component's state. When the user types into the input field, the
        component's state should update accordingly.
      </p>
      <input
        type="text"
        placeholder="Enter Something....."
        onChange={handleInput}
      />
      <h1 className="output-text">{inputMessage}</h1>
    </div>
  );
};

export default Page;
