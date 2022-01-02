import React, {
  PropsWithChildren, ReactNode, useContext, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED } from '../../constants/messages';
import { CREATED } from '../../constants/status';
import checkEmail from '../../functions/checkEmail';
import useInput from '../../hooks/useInput';
import login from '../../services/backend/user/login';
import postUser from '../../services/backend/user/postUser';
import { DefaultState } from '../../types';
import AppContext from '../app/AppContext';
import UserContext from './UserContext';

function UserProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const { setMessage } = appContext as DefaultState;
  const { state: name, setState: setName } = useInput('');
  const { state: lastname, setState: setLastname } = useInput('');
  const { state: email, setState: setEmail } = useInput('');
  const { state: password, setState: setPassword } = useInput('');
  const { state: confirm, setState: setConfirm } = useInput('');
  const navigate = useNavigate();

  const sendNewUser = async () => {
    if (!checkEmail(email)) return setMessage(INVALID_EMAIL);
    if (password !== confirm) return setMessage(PASSWORD_NOT_CONFIRMED);

    const { status, message } = await postUser({
      name, lastname, email, password,
    });
    setMessage(message);
    if (status === CREATED) return navigate('/');
    return navigate('/signup');
  };

  const sendLogin = async () => {
    if (!checkEmail(email)) return setMessage(INVALID_EMAIL);
    const response = await login({ email, password });
    if (response.message) return (CONNECT_FAIL);
  };

  const context = {
    name,
    lastname,
    email,
    password,
    confirm,
    setName,
    setLastname,
    setEmail,
    setPassword,
    setConfirm,
    sendNewUser,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <UserContext.Provider value={contextMemo}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
