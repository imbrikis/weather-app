import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const Search = () => {
  const [text, setText] = useState('')

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
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=alerts,minutely,hourly&appid=${process.env.REACT_APP_W_API_KEY}`

      const { data: weatherData } = await axios.get(weatherUrl)
      console.log(weatherData)
    } else {
      console.err('The data entered did not yield a longitude and latitude')
    }

    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='inline-block w-searchMobile max-w-searchMobile h-7 rounded-full bg-white flex items-center justify-between relative'
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='h-7 w-full rounded-full px-2'
      />
      <FaSearch className='fill-gray absolute right-2' />
    </form>
  )
}

export default Search
