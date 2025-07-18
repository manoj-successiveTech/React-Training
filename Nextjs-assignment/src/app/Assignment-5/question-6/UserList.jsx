//   6. Modify your previous Next.js Server Component that fetches data with
//         Axios to include error handling. If the request fails, display an error
//         message and provide a retry button so the user can attempt fetching the
//         data again. Implement the retry logic in a Client Component to handle
//         user interaction.
// app/assignment-5/question-6/UserList.jsx

'use client';

import { useState } from 'react';

const UserList = ({ initialUsers, initialError }) => {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsers(data);
    } catch {
      setError("Retry failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Loading...</p>;

  if (error) {
    return (
      <div style={{ textAlign: 'center', color: 'red' }}>
        <p>{error}</p>
        <button
          onClick={retryFetch}
          style={{
            marginTop: '1rem',
            padding: '10px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ul style={{ padding: 0, listStyle: 'none', maxWidth: '600px', margin: 'auto' }}>
      {users?.map(user => (
        <li
          key={user.id}
          style={{
            background: '#f5f5f5',
            margin: '10px 0',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
