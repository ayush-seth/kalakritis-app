import { Filters } from "@/components/filters";
import { ProductsGrid } from "@/components/products-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProductsPage() {
  return (
    <div className="max-w-8xl mx-auto px-10 pt-20">
      <div className="mt-20">
        <SectionHeading className="my-10 text-left">
          Trending Now
        </SectionHeading>
        <div className="grid grid-cols-[300px,1fr] gap-12">
          <Filters />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
