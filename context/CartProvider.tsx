"use client"

import { useState } from "react";
import { CartLine, CartItem, CartContext } from "./CartContext";


type Props = {
    children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<CartLine[]>([]);

    function addItem(item: CartItem) {
        setCart([...cart, { item: item, quantity: 1 }])
    }

    function removeItem(id: number) {
        setCart(prev => prev.filter(line => line.item.id !== id));
    }

    function increaseQuantity(id: number) {
        setCart(prev =>
            prev.map(line =>
                line.item.id === id
                    ? { ...line, quantity: line.quantity + 1 }
                    : line
            )
        );
    }

    function decreaseQuantity(id: number) {
        setCart(prev =>
            prev
                .map(line =>
                    line.item.id === id
                        ? { ...line, quantity: line.quantity - 1 }
                        : line
                )
                .filter(line => line.quantity > 0)
        );
    }

    function clearCart() {
        setCart([]);
    }

    const totalItems = cart.reduce(
        (sum, line) => sum + line.quantity,0
    );

    const totalPrice = cart.reduce(
        (sum, line) => sum + line.item.price * line.quantity,0
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