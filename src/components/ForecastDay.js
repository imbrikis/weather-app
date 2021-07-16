import React from 'react'

const ForecastDay = (props) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const time = new Date(props.dt * 1000) || '--'

  const month = monthNames[time.getMonth()] || '--'
  const day = dayNames[time.getDay()] || '--'
  const date = time.getDate() || '--'
  const low = Math.round(props?.temp?.min)
  const high = Math.round(props?.temp?.max)
  const weatherImg =
    `http://openweathermap.org/img/wn/${props?.weather[0]?.icon}@2x.png` || ''

  return (
    <div className='max-w-forecastDay inline-block text-center'>
      <p className='font-bold'>{day}</p>
      <p className='text-sm leading-3'>{month}</p>
      <p className='text-sm'>{date}</p>
      <img className='w-10' src={weatherImg || '--'} alt='weather icon' />
      <p className='text-sm'>{high}</p>
      <hr className='leading-3 w-4 mx-auto' />
      <p className='text-sm'>{low}</p>
      <p className='text-sm font-bold'>&#176;F</p>
    </div>
  )
}

export default ForecastDay
