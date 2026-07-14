import { CartLine } from "@/context/CartContext";
import { CustomerDetails } from "@/types/customer";


const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

export function generateWhatsappMessage(
  items: CartLine[],
  customer: CustomerDetails,
  totalPrice: number
): string {
  const order = items
    .map(
      (line) =>
        `• ${line.item.name}\n` +
        `  Qty: ${line.quantity}\n` +
        `  Price: ₹${line.item.price * line.quantity}`
    )
    .join("\n\n");

  return `Hello,

I'd like to place an order.

Order Summary

${order}

Total: ₹${totalPrice}

Customer Details

Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}
Landmark: ${customer.landmark || "-"}

Notes: ${customer.notes || "-"}`;
}

export function openWhatsapp(message: string) {
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}