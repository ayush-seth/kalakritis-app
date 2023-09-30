import { Filters } from "@/components/filters";
import { ProductsGrid } from "@/components/products-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const param = useSearchParams();
  return (
    <div className="mx-auto max-w-8xl px-10 pt-20">
      <div className="mt-20">
        <SectionHeading className="my-10 text-left">
          {param.get("tags")}
        </SectionHeading>
        <div className="grid grid-cols-[400px,1fr] gap-12">
          <Filters />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
