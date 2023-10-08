import { Product } from "@/types";
import { IconShare, IconStarFilled } from "@tabler/icons-react";

export const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-sm">
        <IconStarFilled className="text-yellow-500" size={16} />
        <span>{product.avg_rating}</span>
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl">{product.title}</h1>
        <IconShare />
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
      <span className="text-sm text-gray-600">Inclusive of all taxes</span>
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
