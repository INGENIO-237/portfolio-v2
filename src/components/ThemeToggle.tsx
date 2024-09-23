"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex gap-5">
      {theme === "light" ? (
        <Sun
          size={25}
          className="cursor-pointer"
          color="gray"
          onClick={toggleTheme}
        />
      ) : (
        <Moon
          size={25}
          className="cursor-pointer"
          color="gray"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}
