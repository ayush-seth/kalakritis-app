import React from "react";
import { Modal } from "./ui/modal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAddress } from "@/hooks/use-fetch-address";
import { Address } from "@/types";

type AddressModalProps = {
  open: boolean;
  onClose: () => void;
  action: "add" | "edit";
  defaultData: Address;
};

export default function AddressModal({
  open,
  onClose,
  action,
  defaultData,
}: AddressModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="max-h-[80vh] max-w-[500px] overflow-auto"
    >
      <h4 className="mb-6 text-lg font-medium text-accent-700">
        {action == "add" ? "Add New Address" : "Edit Address"}
      </h4>
      <form action="">
        <div>
          <h3 className="mb-3 font-medium">Contact Details</h3>
          <Input
            type="text"
            label="Full Name"
            className="mb-5 w-full bg-white"
            placeholder="Full Name"
            required={true}
            defaultValue={defaultData.name}
          />
          <Input
            type="text"
            label="Phone Number"
            maxLength={10}
            className="mb-5 w-full bg-white"
            placeholder="Phone Number"
            required={true}
            defaultValue={defaultData.phone_number}
          />
          <Input
            type="email"
            label="Email"
            className="mb-5 w-full bg-white"
            placeholder="Email"
            required={true}
            defaultValue={defaultData.email}
          />
        </div>
        <div className="mb-8 mt-10">
          <h3 className="mb-3 font-medium">Address Details</h3>
          <Input
            type="text"
            label="Address"
            className="mb-5 w-full bg-white"
            placeholder="Address"
            required={true}
            defaultValue={defaultData.address_line1}
          />
          <Input
            type="text"
            label="State"
            className="mb-5 w-full bg-white"
            placeholder="State"
            required={true}
            defaultValue={defaultData.state}
          />
          <Input
            type="text"
            label="City"
            className="mb-5 w-full bg-white"
            placeholder="City"
            required={true}
            defaultValue={defaultData.city}
          />
          <Input
            type="text"
            label="Pincode"
            className="mb-5 w-full bg-white"
            placeholder="Pincode"
            required={true}
            defaultValue={defaultData.zipcode}
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
                  name="address_type"
                  id="address_type_home"
                  required={true}
                  defaultChecked={defaultData.address_type == "1"}
                />
                <label htmlFor="address_type_home">Home</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="grow px-4 py-2 outline-0"
                  type="radio"
                  name="address_type"
                  id="address_type_office"
                  required={true}
                  defaultChecked={defaultData.address_type == "2"}
                />
                <label htmlFor="address_type_office">Office</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="grow px-4 py-2 outline-0"
                  type="radio"
                  name="address_type"
                  id="address_type_others"
                  required={true}
                  defaultChecked={defaultData.address_type == "3"}
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
