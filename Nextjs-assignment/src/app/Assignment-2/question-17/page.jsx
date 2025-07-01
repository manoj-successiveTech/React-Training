// 17.Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

// Page.jsx

'use client'
import React from 'react';
import useClipboard from '@/components/useClipboard';
import '@/app/styles/welcome2.css';

const Page = () => {
  const textToCopy = "This is the text content will be copied.";
  const { success, copyToClipboard } = useClipboard(textToCopy);

  return (
    <div className="container">
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard} className="copy-button">
        {success ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default Page;