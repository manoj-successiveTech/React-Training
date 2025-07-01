'use client'
import React from 'react'
import Link from 'next/link'
import "@/app/styles/welcome3.css"

const Page = () => {
  return (
    <>
        <div>
            <h1>Welcome Assignment-3</h1>
        </div>

         <div>
      <nav>
          <li>
            <Link href='/Assignment-3/question-1'>Question-1</Link>
          </li>  

          <li>        
            <Link href='/Assignment-3/question-2'>Question-2</Link>
          </li>

          <li>
            <Link href='/Assignment-3/question-3'>Question-3</Link>
          </li>

           <li>
            <Link href='/Assignment-3/question-4'>Question-4</Link>
          </li>

          <li>
            <Link href='/Assignment-3/question-5'>Question-5</Link>
          </li>

          <li>
            <Link href='/Assignment-3/question-6'>Question-6</Link>
          </li>

        </nav>

    </div>

    </>
  )
}

export default Page
