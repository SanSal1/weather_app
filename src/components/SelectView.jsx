import React, { useState } from 'react';
import cities from '../data/cities'


function SelectView({ onChange }) {
  const [city, setCity] = useState('0');

  const handleChange = (value) => {
    onChange(value);
    setCity(value);
  }

  return (
    <div>
      <select id='city-select' value={city} onChange={(e) => handleChange(e.target.value)}>
        {Object.entries(cities).map((option) => (
          <option key={option[0]} value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectView;
