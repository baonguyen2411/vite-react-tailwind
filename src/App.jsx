import { Collapse, Ripple, initTE } from 'tw-elements';

import Routes from '@/components/Router/Routes';
import AuthProvider from '@/components/layouts/AuthProvider';

initTE({ Collapse, Ripple });

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
