"use client";

import Link from "next/link";
import { navLinks } from "./nav.utils";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:gap-10 md:items-center">
      <ul className="flex gap-5">
        {navLinks.map((link) => {
          return (
            <Link
              href={link.path}
              key={getKey()}
              className={cn(
                "text-md capitalize",
                pathname == link.path &&
                  "border-b-2 border-p_green text-p_green",
                "hover:border-b-2 hover:border-p_green transition duration-500"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <ThemeToggle />
    </div>
  );
}
