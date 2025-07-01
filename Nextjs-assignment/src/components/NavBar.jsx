'use client'
import React from 'react'


const NavBar = () => {
    const buttons = [1, 2];
  return (
    <>
    <div className='assignments'>
        <div>
            {buttons.map((item, index) => {
                return (
                    <button
                        key={index}
                    >
                        assignments-{item}
                    </button>
                ); 
            })}
        </div>
    </div>
    </>
  )
}

export default NavBar