import { Product } from "@/types";
import { IconShare, IconStarFilled } from "@tabler/icons-react";
import toast from "react-hot-toast";

export const ProductInfo = ({ product }: { product: Product }) => {
  const shareProduct = async () => {
    await navigator.clipboard.writeText(location.href);
    toast.success("Product link has been copied to clipboard");
  };

  return (
    <>
      <div className="flex items-center gap-2 text-sm">
        <IconStarFilled className="text-yellow-500" size={16} />
        <span>{product.avg_rating}</span>
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl">{product.title}</h1>
        <button onClick={shareProduct}>
          <IconShare />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">Rs {product.selling_price}</span>
        <span className="text-accent-700 line-through">
          Rs {product.cost_price}
        </span>
        <span className="text-accent-400">
          ({product.discount_percent}% OFF)
        </span>
      </div>
      <span className="text-sm text-gray-600">+ taxes</span>
      <div>
        <span className="font-medium">Description</span>
        <p
          id="product-description"
          className="text-black/80"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
      </div>
    </>
  );
};
