import React from 'react';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import UserProvider from '../../contexts/user/UserProvider';

function UserComponent() {
  return (
    <UserProvider>
      <LogIn />
      <SignUp />
    </UserProvider>
  );
}

export default UserComponent;
