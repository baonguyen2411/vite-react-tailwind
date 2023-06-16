import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage.jsx';

import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
