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
        "text-center text-4xl font-medium text-accent-700",
        className,
      )}
      style={font.style}
    >
      {children}
    </h2>
  );
}
