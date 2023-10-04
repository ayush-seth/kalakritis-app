import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

type DeleteFromCartInput = {
  id: number;
};

export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: DeleteFromCartInput) => deleteFromCart(id),
    onSuccess: () => {
      toast.success("Successfully deleted item from cart");
      queryClient.invalidateQueries({ queryKey: ["cart-details"] });
    },
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
  });
};

const deleteFromCart = (id: number) => {
  return authenticatedClient.delete(`cart/${id}`, { json: { id } }).json();
};
