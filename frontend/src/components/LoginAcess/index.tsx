import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import './style.css';

function LoginAcess() {
  const appContext = useContext(AppContext);
  const { setRenderLogin, setRenderSignup } = appContext as DefaultState;
  return (
    <div className="LoginAcess">
      <button type="button" onClick={() => setRenderLogin(true)}>Log In</button>
      <button type="button" onClick={() => setRenderSignup(true)}>Sign Up</button>
    </div>
  );
}

export default LoginAcess;
