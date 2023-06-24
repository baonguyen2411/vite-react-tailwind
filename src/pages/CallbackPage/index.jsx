import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getCurrentURL } from '@/services/storage';

import { paramsToObject } from '@/utils/dataFormat/uriFormat';

import useAuth from '@/services/hooks/useAuth';

const CallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setToken } = useAuth();

  useEffect(() => {
    if (location.hash) {
      const { id_token: idToken } = paramsToObject(location.hash);
      setToken(idToken);
      navigate(getCurrentURL() || '/');
    } else {
      navigate('/login');
    }
  }, [location?.hash]);

  return <></>;
};

export default CallbackPage;
