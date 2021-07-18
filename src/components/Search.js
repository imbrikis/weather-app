import React, { useState, useContext, useEffect } from 'react'
import { WeatherContext } from './App'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const Search = () => {
  const [weatherState, setWeatherState] = useContext(WeatherContext)

  const [text, setText] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=-122.6750&exclude=alerts,minutely,hourly&units=imperial&appid=${process.env.REACT_APP_W_API_KEY}`
      )
      setWeatherState({ ...data, city: 'Portland, OR' })
    }
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!text) {
      return
    }

    const processedText = text.split(' ').join('+')
    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${processedText}&key=${process.env.REACT_APP_GG_API_KEY}`
    const { data: googleData } = await axios.get(googleUrl)

    if (googleData.results[0]?.geometry?.location) {
      const lat = googleData.results[0]?.geometry?.location.lat
      const lng = googleData.results[0]?.geometry?.location.lng
      const city = googleData.results[0]?.formatted_address
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=alerts,minutely,hourly&units=imperial&appid=${process.env.REACT_APP_W_API_KEY}`

      const { data: weatherData } = await axios.get(weatherUrl)
      setWeatherState({ ...weatherState, ...weatherData, city })
    } else {
      console.err('The data entered did not yield a longitude and latitude')
    }

    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='container pt-4 w-full max-w-sm h-7 rounded-full bg-white flex items-center justify-between relative'
    >
      <input
        value={text}
        placeholder='search city'
        onChange={(e) => setText(e.target.value)}
        className='h-7 w-full rounded-full px-2 border border-lightGrayPrimary'
      />
      <FaSearch className='fill-gray absolute right-2' />
    </form>
  )
}

export default Search
