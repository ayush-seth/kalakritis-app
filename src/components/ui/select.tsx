import { cn } from "@/utils";
import { Listbox } from "@headlessui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

type SelectProps<T> = {
  label?: string;
  data: Array<{
    label: string;
    value: T;
  }>;
  value: {
    label: string;
    value: T;
  };
  onChange: (value: { label: string; value: T }) => void;
};

export function Select<T>({ label, data, value, onChange }: SelectProps<T>) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full border border-black bg-primary-500 py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  sm:text-sm sm:leading-6">
              <span className="block truncate">{value.label}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {open ? (
                  <IconChevronUp className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <IconChevronDown className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 max-h-60 w-full cursor-pointer overflow-auto border-[0.5px] border-black bg-primary-300 p-2 text-base focus:outline-none sm:text-sm">
              {data.map((item) => (
                <Listbox.Option
                  key={item.label}
                  className={({ active }) =>
                    cn(active && "bg-primary-600", "relative py-3 pl-3 pr-9")
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <span
                      className={cn(
                        selected ? "font-semibold" : "font-normal",
                        "block truncate",
                      )}
                    >
                      {item.label}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}
