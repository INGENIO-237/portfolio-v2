"use client";

import { AlignRight, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { navLinks } from "./nav.utils";
import Link from "next/link";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  theme: "light" | "dark";
  setTheme: () => void;
};

export default function MobNavbar({ theme, setTheme }: Props) {
  const [showSheet, setShowSheet] = useState(false);

  const toggleSheet = () => {
    setShowSheet(!showSheet);
  };

  const pathname = usePathname();

  return (
    <nav className="md:hidden">
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
        <AlignRight size={25} onClick={toggleSheet} />
      </div>

      <Sheet open={showSheet} onOpenChange={toggleSheet}>
        <SheetContent className="bg-[#FEFEFE] z-[100]">
          <ul className="flex flex-col mt-5 space-y-3">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={getKey()}
                  className={cn(
                    "text-lg capitalize transition duration-500",
                    pathname === link.path &&
                      "border-l-2 pl-2 border-[#2a9d8f] text-[#2a9d8f]",
                    "hover:border-l-2 hover:pl-2 hover:border-[#2a9d8f]"
                  )}
                  onClick={toggleSheet}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
