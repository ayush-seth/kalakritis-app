import { Product } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

type WishlistItem = {
  id: number;
  product: Product;
};

type WishlistResponse = WishlistItem[];

export const useWishlist = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      authenticatedClient.get("wishlist/").json<WishlistResponse>(),
    onError: () => toast.error("Error fetching  wishlist"),
  });
};
