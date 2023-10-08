import Image from "next/image";
import { SectionHeading } from "../ui/section-heading";
import Link from "next/link";

export function CelebrationSpecial() {
  return (
    <div>
      <SectionHeading className="my-20">Celebration Special</SectionHeading>
      <div className="mx-auto mt-12 grid max-w-[1500px] grid-cols-1 items-center gap-4 px-4 md:grid-cols-3">
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
          <div className="relative overflow-hidden">
            <Image
              src={"/cb_2.png"}
              alt=""
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          <Link
            href=""
            className="mx-auto mt-10 block w-fit bg-[#610000] px-[60px] py-2 text-center text-[white]"
          >
            SHOP NOW
          </Link>
        </div>
        <div className="hidden flex-col gap-4 md:flex">
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
