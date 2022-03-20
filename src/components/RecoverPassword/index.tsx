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
      <input value={email} onInput={setEmail} />
      <button type="button" onClick={recoverPassword}>Send</button>
      <button type="button" onClick={() => setRenderRecorver(false)}>Cancel</button>
    </ConditionComponent>
  );
}

export default RecoverPassword;
