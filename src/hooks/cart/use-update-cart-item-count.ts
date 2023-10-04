import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

type UpdateCartItemCountInput = {
  id: number;
  qty: number;
};

export const useUpdateCartItemCount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: UpdateCartItemCountInput) => updateCartItemCount(input),
    onSuccess: () => {
      toast.success("Successfully updated item quantity");
      queryClient.invalidateQueries({ queryKey: ["cart-details"] });
    },
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
  });
};

const updateCartItemCount = ({ id, qty }: UpdateCartItemCountInput) =>
  authenticatedClient.patch(`cart/${id}/`, { json: { qty } });
