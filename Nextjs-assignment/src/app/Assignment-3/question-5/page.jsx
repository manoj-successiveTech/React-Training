// 5.Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Dashboard = () => {
  const pathname = usePathname();

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link href="/Question5/dashboard">Main</Link> |{' '}
        <Link href="/Question5/profile">Profile</Link> |{' '}
        <Link href="/Question5/settings">Settings</Link>
      </nav>
      {pathname.includes('profile') && <div>Profile Page Content</div>}
      {pathname.includes('settings') && <div>Settings Page Content</div>}
      {pathname.endsWith('dashboard') && <div>Dashboard Main Content</div>}
    </div>
  );
};

export default Dashboard;
