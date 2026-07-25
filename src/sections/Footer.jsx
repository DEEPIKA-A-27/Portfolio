import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalDetails;

  return (
    <footer className="relative w-full bg-[#0a0a0f] border-t border-[#2a2a3d] light:bg-[#fafaf9] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-600 text-white font-bold text-xs">
            D
          </div>
          <span className="font-sans text-xs text-[#6b7280]">
            Crafted by <span className="font-semibold text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]">{name}</span> — {new Date().getFullYear()}
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { href: github,            icon: <Github size={14} />,   label: "GitHub"   },
            { href: linkedin,           icon: <Linkedin size={14} />, label: "LinkedIn" },
            { href: `mailto:${email}`, icon: <Mail size={14} />,     label: "Email"    },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#2a2a3d] light:border-[#e5e3dc] text-[#6b7280] hover:text-[#f5f0e8] light:hover:text-[#1a1a27] hover:border-violet-500/50 transition-all"
              aria-label={label}
            >
              {icon}
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#2a2a3d] light:border-[#e5e3dc] text-[#6b7280] hover:text-[#f5f0e8] light:hover:text-[#1a1a27] hover:border-violet-500/50 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
