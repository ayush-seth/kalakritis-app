import Image from "next/image";

export function LandingInfo() {
  return (
    <div
      className="mx-auto mt-20 grid max-w-6xl grid-cols-2 items-center gap-16 bg-primary-400 px-12 py-12"
      style={{
        boxShadow: "10px 10px 35px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative h-80">
        <Image className="object-contain" src="/hero-2.png" fill alt="" />
      </div>
      <p className="leading-10">
        Kalakriti, a Kolkata-based brand, epitomizes traditional Indian
        women&apos;s clothing with a collection that honors artisanal
        craftsmanship and cultural heritage. Each garment, crafted with love,
        showcases the rich tapestry of regional cultures. Vibrant colors and
        intricate textures make Kalakriti a timeless testament to India&apos;s
        artistic finesse and treasured traditions.
      </p>
    </div>
  );
}
