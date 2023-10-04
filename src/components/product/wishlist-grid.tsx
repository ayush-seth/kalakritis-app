import { useWishlist } from "@/hooks/product/use-wishlist";
import { Loader } from "../ui/loader";
import { ProductCard } from "./product-card";
import { WishlistEmptyState } from "./wishlist-empty-state";

export const WishlistGrid = () => {
  const { data, isLoading } = useWishlist();

  if (isLoading) return <Loader />;
  if (data?.length === 0) return <WishlistEmptyState />;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {data?.map(({ product, id: wishlistId }) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlistItem={true}
          wishlistId={wishlistId}
        />
      ))}
    </div>
  );
};
