import React from 'react'
import CityInfo from './CityInfo'
import TempLine from './TempLine'
import WeatherInfo from './WeatherInfo'

const CurrentWeather = () => {
  return (
    <div className='container mx-auto px-5 pt-7'>
      <CityInfo />
      <WeatherInfo />
      <TempLine />
    </div>
  )
}

export default CurrentWeather
