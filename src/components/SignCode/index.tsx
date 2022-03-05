import React, { useContext } from 'react';
import ConditionComponent from '../ConditionComponent';
import AppContext from '../../contexts/app/AppContext';
import UserContext from '../../contexts/user/UserContext';
import { DefaultState, UserState } from '../../types';
import './style.css';

function SignCode() {
  const appContext = useContext(AppContext);
  const { renderSignup, setRenderLogin, setRenderSignup } = appContext as DefaultState;
  const userContext = useContext(UserContext);
  const {
    name, lastname, email, password, confirm, setName,
    setLastname, setPassword, setEmail, setConfirm, sendNewUser,
  } = userContext as UserState;

  const requiriedFields = name && lastname && email && password && confirm;

  const toLogin = () => {
    setRenderSignup(false);
    setRenderLogin(true);
  };

  return (
    <ConditionComponent className="SignUpContainer" condition={renderSignup}>
      <div className="SignCode" />
    </ConditionComponent>
  );
}

export default SignCode;
