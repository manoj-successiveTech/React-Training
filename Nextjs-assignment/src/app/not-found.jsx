'use client'
import React from 'react'
import Link from 'next/link';

const notFound = () => {
  
  return (
    <>
    <div>Page not not Found 404</div>
    <Link href={"/"}>
    <button>Go to Home</button>
    </Link>
    </>

  )
}

export default notFound