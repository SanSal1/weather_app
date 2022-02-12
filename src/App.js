import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import SelectView from './components/SelectView';
import Cities from './components/Cities';
import weatherService from './services/weatherService'

import cities from './data/cities';


function App() {

  const [selectedCity, setSelectedCity] = useState('0');
  const [weatherDataList, setWeatherDataList] = useState([]);

  let isMounted = useRef(true);

  useEffect(() => {
    fetchWeather(selectedCity);
    return () => { isMounted = false };
  }, [])

  const fetchWeather = async (cityId) => {
    try {
      if (cityId === '0') {
        // TODO: all cities at once
        return;
      }

      const dataCurrent = await weatherService.getCurrent(cityId);
      const dataForecast = await weatherService.getForecast(cityId);

      if (isMounted) setWeatherDataList([
        {
          current: dataCurrent.data,
          forecast: dataForecast.data
        }
      ]);

    } catch (err) {
      console.log(err);
    }
  }

  const handleSelectChange = (cityId) => {
    setSelectedCity(cityId);
    fetchWeather(cityId);
  }

  return (
    <div>
      <header id='header'>
        <h1>
          Säätutka
        </h1>
      </header>

      <main id='content'>
        <SelectView selectId={'city-select'} options={cities} onChange={handleSelectChange} />
        <Cities weatherDataList={weatherDataList} />
      </main>
    </div>
  );
}

export default App;
