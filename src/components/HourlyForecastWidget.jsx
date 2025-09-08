import WeatherIcon from "./WeatherIcon";


function HourlyForecastWidget({data}) {
    const {date , icon , summary , temperature , precipitation, wind} = data;
    console.log(data)
//date formate 
const now = {
    day :new Intl.DateTimeFormat(navigator.language,{
     weekday:"short",
     day:"2-digit",
     month:"2-digit"   
    }).format(new Date()) ,
    time:new Intl.DateTimeFormat(navigator.language,{
     hour:"2-digit",
     minute:"2-digit",  
    }).format(new Date())  ,
}

  return (
    <div className="widget" >
      <div className="day">{date}</div>
      <div className="time">{date}</div>
      <div className="icon-temp">
        <div className="icon">
            <WeatherIcon  iconNumber={icon} summary={summary} />
        </div>

        <div className="temperature">
            {Math.round(temperature)} °C          
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} nm/h
      </div>
      <div className="wind">
        <div className="speed">
            {Math.round(wind.speed)} mph
        </div>
        <div className="dir" style={{transform:`rotate(${-45 + wind.angle}deg)`}} >
            <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default HourlyForecastWidget
