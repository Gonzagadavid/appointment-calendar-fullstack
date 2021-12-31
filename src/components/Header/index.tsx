import React from 'react';
import checkLogin from '../../functions/checkLogin';
import ConditionComponent from '../ConditionComponent';
import Greet from '../Greet';
import LoginAcess from '../LoginAcess';
import './style.css';

function Header() {
  const login = checkLogin();
  return (
    <div className="Header">
      <h1>APP&sbquo;ointment Calendar</h1>
      <ConditionComponent condition={!login} className="userBox">
        <LoginAcess />
      </ConditionComponent>
      <ConditionComponent condition={login} className="userBox">
        <Greet />
      </ConditionComponent>
    </div>
  );
}

export default Header;
