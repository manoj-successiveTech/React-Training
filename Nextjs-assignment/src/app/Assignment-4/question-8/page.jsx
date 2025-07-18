// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

"use client";

import React, { useState } from "react";
import "@/app/styles/welcome4.css";

const TemperatureConvert = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
  };

  const handleConvert = () => {
    if (celsius !== "") {
      const f = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    } else if (fahrenheit !== "") {
      const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div className="center-page">
      <p className="instruction-box">
        8. Create a temperature converter component with two input fields: one
        for Celsius and one for Fahrenheit. Implement controlled components for
        both inputs. When the user enters a value in one input, the other input
        should update with the converted temperature.
      </p>

      <div className="temp-container">
        <h2 className="temp-title">🌡️ Temperature Converter(Temperature to Fahrenheit) </h2>
        <input
          type="number"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          className="temp-input"
        />
        <input
          type="number"
          placeholder="Enter Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="temp-input"
        />
        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </div>
  );
};

export default TemperatureConvert;
