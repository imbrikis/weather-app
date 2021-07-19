import React, { createContext, useState } from 'react'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Nav from './Nav'

export const WeatherContext = createContext()

const App = () => {
  const [weatherState, setWeatherState] = useState({})

  return (
    <div>
      <WeatherContext.Provider value={[weatherState, setWeatherState]}>
        <Nav />
        <div className='container mx-auto pt-4 lg:pt-8 px-5'>
          <Search />
        </div>
        <div className='lg:flex lg:container lg:mx-auto lg:pt-8'>
          <CurrentWeather />
          <Forecast />
        </div>
      </WeatherContext.Provider>
    </div>
  )
}

export default App
