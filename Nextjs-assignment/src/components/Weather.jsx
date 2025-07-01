// components/Weather.jsx

'use client'
import React from 'react';
import '@/app/styles/welcome.css';       // Import the CSS file

// Weather component displays a message based on the temperature prop.
const Weather = ({ temperature }) => {
  return (
    <div className="weather-container">
      {temperature > 25 ? (
        <p className="sunny-message">It's sunny today!</p>
      ) : temperature < 10 ? (
        <p className="cold-message">It's cold today!</p>
      ) : (
        <p className="normal-message">It's a Normal day!</p>
      )}
    </div>
  );
};

export default Weather;