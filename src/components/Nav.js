import React from 'react'
import HamMenu from './HamMenu'

const Nav = () => {
  return (
    <div className='bg-lightGrayPrimary'>
      <div className='container mx-auto px-5 h-12 flex items-center justify-between'>
        <span className='text-2xl'>Weather</span>
        <HamMenu />
      </div>
    </div>
  )
}

export default Nav
