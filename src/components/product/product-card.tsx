import { useAddToWishlist } from "@/hooks/wishlist/use-add-to-wishlist";
import { useRemoveFromWishlist } from "@/hooks/wishlist/use-remove-from-wishlist";
import { Product } from "@/types";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  return (
    <Link href={`/products/${product.id}`}>
      <div className="relative cursor-pointer hover:shadow-custom">
        <Image
          className="w-full"
          src={product.product_images[0].img}
          height={100}
          width={100}
          alt=""
        />
        <div className="my-2 flex flex-col gap-2 p-3">
          <span className="inline-block w-full truncate" title={product.title}>
            {product.title}
          </span>
          <div className="flex flex-wrap gap-3 text-sm">
            <span>Rs {product.selling_price}</span>
            <span className="text-accent-700 line-through">
              Rs {product.cost_price}
            </span>
            <span className="text-accent-400">
              ({product.discount_percent}%)
            </span>
          </div>
          <button
            className="absolute right-2 top-2 rounded-full bg-gray-300 bg-opacity-60 p-1 hover:bg-opacity-100"
            onClick={(e) => {
              e.preventDefault();
              product.is_wishlisted
                ? removeFromWishlist.mutate(product.id)
                : addToWishlist.mutate(product.id);
            }}
          >
            {product.is_wishlisted ? (
              <IconHeartFilled
                className="text-accent-700"
                strokeWidth={1.336}
              />
            ) : (
              <IconHeart className="text-accent-700" strokeWidth={1.336} />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
