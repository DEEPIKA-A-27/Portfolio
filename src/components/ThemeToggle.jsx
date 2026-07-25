import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"; // Default is dark theme
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex h-9 w-18 items-center cursor-pointer rounded-full bg-slate-800/80 p-1 backdrop-blur-md border border-slate-700/50 light:bg-slate-200/80 light:border-slate-300 transition-colors duration-300 focus:outline-none"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Theme"
    >
      {/* Background slide */}
      <motion.div
        className="absolute h-7 w-7 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md shadow-indigo-500/20"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ left: theme === "dark" ? "calc(100% - 2rem)" : "4px" }}
      />
      <div className="z-10 flex w-full justify-between px-1.5 text-slate-400 select-none pointer-events-none">
        <Sun size={16} className={`transition-colors duration-300 ${theme === "light" ? "text-white" : "text-slate-500"}`} />
        <Moon size={16} className={`transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-400"}`} />
      </div>
    </motion.button>
  );
}
