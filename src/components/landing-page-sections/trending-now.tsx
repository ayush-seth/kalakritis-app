import { SectionHeading } from "../ui/section-heading";

const TRENDING_ITEMS = [
  {
    title: "New Gowns",
    img: "/short-kurta",
  },
  {
    title: "Green Flower Kurta Set",
    img: "/long-kurta",
  },
  {
    title: "Kurta Set",
    img: "/kurta-set",
  },
  {
    title: "Bottom Wear",
    img: "/bottom-wear",
  },
  {
    title: "Gowns",
    img: "/gowns",
  },
];

export function TrendingNow() {
  return (
    <div>
      <SectionHeading className="my-20">Trending Now</SectionHeading>
    </div>
  );
}
