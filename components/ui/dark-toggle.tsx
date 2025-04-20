"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110"
    >
      {theme === "system" ? (
        <Monitor className="h-4 w-4 transition-opacity duration-300 ease-in-out opacity-100" />
      ) : theme === "dark" ? (
        <Moon className="h-4 w-4 transition-opacity duration-300 ease-in-out opacity-100" />
      ) : (
        <Sun className="h-4 w-4 transition-opacity duration-300 ease-in-out opacity-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
