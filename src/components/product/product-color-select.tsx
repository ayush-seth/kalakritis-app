import { Product } from "@/types";
import { cn } from "@/utils";
import { RadioGroup } from "@headlessui/react";

type ProductColorSelect = {
  product: Product;
  value: string;
  onChange: (size: string) => void;
};

export const ProductColorSelect = ({
  product,
  value,
  onChange,
}: ProductColorSelect) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="text-sm text-gray-700">
        Color
      </RadioGroup.Label>
      <div className="mt-4 flex gap-4">
        {product.colors.map(({ hash_value }) => (
          <RadioGroup.Option key={hash_value} value={hash_value}>
            {({ checked }) => (
              <div
                className={cn(
                  "h-8 w-8 cursor-pointer rounded-full border-[0.4px] border-black",
                  checked && "ring-[1.8px] ring-black ring-offset-2",
                )}
                style={{ background: `#${hash_value}` }}
              ></div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
