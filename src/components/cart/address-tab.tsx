import { useAddress } from "@/hooks/address/use-address";
import { Address } from "@/types";
import NiceModal from "@ebay/nice-modal-react";
import { IconPlus } from "@tabler/icons-react";
import AddressModal from "../address-modal";
import AddressCard from "./address-card";

export const AddressTab = () => {
  const addresses = useAddress();

  const handleEdit = (address: Address) => {
    NiceModal.show(AddressModal, { address });
  };

  return (
    <>
      {addresses.data?.map((address) => (
        <AddressCard key={address.id} address={address} onEdit={handleEdit} />
      ))}
      <button
        onClick={() => NiceModal.show(AddressModal)}
        className="flex max-w-[350px] basis-full flex-col items-center justify-center gap-2 rounded-md border border-accent-700 p-6 text-sm text-accent-700 hover:cursor-pointer"
      >
        <IconPlus />
        <span className="text-lg font-medium">Add</span>
      </button>
    </>
  );
};
