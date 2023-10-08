import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useRemoveAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeAddress(id),
    onSuccess: () => {
      toast.success("Address deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
    onError: () => toast.error("Something went wrong!"),
  });
};

const removeAddress = (id: number) => {
  return authenticatedClient.delete(`usersaddress/${id}`).json();
};
