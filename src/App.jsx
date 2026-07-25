import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen bg-[#0a0a0f] text-[#f5f0e8] dark:bg-[#0a0a0f] dark:text-[#f5f0e8] light:bg-[#fafaf9] light:text-[#1a1a27] transition-colors duration-300">

          {/* Scroll progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-violet-400 to-amber-400 z-[60] origin-left"
            style={{ scaleX }}
          />

          <CustomCursor />
          <Sidebar />

          {/* Main content — offset for sidebar on large screens */}
          <main className="w-full lg:pl-[220px]">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
