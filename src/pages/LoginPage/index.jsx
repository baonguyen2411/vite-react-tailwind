import { useEffect } from 'react';

import useAuth from '@/services/hooks/useAuth';

const Login = () => {
  const { loginRedirect } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      loginRedirect();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};

export default Login;
