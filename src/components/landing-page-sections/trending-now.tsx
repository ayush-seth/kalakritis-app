import Image from "next/image";
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
      <div className="mx-auto grid max-w-[1500px] grid-cols-3 gap-4 px-8">
        <div className="relative flex justify-center overflow-hidden">
          <Image
            src={"/trending_now1.svg"}
            alt=""
            width={300}
            height={500}
            className="w-full scale-150"
           />
           <span className="absolute bottom-8 z-10 w-full text-center text-white text-xl">
              New Gowns
            </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="basis-2/5 overflow-hidden relative">
            <Image
              src={"/trending_now2.svg"}
              alt=""
              width={300}
              height={500}
              className="w-full"
            />
            <span className="absolute bottom-8 z-10 w-full text-center text-white text-xl">
                New Gowns
            </span>
          </div>
          <div className="basis-3/5 overflow-hidden relative">
            <Image
              src={"/trending_now3.svg"}
              alt=""
              width={300}
              height={500}
              className="w-full scale-125"
            />
            <span className="absolute bottom-8 z-10 w-full text-center text-white text-xl">
                New Gowns
            </span>
          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <div className="basis-3/5 overflow-hidden relative">
            <Image
              src={"/trending_now4.svg"}
              alt=""
              width={300}
              height={500}
              className="w-full scale-125"
            />
            <span className="absolute bottom-8 z-10 w-full text-center text-white text-xl">
                New Gowns
            </span>
          </div>
          <div className="basis-2/5 overflow-hidden relative">
            <Image
              src={"/trending_now5.svg"}
              alt=""
              width={300}
              height={500}
              className="w-full"
            />
            <span className="absolute bottom-8 z-10 w-full text-center text-white text-xl">
                New Gowns
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
