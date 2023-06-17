import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAuth } from '@/services/hooks/useAuth';

import ErrorPage from '@/pages/ErrorPage';
import Login from '@/pages/LoginPage';

import ProtectedRoute from '../ProtectedRoute';

// Define public routes accessible to all users
const routesForPublic = [
  {
    path: '/service',
    element: <div>Service Page</div>,
  },
  {
    path: '/about-us',
    element: <div>About Us</div>,
  },
];

// Define routes accessible only to authenticated users
const routesForAuthenticatedOnly = [
  {
    path: '/',
    element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <div>User Home Page</div>,
      },
      {
        path: '/profile',
        element: <div>User Profile</div>,
      },
      {
        path: '/logout',
        element: <div>Logout</div>,
      },
    ],
  },
];

// Define routes accessible only to non-authenticated users
const routesForNotAuthenticatedOnly = [
  {
    path: '/login',
    element: <Login />,
  },
];

const Routes = () => {
  const { token } = useAuth();

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
