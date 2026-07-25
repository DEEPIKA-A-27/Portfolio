import React, { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const experiences = portfolioData.experience;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0f] light:bg-[#fafaf9] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-bar" />
          <span className="eyebrow">Journey</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left heading */}
          <div className="lg:col-span-4">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mb-4">
              Professional<br />
              <span className="text-violet-400">Experience</span>
            </h2>
            <p className="font-sans text-sm text-[#6b7280] leading-6">
              Where I've applied my skills in real-world environments and grown as an engineer.
            </p>
          </div>

          {/* Right — experience entries */}
          <div className="lg:col-span-8 space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-2xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-6 md:p-8 hover:border-violet-500/30 transition-all duration-300"
              >
                {/* Left violet accent border */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-violet-600 to-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-md">
                        <Briefcase size={10} /> {exp.role}
                      </span>
                    </div>
                    <h3 className="font-sans font-extrabold text-xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27]">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#6b7280] bg-[#0a0a0f] light:bg-[#f5f5f0] border border-[#2a2a3d] light:border-[#e5e3dc] px-3 py-1.5 rounded-lg shrink-0">
                    <Calendar size={11} />
                    {exp.period}
                  </div>
                </div>

                {/* Description bullets */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2.5 font-sans text-sm text-[#6b7280] leading-6">
                      <CheckCircle2 size={14} className="mt-0.5 text-violet-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2a2a3d] light:border-[#e5e3dc]">
                  {(exp.techTags || ["HTML", "CSS", "JavaScript", "REST APIs"]).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
