import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import useStorage from '../../hooks/useStorage';
import { DefaultState } from '../../types';

function Greet() {
  const appContext = useContext(AppContext);
  const { setconnected } = appContext as DefaultState;
  const { userName } = useStorage('calendar');
  const greetText = `Welcome, ${userName}!`;

  if (!userName) setconnected(false);

  return (
    <p>{greetText}</p>
  );
}

export default Greet;
