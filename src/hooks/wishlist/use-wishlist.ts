import { Product } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { hasCookie } from "cookies-next";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

type WishlistItem = {
  id: number;
  product: Product;
};

type WishlistResponse = WishlistItem[];

export const useWishlist = () => {
  const loggedIn = hasCookie("token");
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      authenticatedClient.get("wishlist/").json<WishlistResponse>(),
    onError: (e) => toast.error((e as HTTPError).message),
    enabled: loggedIn,
  });
};
