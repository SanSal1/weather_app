import React from 'react';
import getordinalDate from '../logic/getOrdinalDate';
import getTime from '../logic/getTime';
import getPrecipitation from '../logic/getPrecipitation';
import units from '../data/units';


const PrimaryWeather = ({ weatherData }) => {
  return (
    <div>

      <div>

        <div>
          <p>{weatherData.current.name}</p>
          <p>{weatherData.current.weather[0].main}</p>
        </div>

        <div>
          <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} alt='' />
          <p>{Math.round(weatherData.current.main.temp) + units.temperature}</p>
        </div>

      </div>

      <div>

        <div>
          <p>{getordinalDate(weatherData.current.dt)}</p>
          <p>{getTime(weatherData.current.dt)}</p>
        </div>

        <div>
          <p>{'Wind: ' + weatherData.current.wind.speed + units.windspeed}</p>
          <p>{'Humidity: ' + weatherData.current.main.humidity + units.humidity}</p>
          <p>{'Precipitation (3 h): ' + getPrecipitation(weatherData.forecast.list[0])}</p>
        </div>

      </div>

    </div>
  );
}
 
export default PrimaryWeather;
