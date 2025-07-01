
// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.


'use client';
import React, { useState, useCallback } from 'react';
import Child from '@/components/Child';
import '@/app/styles/welcome2.css';

const Page = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Parent Component</h1>
      <Child count={count} onIncrement={increment} onReset={reset} />
    </div>
  );
};

export default Page;
