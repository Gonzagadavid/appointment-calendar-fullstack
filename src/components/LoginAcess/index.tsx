import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function LoginAcess() {
  return (
    <div className="LoginAcess">
      <Link to="/login">
        <button type="button">Log In</button>
      </Link>
      <Link to="/signup">
        <button type="button">Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginAcess;
