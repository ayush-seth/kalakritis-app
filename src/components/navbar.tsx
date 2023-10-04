import { useModalStore } from "@/store";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { deleteCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./ui/logo";

const NAV_LINKS = [
  { name: "New Arrivals", href: "/products?tags=New Arrivals" },
  { name: "Categories", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const isLoggedIn = hasCookie("token");
  const logout = () => {
    deleteCookie("token");
    router.push("/");
  };

  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);
  const router = useRouter();

  return (
    <nav className="fixed z-10 flex h-20 w-[100%] items-center bg-primary-500 px-6 md:px-12">
      <IconMenu2 className={"mr-4 cursor-pointer md:hidden"} />
      <Link href="/">
        <Logo />
      </Link>

      <ul className="ml-16 hidden gap-12 text-neutral-600 md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>

      <div className="ml-auto flex items-center gap-8">
        <div className="hidden items-center gap-4 bg-primary-400 px-4 md:flex">
          <IconSearch />
          <input
            className="bg-transparent py-2 text-sm focus:outline-none"
            placeholder="Search for the product you are looking for"
          />
        </div>
        <button
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
        <HoverCard.Root openDelay={0}>
          <HoverCard.Trigger className="cursor-pointer">
            <IconUser
              onClick={() => {
                if (!isLoggedIn) {
                  setShowLoginModal(true);
                }
              }}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              sideOffset={20}
              align="end"
              className="z-10 shadow"
            >
              <div className="flex w-52 flex-col bg-primary-400">
                {isLoggedIn && (
                  <>
                    <button className="border-b border-primary-600 px-6 py-4 text-sm hover:bg-primary-600">
                      Profile
                    </button>
                    <button className="border-b border-primary-600 px-6 py-4 text-sm hover:bg-primary-600">
                      Wishlist
                    </button>
                    <button className="border-b border-primary-600 px-6 py-4 text-sm hover:bg-primary-600">
                      Orders
                    </button>
                    <button className="border-b border-primary-600 px-6 py-4 text-sm hover:bg-primary-600">
                      Address
                    </button>
                    <button
                      className="border-b border-primary-600 px-6 py-4 text-sm hover:bg-primary-600"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </nav>
  );
}
