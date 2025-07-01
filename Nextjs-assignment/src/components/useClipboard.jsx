

// useClipboard.js

import { useState } from 'react';
import '@/app/styles/welcome2.css'

const useClipboard = (text) => {
  const [success, setSuccess] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return { success, copyToClipboard };
};

export default useClipboard;