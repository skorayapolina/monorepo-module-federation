import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from '@/pages/About';
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
        path: 'about',
        element: <Suspense fallback={'Loading...'}><About /></Suspense>
      }
    ]
  },
]);

const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
