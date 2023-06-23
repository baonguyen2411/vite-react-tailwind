import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [location?.hash]);

  return <></>;
};

export default CallbackPage;
