import React from 'react'

function WeatherIcon({iconNumber , summary}) {
  return (

        <img src={`/weather_icons/set04/big/${iconNumber}.png`} alt={summary} />
    
  )
}

export default WeatherIcon
