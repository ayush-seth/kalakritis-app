import { CartItem, Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

type CartCardProps = {
  data: any;
};

//{quantity, product}:CartCardProps
export default function CartCard({ data }: CartCardProps) {
  let [qty, setQty] = useState(data.qty);

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev: number) => prev - 1);
    }
  };

  const increaseQty = () => {
    if (qty < 5) {
      setQty((prev: number) => prev + 1);
    }
  };

  return (
    <div className="flex gap-5 border-b border-slate-500 p-3">
      <div className="basis-32">
        <Image
          src={data.product.product_images[0].img}
          alt=""
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div className="p-2">
        <h4 className="mb-1 text-base font-semibold">{data.product.title} </h4>
        <span className="block">Color: {data.color}</span>
        <span className="block">Size : {data.size}</span>
        <div className="my-5 flex gap-10">
          <div className="flex items-center gap-4 bg-[#F7EBD6] px-2 py-1">
            <button onClick={decreaseQty}>-</button> <span>{qty}</span>{" "}
            <button onClick={increaseQty}>+</button>
          </div>
          <span className="text-xl font-semibold">
            Rs. {data.product.selling_price} /-
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="underline">Delete</button>
          <div className="h-5 w-[1px] bg-slate-500"></div>
          <button className="underline">Move To Wishlist</button>
        </div>
      </div>
    </div>
  );
}
