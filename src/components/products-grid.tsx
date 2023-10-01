import { useProducts } from "@/hooks/use-products";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";

export function ProductsGrid() {
  const params = useSearchParams();

  const { data } = useProducts(params);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {data?.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
