import { cn } from "@/utils";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { Fragment, useState } from "react";

import { useModalStore } from "@/store";
import { deleteCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";

const NAV_LINKS = [
  { name: "New Arrivals", href: "/products?tags=New Arrivals" },
  { name: "Categories", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NewNavBar() {
  const isLoggedIn = hasCookie("token");
  const logout = () => {
    deleteCookie("token");
    router.push("/");
  };

  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <Disclosure as="nav" className="fixed z-10 w-full bg-primary-500 py-2 ">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-4 lg:px-12">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <ul className="ml-10 hidden gap-8 text-neutral-600 md:flex">
                      {NAV_LINKS.map((link) => (
                        <Link key={link.name} href={link.href}>
                          <li className="text-base">{link.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <IconSearch
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full border-0 bg-primary-400 py-1.5 pl-10 pr-3 outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Search products"
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.code === "Enter")
                          router.push(`/products?search=${search}`);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-primary-400 ">
                  <span className="absolute -inset-0.5" />
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
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="relative flex">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <IconUser />
                      </Menu.Button>
                    </div>
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
                              <a
                                href="#"
                                className={cn(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700",
                                )}
                              >
                                Your Profile
                              </a>
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
            <div className="space-y-1  px-2 pb-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as="a"
                  href={link.href}
                  className="block px-3 py-2 text-base hover:bg-primary-600"
                >
                  {link.name}
                </Disclosure.Button>
              ))}
            </div>
            {isLoggedIn ? (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center justify-between px-5">
                  <div className="">
                    <div className="text-base font-medium">
                      Ravi Kumar Singh
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      ravi@gmail.com
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
}
