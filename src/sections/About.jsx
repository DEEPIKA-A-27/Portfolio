import React, { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function AnimatedNumber({ number, suffix }) {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { damping: 30, stiffness: 80 });
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) mv.set(number);
  }, [inView, number, mv]);

  useEffect(() => {
    return sp.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          number % 1 !== 0 ? latest.toFixed(2) : Math.floor(latest);
      }
    });
  }, [sp, number]);

  return (
    <span className="font-mono font-extrabold tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function About() {
  const { summary, stats } = portfolioData.about;
  const { degree, college, cgpa } = portfolioData.personalDetails.education;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 18 } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0f] light:bg-[#fafaf9] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-bar" />
          <span className="eyebrow">About Me</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">01</span>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — text */}
          <motion.div variants={item}>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mb-6">
              Solving problems through<br />
              <span className="text-violet-400">clean software</span> infrastructure
            </h2>
            <p className="font-sans text-sm leading-7 text-[#6b7280] mb-4">
              {summary}
            </p>
            <p className="font-sans text-sm leading-7 text-[#6b7280]">
              My engineering approach prioritizes efficiency, clean code practices, and security.
              I design modular backend architectures with Spring Boot and connect them with
              highly-polished React dashboards, integrating AI interfaces to automate work.
            </p>

            {/* Education card */}
            <motion.div
              variants={item}
              className="mt-8 rounded-xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-5 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600/10 text-violet-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-violet-400">
                  Education
                </span>
                <p className="font-sans font-bold text-base text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mt-1">
                  {degree}
                </p>
                <p className="font-sans text-sm text-[#6b7280] mt-0.5">{college}</p>
                <span className="inline-block mt-2 font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md">
                  CGPA {cgpa} / 10
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — stats */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const suffix = stat.value.replace(/[0-9.]/g, "");
              return (
                <div
                  key={stat.id}
                  className="group rounded-xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-6 hover:border-violet-500/40 transition-colors"
                >
                  <div
                    className="text-3xl font-mono font-extrabold text-violet-400 group-hover:text-violet-300 transition-colors tabular-nums"
                    style={{ lineHeight: 1.1 }}
                  >
                    <AnimatedNumber number={stat.number} suffix={suffix} />
                  </div>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wide text-[#6b7280]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
