import { useEffect } from 'react';
import { Collapse, Ripple, initTE } from 'tw-elements';

import Routes from '@/components/Router/Routes';
import AuthProvider from '@/components/layouts/AuthProvider';

const App = () => {
  useEffect(() => {
    initTE({ Collapse, Ripple });
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
