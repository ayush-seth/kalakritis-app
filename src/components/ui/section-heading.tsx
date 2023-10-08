import { cn } from "@/utils";
import { Frank_Ruhl_Libre } from "next/font/google";

type SectionHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const font = Frank_Ruhl_Libre({ subsets: ["latin"] });

export function SectionHeading({ className, children }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "px-5 text-center text-3xl font-medium text-accent-700 md:text-3xl lg:text-4xl",
        className,
      )}
      style={font.style}
    >
      {children}
    </h2>
  );
}
