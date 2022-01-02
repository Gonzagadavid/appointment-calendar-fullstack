import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user/UserContext';
import { UserState } from '../../types';
import './style.css';

function SignUp() {
  const userContext = useContext(UserContext);
  const {
    name, lastname, email, password, confirm, setName,
    setLastname, setPassword, setEmail, setConfirm, sendNewUser,
  } = userContext as UserState;

  const requiriedFields = name && lastname && email && password && confirm;

  return (
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
          <Link to="/login">
            <button type="button">Log In</button>
          </Link>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
