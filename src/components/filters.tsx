import { useProductFiltersList } from "@/hooks/product/use-product-filters-list";
import { FilterValue, ProductFilter } from "@/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent, Fragment, useState } from "react";
import { ErrorAlert } from "./ui/error-alert";
import { Loader } from "./ui/loader";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { IconChevronDown, IconPlus, IconX } from "@tabler/icons-react";
import { cn } from "@/utils";

export function Filters() {
  const router = useRouter();
  const { data: filters, isError, isLoading } = useProductFiltersList();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorAlert>Something went wrong!</ErrorAlert>;

  return (
    <>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium ">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-300 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IconX className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 pb-4 pt-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                <IconChevronDown
                                  className={cn(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform",
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              <Filter key={section.name} filter={section} />
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        type="button"
        className="relative flex w-full items-center py-3  pl-3 pr-10 text-left text-accent-500 opacity-80   hover:opacity-100 sm:text-sm sm:leading-6 md:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="text-base font-medium">Filters</span>
        <IconPlus className="ml-1 h-4 w-4 flex-shrink-0" aria-hidden="true" />
      </button>

      <div className="hidden border-r md:block">
        <div className="flex items-center justify-between border-b pb-4 pr-4 font-bold uppercase">
          <div>filters</div>
          <button
            className="text-xs font-bold uppercase text-primary-800"
            onClick={() =>
              router.push("/products", undefined, { shallow: true })
            }
          >
            Clear all
          </button>
        </div>
        {filters.map((filter) => (
          <Filter key={filter.key} filter={filter} />
        ))}
      </div>
    </>
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
    <div className="md:border-b md:py-6">
      <div className="mb-4 hidden text-sm font-bold uppercase md:block">
        {filter.name}
      </div>
      {filter.values.map((value) => (
        <div
          key={value.id}
          className="my-3 flex items-center gap-2 text-sm text-gray-600"
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
