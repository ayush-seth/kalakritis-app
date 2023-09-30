import { useProductFiltersList } from "@/hooks/use-product-filters-list";
import { FilterValue, ProductFilter } from "@/types";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { ErrorAlert } from "./ui/error-alert";

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: filters, isError, isLoading } = useProductFiltersList();

  if (isLoading) return "Loading...";
  if (isError) return <ErrorAlert>Something went wrong!</ErrorAlert>;

  function handleChange(
    e: ChangeEvent<HTMLInputElement>,
    filter: string,
    value: string,
  ) {
    const params = new URLSearchParams(searchParams);
    if (e.currentTarget.checked) {
      params.append(filter, value);
    } else {
      params.delete(filter, value);
    }
    router.push(`?${params.toString()}`, undefined, {
      shallow: true,
    });
  }

  function isFilterApplied(filter: ProductFilter, value: FilterValue) {
    const valueToCheck = router.query[filter.key];
    const isString = typeof valueToCheck === "string";
    if (isString) return valueToCheck === value.name;
    return valueToCheck?.includes(value.name) ?? false;
  }

  return (
    <div>
      <div className="border-b border-black py-4">Filter</div>
      <Accordion>
        {filters.map((filter) => (
          <AccordionItem
            key={filter.key}
            header={({ state }) => (
              <div className="flex items-center justify-between">
                {filter.name}
                {state.isEnter ? <IconChevronUp /> : <IconChevronDown />}
              </div>
            )}
            buttonProps={{
              className: "w-full border-b border-black py-4 text-left",
            }}
            contentProps={{ className: "py-4" }}
          >
            {filter.values.map((value) => (
              <div
                key={value.id}
                className="flex items-center justify-between py-2 text-sm text-gray-600"
              >
                <label htmlFor={value.name}>{value.name}</label>
                <input
                  type="checkbox"
                  id={value.name}
                  checked={isFilterApplied(filter, value)}
                  onChange={(e) => handleChange(e, filter.key, value.name)}
                />
              </div>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
