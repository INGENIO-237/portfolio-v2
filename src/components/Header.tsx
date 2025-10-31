"use client"


import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-2 md:py-5 flex items-center justify-between container sticky backdrop-blur-md h-20 top-0 z-[99] md:px-4 lg:px-[6rem]">
      <Link href="/" className="text-2xl font-bold text-p_green hover:text-p_green/80 transition-colors duration-300">
        INGENIO
      </Link>

      {/* Nav */}
      <MobNavbar />
      <Navbar />
    </div>
  );
}
