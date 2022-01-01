import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import postUser from '../../services/backend/user/postUser';
import UserContext from './UserContext';

function UserProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const { state: name, setState: setName } = useInput('');
  const { state: lastname, setState: setLastname } = useInput('');
  const { state: email, setState: setEmail } = useInput('');
  const { state: password, setState: setPassword } = useInput('');
  const { state: confirm, setState: setConfirm } = useInput('');
  const navigate = useNavigate();

  const sendNewUser = async () => {
    const { status } = await postUser({
      name, lastname, email, password,
    });
    if (status === 201) return navigate('/');
    return navigate('/signup');
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
