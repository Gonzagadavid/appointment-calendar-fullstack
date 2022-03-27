import React, {
  useContext, useEffect, useState,
} from 'react';
import ConditionComponent from '../ConditionComponent';
import AppContext from '../../contexts/app/AppContext';
import UserContext from '../../contexts/user/UserContext';
import { DefaultState, UserState } from '../../types';
import './style.css';

function SignCode() {
  const appContext = useContext(AppContext);
  const { renderSignCode, setRenderSignCode } = appContext as DefaultState;
  const userContext = useContext(UserContext);
  const {
    codeInput, setCodeInput, auth, sendNewUser, indexCode,
  } = userContext as UserState;
  const [message, setMessage] = useState('Insert Code');
  const [char1, char2, char3, char4, digit] = codeInput;

  useEffect(() => {
    if (!auth) return;
    sendNewUser();
    setRenderSignCode(false);
  }, [auth]);

  useEffect(() => {
    if (codeInput.length < 6) return;
    const status = auth ? 'Confirmed' : 'Incorect Code';
    setMessage(status);
  }, [codeInput]);

  return (
    <ConditionComponent className="SignUpContainer" condition={renderSignCode}>
      <div className="SignCode">
        <h2>Confirm Code</h2>
        <p>A confirmation code has been sent to your email</p>
        <label htmlFor="emailCode">
          Code:
          <input id="emailCode" value={char1 || ''} onInput={setCodeInput} readOnly={indexCode !== 0} />
          <input id="emailCode" value={char2 || ''} onInput={setCodeInput} readOnly={indexCode !== 1} />
          <input id="emailCode" value={char3 || ''} onInput={setCodeInput} readOnly={indexCode !== 2} />
          <input id="emailCode" value={char4 || ''} onInput={setCodeInput} readOnly={indexCode !== 3} />
          -
          <input id="emailCode" value={digit || ''} onInput={setCodeInput} readOnly={indexCode !== 4} />
        </label>
        <p>{message}</p>
        <button type="button" onClick={() => setRenderSignCode(false)}>Cancel</button>
      </div>
    </ConditionComponent>
  );
}

export default SignCode;
