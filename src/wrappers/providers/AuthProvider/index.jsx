import { useEffect, useMemo, useCallback, useState, memo } from 'react';
import { PropTypes } from 'prop-types';

import { LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL } from '@/config';

import api from '@/services/api';

import authContext from '@/services/contexts/authContext';

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorage.getItem('token'));

  const loginRedirect = useCallback(() => window.location.replace(LOGIN_REDIRECT_URL));
  const logoutRedirect = useCallback(() => window.location.replace(LOGOUT_REDIRECT_URL));

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      isAuthenticated: !!token,
      setToken,
      loginRedirect,
      logoutRedirect,
    }),
    [token],
  );

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete api.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  // Provide the authentication context to the children components
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(AuthProvider);
