import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '@/services/hooks/useAuth';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedRoute;
