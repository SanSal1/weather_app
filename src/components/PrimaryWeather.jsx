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
 */
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
          <p>{Math.round(weatherData.current.main.temp) + strings.temperatureUnit}</p>
        </div>

      </div>

      <div>

        <div>
          <p>{getordinalDate(weatherData.current.dt)}</p>
          <p>{getTime(weatherData.current.dt)}</p>
        </div>

        <div>
          <p>{strings.windLabel + weatherData.current.wind.speed + strings.windspeedUnit}</p>
          <p>{strings.humidityLabel + weatherData.current.main.humidity + strings.humidityUnit}</p>
          <p>{strings.precipitationLabel + getPrecipitation(weatherData.forecast.list[0])}</p>
        </div>

      </div>

    </div>
  );
}
 
export default PrimaryWeather;
