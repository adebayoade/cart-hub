import { RouteObject } from 'react-router-dom';
import AppLayout from './components/layouts/app-layout';
import Cart from './pages/cart';

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
];
