import React from 'react'

const ForecastDay = (props) => {
  const { weekday, month, day, img, hi, low } = props
  return (
    <div className='max-w-forecastDay inline-block text-center'>
      <p>{weekday}</p>
      <p className='leading-3'>{month}</p>
      <p>{day}</p>
      <img className='w-10' src={img} alt='weather icon' />
      <p className='text-xs'>
        <span className='text-xs'>HI:</span> {hi}
      </p>
      <p className='text-xs leading-3'>
        <span className='text-xs'>LO:</span> {low}
      </p>
      <p className='text-xs'>&#176;F</p>
    </div>
  )
}

export default ForecastDay
