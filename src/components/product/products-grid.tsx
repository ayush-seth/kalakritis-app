import { useProducts } from "@/hooks/product/use-products";
import { useSearchParams } from "next/navigation";
import { Loader } from "../ui/loader";
import { ProductCard } from "./product-card";

export function ProductsGrid() {
  const params = useSearchParams();
  const { data, isLoading } = useProducts(params);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {data?.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
