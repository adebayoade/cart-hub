import { createContext, useContext, useState } from 'react';

type CartProviderProps = {
  children: React.ReactNode;
};

type Item = {
  name: string;
  qty: number;
  price: number;
};

type CartProviderState = {
  cartItems: Item[];
  addToCart: (name: string, qty: number, price: number) => void;
  findItem: (product: string) => boolean;
  removeItem: (product: string) => void;
  deleteCart: () => void;
  increaseQty: (product: string) => void;
  decreaseQty: (product: string) => void;
  calcTotal: () => number;
};

const initialState: CartProviderState = {
  cartItems: [],
  addToCart: () => null,
  findItem: () => false,
  removeItem: () => null,
  deleteCart: () => null,
  increaseQty: () => null,
  decreaseQty: () => null,
  calcTotal: () => 0,
};

export const CartProviderContext = createContext<CartProviderState>(initialState);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (name: string, qty: number, price: number) => {
    setCartItems(prev => [...prev, { name, qty, price }]);
  };

  const findItem = (name: string) => {
    const index = cartItems.findIndex(element => element.name === name);

    if (index === -1) return false;

    return true;
  };

  const removeItem = (name: string) => {
    const newCartItems = cartItems.filter(item => item.name !== name);

    setCartItems(newCartItems);
  };

  const increaseQty = (name: string) => {
    const index = cartItems.findIndex(element => element.name === name);

    if (index !== -1) {
      const newCartItems = cartItems.map(item => {
        item.qty += 1;
      });
    }
  };

  const decreaseQty = (name: string) => {};

  const calcTotal = () => {
    return cartItems.reduce((accumulator, item) => {
      const sum = item.qty * item.price;
      accumulator += sum;
      return accumulator;
    }, 0);
  };

  const deleteCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    findItem,
    removeItem,
    increaseQty,
    decreaseQty,
    calcTotal,
    deleteCart,
  };

  return <CartProviderContext.Provider value={value}>{children}</CartProviderContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
