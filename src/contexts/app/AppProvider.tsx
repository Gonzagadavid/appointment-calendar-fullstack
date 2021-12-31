import React, {
  PropsWithChildren, ReactNode, useMemo, useState,
} from 'react';
import AppContext from './AppContext';
import { monthCrr, yearCrr } from '../../constants/currentDate';

function AppProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const [year, setYear] = useState(yearCrr);
  const [month, setMonth] = useState(monthCrr);

  const context = {
    year,
    setYear,
    month,
    setMonth,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <AppContext.Provider value={contextMemo}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
