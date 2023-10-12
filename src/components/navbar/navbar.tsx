import { useCartDetails } from "@/hooks/cart/use-cart-details";
import { useUserDetails } from "@/hooks/user/use-user-details";
import { useWishlist } from "@/hooks/wishlist/use-wishlist";
import { useModalStore } from "@/store";
import { cn } from "@/utils";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  IconHeart,
  IconMenu2,
  IconShoppingCart,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { deleteCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { NavSearch } from "./nav-search";

const NAV_LINKS = [
  { name: "New Arrivals", href: "/products?tags=New Arrivals" },
  { name: "Categories", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const Navbar = () => {
  const isLoggedIn = hasCookie("token");
  const queryClient = useQueryClient();
  const logout = () => {
    queryClient.clear();
    deleteCookie("token");
    router.push("/");
  };

  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);
  const router = useRouter();

  const user = useUserDetails();
  const cart = useCartDetails();
  const wishlist = useWishlist();

  return (
    <Disclosure as="nav" className="fixed z-10 w-full bg-primary-500 py-2 ">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:px-12">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo and Nav links */}
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <ul className="ml-10 hidden gap-8 text-neutral-600 md:flex">
                      {NAV_LINKS.map((link) => {
                        if (link.name === "Categories") {
                          return (
                            <Menu
                              as="div"
                              className="relative"
                              key="categories"
                            >
                              <Menu.Button>Categories</Menu.Button>
                              <Menu.Items className="absolute top-8 w-52 space-y-4 bg-primary-600 px-3 py-4">
                                <Menu.Item>
                                  <Disclosure.Button
                                    className="block px-3 py-2 hover:bg-primary-300"
                                    as={Link}
                                    href="/products?product_type=Short Kurta"
                                  >
                                    Short Kurta
                                  </Disclosure.Button>
                                </Menu.Item>
                                <Menu.Item>
                                  <Disclosure.Button
                                    className="block px-3 py-2 hover:bg-primary-300"
                                    as={Link}
                                    href="/products?product_type=Long Kurta"
                                  >
                                    Long Kurta
                                  </Disclosure.Button>
                                </Menu.Item>
                                <Menu.Item>
                                  <Disclosure.Button
                                    className="block px-3 py-2 hover:bg-primary-300"
                                    as={Link}
                                    href="/products?product_type=Kurta Set"
                                  >
                                    Kurta Set
                                  </Disclosure.Button>
                                </Menu.Item>
                                <Menu.Item>
                                  <Disclosure.Button
                                    className="block px-3 py-2 hover:bg-primary-300"
                                    as={Link}
                                    href="/products?product_type=Bottom Wear"
                                  >
                                    Bottom Wear
                                  </Disclosure.Button>
                                </Menu.Item>
                                <Menu.Item>
                                  <Disclosure.Button
                                    className="block px-3 py-2 hover:bg-primary-300"
                                    as={Link}
                                    href="/products?product_type=Gowns"
                                  >
                                    Gowns
                                  </Disclosure.Button>
                                </Menu.Item>
                              </Menu.Items>
                            </Menu>
                          );
                        } else {
                          return (
                            <Link key={link.name} href={link.href}>
                              <li className="text-base">{link.name}</li>
                            </Link>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <NavSearch />
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 hover:bg-primary-400 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center gap-6">
                  <button
                    className="relative flex-shrink-0 "
                    onClick={() => {
                      if (isLoggedIn) {
                        router.push("/wishlist");
                      } else {
                        setShowLoginModal(true);
                      }
                    }}
                  >
                    <IconHeart />
                    {wishlist.data?.length && (
                      <span
                        className="absolute bottom-3 left-4 grid aspect-square w-5 place-content-center rounded-full bg-primary-800 text-sm font-bold text-white
                    "
                      >
                        {wishlist.data?.length}
                      </span>
                    )}
                  </button>
                  <button
                    className="relative flex-shrink-0 "
                    onClick={() => {
                      if (isLoggedIn) {
                        router.push("/cart");
                      } else {
                        setShowLoginModal(true);
                      }
                    }}
                  >
                    <IconShoppingCart />
                    {cart.isSuccess && cart.data.no_of_items > 0 && (
                      <span
                        className="absolute bottom-3 left-4 grid aspect-square w-5 place-content-center rounded-full bg-primary-800 text-sm font-bold text-white
                    "
                      >
                        {cart.data?.no_of_items}
                      </span>
                    )}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <Menu.Button className="flex">
                      <span className="sr-only">Open user menu</span>
                      <IconUser />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {isLoggedIn ? (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile"
                                className={cn(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700",
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={cn(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-left text-sm text-gray-700",
                                )}
                                onClick={logout}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      ) : (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <div className="p-2">
                              <Button
                                variant="primary"
                                className="mb-2 block  w-full px-8"
                                onClick={() => setShowLoginModal(true)}
                              >
                                LOGIN
                              </Button>
                              <Button
                                variant="secondary"
                                className="w-full px-8"
                                onClick={() => setShowLoginModal(true)}
                              >
                                SIGN UP
                              </Button>
                            </div>
                          </Menu.Item>
                        </Menu.Items>
                      )}
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="z-10 mx-2 bg-primary-400 shadow-sm lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAV_LINKS.map((link) => {
                if (link.name === "Categories") {
                  return (
                    <Menu key="categories">
                      <Menu.Button className="block w-full cursor-pointer px-3 py-2 text-left text-base hover:bg-primary-600">
                        Categories
                      </Menu.Button>
                      <Menu.Items className="space-y-4 bg-primary-500 px-3 py-4">
                        <Menu.Item>
                          <Disclosure.Button
                            className="block px-3 py-2 hover:bg-primary-300"
                            as={Link}
                            href="/products?product_type=Short Kurta"
                          >
                            Short Kurta
                          </Disclosure.Button>
                        </Menu.Item>
                        <Menu.Item>
                          <Disclosure.Button
                            className="block px-3 py-2 hover:bg-primary-300"
                            as={Link}
                            href="/products?product_type=Long Kurta"
                          >
                            Long Kurta
                          </Disclosure.Button>
                        </Menu.Item>
                        <Menu.Item>
                          <Disclosure.Button
                            className="block px-3 py-2 hover:bg-primary-300"
                            as={Link}
                            href="/products?product_type=Kurta Set"
                          >
                            Kurta Set
                          </Disclosure.Button>
                        </Menu.Item>
                        <Menu.Item>
                          <Disclosure.Button
                            className="block px-3 py-2 hover:bg-primary-300"
                            as={Link}
                            href="/products?product_type=Bottom Wear"
                          >
                            Bottom Wear
                          </Disclosure.Button>
                        </Menu.Item>
                        <Menu.Item>
                          <Disclosure.Button
                            className="block px-3 py-2 hover:bg-primary-300"
                            as={Link}
                            href="/products?product_type=Gowns"
                          >
                            Gowns
                          </Disclosure.Button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  );
                } else {
                  return (
                    <Disclosure.Button
                      key={link.name}
                      as={Link}
                      href={link.href}
                      className="block px-3 py-2 text-base hover:bg-primary-600"
                    >
                      {link.name}
                    </Disclosure.Button>
                  );
                }
              })}
            </div>
            {isLoggedIn ? (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center justify-between px-5">
                  <div className="">
                    <div className="text-base font-medium">
                      {user.data?.first_name} {user.data?.last_name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.data?.email}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Disclosure.Button
                      as="button"
                      className="relative flex-shrink-0 "
                      onClick={() => {
                        if (isLoggedIn) {
                          router.push("/wishlist");
                        } else {
                          setShowLoginModal(true);
                        }
                      }}
                    >
                      <IconHeart />
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="button"
                      className="relative flex-shrink-0 "
                      onClick={() => {
                        if (isLoggedIn) {
                          router.push("/cart");
                        } else {
                          setShowLoginModal(true);
                        }
                      }}
                    >
                      <IconShoppingCart />
                    </Disclosure.Button>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as={Link}
                    href="/profile"
                    className="block px-3 py-2 text-base hover:bg-primary-600"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    className="block px-3 py-2 text-base hover:bg-primary-600"
                    onClick={logout}
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 p-2">
                <Button
                  variant="primary"
                  className="px-8"
                  onClick={() => setShowLoginModal(true)}
                >
                  LOGIN
                </Button>
                <Button
                  variant="secondary"
                  className="px-8"
                  onClick={() => setShowLoginModal(true)}
                >
                  SIGN UP
                </Button>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
