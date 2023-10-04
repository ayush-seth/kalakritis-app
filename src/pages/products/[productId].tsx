import { ProductCard } from "@/components/product/product-card";
import { ProductColorSelect } from "@/components/product/product-color-select";
import { ProductExtraInfo } from "@/components/product/product-extra-info";
import { ProductImageViewer } from "@/components/product/product-image-viewer";
import { ProductInfo } from "@/components/product/product-info";
import { ProductReviewCard } from "@/components/product/product-review-card";
import { ProductSizeSelect } from "@/components/product/product-size-select";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";
import { SectionHeading } from "@/components/ui/section-heading";
import { useAddToCart } from "@/hooks/cart/use-add-to-cart";
import { useBuyNow } from "@/hooks/cart/use-buy-now";
import { useProduct } from "@/hooks/product/use-product";
import { useProducts } from "@/hooks/product/use-products";
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

  const addToCart = useAddToCart();
  const buyNow = useBuyNow();

  const products = useProducts();
  const [selectedSize, setSelectedSize] = useState<SizeName>();
  const [selectedColor, setSelectedColor] = useState<string>();

  if (isLoading) return <Loader />;
  if (isError) return "Something went wrong!";

  const handleAddToCart = () => {
    addToCart.mutate({
      color: selectedColor ?? product.colors[0].hash_value,
      product: product.id,
      qty: 1,
      size: selectedSize ?? product.sizes[0].name,
    });
  };

  const handleBuyNow = () => {
    return () => {
      buyNow.mutate({
        color: selectedColor ?? product.colors[0].hash_value,
        product: product.id,
        qty: 1,
        size: selectedSize ?? product.sizes[0].name,
      });
    };
  };

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
      <Container>
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
              value={selectedColor ?? product.colors[0].hash_value}
              onChange={setSelectedColor}
            />

            <div className="pt-10">
              <div className="flex items-center">
                <Button variant="secondary" className="mr-3 bg-primary-500">
                  <IconHeart strokeWidth={1.3} />
                </Button>
                <Button
                  variant="secondary"
                  className="w-full bg-primary-500"
                  onClick={handleAddToCart}
                >
                  add to cart
                </Button>
              </div>
              <Button
                variant="primary"
                className="mt-3 w-full"
                onClick={handleBuyNow()}
              >
                buy now
              </Button>
            </div>
            <ProductExtraInfo product={product} />
          </div>
        </div>
        <div className="mt-40 space-y-20">
          <ProductReviewCard product={product} />
          <ProductReviewCard product={product} />
        </div>
        <SectionHeading className="my-20">Similar Items</SectionHeading>
        <div className="grid grid-cols-4 gap-10">
          {products.data?.results
            .slice(0, 4)
            .map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </Container>
    </>
  );
}
