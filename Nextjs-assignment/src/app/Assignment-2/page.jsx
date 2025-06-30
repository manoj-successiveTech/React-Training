'use client'
import React from 'react'
import Link from 'next/link'
import "@/app/styles/welcome2.css"

const Page = () => {
  return (
    <>
      <div className="welcome-container">
        <h1>Welcome Assignment-2</h1>
      </div>

      <div className="navigation-container">
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <Link href='/Assignment-2/question-1'>Question-1</Link>
            </li>
            <li className="navigation-item">
              <Link href='/Assignment-2/question-2'>Question-2</Link>
            </li>
            <li className="navigation-item">
              <Link href='/Assignment-2/question-3'>Question-3</Link>
            </li>
            <li className="navigation-item">
              <Link href='/Assignment-2/question-4'>Question-4</Link>
            </li>
            <li className="navigation-item">
              <Link href='/Assignment-2/question-5'>Question-5</Link>
            </li>

            <li className="navigation-item">
              <Link href='/Assignment-2/question-6'>Question-6</Link>
            </li>
          
            <li className="navigation-item">
              <Link href='/Assignment-2/question-7'>Question-7</Link>
            </li>


            <li className="navigation-item">
              <Link href='/Assignment-2/question-8'>Question-8</Link>
            </li>


            <li className="navigation-item">
              <Link href='/Assignment-2/question-9'>Question-9</Link>
            </li>

             <li className="navigation-item">
              <Link href='/Assignment-2/question-10'>Question-10</Link>
            </li>
          
          
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Page