import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shop } from '@/pages/Shop';
import { App } from '@/components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'shop',
        element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      }
    ]
  },
]);

const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
