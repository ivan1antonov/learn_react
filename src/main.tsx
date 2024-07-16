import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Details from './components/Search/Detail/Detail';
import ErrorPage from './ErrorPage';
import { DetailProvider } from './DetailProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/detail/:id',
        element: <Details />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/page/:page',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DetailProvider>
      <RouterProvider router={router} />
    </DetailProvider>
  </React.StrictMode>
);
