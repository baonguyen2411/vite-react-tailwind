// External dependencies
import { useEffect, useMemo, useCallback, useState, memo } from 'react';
import { PropTypes } from 'prop-types';

// Internal dependencies
import { LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL } from '@/config';

import axiosInstance from '@/services/api';
import * as localStorageService from '@/services/storage';
import authContext from '@/services/contexts/authContext';

import { STATUS_CODES } from '@/utils/constants/statusCode';

// Stylesheets

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorageService.getToken);

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
      localStorageService.setToken(token);
      axiosInstance.interceptors.request.use(
        function (config) {
          // Do something before request is sent
          config.headers['Authorization'] = `Bearer ${token}`;
          return config;
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        },
      );

      axiosInstance.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          const accessToken = localStorageService.getAccessToken();
          const {
            config: originalRequest,
            response: { status = '' },
          } = error || {};

          switch (status) {
            case STATUS_CODES.UNAUTHORIZED:
              if (originalRequest && accessToken) {
                // do something to refresh token
              } else {
                loginRedirect();
              }
              break;

            default:
              break;
          }
          return Promise.reject(error);
        },
      );
    } else {
      localStorageService.removeToken();
    }
  }, [token]);

  // Provide the authentication context to the children components
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(AuthProvider);
