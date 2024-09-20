"use client";

import { AlignRight } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { navLinks } from "./nav.utils";
import Link from "next/link";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobNavbar() {
  const [showSheet, setShowSheet] = useState(false);

  const toggleSheet = () => {
    setShowSheet(!showSheet);
  };

  const pathname = usePathname();

  return (
    <nav className="md:hidden">
      <AlignRight size={25} onClick={toggleSheet} />

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
                    pathname === link.path && "border-l-2 pl-2 border-black",
                    "hover:border-l-2 hover:pl-2 hover:border-gray-500"
                  )}
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
