import { cn } from "@/utils";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  label: string;
  error?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <div>
        <label
          className="mb-2 block text-sm font-light text-black/90"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={label}
          className={cn(
            "k block border-[0.4px] border-black bg-primary-400 px-4 py-3 text-xs focus:outline-none",
            className,
          )}
          {...rest}
        />
        {error && <span className="text-xs text-accent-400">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
