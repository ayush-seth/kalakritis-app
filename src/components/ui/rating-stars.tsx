import { IconStarFilled } from "@tabler/icons-react";

export const RatingStars = ({ rating }: { rating: number }) => {
  if (rating > 5 || rating < 1)
    return <div className="text-xs text-red-700">Invalid rating</div>;

  const unfilledStarsCount = 5 - rating;
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <IconStarFilled key={i} size={12} className="text-yellow-500" />
      ))}
      {[...Array(unfilledStarsCount)].map((_, i) => (
        <IconStarFilled key={i} size={12} className="text-gray-300" />
      ))}
    </div>
  );
};
