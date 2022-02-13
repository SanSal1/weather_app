import React, { useState, useEffect, useRef } from 'react';
import PrimaryWeather from './PrimaryWeather';
import SecondaryWeather from './SecondaryWeather';
import Status from './Status';
import weatherService from '../services/weatherService'

import strings from '../data/strings';


/**
 * Component that fetches and displays weather for a specific city. Includes 
 * current weather and a 3h interval forecast.
 * 
 * @param {object} city city's basic information, attributes id and name
 * @param {function} handleError parent is called in case an error happens during a fetch
 */
const City = ({ city, handleError }) => {

  const [weatherData, setWeatherData] = useState(null);

  let isMounted = useRef(true);

  useEffect(() => {
    fetchWeather();
    return () => { isMounted = false };
  }, [])

  const fetchWeather = async () => {
    try {
      const dataCurrent = await weatherService.getCurrent(city.id);
      const dataForecast = await weatherService.getForecast(city.id);

      if (dataCurrent.data && dataForecast.data && isMounted) {
        setWeatherData(
          {
            current: dataCurrent.data,
            forecast: dataForecast.data
          }
        );
      }
      
    } catch (error) {
      if (error.response) handleError(error.response.status);
    }
  }

  return (
    <li id={'city-' + city.id}>
      {weatherData && <div>
        <PrimaryWeather weatherData={weatherData} />

        <div>
          {weatherData.forecast.list.slice(1).map((interval) => (
            <SecondaryWeather key={interval.dt} forecastData={interval} />
          ))}
        </div>
      </div>}
      {!weatherData && <Status message={strings.loadingMessage} />}
    </li>
  );
}
 
export default City;
