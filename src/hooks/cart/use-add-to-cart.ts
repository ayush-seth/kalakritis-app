import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

export type AddToCartInput = {
  product: number;
  color: string;
  size: string;
  qty: number;
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cartItem: AddToCartInput) => addToCart(cartItem),
    onSuccess: (data) => {
      toast.success(data.details);
      queryClient.invalidateQueries({ queryKey: ["cart-details"] });
    },
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
  });
};

const addToCart = (cartItem: AddToCartInput) => {
  return authenticatedClient
    .post("cart/", { json: cartItem })
    .json<{ details: string }>();
};
