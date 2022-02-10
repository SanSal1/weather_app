import React from 'react';
import PrimaryWeather from './PrimaryWeather';
import SecondaryWeather from './SecondaryWeather';


const City = ({ weatherData }) => {
  return (
    <div>
      <PrimaryWeather />
      <div>
        {/** TODO: map SecondaryWeather forecasts */}
        <SecondaryWeather />
      </div>
    </div>
  );
}
 
export default City;