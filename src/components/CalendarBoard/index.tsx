import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalendarContext from '../../contexts/calendar/CalendarContext';
import { CalendarState } from '../../types';
import DayBox from '../DayBox';
import './style.css';

function CalendarBoard() {
  const calendarContext = useContext(CalendarContext) as CalendarState;
  const { calendarBoard } = calendarContext;

  return (
    <div className="CalendarBoard">
      { calendarBoard.map((week) => (
        <div className="week" key={uuidv4()}>
          { week.map((day) => (
            <DayBox
              key={uuidv4()}
              day={day}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CalendarBoard;
