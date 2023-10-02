import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";
import { Address } from "@/types";

type AddressCardProps = {
  openAddressModal: (action: "add" | "edit") => void;
  setAddressModalDefault: (param: Address) => void;
  data: Address;
};

export default function AddressCard({
  openAddressModal,
  setAddressModalDefault,
  data,
}: AddressCardProps) {
  const editAddress = () => {
    setAddressModalDefault(data);
    openAddressModal("edit");
  };

  return (
    <div className="max-w-[350px] basis-full  rounded-md border border-accent-700 p-6 text-sm">
      <h5 className="font-medium">{data.name}</h5>
      <span className="my-1 block">{data.phone_number}</span>
      <span className="mb-6 block">
        {data.address_line1}, {data.city}, {data.state}-{data.zipcode}
      </span>
      <div className="flex gap-2">
        <Button
          onClick={editAddress}
          variant="secondary"
          className="px-6 py-2 hover:font-medium"
        >
          Edit
        </Button>
        <Button variant="primary" className="flex items-center gap-2">
          Deliver here <IconArrowNarrowRight />
        </Button>
      </div>
    </div>
  );
}
