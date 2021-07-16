import React, { useContext } from 'react'
import { WeatherContext } from './App'

const CityInfo = () => {
  const [weatherState] = useContext(WeatherContext)

  return (
    <>
      {/* The date will be parsed from the Date class soon */}
      <p className='text-lg'>July 15, 02:15 pm</p>
      <p className='text-2xl'>{weatherState?.city || '--'}</p>
    </>
  )
}

export default CityInfo
