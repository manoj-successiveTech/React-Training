// 5.Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

'use client';

import React, { useState } from "react";
import '@/app/styles/welcome4.css';

function Page() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="form-wrapper">
      <div className="content-container">
        <p className="instruction">
          5. Construct a select dropdown menu with multiple options. Control the
          selected option using state. When an option is selected, display a
          message showing the selected value.
        </p>

        <div className="dropdown-container">
          <h2 className="form-title">Select your favorite fruit:</h2>

          <select
            className="dropdown-select"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="">Choose a fruit</option>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Mango">Mango</option>
            <option value="Orange">Orange</option>
          </select>

          {selectedOption && (
            <p className="dropdown-message"> You selected: <strong>{selectedOption}</strong></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
