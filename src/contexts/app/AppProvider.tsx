import React, {
  PropsWithChildren, ReactNode, useMemo, useState,
} from 'react';
import {
  AppContext, dayCrr, monthCrr, yearCrr, useTwoState, useThreeState, checkLogin,
} from './imports';

function AppProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const login = checkLogin();
  const [renderLogin, setRenderLogin] = useState(false);
  const [renderSignup, setRenderSignup] = useState(false);
  const [message, setMessage] = useState('');
  const [connected, setconnected] = useState(login);
  const [year, month, setDate] = useTwoState([yearCrr, monthCrr]);
  const [renderTaskDetails, setRenderTaskDetails] = useState(false);
  const [renderTaskForm, setRenderTaskForm] = useState(false);
  const [
    selectedYear, selectedMonth, selectedDay, setSelectedDate,
  ] = useThreeState([yearCrr, monthCrr, dayCrr]);

  const context = {
    year, month, setDate, selectedDay, selectedMonth, selectedYear, setSelectedDate, connected,
    setconnected, message, setMessage, renderLogin, renderSignup, setRenderLogin, setRenderSignup,
    renderTaskDetails, setRenderTaskDetails, renderTaskForm, setRenderTaskForm,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <AppContext.Provider value={contextMemo}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
