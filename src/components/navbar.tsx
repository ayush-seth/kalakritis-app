import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { Logo } from "./ui/logo";

const NAV_LINKS = [
  { name: "New Arrivals", href: "/products?tags=New Arrivals" },
  { name: "Categories", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="fixed z-10 flex h-20 w-[100%] items-center bg-primary-500 px-6 md:px-12">
      <IconMenu2 className={"mr-4 cursor-pointer md:hidden"} />
      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>

      {/* Primary Nav */}
      <ul className="ml-16 hidden gap-12 text-neutral-600 md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>

      {/* Secondary Nav */}
      <div className="ml-auto flex items-center gap-8">
        <div className="hidden items-center gap-4 bg-primary-400 px-4 md:flex">
          <IconSearch />
          <input
            className="bg-transparent py-2 text-sm focus:outline-none"
            placeholder="Search for the product you are looking for"
          />
        </div>
        <Link href="/wishlist">
          <IconHeart />
        </Link>
        <Link href="/cart">
          <IconShoppingCart />
        </Link>
        <Link href="/profile">
          <IconUser />
        </Link>
      </div>
    </nav>
  );
}
