import { useEffect } from 'react';
import { Dropdown, Collapse, Ripple, initTE } from 'tw-elements';

import AuthProvider from '@/wrappers/providers/AuthProvider';
import Routes from '@/components/routes/Routes';

const App = () => {
  useEffect(() => {
    initTE({ Dropdown, Collapse, Ripple });
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
