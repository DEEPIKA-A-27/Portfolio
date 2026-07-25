import React, { useRef } from "react";
import { Award, ShieldCheck, Cloud, Globe, Bot, Binary } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function getCertMeta(title) {
  const t = title.toLowerCase();
  if (t.includes("data science"))   return { icon: Binary,     color: "#ec4899",  bg: "#ec489912" };
  if (t.includes("java"))           return { icon: ShieldCheck, color: "#7c3aed",  bg: "#7c3aed12" };
  if (t.includes("agentforce") || t.includes("salesforce")) return { icon: Bot, color: "#a78bfa", bg: "#a78bfa12" };
  if (t.includes("aws") || t.includes("cloud")) return { icon: Cloud, color: "#0ea5e9", bg: "#0ea5e912" };
  if (t.includes("network") || t.includes("cisco")) return { icon: Globe, color: "#10b981", bg: "#10b98112" };
  if (t.includes("generative ai") || t.includes("ai")) return { icon: Bot, color: "#f59e0b", bg: "#f59e0b12" };
  return { icon: Award, color: "#f59e0b", bg: "#f59e0b12" };
}

export default function Certifications() {
  const certs = portfolioData.certifications;
  const achievements = portfolioData.achievements;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0f] light:bg-[#fafaf9] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-bar" />
          <span className="eyebrow">Credentials</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">05</span>
        </div>

        {/* Achievement stats — horizontal ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="rounded-xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-5 text-center"
            >
              <span className="block font-mono text-3xl font-extrabold text-violet-400">
                {ach.value}
              </span>
              <span className="block mt-1 font-sans text-[11px] font-bold uppercase tracking-widest text-[#6b7280]">
                {ach.title}
              </span>
              <span className="block mt-0.5 font-sans text-[10px] text-[#6b7280]/60">
                {ach.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Title + cert grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mb-4">
              Certifications<br />
              <span className="text-violet-400">& Training</span>
            </h2>
            <p className="font-sans text-sm text-[#6b7280] leading-6">
              Verified badges and professional certifications from leading platforms and institutions.
            </p>

            {/* Marquee of issuers */}
            <div className="mt-8 overflow-hidden rounded-lg bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] py-3">
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...certs, ...certs].map((c, i) => (
                  <span key={i} className="font-mono text-[10px] font-semibold text-[#6b7280] uppercase tracking-widest shrink-0">
                    {c.issuer.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cert cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((cert, i) => {
              const { icon: Icon, color, bg } = getCertMeta(cert.title);
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative rounded-xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-4 flex items-start gap-3 hover:border-opacity-80 transition-all duration-200"
                  style={{ '--cert-color': color }}
                >
                  {/* Side accent line */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="font-sans font-bold text-sm text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] leading-tight group-hover:text-violet-300 transition-colors truncate"
                    >
                      {cert.title}
                    </h4>
                    <p className="font-sans text-xs text-[#6b7280] mt-0.5 truncate">{cert.issuer}</p>
                    <span
                      className="inline-block mt-2 font-mono text-[9px] font-bold px-2 py-0.5 rounded"
                      style={{ color, backgroundColor: bg }}
                    >
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
