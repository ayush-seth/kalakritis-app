import { useDeleteFromCart } from "@/hooks/cart/use-delete-from-cart";
import { useUpdateCartItemCount } from "@/hooks/cart/use-update-cart-item-count";
import { useAddToWishlist } from "@/hooks/product/use-add-to-wishlist";
import { CartItem } from "@/types";
import Image from "next/image";

type CartCardProps = {
  cartItem: CartItem;
};

export default function CartCard({ cartItem }: CartCardProps) {
  const updateCartItemCount = useUpdateCartItemCount();
  const deleteFromCart = useDeleteFromCart();
  const addToWishlist = useAddToWishlist();

  return (
    <div className="flex w-full gap-2 border-b border-slate-500 pb-3 md:gap-5 lg:p-3">
      <div className="shrink-0 basis-[95px] md:basis-[130px]">
        <Image
          src={cartItem.product.product_images[0].img}
          width={130}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="p-1 md:p-2">
        <h4 className="mb-1 text-sm font-semibold md:text-lg">
          {cartItem.product.title}
        </h4>
        <div className="">
          <span className="mb-1 flex items-center gap-2 text-xs text-gray-600 md:text-sm">
            Color:
            <div
              className="h-4 w-4 border"
              style={{ background: `#${cartItem.color}` }}
            ></div>
          </span>
          <span className="text-xs text-gray-600 md:block md:text-sm">
            Size : {cartItem.size}
          </span>
          <div className="my-4 flex gap-6 md:my-5 md:gap-10">
            <div className="flex items-center gap-4 bg-[#F7EBD6] px-2 py-1">
              <button
                onClick={() =>
                  updateCartItemCount.mutate({
                    id: cartItem.id,
                    qty: cartItem.qty - 1,
                  })
                }
              >
                -
              </button>{" "}
              <span>{cartItem.qty}</span>
              <button
                onClick={() =>
                  updateCartItemCount.mutate({
                    id: cartItem.id,
                    qty: cartItem.qty + 1,
                  })
                }
              >
                +
              </button>
            </div>
            <span className="text-xl font-semibold">
              Rs. {cartItem.product.selling_price} /-
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-xs underline md:text-sm"
              onClick={() => deleteFromCart.mutate({ id: cartItem.id })}
            >
              Delete
            </button>
            <div className="h-5 w-[1px] bg-slate-500"></div>
            <button
              className="text-xs underline md:text-sm"
              onClick={() =>
                addToWishlist.mutate(cartItem.product.id, {
                  onSuccess: () => deleteFromCart.mutate({ id: cartItem.id }),
                })
              }
            >
              Move To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
