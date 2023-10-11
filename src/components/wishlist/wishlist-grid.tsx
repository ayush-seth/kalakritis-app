import { useWishlist } from "@/hooks/wishlist/use-wishlist";
import { ProductCard } from "../product/product-card";
import { Loader } from "../ui/loader";
import { WishlistEmptyState } from "./wishlist-empty-state";

export const WishlistGrid = () => {
  const { data, isLoading } = useWishlist();

  if (isLoading) return <Loader />;
  if (data?.length === 0) return <WishlistEmptyState />;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {data?.map(({ product }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
