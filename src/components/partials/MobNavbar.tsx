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
        <SheetContent className="bg-[#FEFEFE]">
          <ul className="flex flex-col mt-5 space-y-3">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={getKey()}
                  className={cn(
                    "text-lg capitalize",
                    pathname === link.path && "border-l-5 border-black"
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
