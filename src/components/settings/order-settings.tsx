import { useOrders } from "@/hooks/orders/use-orders";
import { SizeName } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Loader } from "../ui/loader";

export const OrderSettings = () => {
  const orders = useOrders();

  if (orders.isLoading) return <Loader />;
  if (orders.isError) return "Something went wrong";

  return (
    <div className="space-y-8">
      {orders.data.map((order) => (
        <div
          className="border p-6 shadow md:flex md:items-start md:justify-between"
          key={order.id}
        >
          <div>
            <p className="text-xs uppercase text-gray-400">order number</p>
            <p className="text-sm">{order.orderID}</p>
            <p className="mt-4">
              {order.no_of_items} items will be delivered soon.
            </p>
            <div className="mt-4 space-y-4">
              {order.ordered_products.map((product) => (
                <OrderProductItem
                  key={product.id}
                  name={product.product.title}
                  size={product.size}
                  img={product.product.img}
                  qty={product.qty}
                />
              ))}
            </div>
          </div>

          <Button className="mt-8 w-full md:mt-0 md:w-auto" variant="secondary">
            Order details
          </Button>
        </div>
      ))}
    </div>
  );
};

type OrderProductItemProps = {
  name: string;
  size: SizeName;
  img: string;
  qty: number;
};

const OrderProductItem = ({ img, name, size, qty }: OrderProductItemProps) => {
  return (
    <div className="flex gap-4">
      <Image
        src={img}
        width={80}
        height={80}
        alt=""
        className="h-28 w-fit object-contain"
      />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="text-sm text-gray-500">Qty: {qty}</p>
      </div>
    </div>
  );
};
