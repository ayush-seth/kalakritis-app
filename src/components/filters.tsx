import { useProductFiltersList } from "@/hooks/product/use-product-filters-list";
import { FilterValue, ProductFilter } from "@/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { ErrorAlert } from "./ui/error-alert";
import { Loader } from "./ui/loader";

export function Filters() {
  const router = useRouter();
  const { data: filters, isError, isLoading } = useProductFiltersList();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorAlert>Something went wrong!</ErrorAlert>;

  return (
    <div className="border-r">
      <div className="flex items-center justify-between border-b pb-4 pr-4 font-bold uppercase">
        <div>filters</div>
        <button
          className="text-xs font-bold uppercase text-primary-800"
          onClick={() => router.push("/products", undefined, { shallow: true })}
        >
          Clear all
        </button>
      </div>
      {filters.map((filter) => (
        <Filter key={filter.key} filter={filter} />
      ))}
    </div>
  );
}

const Filter = ({ filter }: { filter: ProductFilter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isFilterApplied = (filter: ProductFilter, value: FilterValue) => {
    const valueToCheck = router.query[filter.key];
    const isString = typeof valueToCheck === "string";

    if (isString) {
      return valueToCheck === value.name;
    }
    return valueToCheck?.includes(value.name) ?? false;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    filter: string,
    value: string,
  ) => {
    const params = new URLSearchParams(searchParams);
    if (e.currentTarget.checked) {
      params.append(filter, value);
    } else {
      params.delete(filter, value);
    }
    router.push(`?${params.toString()}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="border-b py-6">
      <div className="mb-4 text-sm font-bold uppercase">{filter.name}</div>
      {filter.values.map((value) => (
        <div
          key={value.id}
          className="my-2 flex items-center gap-2 text-sm text-gray-600"
        >
          <input
            type="checkbox"
            id={value.name}
            checked={isFilterApplied(filter, value)}
            onChange={(e) => handleChange(e, filter.key, value.name)}
          />
          <label htmlFor={value.name}>{value.name}</label>
        </div>
      ))}
    </div>
  );
};
