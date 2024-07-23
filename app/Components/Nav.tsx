import React from 'react'

const Nav = () => {
  return (
    <nav className='w-screen h-16 items-center flex'>
      <ul className='w-full flex gap-6 justify-center flex-row'>
        <li className='hover:cursor-pointer'>Home</li>
        <li className='hover:cursor-pointer'>Recent</li>
        <li className='hover:cursor-pointer'>Hot deals</li>
        <li className='hover:cursor-pointer'>Latest</li>
        <li className='hover:cursor-pointer'>About</li>
      </ul>
    </nav>
  )
}

export default Nav