import { useAddress } from "@/hooks/address/use-address";
import { useRemoveAddress } from "@/hooks/address/use-remove-address";
import NiceModal from "@ebay/nice-modal-react";
import AddressModal from "../address-modal";
import { Button } from "../ui/button";

export const AddressSettings = () => {
  const addresses = useAddress();
  const removeAddress = useRemoveAddress();

  return (
    <div className="max-w-md space-y-8">
      {addresses.data?.map((a) => {
        return (
          <div
            key={a.id}
            className="space-y-2 border-[0.5px] border-black px-3 py-4"
          >
            <span className="font-medium">{a.name}</span>
            <p className="text-sm">
              {a.address_line1}, {a.city}, {a.state}, {a.country}, {a.zipcode}
            </p>
            <p className="text-sm">Number: {a.phone_number}</p>
            <div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Button
                  variant="secondary"
                  onClick={() => removeAddress.mutate(a.id)}
                >
                  Remove
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => NiceModal.show(AddressModal, { address: a })}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      <Button variant="primary" onClick={() => NiceModal.show(AddressModal)}>
        Add address
      </Button>
    </div>
  );
};
