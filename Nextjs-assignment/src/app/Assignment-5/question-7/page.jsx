// 7. Create a Component in Next.js that renders a form allowing the user to input data, such as a post title and content. On form submission, use Axios to send a POST request to a public API endpoint, submitting the user's input data. Handle success and error states appropriately in the UI.


'use client';

import { useState } from 'react';
import axios from 'axios';
import '@/app/styles/welcome5.css'; // Make sure this CSS file exists

export default function Page() {
  // Form input state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Message states
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    // Clear old messages
    setSuccess('');
    setError('');

    try {
      // Make POST request with Axios
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: content,
        userId: 1,
      });

      // Check for success (201 = Created)
      if (res.status === 201) {
        setSuccess('✅ Post created successfully!');
        setTitle('');
        setContent('');
      }
    } catch (err) {
      setError('❌ Failed to create post. Please try again.');
    }
  };

  return (
    <div>
      <p style={{ textAlign: 'center', margin: '2rem' }}>
        <strong>Question 7.</strong> Create a Component in Next.js that renders a form allowing the user to input data, such as a post title and content. On form submission, use Axios to send a POST request to a public API endpoint, submitting the user's input data. Handle success and error states appropriately in the UI.

      </p>

      <div className="a7q7-form-container">
        <h2 className="a7q7-title">📮 Create New Post</h2>

        <form onSubmit={handleSubmit} className="a7q7-form">
          <label htmlFor="title">Post Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />

          <label htmlFor="content">Post Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            placeholder="Write something here..."
            required
          ></textarea>

          <button type="submit">Submit Post</button>
        </form>

        {/* Feedback messages */}
        {success && <p className="a7q7-success">{success}</p>}
        {error && <p className="a7q7-error">{error}</p>}
      </div>
    </div>
  );
}
