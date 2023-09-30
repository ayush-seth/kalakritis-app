import { cn } from "@/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({ label, className, ...rest }: InputProps) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-light text-black/90"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className={cn(
          "k block border-[0.4px] border-black bg-primary-400 px-4 py-3 text-xs focus:outline-none",

          className,
        )}
        {...rest}
      />
    </div>
  );
}
