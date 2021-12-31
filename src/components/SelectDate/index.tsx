import React, { useContext } from 'react';
import { monthNames } from '../../constants/namesList';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../contexts/app/types';
import yearOptions from '../../functions/yearOptions';

function SelectDate() {
  const appContext = useContext(AppContext) as DefaultState;
  const {
    year, setYear, month, setMonth,
  } = appContext;
  const options = yearOptions(year);

  return (
    <div>
      <select value={year} onChange={({ target: { value } }) => setYear(+value)}>
        {options.map((yearValue) => (
          <option>{yearValue}</option>
        ))}
      </select>
      {monthNames.map((monthName) => (
        <button
          type="button"
          className={`selectmonth${monthName === month ? 'selected' : ''}`}
          onClick={() => setMonth(monthName)}
        >
          {monthName}
        </button>
      ))}
    </div>
  );
}

export default SelectDate;
