import { ProductFilter } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useProductFiltersList() {
  return useQuery({
    queryKey: ["product-filters-list"],
    queryFn: () => fetchProductFiltersList(),
  });
}

function fetchProductFiltersList() {
  return client.get("products/product_filters").json<ProductFilter[]>();
}
