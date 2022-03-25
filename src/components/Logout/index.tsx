import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { clearStorage } from '../../services/storage';
import { DefaultState } from '../../types';
import './style.css';

function Logout() {
  const appContext = useContext(AppContext);
  const { setconnected } = appContext as DefaultState;

  const clearUser = () => {
    clearStorage();
    setconnected(false);
  };

  return (
    <div className="Logout">
      <button type="button" onClick={clearUser}>Logout</button>
    </div>
  );
}

export default Logout;
