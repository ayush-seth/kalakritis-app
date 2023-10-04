import Link from "next/link";
import { Button } from "../ui/button";

export const CartEmptyState = () => (
  <div className="grid place-items-center gap-4">
    <svg
      width="138"
      height="138"
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 29L36.5 12H62.5H103.5L118 32.5V123H20V29Z" fill="#EEDEC3" />
      <path
        d="M34.5 11.5L17.25 34.5V115C17.25 118.05 18.4616 120.975 20.6183 123.132C22.7749 125.288 25.7 126.5 28.75 126.5H109.25C112.3 126.5 115.225 125.288 117.382 123.132C119.538 120.975 120.75 118.05 120.75 115V34.5L103.5 11.5H34.5Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.25 34.5H120.75"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M92 57.5C92 63.6 89.5768 69.4501 85.2635 73.7635C80.9501 78.0768 75.1 80.5 69 80.5C62.9 80.5 57.0499 78.0768 52.7365 73.7635C48.4232 69.4501 46 63.6 46 57.5"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <h3 className="text-2xl font-medium">Oops, your cart is empty!</h3>

    <Link href="/products">
      <Button variant="primary">shop now</Button>
    </Link>
  </div>
);
