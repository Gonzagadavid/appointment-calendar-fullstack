import React from 'react';
import CalendarProvider from '../../contexts/calendar/CalendarProvider';
import CalendarHeader from '../CalendarHeader';

function Calendar() {
  return (
    <div>
      <CalendarProvider>
        <CalendarHeader />
      </CalendarProvider>
    </div>
  );
}

export default Calendar;
