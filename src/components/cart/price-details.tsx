import { Button } from "@/components/ui/button";
import {
  InitiatePaymentPayload,
  useInitiatePayment,
} from "@/hooks/use-initiate-payment";
import { useUserStore } from "@/store";
import { CartDetails } from "@/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type PriceDetailsProps = CartDetails;

export default function PriceDetails(data: PriceDetailsProps) {
  const { register, handleSubmit } = useForm<{
    coupon: string;
  }>();

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedAddress = useUserStore((s) => s.selectedAddress);
  const tabValue = useUserStore((s) => s.tab);
  const setTab = useUserStore((s) => s.setTab);

  const initiatePayment = useInitiatePayment();

  const handleApplyCoupon = ({ coupon }: { coupon: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set("coupon", coupon);
    router.push(`/cart?${params.toString()}`, undefined, { shallow: true });
  };

  return (
    <div className="mt-10 border-slate-500 py-5 lg:mt-0 lg:border-l lg:pl-10">
      <div className="apply_coupon_area mb-16">
        <h4 className="mb-4 text-lg font-medium">APPLY COUPON</h4>
        <form className="flex gap-3" onSubmit={handleSubmit(handleApplyCoupon)}>
          <input
            className="grow border border-slate-500 bg-[#FFFDF9] px-4 py-2 text-sm uppercase"
            maxLength={8}
            placeholder="ENTER COUPON CODE"
            defaultValue={
              data.coupon_details.coupon_name
                ? data.coupon_details.coupon_name
                : ""
            }
            {...register("coupon")}
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
      {tabValue === "cart" && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => setTab("shipping")}
        >
          select address
        </Button>
      )}
      {tabValue === "payment" && (
        <Button
          variant="primary"
          className="w-full"
          onClick={() => {
            if (!selectedAddress) return;

            const payload: InitiatePaymentPayload = {
              ...selectedAddress,
              ...data,
              coupon_name: data.coupon_details.coupon_name,
              delivery_charges: 0,
              coupon_discount: data.coupon_details.coupon_discount,
              ordered_products: data.cart_items.map((item) => ({
                color: item.color,
                qty: item.qty,
                size: item.size,
                product: item.product.id,
              })),
            };
            initiatePayment.mutate(payload);
          }}
        >
          pay now
        </Button>
      )}
    </div>
  );
}
