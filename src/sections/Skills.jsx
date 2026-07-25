import React, { useState, useRef } from "react";
import { Code, Layout, Server, Database, Brain, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const categoryMeta = {
  Languages:  { icon: Code,     color: "text-violet-400",   accent: "#7c3aed" },
  Frontend:   { icon: Layout,   color: "text-sky-400",      accent: "#0ea5e9" },
  Backend:    { icon: Server,   color: "text-emerald-400",  accent: "#10b981" },
  Database:   { icon: Database, color: "text-amber-400",    accent: "#f59e0b" },
  AI:         { icon: Brain,    color: "text-pink-400",     accent: "#ec4899" },
  Tools:      { icon: Wrench,   color: "text-orange-400",   accent: "#f97316" },
};

export default function Skills() {
  const skills = portfolioData.skills;
  const [activeTab, setActiveTab] = useState(skills[0].category);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const activeGroup = skills.find((s) => s.category === activeTab);
  const meta = categoryMeta[activeTab] || { icon: Code, color: "text-violet-400", accent: "#7c3aed" };
  const ActiveIcon = meta.icon;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-[#0e0e16] light:bg-[#f5f5f0] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-bar" />
          <span className="eyebrow">Tech Stack</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">02</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left — tab list */}
          <div className="lg:col-span-4">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mb-2">
              Skills &<br />
              <span className="text-violet-400">Capabilities</span>
            </h2>
            <p className="font-sans text-sm text-[#6b7280] mb-8 leading-6">
              Click a category to explore the tools and technologies I work with.
            </p>
            <div className="flex flex-col gap-1">
              {skills.map((group) => {
                const m = categoryMeta[group.category] || {};
                const Icon = m.icon || Code;
                const isActive = activeTab === group.category;
                return (
                  <button
                    key={group.category}
                    onClick={() => setActiveTab(group.category)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc]"
                        : "hover:bg-[#1a1a27]/50 light:hover:bg-white/60"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={isActive ? m.color : "text-[#6b7280]"}
                    />
                    <span
                      className={`font-sans text-sm font-semibold ${
                        isActive
                          ? "text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]"
                          : "text-[#6b7280]"
                      }`}
                    >
                      {group.category}
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-[#6b7280]">
                      {group.items.length}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="skill-active-bar"
                        className="absolute right-0 w-[3px] h-8 rounded-full"
                        style={{ backgroundColor: m.accent }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — active category detail panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-8 rounded-2xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${meta.accent}15` }}
              >
                <ActiveIcon size={22} className={meta.color} />
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#6b7280] uppercase tracking-widest">
                  Category
                </p>
                <h3 className="font-sans font-bold text-lg text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]">
                  {activeTab}
                </h3>
              </div>
              <span
                className="ml-auto font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                style={{ color: meta.accent, backgroundColor: `${meta.accent}12` }}
              >
                {activeGroup?.items.length} tools
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {activeGroup?.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-sans text-sm font-semibold border text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] bg-[#0a0a0f] border-[#2a2a3d] light:bg-[#fafaf9] light:border-[#e5e3dc] hover:border-opacity-80 transition-all"
                  style={{ borderColor: `${meta.accent}30` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${meta.accent}70`; e.currentTarget.style.color = meta.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${meta.accent}30`; e.currentTarget.style.color = ""; }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: meta.accent }}
                  />
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
