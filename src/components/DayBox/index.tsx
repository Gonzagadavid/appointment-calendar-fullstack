import React, { useContext } from 'react';
import { BsCalendar2Check } from 'react-icons/bs';
import { monthNames } from '../../constants/namesList';
import AppContext from '../../contexts/app/AppContext';
import useScheduled from '../../hooks/useScheduled';
import { DefaultState } from '../../types';

function DayBox(props: { day: number }) {
  const { day } = props;
  const appContext = useContext(AppContext);
  const {
    year, month, setSelectedDate, selectedDay, selectedMonth, selectedYear,
  } = appContext as DefaultState;
  const selectedDate = [year, month, day];
  const selected = year === selectedYear && month === selectedMonth && day === selectedDay;
  const checked = useScheduled(year, monthNames.indexOf(month), day);

  return (
    <button
      type="button"
      className={`day${selected ? ' selected' : ''}`}
      onClick={() => setSelectedDate(selectedDate)}
      disabled={!day}
    >
      {day || ''}
      {checked && <span className="icon"><BsCalendar2Check /></span>}
    </button>
  );
}

export default DayBox;
