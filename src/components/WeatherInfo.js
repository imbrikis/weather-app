import React from 'react'
import { BsChevronUp } from 'react-icons/bs'

const WeatherInfo = () => {
  return (
    <div className='mt-12'>
      <div className='mx-auto flex justify-center'>
        <BsChevronUp className='inline-block self-center mr-2 fill-red' />
        <span className='text-8xl'>85&#176;</span>
      </div>
      <p className='text-center mt-6'>Partly Cloudy</p>
      <div className='mx-auto mt-6 w-24 h-16 bg-lightGrayPrimary text-center'>
        IMAGE GOES HERE
      </div>
    </div>
  )
}

export default WeatherInfo
