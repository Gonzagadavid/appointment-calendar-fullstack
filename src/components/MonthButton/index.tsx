import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import { decrementMonth, incrementMonth } from '../../functions';

function MonthButton(props: { text: string}) {
  const appContext = useContext(AppContext) as DefaultState;
  const {
    month, setMonth, year, setYear,
  } = appContext;
  const { text } = props;
  const checkText = text === 'increment';
  const icon = checkText ? '>' : '<';
  const callback = checkText ? incrementMonth : decrementMonth;
  const moveMonth = () => {
    const { newMonth, newYear } = callback(month, year);
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <button type="button" onClick={moveMonth}>{icon}</button>
  );
}

export default MonthButton;
