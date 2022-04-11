import React from 'react';
import CalendarProvider from '../../contexts/calendar/CalendarProvider';
import CalendarBoard from '../CalendarBoard';
import CalendarHeader from '../CalendarHeader';
import WeekNames from '../WeekNames';
import './style.css';

function Calendar() {
  return (
    <div className="Calendar">
      <CalendarProvider>
        <CalendarHeader />
        <WeekNames />
        <CalendarBoard />
      </CalendarProvider>
    </div>
  );
}

export default Calendar;
