import { useWishlist } from "@/hooks/product/use-wishlist";
import { Loader } from "../ui/loader";
import { ProductCard } from "./product-card";

export const WishlistGrid = () => {
  const { data, isLoading } = useWishlist();

  if (isLoading) return <Loader />;

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
