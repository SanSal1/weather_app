import React from 'react';
import getPrecipitation from '../logic/getPrecipitation';
import units from '../data/units';


const SecondaryWeather = ({ forecastData }) => {
  // rain can be replaced by snow
  return (
    <div>
      <div>
        <p>{forecastData.dt_txt.slice(-8, -3)}</p>
        <img src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`} alt='' />
        <p>{Math.round(forecastData.main.temp)  + units.temperature}</p>
      </div>
      <div>
        <p>{forecastData.wind.speed + units.windspeed}</p>
        <p>{forecastData.main.humidity + units.humidity}</p>
        <p>{getPrecipitation(forecastData)}</p>
      </div>
    </div>
  );
}
 
export default SecondaryWeather;
