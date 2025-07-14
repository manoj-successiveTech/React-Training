
'use client';
import "@/app/styles/welcome5.css"

export default function Button({ type = 'primary', onClick, children }) {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
}
