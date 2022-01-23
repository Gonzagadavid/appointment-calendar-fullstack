import React, { useContext } from 'react';
import ConditionComponent from '../ConditionComponent';
import AppContext from '../../contexts/app/AppContext';
import UserContext from '../../contexts/user/UserContext';
import { DefaultState, UserState } from '../../types';
import './style.css';

function SignUp() {
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
      <div className="SignUp">
        <h2>Sign up</h2>
        <div className="form">
          <input type="text" value={name} onInput={setName} placeholder="Name" />
          <input type="text" value={lastname} onInput={setLastname} placeholder="Lastname" />
          <input type="email" value={email} onInput={setEmail} placeholder="example@email.com" />
          <input type="password" value={password} onInput={setPassword} placeholder="password" />
          <input type="password" value={confirm} onInput={setConfirm} placeholder="password" />
          <div className="buttons">
            <button type="button" onClick={sendNewUser} disabled={!requiriedFields}>Send</button>
            <button type="button" onClick={toLogin}>Log In</button>
            <button type="button" onClick={() => setRenderSignup(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default SignUp;
