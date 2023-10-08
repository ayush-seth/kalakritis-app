import Image from "next/image";

export function LandingInfo() {
  return (
    <div className="px-4 md:px-12 lg:px-16">
      <div
        className="mx-auto mt-20 grid max-w-6xl grid-cols-1 items-center gap-10 bg-primary-400 px-4 py-12 md:gap-16 md:px-12 lg:grid-cols-2"
        style={{
          boxShadow: "10px 10px 35px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="relative">
          <Image
            className="h-auto w-full"
            src="/hero-2.png"
            alt=""
            width={500}
            height={400}
          />
        </div>
        <p className="leading-8 md:leading-10">
          Kalakriti, a Kolkata-based brand, epitomizes traditional Indian
          women&apos;s clothing with a collection that honors artisanal
          craftsmanship and cultural heritage. Each garment, crafted with love,
          showcases the rich tapestry of regional cultures. Vibrant colors and
          intricate textures make Kalakriti a timeless testament to India&apos;s
          artistic finesse and treasured traditions.
        </p>
      </div>
    </div>
  );
}
