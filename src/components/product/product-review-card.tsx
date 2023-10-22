import { ProductReview } from "@/types";
import Image from "next/image";
import { RatingStars } from "../ui/rating-stars";

export const ProductReviewCard = ({ review }: { review: ProductReview }) => {
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
          <RatingStars rating={review.rating} />
        </div>
      </div>
      <p className="mt-4 text-xs">{review.review}</p>
    </div>
  );
};
