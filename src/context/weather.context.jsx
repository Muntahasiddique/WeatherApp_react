import { createContext, useEffect, useState } from 'react';
import { DEFAULT_PLACE } from '../constants';
import { getWeatherData } from '../api';

export const WeatherContext = createContext();


export function WeatherProvider({ children }) {
    const [place, setPlace] = useState(DEFAULT_PLACE);

    const [loading , setLoading] = useState(true);
       const [hourlyForcast, sethourlyForecast] = useState([]);
       const [dailyForcast, setdailyForecast] = useState([]);
   const [currentWeather, setcurrentWeather] = useState({});

useEffect(()=>{
    async function _getWeatherData() {
        setLoading(true);

const cw = await getWeatherData('current' , place.place_id,'auto')

setcurrentWeather(cw.current)

const hf = await getWeatherData('hourly' , place.place_id,'auto')
sethourlyForecast(hf.hourly.data)


const df = await getWeatherData('daily' , place.place_id,'auto')
setdailyForecast(df.daily.data)
        setLoading(false)
    }

    _getWeatherData()
} , [place])

    return (
        <WeatherContext.Provider value={{place ,loading , currentWeather ,hourlyForcast,dailyForcast,setPlace}}>
            {children}
        </WeatherContext.Provider>
    );
}

// Default export
export default WeatherContext;