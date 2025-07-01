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
          <div className="navigation-section">
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
            </ul>
          </div>
          <div className="navigation-section">
            <ul className="navigation-list">
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
          </div>
          <div className="navigation-section">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link href='/Assignment-2/question-11'>Question-11</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-12'>Question-12</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-13'>Question-13</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-14'>Question-14</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-15'>Question-15</Link>
              </li>
            </ul>
          </div>
          <div className="navigation-section">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link href='/Assignment-2/question-16'>Question-16</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-17'>Question-17</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-18'>Question-18</Link>
              </li>
              <li className="navigation-item">
                <Link href='/Assignment-2/question-19'>Question-19</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Page