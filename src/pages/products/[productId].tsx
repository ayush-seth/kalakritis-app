import { ProductColorSelect } from "@/components/product/product-color-select";
import { ProductImageViewer } from "@/components/product/product-image-viewer";
import { ProductInfo } from "@/components/product/product-info";
import { ProductSizeSelect } from "@/components/product/product-size-select";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useProduct } from "@/hooks/use-product";
import { SizeName } from "@/types";
import { IconHeart } from "@tabler/icons-react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetails() {
  const params = useParams();
  const {
    data: product,
    isError,
    isLoading,
  } = useProduct(params?.productId as string);
  const [selectedSize, setSelectedSize] = useState<SizeName>();
  const [selectedColor, setSelectedColor] = useState<string>();

  if (isLoading) return <Loader />;
  if (isError) return "Something went wrong!";

  const crumbs = [
    {
      name: product.product_type.name,
      href: `/products?product_type=${product.product_type.name}`,
    },
    {
      name: product.title,
      href: `/products/${product.id}`,
    },
  ];

  return (
    <>
      <Head>
        <title>{product.title} | Kalakritis</title>
      </Head>
      <div className="mx-auto max-w-7xl px-12 pt-[160px]">
        <Breadcrumbs className="mb-10" items={crumbs} />
        <div className="grid-cols-2 gap-20 sm:grid">
          <ProductImageViewer product={product} />
          <div className="space-y-6">
            <ProductInfo product={product} />
            <ProductSizeSelect
              product={product}
              value={selectedSize ?? product.sizes[0].name}
              onChange={setSelectedSize}
            />
            <ProductColorSelect
              product={product}
              value={selectedColor ?? product.colors[0].name}
              onChange={setSelectedColor}
            />

            {/*  */}
            <div className="pt-20">
              <div className="flex items-center">
                <Button variant="secondary" className="mr-3 bg-primary-500">
                  <IconHeart strokeWidth={1.3} />
                </Button>
                <Button variant="secondary" className="w-full bg-primary-500">
                  add to cart
                </Button>
              </div>
              <Button variant="primary" className="mt-3 w-full">
                buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
