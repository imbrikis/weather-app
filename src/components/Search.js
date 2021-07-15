import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form className='inline-block w-searchMobile max-w-searchMobile h-7 rounded-full bg-white flex items-center justify-between relative'>
      <input className='h-7 w-full rounded-full px-2' />
      <FaSearch className='fill-gray absolute right-2' />
    </form>
  )
}

export default Search
