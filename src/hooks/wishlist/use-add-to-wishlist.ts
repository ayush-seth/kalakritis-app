import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) =>
      authenticatedClient
        .post("wishlist/", { json: { product: productId } })
        .json<{ details: string }>(),
    onSuccess: ({ details }, productId) => {
      toast.success(details);
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
    onError: (e) => toast.error((e as HTTPError).message),
  });
};
