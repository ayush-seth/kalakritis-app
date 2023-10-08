import { Filters } from "@/components/filters";
import { ProductsGrid } from "@/components/product/products-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Select } from "@/components/ui/select";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const sortOptions = [
  {
    label: "What's New",
    value: "-id",
  },
  {
    label: "Price - Low to High",
    value: "selling_price",
  },
  {
    label: "Price - High to Low",
    value: "-selling_price",
  },
  {
    label: "Best seller",
    value: "avg_rating",
  },
];

export default function ProductsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [sortingOption, setSortingOption] = useState(sortOptions[0]);

  return (
    <>
      <Head>
        <title>Women Fashion | Kalakritis</title>
      </Head>

      <Container className="max-w-full px-4 md:px-12">
        <div>
          <SectionHeading className="mb-20 mt-10 px-0 text-left text-4xl md:my-20 md:text-5xl">
            {params.get("tags")
              ? params.get("tags")
              : params.has("search")
              ? "Search results"
              : "Shop now"}
          </SectionHeading>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px,1fr]">
            <div className="hidden md:block">
              <Filters />
            </div>
            <div>
              <div className="mb-10 flex items-center justify-between">
                <div className="md:hidden">
                  <Filters />
                </div>
                <div className="w-52 md:ml-auto md:w-60">
                  <Select
                    data={sortOptions}
                    value={sortingOption}
                    onChange={(v) => {
                      setSortingOption(v);
                      const p = new URLSearchParams(params);
                      p.set("ordering", v.value);
                      router.push(`?${p.toString()}`, undefined, {
                        shallow: true,
                      });
                    }}
                  />
                </div>
              </div>
              <ProductsGrid />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
