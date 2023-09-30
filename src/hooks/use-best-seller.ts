import { ApiResponse } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useBestSeller() {
  return useQuery({
    queryKey: ["best-seller"],
    queryFn: () => fetchBestSeller(),
    select: (data) => data.results.slice(0, 4),
  });
}

function fetchBestSeller() {
  return client
    .get("api/products", { searchParams: { tags: "Bestseller" } })
    .json<ApiResponse>();
}
