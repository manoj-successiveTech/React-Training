// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.



'use client'
import { useState } from 'react';
import useTimer from '@/app/hooks/useTimer';
import '@/app/styles/welcome2.css';                                 // import CSS file with the container class


function Page() {
  const { seconds, isRunning, start, pause, reset } = useTimer(30); // 30-second countdown

  return (
    <div className="container">
      <h2>Countdown Timer</h2>
      <p className="timer">{seconds} seconds</p>

      <div className="buttons">
        <button onClick={start} className="btn">Start</button>
        <button onClick={pause} className="btn">Pause</button>
        <button onClick={reset} className="btn clear-btn">Reset</button>
      </div>

      {seconds === 0 && <p className="done">⏰ Time's up!</p>}
    </div>
  );
}

export default Page;
