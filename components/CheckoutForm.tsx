"use client";

import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { CustomerDetails } from "@/types/customer";
import { generateWhatsappMessage, openWhatsapp } from "@/service/whatsapp.service";

export function CheckoutForm() {
  const { items,totalPrice, clearCart } = useCart();

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    notes: "",
  });

  function updateField<K extends keyof CustomerDetails>(
    field: K,
    value: CustomerDetails[K]
  ) {
    setCustomer(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit() {
    const message = generateWhatsappMessage(
    items,
    customer,
    totalPrice
  );

  openWhatsapp(message);
  clearCart();
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
      <h2 className="px-2 text-sm">
        Customer Details
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          value={customer.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="rounded-md border px-2 py-1 text-sm"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={customer.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className="rounded-md border px-2 py-1 text-sm"
        />

        <textarea
          rows={3}
          placeholder="Delivery Address"
          value={customer.address}
          onChange={(e) => updateField("address", e.target.value)}
          className="resize-none rounded-md border px-2 py-1 text-sm"
        />

        <input
          type="text"
          placeholder="Landmark (Optional)"
          value={customer.landmark}
          onChange={(e) => updateField("landmark", e.target.value)}
          className="rounded-md border px-2 py-1 text-sm"
        />

        <textarea
          rows={2}
          placeholder="Notes (Optional)"
          value={customer.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          className="resize-none rounded-md border px-2 py-1 text-sm"
        />
      </div>

      <button
        disabled={
          items.length === 0 ||
          !customer.name.trim() ||
          !customer.phone.trim() ||
          !customer.address.trim()
        }
        onClick={handleSubmit}
        className="self-end rounded-md bg-black px-2 py-2 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Order on WhatsApp
      </button>
    </div>
  );
}