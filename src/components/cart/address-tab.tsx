import { useAddress } from "@/hooks/address/use-address";
import { useModalStore } from "@/store";
import { Address } from "@/types";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import AddressModal from "../add-edit-address";
import AddressCard from "./address-card";

export const AddressTab = () => {
  const addresses = useAddress();
  const showAddressModal = useModalStore((s) => s.showAddressModal);
  const closeAddressModal = useModalStore((s) => s.closeAddressModal);
  const openAddressModal = useModalStore((s) => s.openAddressModal);

  const [defaultValues, setDefaultValues] = useState<Address>();

  const handleEdit = (address: Address) => {
    setDefaultValues(address);
    openAddressModal();
  };

  return (
    <>
      {addresses.data?.map((address) => (
        <AddressCard key={address.id} address={address} onEdit={handleEdit} />
      ))}
      <button
        onClick={openAddressModal}
        className="flex max-w-[350px] basis-full flex-col items-center justify-center gap-2 rounded-md border border-accent-700 p-6 text-sm text-accent-700 hover:cursor-pointer"
      >
        <IconPlus />
        <span className="text-lg font-medium">Add</span>
      </button>
      <AddressModal
        open={showAddressModal}
        onClose={closeAddressModal}
        defaultValues={defaultValues}
      />
    </>
  );
};
