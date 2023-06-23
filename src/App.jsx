import { useEffect } from 'react';
import { Dropdown, Collapse, Ripple, Toast, initTE } from 'tw-elements';

import AuthProvider from '@/wrappers/providers/AuthProvider';
import Routes from '@/routes/Routes';

const App = () => {
  useEffect(() => {
    initTE({ Dropdown, Toast, Collapse, Ripple });
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
