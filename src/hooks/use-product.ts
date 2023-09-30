import { Product } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchBestSeller(id),
    enabled: typeof id === "string",
  });
}

function fetchBestSeller(id: string) {
  return client.get(`products/${id}/`).json<Product>();
}
