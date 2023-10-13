import { SizeName } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export type OrderResponse = {
  id: number;
  ordered_products: {
    id: number;
    product: {
      sku: string;
      title: string;
      cost_price: number;
      selling_price: number;
      product_type: string;
      img: string;
    };
    qty: number;
    size: SizeName;
    color: string;
    order: number;
  }[];
  orderID: string;
  paymentID: string;
  name: string;
  email: string;
  country: string;
  state: string;
  address_line1: string;
  city: string;
  zipcode: string;
  phone_number: string;
  subtotal: number;
  coupon_name: string;
  coupon_discount: number;
  delivery_charges: number;
  tax: number;
  total: number;
  created_date: string;
  no_of_items: number;
  payment_type_details: any;
  payment_status: boolean;
  user: number;
};

export const useOrders = () => {
  return useQuery({ queryKey: ["orders"], queryFn: () => fetchOrders() });
};

const fetchOrders = () => {
  return authenticatedClient.get("order").json<OrderResponse[]>();
};
