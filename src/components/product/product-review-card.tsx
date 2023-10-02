import { Product } from "@/types";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

export const ProductReviewCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={`https://ui-avatars.com/api/?name=Ravi+Kumar+Singh&background=AD9774&color=fff`}
          className="rounded-full"
          width={30}
          height={30}
          alt=""
        />
        <div className="text-sm">
          Ravi Kumar Singh
          <div className="flex gap-1">
            <IconStarFilled size={12} className="text-yellow-500" />
            <IconStarFilled size={12} className="text-yellow-500" />
            <IconStarFilled size={12} className="text-yellow-500" />
            <IconStarFilled size={12} className="text-yellow-500" />
            <IconStarFilled size={12} className="text-gray-300" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs">
        offers a bespoke range of exquisite corporate gifts options for
        allenterprize models; from small scale to blue chip companies. offers a
        bespoke range of exquisite corporate gifts options for allenterprize
        models; from small scale to blue chip companies.offers a bespoke range
        of exquisite corporate gifts options for allenterprize models; from
        small scale to blue chip companies.
      </p>
    </div>
  );
};
