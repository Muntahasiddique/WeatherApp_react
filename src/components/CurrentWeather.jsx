
import {getCurrentWeather} from '../api/'
function CurrentWeather() {
    const data = getCurrentWeather()
    console.log(data)
//destructuring
const {cloud_cover,feels_like,humidity,icon_num, precipitation, summary , temperature ,uv_index , visibility,wind
} = data

  return (
    <div className="CurrentWeather" >
      
    </div>
  )
}

export default CurrentWeather
