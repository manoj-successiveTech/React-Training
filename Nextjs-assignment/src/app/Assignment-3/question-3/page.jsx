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
        <Link href="/Question3-page">Home</Link> |{' '}
        <Link href="/Question3-about">About</Link>
      </nav>
      <div>
        {pathname === '/Question3-page' && <h1>Welcome to the Home Page</h1>}
        {pathname === '/Question3-about' && <h1>About Us</h1>}
        {pathname !== '/Question3-page' && pathname !== '/Question3-about' && <h1>404 Not Found</h1>}
      </div>
    </div>
  );
};

export default Question3;