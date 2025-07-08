// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

"use client";

import React, { useState } from "react";
import "@/app/styles/welcome4.css"; // Use the  styling css

const Message = () => {
    return <p className="message">🎉 Success! You entered "show" and revealed this message. 👏</p>;
};

const ShowComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(inputValue.trim().toLowerCase() === "show");
  };

  return (
    <div className="form-wrapper">
      <div className="content-container">

        <p className="instruction">
          3. Create a component with controlled input field and a button. When the
          user enters a specific value into the input (e.g., "show"), a new
          component should be rendered below the input, displaying a message.
          Otherwise, nothing should be displayed.
        </p>

        <div className="show-box">
          <h3 className="form-title">Type "show" to see the message</h3>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
            className="input"
          />
          <button onClick={handleButtonClick} className="submit-btn">
            Submit
          </button>

          {show && <Message />}
        </div>
      </div>
    </div>
  );
};

export default ShowComponent;
