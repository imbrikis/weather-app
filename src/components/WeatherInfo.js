import React from 'react'
import { BsChevronUp } from 'react-icons/bs'

const WeatherInfo = () => {
  return (
    <div className='mt-16'>
      <div className='mx-auto flex justify-center'>
        <BsChevronUp className='inline-block self-center mr-2 fill-red' />
        <span className='text-8xl'>85&#176;</span>
      </div>
      <p className='text-center mt-6'>Partly Cloudy</p>
      <p className='text-center mt-6'>IMAGE GOES HERE</p>
    </div>
  )
}

export default WeatherInfo
