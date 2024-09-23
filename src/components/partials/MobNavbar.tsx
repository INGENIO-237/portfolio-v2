"use client";

import { AlignRight } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { navLinks } from "./nav.utils";
import Link from "next/link";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

export default function MobNavbar() {
  const [showSheet, setShowSheet] = useState(false);

  const toggleSheet = () => {
    setShowSheet(!showSheet);
  };

  const pathname = usePathname();

  return (
    <nav className="md:hidden">
      <div className="flex gap-5">
        <ThemeToggle />
        <AlignRight size={25} onClick={toggleSheet} />
      </div>

      <Sheet open={showSheet} onOpenChange={toggleSheet}>
        <SheetContent className="bg-[#FEFEFE] dark:bg-black z-[100]">
          <ul className="flex flex-col mt-5 space-y-3">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={getKey()}
                  className={cn(
                    "text-lg capitalize transition duration-500",
                    pathname === link.path &&
                      "border-l-2 pl-2 border-p_green text-p_green",
                    "hover:border-l-2 hover:pl-2 hover:border-p_green"
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
