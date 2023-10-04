import { Address } from "@/types";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Button } from "../ui/button";

type AddressCardProps = {
  address: Address;
  onEdit: (address: Address) => void;
};

export default function AddressCard({ address, onEdit }: AddressCardProps) {
  return (
    <div className="max-w-[350px] basis-full rounded-md border border-accent-700 p-6 text-sm">
      <h5 className="font-medium">{address.name}</h5>
      <span className="my-1 block">{address.phone_number}</span>
      <span className="mb-6 block">
        {address.address_line1}, {address.city}, {address.state}-
        {address.zipcode}
      </span>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="px-6 py-2 hover:font-medium"
          onClick={() => onEdit(address)}
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
