import React, { useState, useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import PrimaryWeather from './PrimaryWeather';
import SecondaryWeather from './SecondaryWeather';
import weatherService from '../services/weatherService'


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
    <li id={'city-' + city.id} className='city-container'>
      {weatherData && <div>
        <PrimaryWeather weatherData={weatherData} name={city.name} />

        <div className='secondary-weather-container'>
          {weatherData.forecast.list.slice(1).map((interval) => (
            <SecondaryWeather key={interval.dt} forecastData={interval} />
          ))}
        </div>
      </div>}
      {!weatherData && <div className='loading-wrapper'>
        <ClipLoader color={'#00A5E5'} loading={true} size={100} css={{margin: '48px'}} />
      </div>}
    </li>
  );
}
 
export default City;
