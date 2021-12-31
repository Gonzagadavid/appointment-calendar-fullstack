import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import AppContext from './AppContext';
import { monthCrr, yearCrr } from '../../constants/currentDate';
import useTwoState from '../../hooks/useTwoState';

function AppProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  // const [year, setYear] = useState(yearCrr);
  // const [month, setMonth] = useState(monthCrr);
  const [year, month, setDate] = useTwoState([yearCrr, monthCrr]);

  const context = {
    year,
    month,
    setDate,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <AppContext.Provider value={contextMemo}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
