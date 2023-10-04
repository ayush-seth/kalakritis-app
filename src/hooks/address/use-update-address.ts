import AddressModal from "@/components/address-modal";
import { Address } from "@/types";
import { authenticatedClient } from "@/utils";
import NiceModal from "@ebay/nice-modal-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type AddressInput = Omit<Address, "user">;

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (address: AddressInput) => updateAddress(address),
    onSuccess: () => {
      toast.success("Address updated successfully");
      queryClient.invalidateQueries({ queryKey: ["address"] });
      NiceModal.remove(AddressModal);
    },
    onError: () => toast.error("Something went wrong"),
  });
};

const updateAddress = (address: AddressInput) =>
  authenticatedClient
    .patch(`usersaddress/${address.id}/`, { json: address })
    .json();
