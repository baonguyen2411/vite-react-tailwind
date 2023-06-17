import { useContext } from 'react';

import authContext from '@/services/contexts/authContext';

export const useAuth = () => {
  return useContext(authContext);
};
