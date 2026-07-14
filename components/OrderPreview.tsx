"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { OrderPreviewItem } from "./OrderPreviewItem";

export function OrderPreview() {
  const { items, totalPrice } = useCart();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between pl-2">
        <h1 className="text-sm">
          Order Summary
        </h1>

        <Link
          href="/"
          className="text-sm text-gray-600 transition-colors hover:text-black"
        >
          Continue Shopping
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 py-16 text-center">
          <p className="text-sm text-gray-600">
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

          <div className="flex justify-end gap-2 text-sm">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
}