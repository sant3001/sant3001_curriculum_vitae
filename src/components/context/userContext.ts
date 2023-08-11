import { createContext, useContext } from 'react';
import { User } from 'types';

export const UserContext = createContext<User | null>(null);

export const useUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(UserContext)!;
};
