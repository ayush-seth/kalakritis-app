import { Address } from "@/types";
import { client } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useAddress(id: string) {
  return useQuery({
    queryKey: ["address", id],
    queryFn: () => fetchAddress(id),
  });
}

function fetchAddress(id: string) {
  return client.get(`usersaddress/${id}/`).json<Address>();
}
