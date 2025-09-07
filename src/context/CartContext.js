"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCart([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = useCallback((item) => {
    const cartItemId = `${item.id}-${item.color}-${item.engine}-${item.abs}`;

    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.cartItemId === cartItemId);

      if (existingItem) {
        return prevCart.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevCart, { ...item, cartItemId }];
    });
    toast.success(`${item.name} added to cart!`);
  }, []);

  const removeFromCart = useCallback((cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
    toast.error("Item removed from cart.");
  }, []);

  const updateQuantity = useCallback((cartItemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
    toast.success("Cart cleared.");
  }, []);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => {
    const itemPrice = item.price + (item.abs ? 20000 : 0);
    return total + itemPrice * item.quantity;
  }, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isLoaded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};