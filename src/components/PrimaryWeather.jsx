import React from 'react';
import getordinalDate from '../logic/getOrdinalDate';
import getTime from '../logic/getTime';
import getPrecipitation from '../logic/getPrecipitation';

import strings from '../data/strings';


/**
 * Primary weather display with the current weather. Uses current weather data from OpenWeatherMap API.
 * 5 day / 3 hour forecast data is used to display 3h precipitation.
 * 
 * @param {object} weatherData includes attributes "current" and "forecast" based on which endpoint was used
 * @param {string} name city's name
 */
const PrimaryWeather = ({ weatherData, name }) => {
  return (
    <div className='container primary-weather-root'>

      <div className='primary-weather-row'>

        <div className='primary-weather-row-topleft'>
          <p className='body2'>{name}</p>
          <p className='subtitle1'>{weatherData.current.weather[0].main}</p>
        </div>

        <div className='primary-weather-row-topright'>
          <img className='primary-icon' src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} alt='' />
          <p className='body1 no-wrap'>{Math.round(weatherData.current.main.temp) + strings.temperatureUnit}</p>
        </div>

      </div>

      <div className='primary-weather-row'>

        <div>
          <p className='body3'>{getordinalDate(weatherData.current.dt)}</p>
          <p className='subtitle1'>{getTime(weatherData.current.dt)}</p>
        </div>

        <div className='primary-weather-row-bottomright'>
          <p className='subtitle1'>{strings.windLabel + weatherData.current.wind.speed + strings.windspeedUnit}</p>
          <p className='subtitle1'>{strings.humidityLabel + weatherData.current.main.humidity + strings.humidityUnit}</p>
          <p className='subtitle1'>{strings.precipitationLabel + getPrecipitation(weatherData.forecast.list[0])}</p>
        </div>

      </div>

    </div>
  );
}
 
export default PrimaryWeather;
