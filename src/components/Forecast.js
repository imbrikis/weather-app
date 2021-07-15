import React from 'react'
import ForecastDay from './ForecastDay'
import rain from '../assets/rain.png'

const Forecast = () => {
  const arr = [
    {
      weekday: 'Thu',
      month: 'Jul',
      day: 15,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Fri',
      month: 'Jul',
      day: 16,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Sat',
      month: 'Jul',
      day: 17,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Sun',
      month: 'Jul',
      day: 18,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Mon',
      month: 'Jul',
      day: 19,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Tue',
      month: 'Jul',
      day: 20,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Wed',
      month: 'Jul',
      day: 21,
      img: rain,
      hi: 86,
      low: 68,
    },
    {
      weekday: 'Thu',
      month: 'Jul',
      day: 22,
      img: rain,
      hi: 86,
      low: 68,
    },
  ]

  const renderedDays = arr.map((day) => {
    return <ForecastDay {...day} />
  })

  return (
    <div className='px-5 mt-8'>
      <p className='text-2xl'>8-day forecast</p>
      <div className='flex justify-between mt-2'>{renderedDays}</div>
    </div>
  )
}

export default Forecast
