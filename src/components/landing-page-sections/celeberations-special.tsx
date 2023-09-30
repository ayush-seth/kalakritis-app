import Image from "next/image";
import { SectionHeading } from "../ui/section-heading";
import Link from "next/link";

export function CelebrationSpecial() {
  return (
    <div>
      <SectionHeading className="my-20">Celebration Special</SectionHeading>
      <div className="mx-auto grid max-w-[1500px] grid-cols-3 gap-4 px-8 mt-12 items-center">
        <div className="">
          <Image
            src={"/cb_1.png"}
            alt=""
            width={300}
            height={500}
            className="w-full"
           />
        </div>
        <div className="">
          <div className="overflow-hidden relative">
            <Image
              src={"/cb_2.png"}
              alt=""
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          <Link href='' className="block w-fit mx-auto mt-10 text-[white] bg-[#610000] py-2 px-[60px] text-center">SHOP NOW</Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">
            <Image
              src={"/cb_3.png"}
              alt=""
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
