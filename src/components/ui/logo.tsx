import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/logo.svg"
      alt="logo"
      width={50}
      height={50}
    />
  );
}
