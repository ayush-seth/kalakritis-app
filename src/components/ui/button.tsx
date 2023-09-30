import { cn } from "@/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-block bg-accent-500 px-4 py-2 uppercase text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
