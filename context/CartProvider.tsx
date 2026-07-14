"use client";

import { useEffect, useState } from "react";

import { CartContext, CartItem, CartLine } from "./CartContext";

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartLine[]>([]);

  // Load cart once
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Persist whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(item: CartItem) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);

      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id
            ? { ...line, quantity: line.quantity + 1 }
            : line
        );
      }

      return [...prev, { item, quantity: 1 }];
    });
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((line) => line.item.id !== id));
  }

  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((line) =>
        line.item.id === id
          ? { ...line, quantity: line.quantity + 1 }
          : line
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === id
            ? { ...line, quantity: line.quantity - 1 }
            : line
        )
        .filter((line) => line.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = cart.reduce(
    (sum, line) => sum + line.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, line) => sum + line.item.price * line.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: cart,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}