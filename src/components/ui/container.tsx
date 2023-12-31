import { cn } from "@/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto max-w-7xl px-4 pt-32", className)}>
    {children}
  </div>
);
