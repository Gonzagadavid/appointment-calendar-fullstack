import React from 'react';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import UserProvider from '../../contexts/user/UserProvider';
import SignCode from '../SignCode';

function UserComponent() {
  return (
    <UserProvider>
      <LogIn />
      <SignUp />
      <SignCode />
    </UserProvider>
  );
}

export default UserComponent;
