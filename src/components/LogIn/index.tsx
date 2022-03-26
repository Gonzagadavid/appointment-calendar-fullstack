import React, { useContext } from 'react';
import ConditionComponent from '../ConditionComponent';
import AppContext from '../../contexts/app/AppContext';
import UserContext from '../../contexts/user/UserContext';
import { DefaultState, UserState } from '../../types';
import './style.css';
import RecoverPassword from '../RecoverPassword';

function LogIn() {
  const appContext = useContext(AppContext);
  const { renderLogin, setRenderLogin, setRenderSignup } = appContext as DefaultState;
  const userContext = useContext(UserContext);
  const {
    email, setEmail, password, setPassword, setKeepConnect, keepConnect, sendLogin,
    setRenderRecorver,
  } = userContext as UserState;

  const requiriedFields = email && password;

  const toSignup = () => {
    setRenderLogin(false);
    setRenderSignup(true);
  };

  return (
    <ConditionComponent className="LoginContainer" condition={renderLogin}>
      <div className="Login">
        <h2>Log In</h2>
        <RecoverPassword />
        <div className="form">
          <input type="email" value={email} onInput={setEmail} placeholder="example@email.com" />
          <input type="password" value={password} onInput={setPassword} placeholder="password" />
          <button type="button" onClick={() => setRenderRecorver(true)}>Forgot password</button>
          <label htmlFor="keep-connected">
            <input
              type="checkbox"
              id="keep-connected"
              onChange={({ target: { checked } }) => setKeepConnect(checked)}
              checked={keepConnect}
            />
            keep permanently connected
          </label>
          <div className="buttons">
            <button type="button" disabled={!requiriedFields} onClick={sendLogin}>Enter</button>
            <button type="button" onClick={toSignup}>Sign Up</button>
            <button type="button" onClick={() => setRenderLogin(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default LogIn;
