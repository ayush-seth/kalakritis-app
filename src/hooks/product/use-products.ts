import { ApiResponse } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { ReadonlyURLSearchParams } from "next/navigation";

export function useProducts(params?: ReadonlyURLSearchParams) {
  return useQuery({
    queryKey: ["products", params?.toString()],
    queryFn: () => fetchProducts(params?.toString()),
  });
}

function fetchProducts(searchParams?: string) {
  return authenticatedClient
    .get("products", { searchParams })
    .json<ApiResponse>();
}
