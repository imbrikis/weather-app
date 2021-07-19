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
  const description = props.weather[0].description
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
  const low = Math.round(props?.temp?.min)
  const high = Math.round(props?.temp?.max)
  const weatherImg =
    `http://openweathermap.org/img/wn/${props?.weather[0]?.icon}@2x.png` || ''

  return (
    <div className='max-w-forecastDay lg:max-w-none inline-block text-center lg:flex lg:justify-between lg:items-center'>
      <p className='font-bold 2xl:text-lg lg:w-1/12 lg:text-right'>{day}</p>
      <p className='text-sm 2xl:text-lg lg:w-12 leading-3 lg:leading-none lg:text-right'>
        {month}
      </p>
      <p className='text-sm 2xl:text-lg lg:w-6 lg:text-left'>{date}</p>
      <p className='text-sm 2xl:text-lg lg:text-right hidden lg:block lg:w-28 2xl:w-48 lg:max-w-28'>
        {description}
      </p>
      <img className='w-10' src={weatherImg || '--'} alt='weather icon' />
      <p className='text-sm 2xl:text-lg '>
        <span>High: </span>
        {high}
      </p>
      <hr className='leading-3 lg:leading-none w-4 mx-auto lg:hidden' />
      <p className='text-sm 2xl:text-lg'>
        <span>Low: </span>
        {low}
      </p>
      <p className='text-sm 2xl:text-lg font-bold'>&#176;F</p>
    </div>
  )
}

export default ForecastDay
