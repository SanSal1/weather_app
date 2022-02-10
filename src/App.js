import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import SelectView from './components/SelectView';
import Cities from './components/Cities';


function App() {

  const [weatherDataList, setWeatherDataList] = useState([]);

  let isMounted = useRef(true);

  useEffect(() => {
    fetchWeather();
    return () => { isMounted = false };
  }, [])

  const fetchWeather = async () => {
    try {
      // TODO: fetch data from API
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSelectChange = (cityId) => {
    // TODO: setWeatherDataList("data according to cityId")
  }

  return (
    <div className='App'>
      <header id='header'>
        <div>
          <h1>
            Säätutka
          </h1>
        </div>
      </header>

      <main id='content'>
        <SelectView onChange={handleSelectChange} />
        <Cities weatherDataList={weatherDataList} />
      </main>
    </div>
  );
}

export default App;
