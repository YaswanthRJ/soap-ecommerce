"use client";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/context/CartContext";

interface CartButtonProps {
  soap: CartItem;
}

export function CartButton({ soap }: CartButtonProps) {
  const {
    items,
    addItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const line = items.find((line) => line.item.id === soap.id);

  if (!line) {
    return (
      <button
        onClick={() => addItem(soap)}
        className="flex h-7 w-full max-w-32 items-center justify-center rounded-md bg-black text-xs font-medium text-white transition-colors hover:bg-gray-800 active:scale-[0.98]"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex h-7 w-full max-w-32 items-center overflow-hidden rounded-md border border-gray-300 bg-white">
      <button
        onClick={() => decreaseQuantity(soap.id)}
        className="flex h-full w-9 items-center justify-center border-r border-gray-300 text-sm font-semibold transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        −
      </button>

      <span className="flex-1 text-center text-xs font-semibold">
        {line.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(soap.id)}
        className="flex h-full w-9 items-center justify-center border-l border-gray-300 text-sm font-semibold transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}