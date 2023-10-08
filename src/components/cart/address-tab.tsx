import { useAddress } from "@/hooks/address/use-address";
import { Address } from "@/types";
import NiceModal from "@ebay/nice-modal-react";
import { IconPlus } from "@tabler/icons-react";
import AddressModal from "../address-modal";
import { Loader } from "../ui/loader";
import AddressCard from "./address-card";

export const AddressTab = () => {
  const addresses = useAddress();

  const handleEdit = (address: Address) => {
    NiceModal.show(AddressModal, { address });
  };

  if (addresses.isLoading) return <Loader />;
  if (addresses.isError) return "Something went wrong!";

  return (
    <>
      <div className="mb-10 flex w-full items-center justify-between border-b border-slate-400 pb-4 lg:hidden">
        <span>CART</span>
        <span>STEP 2/3</span>
      </div>
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
