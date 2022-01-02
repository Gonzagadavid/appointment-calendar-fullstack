import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import './style.css';

function Message() {
  const appContext = useContext(AppContext);
  const { message, setMessage } = appContext as DefaultState;

  if (!message) return null;

  return (
    <div className="Message">
      <h2>{message}</h2>
      <button type="button" onClick={() => setMessage('')}>OK</button>
    </div>
  );
}

export default Message;
