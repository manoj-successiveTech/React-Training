'use client';
import React from 'react';
import '@/app/styles/welcome2.css';

const Child = ({ count, onIncrement, onReset }) => {
  return (
    <div className="child-box">
      <h2 className="subtitle">Child Component</h2>
      <p className="count-text">Current Count: <strong>{count}</strong></p>
      <button className="button" onClick={onIncrement}>Increment</button>
      <button className="button reset" onClick={onReset}>Reset to Zero</button>
    </div>
  );
};

export default Child;
