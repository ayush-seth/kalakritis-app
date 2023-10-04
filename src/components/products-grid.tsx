import { useProducts } from "@/hooks/product/use-products";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";
import { Loader } from "./ui/loader";

export function ProductsGrid() {
  const params = useSearchParams();

  const { data, isLoading, isError } = useProducts(params);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {data?.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
