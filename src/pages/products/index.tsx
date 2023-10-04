import { Filters } from "@/components/filters";
import { ProductsGrid } from "@/components/product/products-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Select } from "@/components/ui/select";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

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
      <Container className="max-w-full">
        <div className="mt-20">
          <SectionHeading className="my-10 text-left">
            {params.get("tags")}
          </SectionHeading>
          <div className="mb-10 ml-auto w-60">
            <Select
              data={sortOptions}
              value={sortingOption}
              onChange={(v) => {
                setSortingOption(v);
                const p = new URLSearchParams(params);
                p.set("ordering", v.value);
                router.push(`?${p.toString()}`, undefined, { shallow: true });
              }}
            />
          </div>
          <div className="grid grid-cols-[400px,1fr] gap-12">
            <Filters />
            <ProductsGrid />
          </div>
        </div>
      </Container>
    </>
  );
}
