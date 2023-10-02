import { Disclosure } from "@headlessui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ReactNode } from "react";

export const ProductAccordion = ({
  title,
  details,
}: {
  title: ReactNode;
  details: ReactNode;
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className="flex items-center justify-between border-b py-4">
              {title}
              {open ? <IconChevronUp /> : <IconChevronDown />}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            {details}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
