import WeatherIcon from "./WeatherIcon";

function DailyForecastWidget({data}) {
   const {day , icon , summary, temperature_max , temperature_min , precipitation,} = data;

const now_date = {
    day :new Intl.DateTimeFormat(navigator.language,{
     weekday:"short",
     day:"2-digit",
     month:"2-digit"   
    }).format(new Date()) ,
 
};

const waether_date = {
    day :new Intl.DateTimeFormat(navigator.language,{
     weekday:"short",
     day:"2-digit",
     month:"2-digit"   
    }).format(new Date(day)) ,

}

waether_date.day = waether_date.day === now_date.day ? "Today" : waether_date.day ;


  return (
    <div className="widget" >
      <div className="day">{waether_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
            <WeatherIcon  iconNumber={icon} summary={summary} />
        </div>

        <div className="temperature">
         <div className="max">
                      {Math.round(temperature_max)} °C   
         </div>
         <div className="min">
                      {Math.round(temperature_min)} °C   
         </div>
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} nm/h
      </div>
     
    </div>
  )
}

export default DailyForecastWidget
