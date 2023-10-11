import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) =>
      authenticatedClient
        .post("wishlist/", { json: { product: productId } })
        .json<{ details: string }>(),
    onSuccess: ({ details }) => {
      toast.success(details);
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: () => toast.error("Error adding to wishlist"),
  });
};
