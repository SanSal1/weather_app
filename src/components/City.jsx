import React from 'react';
import PrimaryWeather from './PrimaryWeather';
import SecondaryWeather from './SecondaryWeather';


const City = ({ weatherData }) => {
  return (
    <li id={'city-' + weatherData.current.id}>

      <PrimaryWeather weatherData={weatherData} />

      <div>
        {weatherData.forecast.list.slice(1).map((interval) => (
          <SecondaryWeather key={interval.dt} forecastData={interval} />
        ))}
      </div>

    </li>
  );
}
 
export default City;
