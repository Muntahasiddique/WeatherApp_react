
import "../styles/components/Forecast.scss"
import DailyForecastWidget from "./DailyForecastWidget"
import HourlyForecastWidget from "./HourlyForecastWidget"
function Forecast({title , type , data}) {
  return (
    <div className="Forecast" >
      <div className="forecast-container">
        <h3>{title}</h3>
        <div className="widget-container">
            {
                data.map((singleData  , index )=>(
                    <div key={index} >
                        {
                              type  === "hourly" ? (
 <HourlyForecastWidget data={singleData} />
                              ) : (
                                <DailyForecastWidget data={singleData}  />
                              )
                             
                        }
                      
                    </div>
                )
            )}
        </div>
      </div>
    </div>
  )
}

export default Forecast
