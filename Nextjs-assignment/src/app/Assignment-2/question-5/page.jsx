// Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.


'use client'
import React, { useState } from 'react';
import '@/app/styles/welcome2.css';

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + Number(step));
  };

  const handleDecrement = () => {
    setCount(count - Number(step));
  };

  const handleStepChange = (e) => {
    setStep(e.target.value);
  };

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <div className="buttons">

        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        
      </div>
      <div className="step-input">
        <label htmlFor="step">Step:</label>
        <b><input
          type="number"
          id="step"
          value={step}
          onChange={handleStepChange}
        /></b>
      </div>
    </div>
  );
};

export default CounterWithStep;