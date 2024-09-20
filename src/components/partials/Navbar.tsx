"use client";

import Link from "next/link";
import { navLinks } from "./nav.utils";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
      <ul className="flex gap-5">
        {navLinks.map((link) => {
          return (
            <Link
              href={link.path}
              key={getKey()}
              className={cn(
                "text-lg",
                pathname == link.path && "border-b-2 border-black",
                "hover:border-b-2 hover:border-gray-500 transition duration-500",
                
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
