import React from 'react';
import City from './City';


const Cities = ({ weatherDataList }) => {
  return (
    <div>
      {weatherDataList.map((weatherData, i) => (
          <City key={'city-' + i} weatherData={weatherData} />
        ))}
    </div>
  );
}

export default Cities;
