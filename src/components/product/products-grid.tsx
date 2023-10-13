import { useProducts } from "@/hooks/product/use-products";
import { useSearchParams } from "next/navigation";
import { Pagination } from "../pagination";
import { Loader } from "../ui/loader";
import { ProductCard } from "./product-card";

export function ProductsGrid() {
  const params = useSearchParams();
  const { data, isLoading, isError } = useProducts(params);

  if (isLoading) return <Loader />;
  if (isError) return "Something went wrong";

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {data?.results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        next_url={data.html_context.next_url}
        previous_url={data.html_context.previous_url}
        page_links={data.html_context.page_links}
      />
    </div>
  );
}
