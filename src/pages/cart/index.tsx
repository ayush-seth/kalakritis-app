import { AddressTab } from "@/components/cart/address-tab";
import CartCard from "@/components/cart/cart-card";
import { CartEmptyState } from "@/components/cart/cart-empty-state";
import PriceDetails from "@/components/cart/price-details";
import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCartDetails } from "@/hooks/cart/use-cart-details";
import { Tab, useUserStore } from "@/store";
import * as Tabs from "@radix-ui/react-tabs";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function Cart() {
  const searchParams = useSearchParams();
  const cartDetails = useCartDetails(searchParams.toString());
  const selectedAddress = useUserStore((s) => s.selectedAddress);
  const tabValue = useUserStore((s) => s.tab);
  const setTab = useUserStore((s) => s.setTab);

  if (cartDetails.isLoading) return <Loader />;
  if (cartDetails.isError) {
    toast.error((cartDetails.error as Error).message);
    return "Something went wrong!";
  }

  const cartItems = cartDetails.data.cart_items;
  const priceDetails = cartDetails.data;

  return (
    <>
      <Container className="px-4 md:px-12 lg:px-16">
        {cartItems.length > 0 ? (
          <Tabs.Root
            className="TabsRoot"
            value={tabValue}
            onValueChange={(v) => setTab(v as Tab)}
          >
            <Tabs.List className="TabsList mb-20 hidden justify-center gap-28 lg:flex">
              <Tabs.Trigger
                className="TabsTrigger text-[#808080] data-[state=active]:text-[#914C28]"
                value="cart"
              >
                <div className="flex items-center gap-3">
                  <div className="tab-icon-container flex h-10 w-10 items-center justify-center rounded-full bg-[#DEDDDA]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_326_120)">
                        <path
                          d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                          stroke="#808080"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_326_120">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="tab-label py-2 text-xl font-semibold">
                    Cart
                  </div>
                </div>
              </Tabs.Trigger>
              <Tabs.Trigger
                className="TabsTrigger text-[#808080] data-[state=active]:text-[#914C28]"
                value="shipping"
              >
                <div className="flex items-center gap-3">
                  <div className="tab-icon-container flex h-10 w-10 items-center justify-center rounded-full bg-[#DEDDDA]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.333 2.5H0.833008V13.3333H13.333V2.5Z"
                        stroke="#808080"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.333 6.66666H16.6663L19.1663 9.16666V13.3333H13.333V6.66666Z"
                        stroke="#808080"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.58333 17.5C5.73393 17.5 6.66667 16.5673 6.66667 15.4167C6.66667 14.2661 5.73393 13.3333 4.58333 13.3333C3.43274 13.3333 2.5 14.2661 2.5 15.4167C2.5 16.5673 3.43274 17.5 4.58333 17.5Z"
                        stroke="#808080"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4163 17.5C16.5669 17.5 17.4997 16.5673 17.4997 15.4167C17.4997 14.2661 16.5669 13.3333 15.4163 13.3333C14.2657 13.3333 13.333 14.2661 13.333 15.4167C13.333 16.5673 14.2657 17.5 15.4163 17.5Z"
                        stroke="#808080"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="tab-label py-2 text-xl font-semibold">
                    Shipping Address
                  </div>
                </div>
              </Tabs.Trigger>
              <Tabs.Trigger
                className="TabsTrigger text-[#808080] data-[state=active]:text-[#914C28]"
                value="payment"
                disabled={selectedAddress === null}
              >
                <div className="flex items-center gap-3">
                  <div className="tab-icon-container flex h-10 w-10 items-center justify-center rounded-full bg-[#DEDDDA]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8757 2.83334H2.12565C1.34325 2.83334 0.708984 3.46761 0.708984 4.25001V12.75C0.708984 13.5324 1.34325 14.1667 2.12565 14.1667H14.8757C15.6581 14.1667 16.2923 13.5324 16.2923 12.75V4.25001C16.2923 3.46761 15.6581 2.83334 14.8757 2.83334Z"
                        stroke="#808080"
                        strokeWidth="1.41667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.708984 7.08334H16.2923"
                        stroke="#808080"
                        strokeWidth="1.41667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="tab-label py-2 text-xl font-semibold">
                    Payment
                  </div>
                </div>
              </Tabs.Trigger>
            </Tabs.List>
            <div className="mx-auto grid max-w-[1300px] grid-cols-1 lg:grid-cols-[1fr,400px]">
              <div className="grow lg:pr-10">
                <Tabs.Content className="TabsContent" value="cart">
                  <div className="mb-10 flex items-center justify-between border-b border-slate-400 pb-4 lg:hidden">
                    <div className="flex items-center gap-2 font-medium text-accent-500">
                      <div className="tab-icon-container flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_326_120)">
                            <path
                              d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                              stroke="#808080"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="stroke-accent-700"
                            />
                            <path
                              d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                              stroke="#808080"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="stroke-accent-700"
                            />
                            <path
                              d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                              stroke="#808080"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="stroke-accent-700"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_326_120">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      CART
                    </div>
                    <span>STEP 1/3</span>
                  </div>
                  {cartItems.map((cartItem) => (
                    <CartCard key={cartItem.id} cartItem={cartItem} />
                  ))}
                </Tabs.Content>
                <Tabs.Content
                  className="TabsContent flex flex-wrap gap-4"
                  value="shipping"
                >
                  <div className="mb-10 flex w-full items-center justify-between border-b border-slate-400 pb-4 lg:hidden">
                    <div className="flex items-center gap-2 font-medium text-accent-500">
                      <div onClick={() => setTab("cart")}>
                        <IconArrowLeft />
                      </div>
                      <div className="tab-icon-container flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.333 2.5H0.833008V13.3333H13.333V2.5Z"
                            stroke="#808080"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                          <path
                            d="M13.333 6.66666H16.6663L19.1663 9.16666V13.3333H13.333V6.66666Z"
                            stroke="#808080"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                          <path
                            d="M4.58333 17.5C5.73393 17.5 6.66667 16.5673 6.66667 15.4167C6.66667 14.2661 5.73393 13.3333 4.58333 13.3333C3.43274 13.3333 2.5 14.2661 2.5 15.4167C2.5 16.5673 3.43274 17.5 4.58333 17.5Z"
                            stroke="#808080"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                          <path
                            d="M15.4163 17.5C16.5669 17.5 17.4997 16.5673 17.4997 15.4167C17.4997 14.2661 16.5669 13.3333 15.4163 13.3333C14.2657 13.3333 13.333 14.2661 13.333 15.4167C13.333 16.5673 14.2657 17.5 15.4163 17.5Z"
                            stroke="#808080"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                        </svg>
                      </div>
                      SHIPPING ADDRESS
                    </div>
                    <span>STEP 2/3</span>
                  </div>
                  <AddressTab />
                </Tabs.Content>
                <Tabs.Content
                  className="TabsContent flex flex-wrap gap-4"
                  value="payment"
                >
                  <div className="mb-5 flex w-full items-center justify-between border-b border-slate-400 pb-4 lg:hidden">
                    <div className="flex items-center gap-2 font-medium text-accent-500">
                      <div onClick={() => setTab("shipping")}>
                        <IconArrowLeft />
                      </div>
                      <div className="tab-icon-container flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8757 2.83334H2.12565C1.34325 2.83334 0.708984 3.46761 0.708984 4.25001V12.75C0.708984 13.5324 1.34325 14.1667 2.12565 14.1667H14.8757C15.6581 14.1667 16.2923 13.5324 16.2923 12.75V4.25001C16.2923 3.46761 15.6581 2.83334 14.8757 2.83334Z"
                            stroke="#808080"
                            strokeWidth="1.41667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                          <path
                            d="M0.708984 7.08334H16.2923"
                            stroke="#808080"
                            strokeWidth="1.41667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-accent-700"
                          />
                        </svg>
                      </div>
                      PAYMENT
                    </div>
                    <span>STEP 3/3</span>
                  </div>
                  {selectedAddress && (
                    <div className="w-full border-b border-gray-300 p-2 text-sm">
                      <div className="flex items-center justify-between">
                        <SectionHeading className="mb-2 px-0 text-left text-base text-black lg:mb-4 lg:text-xl">
                          Selected Address
                        </SectionHeading>
                        <IconEdit
                          size={20}
                          className="cursor-pointer"
                          onClick={() => setTab("shipping")}
                        />
                      </div>
                      <h5 className="font-medium">{selectedAddress.name}</h5>
                      <span className="my-1 block">
                        {selectedAddress.phone_number}
                      </span>
                      <span className="mb-6 block">
                        {selectedAddress.address_line1}, {selectedAddress.city},{" "}
                        {selectedAddress.state}-{selectedAddress.zipcode}
                      </span>
                    </div>
                  )}
                  {cartItems.map((cartItem) => (
                    <CartCard key={cartItem.id} cartItem={cartItem} />
                  ))}
                </Tabs.Content>
              </div>
              <PriceDetails {...priceDetails} />
            </div>
          </Tabs.Root>
        ) : (
          <CartEmptyState />
        )}
      </Container>
    </>
  );
}
