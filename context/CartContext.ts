import { createContext, useContext } from "react";

export interface CartItem {
    id: number;
    name: string;
    picture: string;
    price: number;
}

export interface CartLine {
    item: CartItem;
    quantity: number;
}

export interface CartContextType {
    items: CartLine[];

    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;

    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | null>(null)

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}