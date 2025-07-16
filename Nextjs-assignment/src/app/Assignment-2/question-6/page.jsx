// Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.


'use client'
import React, { useState, useEffect } from 'react';
import '@/app/styles/welcome2.css';


const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <p className="clock">{time}</p>
  );
};

const Page = () => {
  return (
    <div className="container">
      <h1 className="title">Clock</h1>
      <Clock />
    </div>
  );
};

export default Page;