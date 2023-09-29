import { useNewArrivals } from "@/hooks/use-new-arrivals";
import { ProductCard } from "../product-card";
import { ErrorAlert } from "../ui/error-alert";
import { SectionHeading } from "../ui/section-heading";

export function NewArrivals() {
  const { data, isLoading, isError } = useNewArrivals();

  if (isLoading) return "Loading...";
  if (isError) return <ErrorAlert>Something went wrong!</ErrorAlert>;

  return (
    <div className="mb-20">
      <SectionHeading className="my-20">New Arrivals</SectionHeading>
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-4 px-8 md:grid-cols-4 md:gap-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
