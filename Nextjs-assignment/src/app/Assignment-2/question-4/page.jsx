// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

// page.jsx

'use client'
import React, { useState } from 'react';
import '@/app/styles/welcome2.css';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const generateNewRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <p>Current Random Number: {randomNumber}</p>
      <button onClick={generateNewRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default RandomNumberGenerator;