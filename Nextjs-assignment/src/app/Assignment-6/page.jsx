import React from 'react'
import lazyLoading from './components/lazyLoading'
import dynamic from 'next/dynamic'

const Page = () => {
  return (
    <div>
        <lazyLoading/>
    </div>
  )
}

export default Page