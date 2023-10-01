import { cn } from "@/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ className, variant, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 uppercase disabled:opacity-50",
        variant === "primary" && "bg-accent-500 text-white",
        variant === "secondary" &&
          "bg-transparent text-accent-500 ring-1 ring-inset ring-accent-500",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
