"use client"

import Image from "next/image";
import Logo from "@/public/images/ingenio-2.png";
import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-2 md:py-5 flex items-center justify-between container sticky backdrop-blur-md h-20 top-0 z-[99] md:px-4 lg:px-[6rem]">
      <Link href="/">
        <Image
          src={Logo}
          width={80}
          height={80}
          alt="Logo"
          priority
          className="-ml-2 pointer-events-none"
        />
      </Link>

      {/* Nav */}
      <MobNavbar />
      <Navbar />
    </div>
  );
}
