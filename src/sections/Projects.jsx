import React, { useState, useRef } from "react";
import { Github, ExternalLink, Cpu, Code2, ShieldAlert, Sparkles, Database, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const filters = [
  { id: "all",       label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai",        label: "AI" },
  { id: "database",  label: "DB" },
];

const projectColors = [
  { bg: "from-violet-600/20 to-violet-600/5", border: "border-violet-500/20", accent: "#7c3aed" },
  { bg: "from-sky-600/20 to-sky-600/5",       border: "border-sky-500/20",    accent: "#0ea5e9" },
  { bg: "from-emerald-600/20 to-emerald-600/5", border: "border-emerald-500/20", accent: "#10b981" },
  { bg: "from-amber-600/20 to-amber-600/5",   border: "border-amber-500/20",  accent: "#f59e0b" },
  { bg: "from-pink-600/20 to-pink-600/5",     border: "border-pink-500/20",   accent: "#ec4899" },
];

function getIcon(title) {
  if (title.includes("Debug") || title.includes("Agent")) return <Cpu size={20} />;
  if (title.includes("Study") || title.includes("Finder")) return <Code2 size={20} />;
  if (title.includes("Healthcare") || title.includes("Appointment")) return <ShieldAlert size={20} />;
  if (title.includes("EduPilot")) return <Sparkles size={20} />;
  return <Database size={20} />;
}

export default function Projects() {
  const allProjects = portfolioData.projects;
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = allProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return p.techStack.some(t => ["Spring Boot", "Node.js", "Express.js"].includes(t));
    if (filter === "ai") return p.techStack.some(t => ["Groq API", "Transformers", "Python"].includes(t));
    if (filter === "database") return p.techStack.includes("MySQL");
    return true;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#0e0e16] light:bg-[#f5f5f0] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="section-bar" />
          <span className="eyebrow">Portfolio</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">04</span>
        </div>

        {/* Title + filters row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]">
            Featured <span className="text-violet-400">Projects</span>
          </h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-lg font-sans text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                  filter === f.id
                    ? "bg-violet-600 text-white"
                    : "bg-[#1a1a27] border border-[#2a2a3d] text-[#6b7280] hover:text-[#f5f0e8] light:bg-white light:border-[#e5e3dc] light:hover:text-[#1a1a27]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const palette = projectColors[i % projectColors.length];
              const isOpen = expanded === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`group relative rounded-2xl bg-[#1a1a27] border ${palette.border} light:bg-white light:border-[#e5e3dc] overflow-hidden ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Gradient top strip on featured */}
                  {project.featured && (
                    <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-violet-400 to-amber-400" />
                  )}

                  <div className="p-6 md:p-7">
                    {/* Header */}
                    <div className={`flex items-start gap-4 ${project.featured ? "mb-5" : "mb-4"}`}>
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${palette.accent}15`, color: palette.accent }}
                      >
                        {getIcon(project.title)}
                      </div>
                      <div className="flex-1 min-w-0">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                            <Sparkles size={9} /> Featured
                          </span>
                        )}
                        <h3 className="font-sans font-bold text-base text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-[#6b7280] leading-6 mb-5">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>

                    {/* Toggle features */}
                    {project.features && (
                      <button
                        onClick={() => setExpanded(isOpen ? null : project.id)}
                        className="flex items-center gap-1.5 font-sans text-xs font-semibold text-violet-400 hover:text-violet-300 mb-4 cursor-pointer transition-colors"
                      >
                        <ArrowRight
                          size={12}
                          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                        />
                        {isOpen ? "Hide features" : `See ${project.features.length} features`}
                      </button>
                    )}

                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mb-5 space-y-1.5"
                        >
                          {project.features.map((feat, fi) => (
                            <li key={fi} className="flex items-start gap-2 font-sans text-xs text-[#6b7280]">
                              <span
                                className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: palette.accent }}
                              />
                              {feat}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a3d] light:border-[#e5e3dc]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-[#0a0a0f] border border-[#2a2a3d] light:bg-[#f5f5f0] light:border-[#e5e3dc] px-4 py-2 font-sans text-xs font-bold text-[#6b7280] hover:text-[#f5f0e8] light:hover:text-[#1a1a27] hover:border-[#3a3a55] transition-all cursor-pointer"
                      >
                        <Github size={13} /> Source
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg px-4 py-2 font-sans text-xs font-bold text-white transition-all cursor-pointer"
                        style={{ backgroundColor: palette.accent }}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
