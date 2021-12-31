import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../contexts/app/types';
import MonthButton from '../MonthButton';

function CalendarHeader() {
  const { year, month } = useContext(AppContext) as DefaultState;

  return (
    <div>
      <MonthButton text="increment" />
      <h2>{`${month} ${year}`}</h2>
      <MonthButton text="decrement" />
    </div>
  );
}

export default CalendarHeader;
