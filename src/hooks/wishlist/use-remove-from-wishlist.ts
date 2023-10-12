import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) =>
      authenticatedClient
        .delete(`wishlist/${productId}/`)
        .json<{ details: string }>(),
    onSuccess: (_, productId) => {
      toast.success("Successfully removed from wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });
    },
    onError: () => toast.error("Error adding to wishlist"),
  });
};
