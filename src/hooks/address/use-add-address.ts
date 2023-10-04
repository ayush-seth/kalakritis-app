import { Address } from "@/types";
import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type AddressInput = Omit<Address, "id" | "user">;

export const useAddAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (address: AddressInput) => addAddress(address),
    onSuccess: () => {
      toast.success("Address added successfully");
      queryClient.invalidateQueries({ queryKey: ["address"] });
    },
    onError: () => toast.error("Something went wrong"),
  });
};

const addAddress = (address: AddressInput) =>
  authenticatedClient.post("usersaddress/", { json: address }).json();
