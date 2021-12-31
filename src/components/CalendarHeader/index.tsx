import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import MonthButton from '../MonthButton';
import './style.css';

function CalendarHeader() {
  const { year, month } = useContext(AppContext) as DefaultState;

  return (
    <div className="CalendarHeader">
      <MonthButton text="decrement" />
      <h2>{`${month} ${year}`}</h2>
      <MonthButton text="increment" />
    </div>
  );
}

export default CalendarHeader;
