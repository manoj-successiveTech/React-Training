// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.
// import '@/components/Weather.jsx'

'use client'

import '@/app/styles/welcome.css';   
import Weather from '@/components/Weather';
import React, { useState } from 'react';

// import React from 'react'
// import Weather from './page'; // Importing the Weather component

const App = () => {
  const [temperature, setTemperature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempValue = parseFloat(temperature);
    if (!isNaN(tempValue)) {
      setTemperature(tempValue);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <>

    <div>Question-3</div>
    <div>Create a functional component named Weather that accepts a prop called temperature (a number).
    Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
    Import and render the Weather component in the App component with different temperature values.</div>

    <div className="app-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="temperature">Enter Temperature (°C):</label>
          <input
            type="text"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {temperature && <Weather temperature={temperature} />}
    </div>

    </>
  );
};

export default App;


