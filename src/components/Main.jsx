import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

import { useContext } from 'react'
import WeatherContext from '../context/weather.context'
import Loader from './Loader'

const Main = () => {

  const {loading ,currentWeather ,hourlyForcast,dailyForcast} = useContext(WeatherContext)
  return (
    <div className='Main' >
 {
  loading ? (<Loader />):
  (
     <>
     <CurrentWeather data={currentWeather} />
   <Forecast type='hourly' title='HOURLY FORECAST' data={hourlyForcast}/>
   <Forecast type='dail' title='21 DAYS FORECAST' data={dailyForcast}  />
     </>
    
  )
 }
    </div>
  )
}

export default Main
