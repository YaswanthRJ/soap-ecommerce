import { getSoaps } from "@/service/soap.service";
import { ProductCard } from "./ProductCard";

export async function Catalog() {
  const soaps = await getSoaps();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {soaps.map((soap) => (
        <ProductCard key={soap.id} soap={soap} />
      ))}
    </div>
  );
}