import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const NavSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <form
          className="relative"
          onSubmit={() => {
            router.push(`/products?search=${search}`);
            searchRef.current?.blur(); // close the keyboard on mobile
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full border-0 bg-primary-400 py-1.5 pl-10 pr-3 outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder="Search products"
            type="search"
            value={search}
            ref={searchRef}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
