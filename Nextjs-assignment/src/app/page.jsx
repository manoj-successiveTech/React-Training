'use client'
import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="page-container">
      <h1>Welcome React Training Assignment</h1>
    </div>
    
    <div>
        <nav>
          <li>
            <Link href='/Assignment-1'>Assignment-1</Link>
          </li>

          <li>        
            <Link href='/Assignment-2'>Assignment-2</Link>
          </li>

          <li>
            <Link href='/Assignment-3'>Assignment-3</Link>
          </li>

           <li>
            <Link href='/Assignment-4'>Assignment-4</Link>
          </li>


      </nav>
    </div>
    </> 
 );

}
