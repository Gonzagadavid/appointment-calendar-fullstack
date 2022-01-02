import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user/UserContext';
import { UserState } from '../../types';
import './style.css';

function LogIn() {
  const userContext = useContext(UserContext);
  const {
    email, setEmail, password, setPassword, setKeepConnect, keepConnect, sendLogin,
  } = userContext as UserState;

  const requiriedFields = email && password;

  return (
    <div className="Login">
      <h2>Log In</h2>
      <div className="form">
        <input type="email" value={email} onInput={setEmail} placeholder="example@email.com" />
        <input type="password" value={password} onInput={setPassword} placeholder="password" />
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
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
