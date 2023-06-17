import { useEffect, useMemo, useState, memo } from 'react';
import { PropTypes } from 'prop-types';

import api from '@/services/api';

import authContext from '@/services/contexts/authContext';

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete api.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  // Provide the authentication context to the children components
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(AuthProvider);
