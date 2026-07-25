import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import confetti from "canvas-confetti";

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "AI Enthusiast",
  "React Developer",
  "Spring Boot Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { name, github, linkedin, email } = portfolioData.personalDetails;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentRole) {
      const t = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 }, colors: ["#7c3aed", "#a78bfa", "#f59e0b"] });
    const cvText = `DEEPIKA A\nEmail: skadeepika@gmail.com\nGitHub: https://github.com/DEEPIKA-A-27\nLinkedIn: https://linkedin.com/in/deepika-a-209704331\n\nSUMMARY: Full Stack Java Developer and AI Enthusiast.\nEDUCATION: B.Tech IT, V.S.B Engineering College (CGPA: 8.38)\nSKILLS: Java, Spring Boot, React, MySQL, Groq API, Node.js.\nEXPERIENCE: Infosys Springboard Full Stack Development Intern (Sep-Nov 2025).`;
    const blob = new Blob([cvText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "Deepika_A_Resume.txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] light:bg-[#fafaf9] pt-14 lg:pt-0"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,61,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,61,0.4)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-30" />

      {/* Large watermark letter */}
      <div
        aria-hidden="true"
        className="absolute right-[6%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-sans font-extrabold text-[28vw] leading-none text-[#1a1a27] dark:text-[#1a1a27] light:text-[#e8e6df] tracking-tighter z-0"
      >
        D
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-violet-500" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-violet-400">
              Portfolio — 2025
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold leading-[1.05] tracking-tight text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Hi, I'm
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-amber-300 bg-clip-text text-transparent">
                {name}
              </span>
              {/* Underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="absolute bottom-1 left-0 right-0 h-[4px] rounded-full bg-gradient-to-r from-violet-600 to-amber-400 origin-left"
              />
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 h-9 flex items-center gap-2"
          >
            <span className="font-sans text-xl font-medium text-[#6b7280] light:text-[#6b7280]">—</span>
            <span className="font-sans text-xl font-semibold text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]">
              {displayText}
            </span>
            <span className="w-[2px] h-6 bg-violet-400 animate-pulse" />
          </motion.div>

          {/* Bio blurb */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#6b7280] light:text-[#6b7280]"
          >
            IT student building premium full-stack Java solutions, AI interfaces,
            and scalable responsive architectures.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-500 px-6 py-3 font-sans text-sm font-bold text-white transition-colors shadow-lg shadow-violet-600/20 cursor-pointer"
            >
              View Projects <ArrowRight size={15} />
            </a>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg border border-[#2a2a3d] hover:border-violet-500/50 bg-transparent px-6 py-3 font-sans text-sm font-bold text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] light:border-[#d0cec7] light:hover:border-violet-400 transition-all cursor-pointer"
            >
              <Download size={14} /> Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { href: github, icon: <Github size={16} />, label: "GitHub" },
              { href: linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: `mailto:${email}`, icon: <Mail size={16} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-[#6b7280] hover:text-[#f5f0e8] light:hover:text-[#1a1a27] transition-colors font-sans text-xs font-semibold tracking-wide"
                aria-label={label}
              >
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating badge — stats snapshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden xl:flex absolute right-16 bottom-24 flex-col gap-3"
        >
          {[
            { value: "8+",  label: "Projects" },
            { value: "10+", label: "Certifications" },
            { value: "15+", label: "Badges" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl bg-[#1a1a27] border border-[#2a2a3d] px-4 py-2.5 animate-drift"
            >
              <span className="font-mono text-lg font-extrabold text-violet-400 tabular-nums">{value}</span>
              <span className="font-sans text-xs font-semibold text-[#6b7280] uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent light:from-[#fafaf9] pointer-events-none" />
    </section>
  );
}
