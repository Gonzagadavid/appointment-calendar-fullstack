import React, { useContext } from 'react';
import UserContext from '../../contexts/user/UserContext';
import { UserState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import './style.css';

function RecoverPassword() {
  const userContext = useContext(UserContext);
  const {
    email, setEmail, recoverPassword, renderRecover, setRenderRecorver,
  } = userContext as UserState;

  return (
    <ConditionComponent className="RecoverPassword" condition={renderRecover}>
      <h3>send password to:</h3>
      <div className="form">
        <input value={email} onInput={setEmail} />
        <div className="buttons">
          <button type="button" onClick={recoverPassword}>Send</button>
          <button type="button" onClick={() => setRenderRecorver(false)}>Cancel</button>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default RecoverPassword;
