import Image from "next/image";
import { SectionHeading } from "../ui/section-heading";

const CATEGORIES = [
  {
    title: "Short Kurta",
    img: "/short-kurta",
  },
  {
    title: "Long Kurta",
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

export function ShopByCategories() {
  return (
    <div>
      <SectionHeading className="my-20">Shop by Categories</SectionHeading>
      <div className="mx-auto grid max-w-[1500px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 px-8 md:gap-8">
        {CATEGORIES.map((category) => (
          <div key={category.title} className="relative">
            <Image
              src={`${category.img}.png`}
              className="w-full"
              width={100}
              height={100}
              alt=""
            />
            <span className="absolute bottom-4 z-10 w-full text-center text-white">
              {category.title}
            </span>
            <div
              className="absolute bottom-0 h-1/2 w-full"
              style={{
                background:
                  "linear-gradient(0deg, #707070 15.42%, rgba(185, 185, 185, 0.00) 91.12%)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
