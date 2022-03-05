import React, {
  PropsWithChildren, ReactNode, useContext, useMemo, useState,
} from 'react';
import { useCode } from '../../hooks';
import { DefaultState } from '../../types';
import {
  CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED, CREATED, CALENDAR, EMPTY, checkEmail,
  useInput, login, postUser, saveLocalStorage, saveSessinStorage, AppContext, UserContext,
} from './imports';

function UserProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    setMessage, setconnected, setRenderLogin, setRenderSignup,
  } = appContext as DefaultState;
  const [keepConnect, setKeepConnect] = useState(false);
  const { state: name, setState: setName } = useInput(EMPTY);
  const { state: lastname, setState: setLastname } = useInput(EMPTY);
  const { state: email, setState: setEmail } = useInput(EMPTY);
  const { state: password, setState: setPassword } = useInput(EMPTY);
  const { state: confirm, setState: setConfirm } = useInput(EMPTY);
  const { setCode, setCodeInput, auth } = useCode();

  const authUser = () => {

  };

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

  const sendLogin = async () => {
    if (!checkEmail(email)) return setMessage(INVALID_EMAIL);
    const response = await login({ email, password });
    if (response.message) return (CONNECT_FAIL);
    const callback = keepConnect ? saveLocalStorage : saveSessinStorage;
    callback(CALENDAR, response);
    setconnected(true);
    return setRenderLogin(false);
  };

  const context = {
    name, lastname, email, password, confirm, setName, setLastname, setEmail, setPassword,
    setConfirm, sendNewUser, keepConnect, setKeepConnect, sendLogin,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <UserContext.Provider value={contextMemo}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
