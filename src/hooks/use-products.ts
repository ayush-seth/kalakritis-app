import { ApiResponse } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { ReadonlyURLSearchParams } from "next/navigation";

export function useProducts(query?: ReadonlyURLSearchParams) {
  return useQuery({
    queryKey: ["products", query?.toString()],
    queryFn: () => fetchProducts(query?.toString()),
  });
}

function fetchProducts(searchParams?: string) {
  return client.get("products", { searchParams }).json<ApiResponse>();
}
