// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.


'use client'

import React, { useState } from 'react';
import '@/app/styles/welcome.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    
    <>
    <div>Question -4</div>
      <div>Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen.</div>


    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">{count}</div>
      <div className="button-container">
          <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
      
      </div>
    </div>

    </>
  );
};

export default Counter;