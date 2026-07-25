import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy algorithm
      const scrollPosition = window.scrollY + 120; // Offset for navbar
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 border-b border-white/5 backdrop-blur-md py-3 dark:bg-slate-950/70 light:bg-white/80 light:border-slate-200/50"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo/Branding */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "hero")}
          className="group flex items-center gap-2 text-xl font-bold tracking-wider font-sans text-white light:text-slate-900 focus:outline-none"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm font-bold text-white shadow-md shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
            D
          </span>
          <span className="relative overflow-hidden font-sans">
            DEEPIKA
            <span className="text-indigo-500">.A</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none hover:text-indigo-400 ${
                activeSection === link.id
                  ? "text-indigo-400 font-semibold"
                  : "text-slate-400 light:text-slate-600 light:hover:text-indigo-600"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Github/LinkedIn */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            href="https://github.com/DEEPIKA-A-27"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 rounded-xl bg-slate-900 border border-slate-800 px-4 py-1.5 text-xs font-semibold text-white cursor-pointer hover:bg-slate-800 transition-colors shadow-sm dark:bg-slate-900 dark:border-slate-800 light:bg-slate-100 light:border-slate-200 light:text-slate-800 light:hover:bg-slate-200"
          >
            GitHub <ArrowUpRight size={12} />
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800/50 hover:text-white cursor-pointer light:text-slate-600 light:hover:bg-slate-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 light:border-slate-200 font-sans backdrop-blur-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-base font-medium transition-colors hover:text-indigo-400 ${
                    activeSection === link.id
                      ? "text-indigo-400 font-semibold"
                      : "text-slate-400 light:text-slate-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 light:border-slate-200">
                <a
                  href="https://github.com/DEEPIKA-A-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-xl bg-slate-900 dark:bg-slate-900 border border-slate-850 light:bg-slate-100 light:border-slate-200 light:text-slate-800 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  GitHub Profile
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
