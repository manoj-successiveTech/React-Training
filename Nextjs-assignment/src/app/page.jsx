'use client';

import React from 'react';


export default function HomePage() {
  return (

      <div style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <h1>Welcome to React Training Assignments</h1>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          Use the drawer on the right to navigate through assignments.
        </p>
      </div>
  );
}
