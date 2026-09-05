import { createContext, useContext, useEffect, useState } from "react";
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("elora-wishlist") || "[]"));
  useEffect(() => localStorage.setItem("elora-wishlist", JSON.stringify(wishlist)), [wishlist]);

  const toggleWishlist = product => setWishlist(items =>
    items.some(x => x.id === product.id)
      ? items.filter(x => x.id !== product.id)
      : [...items, product]
  );
  const isWishlisted = id => wishlist.some(x => x.id === id);

  return <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
    {children}
  </WishlistContext.Provider>;
}
export const useWishlist = () => useContext(WishlistContext);
