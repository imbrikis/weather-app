import React from 'react'
import Search from './Search'
import HamMenu from './HamMenu'

const Nav = () => {
  return (
    <div className='bg-lightGrayPrimary px-5 h-12 flex items-center justify-between'>
      <span className='text-2xl'>Weather</span>
      <Search />
      <HamMenu />
    </div>
  )
}

export default Nav
