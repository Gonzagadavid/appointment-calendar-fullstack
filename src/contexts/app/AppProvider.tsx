import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import AppContext from './AppContext';
import { dayCrr, monthCrr, yearCrr } from '../../constants/currentDate';
import useTwoState from '../../hooks/useTwoState';
import useThreeState from '../../hooks/useThreeState';

function AppProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const [year, month, setDate] = useTwoState([yearCrr, monthCrr]);
  const [
    selectedYear, selectedMonth, selectedDay, setSelectedDate,
  ] = useThreeState([yearCrr, monthCrr, dayCrr]);

  const context = {
    year,
    month,
    setDate,
    selectedDay,
    selectedMonth,
    selectedYear,
    setSelectedDate,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <AppContext.Provider value={contextMemo}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
