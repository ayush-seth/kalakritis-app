import { ApiResponse } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useNewArrivals() {
  return useQuery({
    queryKey: ["new-arrivals"],
    queryFn: () => fetchNewArrivals(),
    select: (data) => data.results.slice(0, 4),
  });
}

function fetchNewArrivals() {
  return client
    .get("products", { searchParams: { tags: "New Arrivals" } })
    .json<ApiResponse>();
}
