"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white flex items-center justify-between px-2 py-2">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-black" />

        <h1 className="text-xl font-bold">Soap Store</h1>
      </Link>

      <button
        type="button"
        className="relative rounded-md p-2 hover:bg-gray-100"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>
    </header>
  );
}