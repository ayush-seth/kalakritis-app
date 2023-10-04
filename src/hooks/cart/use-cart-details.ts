import { CartDetails } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

export const useCartDetails = () => {
  return useQuery({
    queryKey: ["cart-details"],
    queryFn: () => fetchCartDetails(),
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
  });
};

const fetchCartDetails = () => {
  return authenticatedClient.get("cart/").json<CartDetails>();
};
