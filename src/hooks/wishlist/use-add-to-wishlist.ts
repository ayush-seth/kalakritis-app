import { authenticatedClient } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddToWishlist = () => {
  return useMutation({
    mutationFn: (productId: number) =>
      authenticatedClient
        .post("wishlist/", { json: { product: productId } })
        .json<{ details: string }>(),
    onSuccess: ({ details }) => toast.success(details),
    onError: () => toast.error("Error adding to wishlist"),
  });
};
