import { Address } from "@/types";
import { authenticatedClient } from "@/utils";
import { useMutation } from "@tanstack/react-query";

type InitiatePaymentResponse = {
  type: "PAY_PAGE";
  redirectInfo: {
    method: "GET";
    url: string;
  };
};

type AddressPayload = Omit<Address, "id" | "user" | "address_type">;

export type InitiatePaymentPayload = AddressPayload & {
  no_of_items: number;
  subtotal: number;
  delivery_charges: number;
  tax: number;
  total: number;
  ordered_products: Array<{
    product: number;
    qty: number;
    size: string;
    color: string;
  }>;
  coupon_name: string;
  coupon_discount: number;
};

export const useInitiatePayment = () => {
  return useMutation({
    mutationFn: (payload: InitiatePaymentPayload) => initiatePayment(payload),
    onSuccess: ({ redirectInfo: { url } }) => window.open(url),
  });
};

const initiatePayment = (payload: InitiatePaymentPayload) => {
  return authenticatedClient
    .post("payment/", { json: { ...payload } })
    .json<InitiatePaymentResponse>();
};
