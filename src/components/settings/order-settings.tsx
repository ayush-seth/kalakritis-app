import { OrderResponse, useOrders } from "@/hooks/orders/use-orders";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Loader } from "../ui/loader";

export const OrderSettings = () => {
  const orders = useOrders();

  if (orders.isLoading) return <Loader />;
  if (orders.isError) return "Something went wrong";

  return (
    <div className="space-y-8">
      {orders.data.map((order) => (
        <OrderItem key={order.orderID} order={order} />
      ))}
    </div>
  );
};

const OrderItem = ({ order }: { order: OrderResponse }) => {
  const [areDetailsVisible, setAreDetailsVisible] = useState(false);

  return (
    <div
      className="border p-6 shadow md:flex md:items-start md:justify-between"
      key={order.id}
    >
      <div className="w-full">
        {areDetailsVisible && (
          <div className="flex gap-2">
            <button
              className="mb-4"
              onClick={() => setAreDetailsVisible(false)}
            >
              <IconArrowLeft />
            </button>
            <h4 className="font-medium">Order details</h4>
          </div>
        )}
        <div className="flex justify-between">
          <div>
            <p className="text-xs uppercase text-gray-400">order number</p>
            <p className="text-sm">{order.orderID}</p>
          </div>
          {areDetailsVisible && (
            <div>
              <p className="text-xs uppercase text-gray-400">total</p>
              <p className="text-sm uppercase">RS {order.total}</p>
            </div>
          )}
        </div>
        <p className="mt-4">
          {order.no_of_items} items will be delivered soon.
        </p>
        <div className="mt-4 space-y-4">
          {order.ordered_products.map((product) => (
            <div className="flex gap-4 pb-4" key={product.id}>
              <Image
                src={product.product.img}
                width={80}
                height={80}
                alt=""
                className="h-28 w-fit object-contain"
              />
              <div>
                <p className="font-medium">{product.product.title}</p>
                <p className="text-sm text-gray-500">Size: {product.size}</p>
                <p className="text-sm text-gray-500">Qty: {product.qty}</p>
              </div>
              <span className="ml-auto text-sm text-accent-700">
                RS {product.product.selling_price}
              </span>
            </div>
          ))}
          {areDetailsVisible && (
            <>
              <section className="mt-8 border-t pt-8 text-sm text-gray-500">
                <h4 className="mb-2 text-base text-black">Shipping Address</h4>
                <p>{order.name}</p>
                <p>
                  {order.address_line1}, {order.city}, {order.state}
                </p>
                <p>
                  {order.country}, {order.zipcode}
                </p>
                <p>{order.phone_number}</p>
              </section>
              <section className="mt-8 border-t pt-8 text-sm text-gray-500">
                <h4 className="mb-2 text-base text-black">Payment Details</h4>
                <div className="grid grid-cols-2 gap-2">
                  <p>Payment method</p>
                  <p className="place-self-end">UPI</p>

                  <p>Subtotal</p>
                  <p className="place-self-end">RS {order.subtotal}</p>

                  <p>Discount</p>
                  <p className="place-self-end text-accent-400">
                    - RS {order.coupon_discount}
                  </p>

                  <p>Delivery charges</p>
                  <p className="place-self-end">RS {order.delivery_charges}</p>

                  <p className="mt-4 text-base text-black">Total</p>
                  <p className="place-self-end text-base text-black">
                    RS {order.total}
                  </p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      {!areDetailsVisible && (
        <Button
          className="mt-8 min-w-fit md:mt-0 md:w-auto"
          variant="secondary"
          onClick={() => setAreDetailsVisible(true)}
        >
          Order details
        </Button>
      )}
    </div>
  );
};
