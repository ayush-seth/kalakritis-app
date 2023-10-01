import { cn } from "@/utils";
import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbsProps = {
  className?: string;
  items: Array<{
    name: string;
    href: string;
  }>;
};

export const Breadcrumbs = ({ className, items }: BreadcrumbsProps) => {
  return (
    <div className={cn("space-x-2 text-sm", className)}>
      <Link href="/">Home</Link>
      <span>/</span>
      {items.map((item, i) => (
        <Fragment key={i}>
          <Link href={item.href}>{item.name}</Link>
          {i !== items.length - 1 && <span>/</span>}
        </Fragment>
      ))}
    </div>
  );
};
