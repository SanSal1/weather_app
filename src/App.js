import './App.css';
import React, { useState, useEffect } from 'react';
import SelectView from './components/SelectView';
import Cities from './components/Cities';
import Status from './components/Status';

import cities from './data/cities';
import errorMessages from './data/errorMessages';
import strings from './data/strings';


function App() {

  const [errorStatus, setErrorStatus] = useState(null);
  const [visibleCities, setVisibleCities] = useState([]);

  useEffect(() => {
    displayCities('0');
  }, [])

  
  const displayCities = (cityId) => {
    // filter list of cities based on what should be visible in the UI

    setErrorStatus(null);

    if (cityId === '0') {
      // display all cities
      const citiesClone =  cities.filter(city => city.id !== '0');
      setVisibleCities(citiesClone);
    }
    else {
      // display a specific city based on id
      const citiesClone =  cities.filter(city => city.id === cityId);
      setVisibleCities(citiesClone);
    }
  }

  const handleSelectChange = (cityId) => {
    displayCities(cityId);
  }

  const handleError = (statusCode) => {
    // handle an API fetch error by displaying a status message
    if (errorMessages[statusCode]) {
      setErrorStatus(errorMessages[statusCode])
    }
    else {
      setErrorStatus(errorMessages[0])
    }

    setVisibleCities([]);
  }

  return (
    <div id='app-root'>

      <header id='header'>
        <h1 className='heading'>
          {strings.headerText}
        </h1>
      </header>

      <main id='content'>
        <SelectView selectId={'city-select'} options={cities} onChange={handleSelectChange} />
        {!errorStatus && <Cities visibleCities={visibleCities} handleError={handleError} />}
        {errorStatus && <Status message={errorStatus} />}
      </main>

    </div>
  );
}

export default App;
