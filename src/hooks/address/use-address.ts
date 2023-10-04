import { Address } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useAddress = () => {
  return useQuery({
    queryKey: ["address"],
    queryFn: () => fetchAddress(),
  });
};

function fetchAddress() {
  return authenticatedClient.get(`usersaddress/`).json<Address[]>();
}
