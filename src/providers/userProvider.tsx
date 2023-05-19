import React from 'react';
import {createContext, useState, useEffect} from 'react';

type UserProps = {
  username: string;
  perfilImage: string;
};

export const userContext = createContext<UserProps>({
  username: '',
  perfilImage: '',
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserProps>({
    username: '',
    perfilImage: '',
  });

  useEffect(() => {
    setUser({username: 'Nicolas', perfilImage: ''});
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
