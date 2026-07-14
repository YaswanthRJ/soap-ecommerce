"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const cart = useCart();
  return (
    <header className="sticky top-0 z-10 bg-white flex items-center justify-between px-2 py-2">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-black" />

        <h1 className="text-xl font-bold">Soap Store</h1>
      </Link>

      <div className="relative">
        <ShoppingCart />

        {cart.totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cart.totalItems}
          </span>
        )}
      </div>
    </header>
  );
}