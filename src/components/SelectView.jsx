import React, { useState } from 'react';


/**
 * Customizable select component.
 * 
 * @param {string} selectId id for the select HTML tag
 * @param {array} options array of objects that make up the select's contents. Attributes include id and name.
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
        {options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectView;
