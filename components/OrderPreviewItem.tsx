"use client";

import Image from "next/image";

import { CartLine } from "@/context/CartContext";

interface OrderPreviewItemProps {
  line: CartLine;
}

export function OrderPreviewItem({ line }: OrderPreviewItemProps) {
  return (
    <div className="flex items-center gap-2 border-gray-200 py-2">
      <div className="relative h-16 w-16 overflow-hidden rounded-lg border">
        <Image
          src={line.item.picture}
          alt={line.item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-sm">
          {line.item.name}
        </h2>

        <p className="text-xs text-gray-500">
          Qty: {line.quantity}
        </p>
      </div>

      <p className="text-sm">
        ₹{line.item.price * line.quantity}
      </p>
    </div>
  );
}