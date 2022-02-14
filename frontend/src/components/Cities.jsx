import React from 'react';
import City from './City';


/**
 * Component that lists and displays cities based on given ids.
 * 
 * @param {array} visibleCities array of ids for cities that should be visible
 * @param {function} handleError parent is called in case an error happens during a fetch
 */
const Cities = ({ visibleCities, handleError }) => {
  return (
    <ul id='cities-container'> {visibleCities.map((city) => (
        <City key={city.id} city={city} handleError={handleError} />
      ))}
    </ul>
  );
}

export default Cities;
