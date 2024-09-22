"use client";

import Link from "next/link";
import { navLinks } from "./nav.utils";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

type Props = {
  theme: "light" | "dark";
  setTheme: () => void;
};

export default function Navbar({ theme, setTheme }: Props) {
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
                "text-lg capitalize",
                pathname == link.path &&
                  "border-b-2 border-[#2a9d8f] text-[#2a9d8f]",
                "hover:border-b-2 hover:border-[#2a9d8f] transition duration-500"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="flex gap-5">
        {theme === "light" ? (
          <Sun
            size={25}
            className="cursor-pointer"
            color="gray"
            onClick={() => setTheme()}
          />
        ) : (
          <Moon
            size={25}
            className="cursor-pointer"
            color="gray"
            onClick={() => setTheme()}
          />
        )}
      </div>
    </div>
  );
}
