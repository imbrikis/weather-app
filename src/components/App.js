import React, { createContext, useState } from 'react'
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
        <CurrentWeather />
        <Forecast />
      </WeatherContext.Provider>
    </div>
  )
}

export default App
