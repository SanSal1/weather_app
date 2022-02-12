import React from 'react';
import City from './City';


const Cities = ({ weatherDataList }) => {
  return (
    <ul id='cities-container'>
      {weatherDataList.map((weatherData) => (
          <City key={weatherData.current.id} weatherData={weatherData} />
        ))}
    </ul>
  );
}

export default Cities;
