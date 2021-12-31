import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';

function DayBox(props: { day: number}) {
  const { day } = props;
  const appContext = useContext(AppContext);
  const { year, month, setSelectedDate } = appContext as DefaultState;
  const selectedDate = [year, month, day];

  return (
    <button
      type="button"
      className="day"
      onClick={() => setSelectedDate(selectedDate)}
    >
      {day || ''}
    </button>
  );
}

export default DayBox;
