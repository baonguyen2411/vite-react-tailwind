import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import useAuth from '@/services/hooks/useAuth';

import ErrorPage from '@/pages/ErrorPage';

import ProtectedRoute from '../ProtectedRoute';

const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const CallbackPage = lazy(() => import('@/pages/CallbackPage'));

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
  {
    path: '/auth/callback',
    element: <CallbackPage />,
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
        element: <HomePage />,
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
    element: <LoginPage />,
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
