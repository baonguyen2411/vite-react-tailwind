import Routes from '@/components/Router/Routes';
import AuthProvider from '@/components/layouts/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
