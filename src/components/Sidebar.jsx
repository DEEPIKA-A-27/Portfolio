import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const navLinks = [
  { id: "hero",           label: "Home",          num: "00" },
  { id: "about",          label: "About",         num: "01" },
  { id: "skills",         label: "Skills",        num: "02" },
  { id: "experience",     label: "Experience",    num: "03" },
  { id: "projects",       label: "Projects",      num: "04" },
  { id: "certifications", label: "Certifications",num: "05" },
  { id: "contact",        label: "Contact",       num: "06" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? (localStorage.getItem("theme") || "dark") : "dark"
  );

  const { github, linkedin } = portfolioData.personalDetails;

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(link.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* ── DESKTOP SIDEBAR ───────────────────────────── */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[220px] bg-[#0e0e16] border-r border-[#2a2a3d] z-40 py-8 px-5">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="flex items-center gap-2.5 mb-10 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 text-white font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="leading-none">
            <span className="block font-sans font-extrabold text-sm text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] tracking-wider">
              DEEPIKA A
            </span>
            <span className="block font-mono text-[10px] text-violet-400 tracking-widest">
              .portfolio
            </span>
          </div>
        </a>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group cursor-pointer ${
                active === link.id
                  ? "bg-violet-600/12 text-[#f5f0e8]"
                  : "text-[#6b7280] hover:text-[#f5f0e8] hover:bg-white/4"
              }`}
            >
              {/* Active indicator bar */}
              {active === link.id && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-violet-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="font-mono text-[9px] text-violet-500/60 w-5 shrink-0">
                {link.num}
              </span>
              <span className="font-sans text-xs font-semibold tracking-wide uppercase">
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="mt-auto pt-6 border-t border-[#2a2a3d] space-y-3">
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] hover:border-violet-500/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] hover:border-violet-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] hover:border-violet-500/50 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ────────────────────────────── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#2a2a3d] flex items-center justify-between px-5 light:bg-[#fafaf9]/90 light:border-[#e5e3dc]">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-violet-400 text-white font-bold text-sm">
            D
          </div>
          <span className="font-sans font-extrabold text-sm text-[#f5f0e8] light:text-[#1a1a27] tracking-wider">
            DEEPIKA A
          </span>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-14 left-0 right-0 z-30 bg-[#0e0e16]/98 backdrop-blur-xl border-b border-[#2a2a3d] light:bg-[#fafaf9]/98 light:border-[#e5e3dc]"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all cursor-pointer ${
                    active === link.id
                      ? "bg-violet-600/10 text-[#f5f0e8] light:text-[#1a1a27]"
                      : "text-[#6b7280] hover:text-[#f5f0e8] light:hover:text-[#1a1a27]"
                  }`}
                >
                  <span className="font-mono text-[9px] text-violet-500/60 w-5">{link.num}</span>
                  <span className="font-sans text-sm font-semibold tracking-wide">{link.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
