import React, { useState } from 'react';


/**
 * Customizable select component.
 * 
 * @param {String} selectId id for the select HTML tag
 * @param {Object} options object of entries that make up the select's contents. Key as value, name as what is displayed.
 * @param {function} onChange notifies parent of the selected value changing
 */
function SelectView({ selectId, options, onChange }) {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value) => {
    onChange(value);
    setSelectedValue(value);
  }

  return (
    <div className='select-box container'>
      <select id={selectId} className='select' value={selectedValue} onChange={(e) => handleChange(e.target.value)}>
        {Object.entries(options).map((option) => (
          <option key={option[0]} value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectView;
