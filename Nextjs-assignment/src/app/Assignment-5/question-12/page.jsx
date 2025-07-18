'use client'
import React from 'react'
import PageFetch from './pageFetch'

const Page = () => {
  return (

    <>
    <div>
      <p>(16) Question 12. Create a higher-order component (HOC) named with Data Fetching where the data fetching happens in a Server Component using SSR. 
        The fetched data should then be passed as props to a Client Component wrapped by the HOC, which displays the data.</p>

        <PageFetch/>
    </div>
    </>
  )
}

export default Page

