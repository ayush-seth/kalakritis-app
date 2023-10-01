import { Product, SizeName } from "@/types";
import { cn } from "@/utils";
import { RadioGroup } from "@headlessui/react";

type ProductSizeSelect = {
  product: Product;
  value: SizeName;
  onChange: (size: SizeName) => void;
};

const SIZES: SizeName[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const ProductSizeSelect = ({
  product,
  value,
  onChange,
}: ProductSizeSelect) => {
  return (
    <RadioGroup
      className="flex flex-wrap gap-4"
      value={value}
      onChange={onChange}
    >
      {SIZES.map((size) => (
        <RadioGroup.Option
          key={size}
          value={size}
          disabled={!product.sizes.map((s) => s.name).includes(size)}
        >
          {({ checked, disabled }) => (
            <span
              className={cn(
                "grid w-16 cursor-pointer place-items-center border border-black py-3",
                checked && "bg-primary-600",
                disabled && "cursor-not-allowed opacity-20",
              )}
            >
              {size}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
