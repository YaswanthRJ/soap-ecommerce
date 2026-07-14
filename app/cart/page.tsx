import { CheckoutForm } from "@/components/CheckoutForm";
import { OrderPreview } from "@/components/OrderPreview";

export default function Cart() {
  return (
    <div className="p-4">
      <OrderPreview />
      <CheckoutForm />
    </div>
  );
}