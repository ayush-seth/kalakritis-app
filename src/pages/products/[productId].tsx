import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();
  const productId = params?.productId as string;

  const { data } = useProduct(productId);

  return (
    <div className="max-w-8xl mx-auto px-10 pt-20">
      <div className="mt-20">{productId}</div>
    </div>
  );
}
