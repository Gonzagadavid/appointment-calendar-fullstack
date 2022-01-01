import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import UserContext from './UserProvider';

function UserProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;

  const context = {

  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <UserContext.Provider value={contextMemo}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
