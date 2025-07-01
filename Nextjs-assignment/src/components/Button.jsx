// components/Button.jsx

import React from 'react';
import '@/app/styles/welcome.css'; // Import the CSS file

const Button = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div className="buttonContainer">
      <button style={buttonStyle}>{text}</button>
    </div>
  );
};

export default Button;