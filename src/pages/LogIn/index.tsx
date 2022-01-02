import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user/UserContext';
import { UserState } from '../../types';

function LogIn() {
  const userContext = useContext(UserContext);
  const {
    email, setEmail, password, setPassword,
  } = userContext as UserState;

  const requiriedFields = email && password;

  return (
    <div>
      <h2>Log In</h2>
      <input type="email" value={email} onInput={setEmail} placeholder="email@server.com" />
      <input type="password" value={password} onInput={setPassword} placeholder="password" />
      <div className="buttons">
        <button type="button" disabled={!requiriedFields}>Send</button>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
