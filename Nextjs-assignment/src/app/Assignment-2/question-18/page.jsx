// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

'use client'
import { useState } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import '@/app/styles/welcome2.css';                                 // import CSS file with the container class



function Page() {
  const [username, setUsername, clearUsername] = useLocalStorage('username', '');
  const [input, setInput] = useState('');

  const saveUsername = () => {
    if (input.trim() !== '') {
      setUsername(input.trim());
      setInput('');
    }
  };

  return (
    <div className="container">
      <h2>User Name Storage</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button onClick={saveUsername} className="btn">Save Username</button>

      {username && (
        <>
          <p>Saved Username: <strong>{username}</strong></p>
          <button onClick={clearUsername} className="clear-btn">Clear Username</button>
        </>
      )}
    </div>
  );
}

export default Page;
