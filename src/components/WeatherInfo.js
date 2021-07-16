import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import rain from '../assets/rain.png'

const WeatherInfo = () => {
  return (
    <div className='mt-8'>
      <div className='mx-auto flex justify-center'>
        <BsChevronUp className='inline-block self-center mr-2 fill-red' />
        <span className='text-8xl'>85&#176;</span>
      </div>
      <p className='text-center mt-4 text-3xl'>Partly Cloudy</p>
      <img src={rain} alt='rain cloud' className='mx-auto w-36 text-center' />
    </div>
  )
}

export default WeatherInfo
