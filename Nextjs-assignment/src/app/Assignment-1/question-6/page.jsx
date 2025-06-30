// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.import React from 'react'


// pages/index.jsx
import React from 'react';
import Button from  '@/components/Button';
import styles from '@/app/styles/welcome.css'

const App = () => {
  return (
    <>
    <div>Question-6</div>
    <div>Create a functional component named Button that accepts props for text and color.
        Style the button using inline styles or CSS classes based on the color prop.
        Import and render the Button component in the App component with different text and color props.</div>

    <div className="App">
      <h1>Welcome to My Next.js App</h1>
      <Button text="Click Me" color="blue" />
      <Button text="Submit" color="green" />
      <Button text="Cancel" color="red" />
    </div>

    </>

  );
};

export default App;