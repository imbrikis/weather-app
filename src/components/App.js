import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <CurrentWeather />
      <Forecast />
    </div>
  )
}

export default App
