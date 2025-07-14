'use client';

import { useState } from 'react';

const SampleComponent = ({ message }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{message}</p>
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default SampleComponent;
