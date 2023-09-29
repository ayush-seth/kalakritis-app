import Image from "next/image";

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
        className="absolute top-0 h-full w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0.00) -35.69%, rgba(25, 8, 8, 0.72) 63.51%);",
        }}
      ></div>
    </div>
  );
}
