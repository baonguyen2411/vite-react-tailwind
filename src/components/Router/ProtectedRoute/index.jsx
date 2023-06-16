import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = false;

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return (
    <>
      {/* other elements */}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
