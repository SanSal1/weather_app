import React from 'react';
import City from './City';


const Cities = ({ visibleCities, handleError }) => {
  return (
    <ul id='cities-container'> {visibleCities.map((city) => (
        <City key={city.id} city={city} handleError={handleError} />
      ))}
    </ul>
  );
}

export default Cities;
