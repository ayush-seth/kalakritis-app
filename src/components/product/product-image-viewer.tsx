import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

export const ProductImageViewer = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.product_images[0].img);

  return (
    <div className="product_photos">
      <Image
        src={mainImage}
        alt=""
        width={400}
        height={600}
        className="mb-4 w-full"
      />
      <div className="grid grid-cols-4 gap-4">
        {product.product_images.map((image) => (
          <Image
            key={image.id}
            src={image.img}
            alt=""
            width={400}
            height={600}
            className="w-full cursor-pointer"
            onClick={() => setMainImage(image.img)}
          />
        ))}
      </div>
    </div>
  );
};
