// 3.Create pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Question3 = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <Link href='./question-3/home'>Home</Link> |{' '}
        <Link href='./question-3/about'>About</Link>
      </nav>
      <div>
        {pathname === './question-3/home' && <h1>Welcome to the Home Page</h1>}
        {pathname === '/question3/about' && <h1>About Us</h1>}
        {pathname !== '/question-3/home' && pathname !== '/question3/about' && <h1>404 Not Found</h1>}
      </div>
    </div>
  );
};

export default Question3;