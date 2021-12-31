import React from 'react';
import CalendarProvider from '../../contexts/calendar/CalendarProvider';
import CalendarBoard from '../CalendarBoard';
import CalendarHeader from '../CalendarHeader';
import './style.css';

function Calendar() {
  return (
    <div className="Calendar">
      <CalendarProvider>
        <CalendarHeader />
        <CalendarBoard />
      </CalendarProvider>
    </div>
  );
}

export default Calendar;
