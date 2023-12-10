import { createContext, useContext } from 'react';
import { User } from 'types';

export const UserContext = createContext<User | null>(null);

export const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('useUser must be used along with <UserContext.Provider />');
  }
  return user;
};
