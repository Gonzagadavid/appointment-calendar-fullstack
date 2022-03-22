import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import getMonth from '../../services/api/getMonth';
import AppContext from '../app/AppContext';
import { DefaultState } from '../../types';
import CalendarContext from './CalendarContext';

function CalendarProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const { month, year } = appContext as DefaultState;
  const [calendarBoard, setCalendarBoard] = useState([]);

  const getBoard = useCallback(async () => {
    const board = await getMonth(month, year);
    setCalendarBoard(board);
  }, [month, year]);

  useEffect(() => { getBoard(); }, [getBoard]);

  const context = { calendarBoard };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <CalendarContext.Provider value={contextMemo}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarProvider;
