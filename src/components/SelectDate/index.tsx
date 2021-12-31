import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { monthNames } from '../../constants/namesList';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import { yearOptions } from '../../functions';

import './style.css';

function SelectDate() {
  const appContext = useContext(AppContext) as DefaultState;
  const {
    year, month, setDate,
  } = appContext;
  const options = yearOptions(year);

  return (
    <div className="SelectDate">
      <select value={year} onChange={({ target: { value } }) => setDate([+value, month])}>
        {options.map((yearValue) => (
          <option key={uuidv4()}>{yearValue}</option>
        ))}
      </select>
      {monthNames.map((monthName) => (
        <button
          type="button"
          className={`selectmonth${monthName === month ? ' selected' : ''}`}
          onClick={() => setDate([year, monthName])}
          key={uuidv4()}
        >
          {monthName}
        </button>
      ))}
    </div>
  );
}

export default SelectDate;
