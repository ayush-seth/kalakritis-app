import { Product } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchBestSeller(id),
    enabled: !!id,
  });
}

function fetchBestSeller(id: number) {
  return authenticatedClient.get(`products/${id}/`).json<Product>();
}
