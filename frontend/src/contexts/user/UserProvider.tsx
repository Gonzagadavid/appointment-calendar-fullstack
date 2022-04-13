import React, {
  PropsWithChildren, ReactNode, useContext, useMemo, useState,
} from 'react';
import sendPassword from '../../services/backend/user/sendPassword';
import { DefaultState } from '../../types';
import {
  CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED, CREATED, CALENDAR, EMPTY,
  useInput, login, postUser, saveLocalStorage, saveSessinStorage, AppContext, UserContext,
  checkEmail,
} from './imports';

function UserProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    setMessage, setconnected, setRenderLogin, setRenderSignup,
  } = appContext as DefaultState;
  const [keepConnect, setKeepConnect] = useState(false);
  const [renderRecover, setRenderRecorver] = useState(false);
  const { state: name, setState: setName } = useInput(EMPTY);
  const { state: lastname, setState: setLastname } = useInput(EMPTY);
  const { state: email, setState: setEmail } = useInput(EMPTY);
  const { state: password, setState: setPassword } = useInput(EMPTY);
  const { state: confirm, setState: setConfirm } = useInput(EMPTY);

  const sendNewUser = async () => {
    if (!checkEmail(email)) return setMessage(INVALID_EMAIL);
    if (password !== confirm) return setMessage(PASSWORD_NOT_CONFIRMED);

    const { status, message } = await postUser({
      name, lastname, email, password,
    });
    setMessage(message);
    if (status !== CREATED) return null;
    return setRenderSignup(false);
  };

  const recoverPassword = async () => {
    const { message } = await sendPassword(email);
    setMessage(message);
    setRenderRecorver(false);
  };

  const sendLogin = async () => {
    if (!checkEmail(email)) return setMessage(INVALID_EMAIL);
    const response = await login({ email, password });
    if (response.message) return setMessage(CONNECT_FAIL);
    const callback = keepConnect ? saveLocalStorage : saveSessinStorage;
    callback(CALENDAR, response);
    setconnected(true);
    return setRenderLogin(false);
  };

  const context = {
    name, lastname, email, password, confirm, setName, setLastname, setEmail, setPassword,
    setConfirm, sendNewUser, keepConnect, setKeepConnect, sendLogin,
    renderRecover, setRenderRecorver, recoverPassword,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <UserContext.Provider value={contextMemo}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
