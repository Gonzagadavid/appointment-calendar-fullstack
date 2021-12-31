import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import AppContext from '../app/AppContext';
import CalendarContext from './CalendarContext';

function CalendarProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const { month, year } = appContext;
  const [calendarBoard, setCalendarBoard] = useState([]);

  const getBoard = useCallback(async () => {

  }, [month, year]);

  const context = {

  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <CalendarContext.Provider value={contextMemo}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarProvider;
