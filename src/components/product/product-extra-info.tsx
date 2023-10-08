import { Product } from "@/types";
import { ProductAccordion } from "./product-accordion";

export const ProductExtraInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-2 pt-5 text-sm md:pt-20">
      <ProductAccordion
        title="Features"
        details={
          <div dangerouslySetInnerHTML={{ __html: product.features }}></div>
        }
      />
      <ProductAccordion
        title="Product Care"
        details={
          <div dangerouslySetInnerHTML={{ __html: product.product_care }}></div>
        }
      />
      <ProductAccordion
        title="Shipping Details"
        details={
          <div
            dangerouslySetInnerHTML={{
              __html: product.shipping_details,
            }}
          ></div>
        }
      />
      <ProductAccordion
        title="Return Policy"
        details={
          <div
            dangerouslySetInnerHTML={{ __html: product.return_details }}
          ></div>
        }
      />
    </div>
  );
};
