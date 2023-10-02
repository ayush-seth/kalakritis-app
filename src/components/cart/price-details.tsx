import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type CouponDetails = {
  coupon_name: string | null;
  coupon_percent: number;
  coupon_discount: number;
  coupon_success_message: string | null;
  coupon_error_message: string | null;
};

type PriceDetailsProps = {
  no_of_items: number;
  subtotal: number;
  delivery_charges: string;
  tax: number;
  coupon_details: CouponDetails;
  total: number;
};

export default function PriceDetails(data: PriceDetailsProps) {
  return (
    <div className="border-l border-slate-500 py-5 pl-10">
      <div className="apply_coupon_area mb-16">
        <h4 className="mb-4 text-lg font-medium">APPLY COUPONS</h4>
        <form action="" className="flex gap-3">
          <input
            type="text"
            className="grow border border-slate-500 bg-[#FFFDF9] px-4 py-2 text-sm"
            maxLength={8}
            placeholder="ENTER COUPON CODE"
            defaultValue={
              data.coupon_details.coupon_name
                ? data.coupon_details.coupon_name
                : ""
            }
          />
          <button className="h-11 bg-[black] px-8 text-white">APPLY</button>
        </form>
        {data.coupon_details.coupon_success_message ? (
          <span className="mt-2 block text-primary-800">
            {data.coupon_details.coupon_success_message}
          </span>
        ) : null}
        {data.coupon_details.coupon_error_message ? (
          <span className="mt-2 block text-accent-700">
            {data.coupon_details.coupon_error_message}
          </span>
        ) : null}
      </div>
      <div className="mb-15 price_area mb-16">
        <h4 className="mb-4 text-lg font-medium">
          PRICE DETAILS ( {data.no_of_items} Item(s) )
        </h4>
        <div className="flex justify-between border-b border-t border-slate-500 py-4 text-sm opacity-75">
          <span>Sub Total</span>
          <span>Rs. {data.subtotal} </span>
        </div>
        <div className="flex justify-between border-b border-slate-500 py-4 text-sm opacity-75">
          <span>Tax</span>
          <span>{data.tax}</span>
        </div>
        <div className="flex justify-between border-b border-slate-500 py-4 text-sm opacity-75">
          <span>Delivery Charges</span>
          <span>Free</span>
        </div>
        {data.coupon_details.coupon_name ? (
          <div className="flex justify-between border-b border-slate-500 py-4 text-sm opacity-75">
            <span>Coupon Discount</span>
            <span>- Rs. {data.coupon_details.coupon_discount}</span>
          </div>
        ) : null}

        <div className="flex justify-between py-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">Rs. {data.total} </span>
        </div>
      </div>
      <div className="mb-16">
        <Image
          src={"/cart_static_icon.svg"}
          alt=""
          width={300}
          height={200}
          className="w-full"
        />
      </div>
      <div>
        <Button variant="primary" className="w-full">
          SELECT ADDRESS
        </Button>
      </div>
    </div>
  );
}
