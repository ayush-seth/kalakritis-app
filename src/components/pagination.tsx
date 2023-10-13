import { cn } from "@/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

type PaginationProps = {
  next_url: string | null;
  previous_url: string | null;
  page_links: [string, number, boolean, boolean][];
};

export const Pagination = ({
  next_url,
  page_links,
  previous_url,
}: PaginationProps) => {
  return (
    <div className="mx-auto mt-8 flex items-center justify-center gap-4">
      <Link href={previous_url ?? ""}>
        <IconChevronLeft />
      </Link>
      {page_links.map((link) => {
        const url = link[0];
        const pageNumber = link[1];
        const active = link[2];

        return (
          <Link
            className={cn(
              "px-3 py-2 hover:bg-primary-500",
              active && "bg-primary-600 hover:bg-primary-600",
            )}
            key={url}
            href={url}
          >
            {pageNumber}
          </Link>
        );
      })}
      <Link href={next_url ?? ""}>
        <IconChevronRight />
      </Link>
    </div>
  );
};
