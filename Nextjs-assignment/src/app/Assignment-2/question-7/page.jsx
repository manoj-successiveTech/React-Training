// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

// pages/page.jsx

'use client';
import React, { useState, useEffect } from 'react';
import '@/app/styles/welcome2.css';

const Page = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleShowNotification = () => {
    if (timerId) {
      clearTimeout(timerId); // clear existing timer if any
    }

    const delay = setTimeout(() => {
      setMessage(input);
      setShowNotification(true);

      const hide = setTimeout(() => {
        setShowNotification(false);
        setMessage('');
      }, 5000);

      setTimerId(hide);
    }, 5000);

    setTimerId(delay);
  };

  return (
    <div className="container">
      <h1 className="title">Notification Demo</h1>
      <input
        type="text"
        className="input"
        placeholder="Type your message"
        value={input}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleShowNotification}>
        Show Notification
      </button>
      {showNotification && <div className="notification">{message}</div>}
    </div>
  );
};

export default Page;
