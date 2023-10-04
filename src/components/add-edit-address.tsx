import { useAddAddress } from "@/hooks/address/use-add-address";
import { Address } from "@/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Modal } from "./ui/modal";

type AddressModalProps = {
  open: boolean;
  defaultValues?: Address;
  onClose: () => void;
};

export default function AddressModal({
  open,
  onClose,
  defaultValues,
}: AddressModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Address>({
    defaultValues: defaultValues,
  });

  const addAddress = useAddAddress();

  const handleAddAddress = (address: Address) => {
    addAddress.mutate(address);
  };

  useEffect(() => reset(defaultValues), [defaultValues]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="max-h-[80vh] max-w-[500px] overflow-auto"
    >
      <h4 className="mb-6 text-lg font-medium text-accent-700">
        {!!defaultValues ? "Add New Address" : "Edit Address"}
      </h4>
      <form onSubmit={handleSubmit(handleAddAddress)}>
        <div className="space-y-4">
          <h3 className="mb-3 font-medium">Contact Details</h3>
          <Input
            type="text"
            label="Full Name"
            className="w-full bg-white"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />
          <Input
            type="text"
            label="Phone Number"
            maxLength={10}
            className="w-full bg-white"
            error={errors.phone_number?.message}
            {...register("phone_number", {
              required: "Phone Number is required",
            })}
          />
          <Input
            type="email"
            label="Email"
            className="w-full bg-white"
            error={errors.email?.message}
            {...register("email", { required: "Email is required" })}
          />
        </div>
        <div className="mb-8 mt-10">
          <h3 className="mb-3 font-medium">Address Details</h3>
          <Input
            type="text"
            label="Address"
            className="w-full bg-white"
            error={errors.address_line1?.message}
            {...register("address_line1", { required: "Address is required" })}
          />
          <Input
            type="text"
            label="State"
            className="w-full bg-white"
            error={errors.state?.message}
            {...register("state", { required: "State is required" })}
          />
          <Input
            type="text"
            label="City"
            className="w-full bg-white"
            error={errors.city?.message}
            {...register("city", { required: "City is required" })}
          />
          <Input
            type="text"
            label="Zipcode"
            className="w-full bg-white"
            error={errors.zipcode?.message}
            {...register("zipcode", { required: "Zipcode is required" })}
          />
          <div className="mb-5 ">
            <label className="mb-2 block text-sm font-light text-black/90">
              Address Type
            </label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input
                  className="grow px-4 py-2 outline-0"
                  type="radio"
                  id="address_type_home"
                  value="1"
                  defaultChecked={true}
                  {...register("address_type")}
                />
                <label htmlFor="address_type_home">Home</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="grow px-4 py-2 outline-0"
                  id="address_type_office"
                  type="radio"
                  value="2"
                  {...register("address_type")}
                />
                <label htmlFor="address_type_office">Office</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="grow px-4 py-2 outline-0"
                  id="address_type_others"
                  type="radio"
                  value="3"
                  {...register("address_type")}
                />
                <label htmlFor="address_type_others">Others</label>
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" className="w-full ">
          ADD ADDRESS
        </Button>
      </form>
    </Modal>
  );
}
