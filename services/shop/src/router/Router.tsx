import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { Shop } from '@/pages/Shop';

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}>Second pade shop</Suspense>
      }
    ]
  },
];

export const router = createBrowserRouter(routes);

export default routes;
