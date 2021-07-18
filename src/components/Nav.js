import React from 'react'
import Search from './Search'
import HamMenu from './HamMenu'

const Nav = () => {
  return (
    <div className='bg-lightGrayPrimary'>
      <div className='container mx-auto px-5 h-12 flex items-center justify-between'>
        <span className='text-2xl'>Weather</span>
        <div className='flex items-center'>
          <Search />
          <HamMenu />
        </div>
      </div>
    </div>
  )
}

export default Nav
