import React from 'react';
import getPrecipitation from '../logic/getPrecipitation';

import strings from '../data/strings';


/**
 * Secondary weather display with less information than a primary display, used for forecasts.
 * Uses 5 day / 3 hour forecast data from OpenWeatherMap API.
 * 
 * @param {object} forecastData one interval of the forecast data list
 */
const SecondaryWeather = ({ forecastData }) => {
  return (
    <div className='container secondary-weather-root'>

      <div className='secondary-weather-toprow'>
        <p className='subtitle1'>{forecastData.dt_txt.slice(-8, -3)}</p>
        <img className='secondary-icon' src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`} alt='' />
        <p className='body3'>{Math.round(forecastData.main.temp)  + strings.temperatureUnit}</p>
      </div>
      
      <div className='secondary-weather-bottomrow'>
        <p className='subtitle2'>{forecastData.wind.speed + strings.windspeedUnit}</p>
        <p className='subtitle2'>{forecastData.main.humidity + strings.humidityUnit}</p>
        <p className='subtitle2'>{getPrecipitation(forecastData)}</p>
      </div>

    </div>
  );
}
 
export default SecondaryWeather;
