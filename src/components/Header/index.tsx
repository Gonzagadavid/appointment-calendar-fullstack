import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import Greet from '../Greet';
import LoginAcess from '../LoginAcess';
import Logout from '../Logout';
import './style.css';

function Header() {
  const appContext = useContext(AppContext);
  const { connected } = appContext as DefaultState;
  return (
    <div className="Header">
      <h1>APP&rsquo;ointment Calendar</h1>
      <ConditionComponent condition={!connected} className="userBox">
        <LoginAcess />
      </ConditionComponent>
      <ConditionComponent condition={connected} className="userBox">
        <Greet />
        <Logout />
      </ConditionComponent>
    </div>
  );
}

export default Header;
