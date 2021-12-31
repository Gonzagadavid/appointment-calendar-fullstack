import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';

function TaskDate() {
  const appContext = useContext(AppContext);
  const { selectedYear, selectedMonth, selectedDay } = appContext as DefaultState;

  const textDate = `${selectedMonth} ${selectedDay}, ${selectedYear}`;
  return (
    <div>
      <h2>{textDate}</h2>
    </div>
  );
}

export default TaskDate;
