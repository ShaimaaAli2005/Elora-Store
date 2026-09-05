import { createContext, useContext, useEffect, useMemo, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("elora-cart") || "[]"));
  useEffect(() => localStorage.setItem("elora-cart", JSON.stringify(cart)), [cart]);

  const addToCart = (product, qty = 1) => {
    setCart(items => {
      const found = items.find(x => x.id === product.id);
      return found
        ? items.map(x => x.id === product.id ? { ...x, qty: x.qty + qty } : x)
        : [...items, { ...product, qty }];
    });
  };
  const updateQty = (id, qty) => setCart(items => items.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  const removeFromCart = id => setCart(items => items.filter(x => x.id !== id));
  const clearCart = () => setCart([]);
  const count = useMemo(() => cart.reduce((s, x) => s + x.qty, 0), [cart]);
  const total = useMemo(() => cart.reduce((s, x) => s + x.price * x.qty, 0), [cart]);

  return <CartContext.Provider value={{ cart, count, total, addToCart, updateQty, removeFromCart, clearCart }}>
    {children}
  </CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
