import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: {},
  setCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ open: false });
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
