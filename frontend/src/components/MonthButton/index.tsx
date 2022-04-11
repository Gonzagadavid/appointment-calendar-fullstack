import React, { useContext } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import { decrementMonth, incrementMonth } from '../../functions';

function MonthButton(props: { text: string }) {
  const appContext = useContext(AppContext) as DefaultState;
  const {
    month, year, setDate,
  } = appContext;
  const { text } = props;
  const checkText = text === 'increment';
  const icon = checkText ? <MdArrowForwardIos /> : <MdArrowBackIosNew />;
  const callback = checkText ? incrementMonth : decrementMonth;
  const moveMonth = () => {
    const { newMonth, newYear } = callback(month, year);
    setDate([newYear, newMonth]);
  };

  return (
    <button type="button" onClick={moveMonth}>{icon}</button>
  );
}

export default MonthButton;
