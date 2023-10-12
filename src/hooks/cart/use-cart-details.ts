import { CartDetails } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { hasCookie } from "cookies-next";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

export const useCartDetails = (searchParams?: string) => {
  const loggedIn = hasCookie("token");

  return useQuery({
    queryKey: ["cart-details", searchParams],
    queryFn: () => fetchCartDetails(searchParams),
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
    enabled: loggedIn,
  });
};

const fetchCartDetails = (searchParams?: string) => {
  return authenticatedClient.get(`cart/`, { searchParams }).json<CartDetails>();
};
