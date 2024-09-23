import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { CartProvider } from './store/cart';

const router = createBrowserRouter(routes);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
