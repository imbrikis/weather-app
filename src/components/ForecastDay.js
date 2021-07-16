import React from 'react'

const ForecastDay = (props) => {
  const { weekday, month, day, img, hi, low } = props
  return (
    <div className='max-w-forecastDay inline-block text-center'>
      <p className='font-bold'>{weekday}</p>
      <p className='text-sm leading-3'>{month}</p>
      <p className='text-sm'>{day}</p>
      <img className='w-10' src={img} alt='weather icon' />
      <p className='text-sm'>{hi}</p>
      <hr className='leading-3 w-4 mx-auto' />
      <p className='text-sm'>{low}</p>
      <p className='text-sm font-bold'>&#176;F</p>
    </div>
  )
}

export default ForecastDay
