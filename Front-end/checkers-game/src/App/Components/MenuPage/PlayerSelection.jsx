import React, { useState } from 'react';
import './NeonButtons.css'; 

const PlayerSelection = () => {
  const [selectedOption, setSelectedOption] = useState('valueIs-1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="container">
      <input
        className="input-btn"
        type="radio"
        id="valueIs-1"
        name="valueIs-radio"
        checked={selectedOption === 'valueIs-1'}
        value="valueIs-1"
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-1">
        <span className="span"></span>
        <span className="txt">One Player</span>
      </label>

      <input
        className="input-btn"
        type="radio"
        id="valueIs-2"
        name="valueIs-radio"
        checked={selectedOption === 'valueIs-2'}
        value="valueIs-2"
        onChange={handleOptionChange}
      />
      <label className="neon-btn" htmlFor="valueIs-2">
        <span className="span"></span>
        <span className="txt">Two Players</span>
      </label>
    </form>
  );
};

export default PlayerSelection;
