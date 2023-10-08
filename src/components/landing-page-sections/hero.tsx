import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Frank_Ruhl_Libre({ subsets: ["latin"] });

export function Hero() {
  return (
    <div className="relative">
      <Image
        className="hidden w-full md:block"
        src="/hero.png"
        alt=""
        width={500}
        height={300}
      />
      <Image
        className="block w-full md:hidden"
        src="/mobile_hero.png"
        alt=""
        width={300}
        height={600}
      />
      <div
        className="absolute top-0 flex h-full w-full flex-col items-center justify-end py-16 md:py-[60px] lg:py-[100px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0.00) -35.69%, rgba(25, 8, 8, 0.72) 63.51%)",
        }}
      >
        <h2
          className="px-4 text-center text-3xl font-semibold text-white md:text-4xl xl:text-5xl"
          style={font.style}
        >
          Embrace the ethnicity with Kalakritis
        </h2>
        <Link
          href="/products"
          className="mt-8 block bg-[#610000] px-10 py-2 text-[white] md:mt-6 lg:mt-10"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
