import React, { useContext } from 'react';
import CalendarContext from '../../contexts/calendar/CalendarContext';
import { CalendarState } from '../../contexts/calendar/types';
import './style.css';

function CalendarBoard() {
  const calendarContext = useContext(CalendarContext) as CalendarState;
  const { calendarBoard } = calendarContext;

  return (
    <div className="CalendarBoard">
      { calendarBoard.map((week) => (
        <div className="week">
          { week.map((day) => (
            <button type="button" className="day">{day || ''}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CalendarBoard;
