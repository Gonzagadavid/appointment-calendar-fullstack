import React, { useState } from 'react';
import { HandlerFunction } from '../../types';
import './style.css';

function SignUp() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handler: HandlerFunction = (element, callback) => {
    const { value } = element as HTMLInputElement;
    callback(value);
  };

  return (
    <div className="SignUp">
      <h2>Sign up</h2>
      <div className="form">
        <input
          type="text"
          value={name}
          onInput={({ target }) => handler(target, setName)}
          placeholder="Name"
        />
        <input
          type="text"
          value={lastname}
          onInput={({ target }) => handler(target, setLastname)}
          placeholder="Lastname"
        />
        <input
          type="email"
          value={email}
          onInput={({ target }) => handler(target, setEmail)}
          placeholder="email@server.com"
        />
        <input
          type="password"
          value={password}
          onInput={({ target }) => handler(target, setPassword)}
          placeholder="password"
        />
        <button type="button">Send</button>
      </div>
    </div>
  );
}

export default SignUp;
