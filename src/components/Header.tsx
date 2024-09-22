"use client"

import Image from "next/image";
import Logo from "@/public/images/ingenio-logo.png";
import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };


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
      <MobNavbar theme={theme} setTheme={toggleTheme} />
      <Navbar theme={theme} setTheme={toggleTheme} />
    </div>
  );
}
