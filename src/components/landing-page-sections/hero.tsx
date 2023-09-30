import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



const font = Frank_Ruhl_Libre({ subsets: ["latin"] });

export function Hero() {
  return (
    <div className="relative">
      <Image
        className="w-full"
        src="/hero.png"
        alt=""
        width={500}
        height={300}
      />
      <div
        className="absolute top-0 h-full w-full flex flex-col items-center justify-end py-[100px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0.00) -35.69%, rgba(25, 8, 8, 0.72) 63.51%)",
        }}
      >
        <h2 className="text-4xl xl:text-5xl text-white font-semibold" style={font.style}>Embrace the ethnicity with Kalakritis</h2>
        <Link href="" className="block mt-10 text-[white] bg-[#610000] py-2 px-10">SHOP NOW</Link>
      </div>
    </div>
  );
}
