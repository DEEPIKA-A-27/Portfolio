import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const steps = 1200 / 20;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const next = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(next);
      if (next >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 500);
        }, 250);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
          exit={{ y: "-100vh", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Subtle dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#2a2a3d_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-violet-400 shadow-xl shadow-violet-600/25"
            >
              <span className="font-sans text-2xl font-extrabold text-white tracking-tight">D</span>
            </motion.div>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm font-bold tracking-[0.25em] uppercase text-[#f5f0e8] mb-1"
            >
              Deepika A
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-[10px] text-violet-400 tracking-widest mb-8"
            >
              Portfolio
            </motion.p>

            {/* Progress bar */}
            <div className="relative h-[2px] w-56 rounded-full bg-[#2a2a3d] overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600 to-violet-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="mt-3 font-mono text-xs text-violet-400/70">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
