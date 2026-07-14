"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { OrderPreviewItem } from "./OrderPreviewItem";

export function OrderPreview() {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4">
      <h1 className="text-sm">
        Your Order
      </h1>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 py-16 text-center">
          <p className="text-gray-600 text-sm">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            {items.map((line) => (
              <OrderPreviewItem
                key={line.item.id}
                line={line}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 self-end text-sm sm:min-w-56">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-base">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/"
          className="rounded-md border px-3 py-2 text-center text-sm transition-colors hover:bg-gray-100"
        >
          Continue Shopping
        </Link>

        <button
          disabled={items.length === 0}
          className="rounded-md bg-black px-3 py-2 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Buy on WhatsApp
        </button>
      </div>
    </div>
  );
}