import { RouteObject } from 'react-router-dom';
import AppLayout from './components/layouts/app-layout';
import Cart from './pages/cart';
import NotFound from './pages/not-found';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Cart />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
