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
    onSuccess: () => {
      toast.success("Successfully removed from wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: () => toast.error("Error adding to wishlist"),
  });
};
