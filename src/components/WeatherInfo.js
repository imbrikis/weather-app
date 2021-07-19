import React, { useContext } from 'react'
import { WeatherContext } from './App'
import { BsChevronUp } from 'react-icons/bs'

const WeatherInfo = () => {
  const [weatherState] = useContext(WeatherContext)
  const weatherImg =
    `http://openweathermap.org/img/wn/${weatherState?.current?.weather[0]?.icon}@2x.png` ||
    null

  return (
    <div className='mt-8'>
      <div className='mx-auto flex justify-center'>
        {weatherState?.current ? (
          <BsChevronUp className='inline-block self-center mr-2 fill-red hidden' />
        ) : null}
        <span className='text-8xl'>
          {weatherState?.current
            ? Math.round(weatherState?.current?.temp).toString() + '°'
            : '--'}
        </span>
      </div>
      <p className='text-center mt-4 text-3xl'>
        {weatherState?.current
          ? weatherState?.current?.weather[0]?.description
              .split(' ')
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
              .join(' ')
          : '--'}
      </p>
      <img
        src={weatherImg}
        alt='weather icon'
        className='mx-auto w-36 text-center'
      />
    </div>
  )
}

export default WeatherInfo
