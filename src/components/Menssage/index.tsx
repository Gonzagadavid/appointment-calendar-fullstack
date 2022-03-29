import React, { useContext } from 'react';
import AppContext from '../../contexts/app/AppContext';
import { DefaultState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import './style.css';

function Message() {
  const appContext = useContext(AppContext);
  const { message, setMessage } = appContext as DefaultState;

  return (
    <ConditionComponent condition={!!message} className="Message">
      <div className="message-container">
        <h2>{message}</h2>
        <button type="button" onClick={() => setMessage('')}>OK</button>
      </div>
    </ConditionComponent>
  );
}

export default Message;
